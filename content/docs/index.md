# Shoti API | Docs

An API that sends random beautiful girl videos/images.

## Table of Contents

- [Installation](#installation)
- [Getting Apikey](#getting-apikey)
- [Getting Videos](#getting-videos)
- [Adding Videos](#adding-videos)

## Installation

Install axios package

```shell
npm install axios
```

## Getting Apikey

Getting apikey is really easy, we only get your name and we serve your apikey, get your apikey [here](/).

## Getting Videos

**Code Node.js (JavaScript)**

```js
const axios = require("axios");

(async function () {
  //Declare api url
  let apiUrl = "https://api--v1-shoti.vercel.app/api/v1/get";

  //Make a post request
  let { data } = await axios.post(apiUrl, {
    apikey: "YOUR_API_KEY",
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
  "data": {
    "_shoti_rank": Number,
    "region": String,
    "url": URL,
    "cover": URL,
    "title": String,
    "duration": String,
    "user": {
      "username": String,
      "nickname": String
    }
  }
}
```
![demo](/demo.jpg)
## Special Tanks To
* Bundas Andrian
* [Chatbot Community Ltd.](https://facebook.com/groups/178711334798450/) members!