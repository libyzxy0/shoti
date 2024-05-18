---
title: Shoti API | Docs
description: An API that sends random beautiful girl videos/images.
---

# Shoti API | Docs

An API that sends random beautiful girl videos/images.

## Table of Contents

- [Getting Apikey](#getting-apikey)
- [Getting Videos](#getting-videos)

## Getting Apikey

Getting apikey is really easy, we only get your name and we serve your apikey, get your apikey [here](/).

## Getting Videos

### Curl

```shell
curl -d '{"apikey":"YOUR_API_KEY"}' -H "Content-Type: application/json" -X POST https://shoti-srv1.onrender.com/api/v1/get
```

### Node.js

**Install axios package**

```shell
npm install axios
```

**Code Node.js (JavaScript)**

```js
const axios = require("axios");

(async function () {
  //Declare api url
  let apiUrl = "https://shoti-srv1.onrender.com/api/v1/get";

  //Make a post request
  let { data } = await axios.post(apiUrl, {
    apikey: "YOUR_API_KEY", //$shoti-xxxxxx
  });

  console.log(data);
})();
```

**Parameters**
| Parameter | Description |
| --- | --- |
| apikey | Apikey is required to help us identify who is the user and put it to leaderboard. |

**Returns this**

```json
{
  "code": Number,
  "message": String,
  "errID": ObjectID, //false
  "data": {
    "_shoti_rank": Number,
    "region": String,
    "url": URL,
    "cover": URL,
    "title": String,
    "duration": String,
    "user": {
      "username": String,
      "nickname": String,
      "userID": String
    }
  }
}
```

## Special Thanks To

- [Chatbot Community Ltd.](https://facebook.com/groups/178711334798450/) members!

Are you a messenger bot developer? [Click here](/docs/messenger-bots-integration).
