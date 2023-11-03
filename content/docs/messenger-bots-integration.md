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

## Hexabot
**cmds/shoti.js**
```js
const axios = require('axios');
const fs = require('fs');
const request = require('request');
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function shoti(event, api) {
  let bannedGC = [] //["9492786270746965"];
  if (!bannedGC.includes(event.threadID)) {
    const input = event.body.toLowerCase().split(' ');

    if (input.length > 1 && input[1] === '-help') {
      const usage = 'Usage: shoti\n\n' +
        'Description: Generates a random video clip using the Shoti API.\n\n' +
        'Example: shoti\n\n' +
        'Note: This command fetches a random video clip from the Shoti API and sends it as a message.';
      api.sendMessage(usage, event.threadID);
      return;
    }

    const apiUrl = 'https://api--v1-shoti.vercel.app/api/v1/get';

    try {
      const response = await axios.post(apiUrl, {
        apikey: "YOUR_API_KEY",
      });
      const videoUrl = response.data.data.url;
      await new Promise((resolve, reject) => {
        request(videoUrl)
          .pipe(fs.createWriteStream(`${__dirname}/../temp/shoti.mp4`))
          .on('close', resolve)
          .on('error', reject);
      });

      await delay(1000);

      api.setMessageReaction("✅", event.messageID, (err) => { }, true);
      api.sendMessage({
        body: `@${response.data.data.user.username}`,
        attachment: fs.createReadStream(`${__dirname}/../temp/shoti.mp4`)
      }, event.threadID, event.messageID);
    } catch (error) {
      api.sendMessage(`An error occurred while generating the video. Error: ${error}`, event.threadID);
    }
  } else {
    api.sendMessage("This command is not allowed on this gc.", event.threadID, event.messageID);
  }
}
module.exports = shoti;
```
