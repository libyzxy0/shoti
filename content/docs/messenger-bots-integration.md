---
title: Shoti API × Messenger Bots
description: Shoti API messenger chatbots integration.
---

# Shoti API × Messenger Bots

Shoti API messenger chatbots integration.

## Install Packages

```shell
yarn add axios request fs
# or
npm i axios request fs
```

## Mirai Bot

**modules/commands/shoti.js**

```js
module.exports.config = {
  name: "shoti",
  version: "1.0.0",
  credits: "shoti-api",
  description: "Generate random tiktok girl videos",
  hasPermssion: 0,
  commandCategory: "other",
  usage: "[shoti]",
  cooldowns: 5,
  dependencies: [],
  usePrefix: true,
};

module.exports.run = async function ({ api, event }) {
  try {
    const axios = require("axios");
    const request = require("request");
    const fs = require("fs");
    let response = await axios.post(
      "https://api--v1-shoti.vercel.app/api/v1/get",
      {
        apikey: "YOUR-API-KEY",
      },
    );
    if(response.data.code !== 200) {
      api.sendMessage(`API ERROR: ${response.data}`, event.threadID, event.messageID);
      return;
    }
    var file = fs.createWriteStream(__dirname + "/cache/shoti.mp4");
    var rqs = request(encodeURI(response.data.data.url));
    rqs.pipe(file);
    file.on("finish", () => {
      return api.sendMessage(
        {
          body: `@${response.data.data.user.username}`,
          attachment: fs.createReadStream(__dirname + "/cache/shoti.mp4"),
        },
        event.threadID,
        event.messageID,
      );
    });
    file.on("error", (err) => {
      api.sendMessage(`Shoti Error: ${err}`, event.threadID, event.messageID);
    });
  } catch (error) {
    api.sendMessage(
      "An error occurred while generating video:" + error,
      event.threadID,
      event.messageID,
    );
  }
};
```

## Goatbot

```js
const axios = require("axios");
const fs = require("fs");
const request = require("request");

module.exports = {
  config: {
    name: "shoti",
    version: "1.0",
    author: "Ronald Allen Albania",
    countDown: 20,
    category: "chatbox",
  },

  langs: {
    vi: {},
    en: {},
  },

  onStart: async function ({ api, event }) {
    api.sendMessage("Fetching a short video from Shoti...", event.threadID);

    try {
      let response = await axios.post(
        "https://api--v1-shoti.vercel.app/api/v1/get",
        {
          apikey: "shoti-1ha4h3do8at9a7ponr",
        },
      );

      if (
        response.data.code === 200 &&
        response.data.data &&
        response.data.data.url
      ) {
        const videoUrl = response.data.data.url;
        const filePath = __dirname + "/cache/shoti.mp4";
        const file = fs.createWriteStream(filePath);
        const rqs = request(encodeURI(videoUrl));

        rqs.pipe(file);

        file.on("finish", async () => {
          const userInfo = response.data.data.user;
          const username = userInfo.username;
          const nickname = userInfo.nickname;

          await api.sendMessage(
            {
              attachment: fs.createReadStream(filePath),
            },
            event.threadID,
          );
          api.sendMessage(
            `Username: @${username}\nNickname: ${nickname}`,
            event.threadID,
          );
        });
      } else {
        api.sendMessage(
          "No video URL found in the API response.",
          event.threadID,
        );
      }
    } catch (error) {
      console.error(error);
      api.sendMessage(
        "An error occurred while fetching the video.",
        event.threadID,
      );
    }
  },
};
```

## Hexabot

**cmds/shoti.js**

```js
const axios = require("axios");
const fs = require("fs");
const request = require("request");
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function shoti(event, api) {
  let bannedGC = []; //["9492786270746965"];
  if (!bannedGC.includes(event.threadID)) {
    const input = event.body.toLowerCase().split(" ");

    if (input.length > 1 && input[1] === "-help") {
      const usage =
        "Usage: shoti\n\n" +
        "Description: Generates a random video clip using the Shoti API.\n\n" +
        "Example: shoti\n\n" +
        "Note: This command fetches a random video clip from the Shoti API and sends it as a message.";
      api.sendMessage(usage, event.threadID);
      return;
    }

    const apiUrl = "https://api--v1-shoti.vercel.app/api/v1/get";

    try {
      const response = await axios.post(apiUrl, {
        apikey: "YOUR_API_KEY",
      });
      if(response.data.code !== 200) {
      api.sendMessage(`API ERROR: ${response.data}`, event.threadID, event.messageID);
      return;
      }
      const videoUrl = response.data.data.url;
      await new Promise((resolve, reject) => {
        request(videoUrl)
          .pipe(fs.createWriteStream(`${__dirname}/../temp/shoti.mp4`))
          .on("close", resolve)
          .on("error", reject);
      });

      await delay(1000);

      api.setMessageReaction("✅", event.messageID, (err) => {}, true);
      api.sendMessage(
        {
          body: `@${response.data.data.user.username}`,
          attachment: fs.createReadStream(`${__dirname}/../temp/shoti.mp4`),
        },
        event.threadID,
        event.messageID,
      );
    } catch (error) {
      api.sendMessage(
        `An error occurred while generating the video. Error: ${error}`,
        event.threadID,
      );
    }
  } else {
    api.sendMessage(
      "This command is not allowed on this gc.",
      event.threadID,
      event.messageID,
    );
  }
}
module.exports = shoti;
```

## YueV1

**script/commands/shoti.js**

```js
const axios = require("axios");
const path = require("path");
const fs = require("fs");

module.exports = {
  config: {
    name: "shoti",
    description: "Watch shoti video 📸",
    usage: ":shoti",
    author: "XyryllPanget",
    // Redesign by RUI
  },

  run: async function ({ api, event, message }) {
    const xycost = 0; // Setting xycost to 0
    const user = event.senderID;
    // Deduct the cost of using the command
    // Code to deduct money from the user goes here if needed

    api.sendMessage(
      `📸 𝗦𝗵𝗼𝘁𝗶:

You have successfully purchased a shoti video for ${xycost}💵!
Please wait for the video..`,
      event.threadID,
      event.messageID,
    );

    try {
      let apiUrl = "https://api--v1-shoti.vercel.app/api/v1/get";

      // Make a POST request to get the video URL
      let { data } = await axios.post(apiUrl, {
        apikey: "YOUR_API_KEY",
      });
      if(data.code !== 200) {
      api.sendMessage(`API ERROR: ${data}`, event.threadID, event.messageID);
      return;
      }

      console.log("API Response:", data); // Log the API response for inspection

      const videoUrl = data.data.url; // Extract video URL from the response

      const downloadDirectory = path.join(__dirname, "cache");
      const downloadPath = path.join(downloadDirectory, "video.mp4");

      // Create the cache directory if it doesn't exist
      if (!fs.existsSync(downloadDirectory)) {
        fs.mkdirSync(downloadDirectory, { recursive: true });
      }

      const response = await axios.get(videoUrl, { responseType: "stream" });
      const file = fs.createWriteStream(downloadPath);

      response.data.pipe(file);

      file.on("finish", () => {
        file.close(() => {
          api.sendMessage(
            {
              attachment: fs.createReadStream(downloadPath),
            },
            event.threadID,
          );
        });
      });
    } catch (error) {
      console.error(error);
      api.sendMessage(
        `📸 𝗦𝗵𝗼𝘁𝗶:

Oops! An error occurred while fetching the video.`,
        event.threadID,
        event.messageID,
      );
    }
  },
};
```
