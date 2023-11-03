<script setup lang="ts">
import VueHcaptcha from "@hcaptcha/vue3-hcaptcha";
import axios from "axios";
const config = useRuntimeConfig();
useHead({
  title: "Shoti API - Random girl video API",
});
useSeoMeta({
  title: "Shoti API - Random girl video API",
  ogTitle: "Shoti API - Random girl video API",
  description: "A powerful api that sends random tiktok beautiful girl videos.",
  ogDescription:
    "A powerful api that sends random tiktok beautiful girl videos.",
  ogImage: "https://shoti.vercel.app/favicon.png",
  twitterCard: "summary_large_image",
});
let isCaptcha = ref(false);
let apikeyName = ref("");
let mykey = ref(null);
let isLoading = ref(false);
async function onVerify(token, ekey) {
  isCaptcha.value = true;
}
async function generate() {
  if (apikeyName.value) {
    if (isCaptcha.value) {
      isLoading.value = true;
      let { data } = await axios.post(config.public.apiBase + "/createkey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: apikeyName.value,
        }),
      });
      isLoading.value = false;
      mykey.value = data.apikey;
    } else {
      alert("Please verify captcha!");
    }
  } else {
    alert("Please specify apikey name!");
  }
}
</script>
<template>
  <Header />
  <ModalOne :visible="mykey ? mykey : 'f'" />
  <div class="container mt-24 w-full px-3">
    <div class="w-full my-8">
      <h1 class="text-cyan-400 text-3xl">Shoti API | Beta</h1>
      <p class="text-white">
        A powerful api that sends random tiktok beautiful girl videos.
      </p>
    </div>
    <h1 class="text-cyan-400 text-2xl my-5">Get Your Apikey</h1>
    <div class="flex flex-col w-full">
      <input
        v-model="apikeyName"
        type="text"
        class="outline-none border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-cyan-500 focus:border-cyan-500"
        placeholder="Enter your Name"
        required
      />
      <vue-hcaptcha
        theme="dark"
        class="my-2 w-full bg-slate-800"
        sitekey="3075ecff-8f1a-4e29-991c-4817245e9558"
        @verify="onVerify"
      ></vue-hcaptcha>
      <button
        @click="generate"
        :class="isLoading ? 'bg-cyan-500' : 'bg-cyan-400'"
        class="bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded"
      >
        {{ isLoading ? "Loading..." : "Generate Apikey" }}
      </button>
    </div>
    <div class="w-full mt-8">
      <Vidplayer />
    </div>
  </div>
</template>
