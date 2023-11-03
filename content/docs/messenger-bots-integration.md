---
title: Shoti API × Messenger Bots
description: Shoti API messenger chatbots integration.
---

# Shoti API × Messenger Bots

Shoti API messenger chatbots integration.

## Mirai Bot

### Dependencies

```shell
yarn add axios request fs
# or
npm i axios request fs
```

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
