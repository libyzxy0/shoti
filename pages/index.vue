<script setup lang="ts">
import VueHcaptcha from "@hcaptcha/vue3-hcaptcha";
const config = useRuntimeConfig();
useSeoMeta({
  title: "Shoti API - Random girl video API",
  ogTitle: "Shoti API - Random girl video API",
  description: "A powerful api that sends random tiktok beautiful girl videos.",
  ogDescription: "A powerful api that sends random tiktok beautiful girl videos.",
  ogImage: "https://shoti.vercel.app/favicon.png",
  twitterCard: "summary_large_image",
});
let { pending, data } = useFetch(config.public.apiBase + "/info", {
  lazy: true,
  server: false,
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ f: "stats" }), 
});
</script>
<template>
  <Header />
  <ModalOne :visible="generatedkey ? generatedkey : 'f'" />
  <div class="container mt-24 w-full px-3">
    <div class="w-full my-8">
      <h1 class="text-cyan-400 text-3xl">
        Shoti API | {{ pending ? "..." : data.videos }}
      </h1>
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
        placeholder="Enter Name for your Apikey"
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
    <Faq />
  </div>
</template>
<script lang="ts">
import axios from "axios";
export default {
  data() {
    return {
      apikeyName: '',
      generatedkey: '',
      isLoading: false,
      isCaptcha: false
    }
  },
  methods: {
    async onVerify(token, ekey) {
      this.isCaptcha = true;
    },
    async generate() {
      if (this.apikeyName) {
        if (this.isCaptcha) {
          this.isLoading = true;
          try {
            const response = await axios.post('https://api--v1-shoti.vercel.app/api' + "/createkey", {
              username: this.apikeyName
            }, {
              headers: {
                "Content-Type": "application/json"
              }
            });
            if (response.data.success) {
              this.generatedkey = response.data.apikey;
              localStorage.setItem("saved_apikey", response.data.apikey);
            } else {
              alert('Error while generating apikey: ' + JSON.stringify(this.apikeyName));
            }
          } catch (error) {
            console.error('An error occurred:', error);
          }
          this.isLoading = false;
        } else {
          alert("Please verify captcha!");
        }
      } else {
        alert("Please specify apikey name!");
      }
    }
  }
}
</script>