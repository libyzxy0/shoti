---
title: "Shoti API | Documentation"
description: "See documentation of shoti api, how to use it."
---

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

Code Node.js (JavaScript)

```js
const axios = require("axios");

(async function () {
  //Declare api url
  let apiUrl = "https://shoti-api.libyzxy0.xyz/api/get-shoti";

  //Make a post request
  let { data } = await axios.post(apiUrl, {
    apikey: "YOUR_API_KEY",
  });

  console.log(data);
})();
```

## Adding Videos

Code Node.js (JavaScript)

```js
const axios = require("axios");

(async function () {
  //Declare api url
  let apiUrl = "https://shoti-api.libyzxy0.xyz/api/add-shoti";

  //Make a post request
  let { data } = await axios.post(apiUrl, {
    apikey: "YOUR_API_KEY",
    url: "TIKTOK_URL",
  });

  console.log(data);
})();
```

## Author

- Jan Liby Dela Costa
