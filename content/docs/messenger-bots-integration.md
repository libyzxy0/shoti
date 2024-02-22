---
title: Shoti API × Messenger Bots
description: Shoti API messenger chatbots integration.
---

# Shoti API × Messenger Bots

Shoti API messenger chatbots integration.

## Supported Bots

- [Mirai Bot](#mirai-bot)
- [Goatbot](#goatbot)
- [HexaBot](#hexabot)
- [Yue](#yue)
- [YSD Akhiro](#ysd-akhiro)

## Install Packages

```shell
yarn add axios request fs path
# or
npm i axios request fs path
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
      "https://shoti-srv1.onrender.com/api/v1/get",
      {
        apikey: "YOUR-API-KEY",
      },
    );
    if (response.data.code !== 200) {
      api.sendMessage(
        `API ERROR: ${response.data}`,
        event.threadID,
        event.messageID,
      );
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
        "https://shoti-srv1.onrender.com/api/v1/get",
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

## HexaBot

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

    const apiUrl = "https://shoti-srv1.onrender.com/api/v1/get";

    try {
      const response = await axios.post(apiUrl, {
        apikey: "YOUR_API_KEY",
      });
      if (response.data.code !== 200) {
        api.sendMessage(
          `API ERROR: ${response.data}`,
          event.threadID,
          event.messageID,
        );
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

## Yue

**script/commands/shoti.js**

```js
const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "shoti",
    role: 1,
    description: "Get video from Shoti API",
    usage: "shoti",
    author: "Rui",
  },
  onRun: async ({ api, event, args }) => {
    try {
      const apiKey = "$shoti-1hn634vu67edaqv02qo";

      const postData = {
        apikey: apiKey,
      };
      
      const response = await axios.post('https://shoti-srv1.onrender.com/api/v1/get', postData);

      if (response.data.code === 200) {
        const videoData = response.data.data;
        const videoURL = videoData.url;
        const videoFilename = `${Date.now()}_shoti.mp4`;

        const videoBuffer = await axios.get(videoURL, { responseType: 'arraybuffer' });
        const videoPath = path.join(__dirname, 'videos', videoFilename);
        fs.writeFileSync(videoPath, Buffer.from(videoBuffer.data, 'utf-8'));

        const fileStream = fs.createReadStream(videoPath);
        await api.sendMessage({ attachment: fileStream, body: `@${videoData.user.nickname}` }, event.threadID);

        setTimeout(() => {
          fs.unlinkSync(videoPath);
        }, 5500);
      } else {
        api.sendMessage(`❌ | API Error: ${response.data.message}`, event.threadID);
      }
    } catch (error) {
      console.error(error);
      api.sendMessage(`❌ | An error occurred: ${error.message}`, event.threadID);
    }
  },
};
```

## YSD Akhiro

**akhiro/cmds/shoti.js**

```js
const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "shoti",
    role: 1,
    description: "Get video from Shoti API",
    usage: "shoti",
    author: "Rui",
  },
  onRun: async ({ api, event, args }) => {
    try {
      const apiKey = "$shoti-1hn634vu67edaqv02qo";

      const postData = {
        apikey: apiKey,
      };
      
      const response = await axios.post('https://shoti-srv1.onrender.com/api/v1/get', postData);

      if (response.data.code === 200) {
        const videoData = response.data.data;
        const videoURL = videoData.url;
        const videoFilename = `${Date.now()}_shoti.mp4`;

        const videoBuffer = await axios.get(videoURL, { responseType: 'arraybuffer' });
        const videoPath = path.join(__dirname, 'videos', videoFilename);
        fs.writeFileSync(videoPath, Buffer.from(videoBuffer.data, 'utf-8'));

        const fileStream = fs.createReadStream(videoPath);
        await api.sendMessage({ attachment: fileStream, body: `@${videoData.user.nickname}` }, event.threadID);

        setTimeout(() => {
          fs.unlinkSync(videoPath);
        }, 5500);
      } else {
        api.sendMessage(`❌ | API Error: ${response.data.message}`, event.threadID);
      }
    } catch (error) {
      console.error(error);
      api.sendMessage(`❌ | An error occurred: ${error.message}`, event.threadID);
    }
  },
};
```
