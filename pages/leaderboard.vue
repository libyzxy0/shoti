<script setup>
const config = useRuntimeConfig();
useHead({
  title: "Shoti API | Top Users",
});
useSeoMeta({
  title: "Shoti API | Top Users",
  ogTitle: "Shoti API | Top Users",
  description: "A powerful api that sends random tiktok beautiful girl videos.",
  ogDescription:
    "A powerful api that sends random tiktok beautiful girl videos.",
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
  body: JSON.stringify({ f: "leaderboard" }),
});
</script>
<template>
  <Header />
  <div class="container w-full">
    <table class="table-fixed w-full">
      <thead class="w-full bg-gray-800 h-14 px-5 text-white shadow">
        <tr>
          <th class="bg-red-600">Rank</th>
          <th class="bg-fuchsia-400">Name</th>
          <th class="bg-green-400">Requests</th>
        </tr>
      </thead>
      <tbody class="text-center text-white">
        <Tableitem
          v-if="pending"
          rank="Loading"
          name="Loading"
          requests="Loading"
        />
        <Tableitem
          v-if="!pending"
          v-for="(res, index) in data.filter((item) => item.requests !== 0)"
          :key="index"
          :rank="index + 1"
          :name="res.username"
          :requests="res.requests"
        />
      </tbody>
    </table>
  </div>
</template>
