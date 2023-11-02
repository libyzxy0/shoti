<script setup>
  const { pending, data } = useFetch('https://api--v1-shoti.vercel.app/api/v1/get', {
  lazy: true, 
  server: false, 
  method: "POST", 
  headers: {
    'Content-Type': 'application/json'
  }, 
  body: JSON.stringify({
    apikey: "shoti-1hdv16i3pl75egkudag"
  })
});
</script>

<template>
  <div :class="pending ? 'justify-center items-center h-[17rem]' : 'justify-between h-[17rem]'" class="flex flex-row bg-slate-600 w-full rounded shadow mb-3">
    <h1 :class="pending ? '' : 'hidden'" class="text-2xl text-cyan-400">Loading Player...</h1>
    <div :class="pending ? 'hidden' : ''" class="flex flex-col w-[65%] h-auto text-center rounded px-2 py-2">
      <h1 class="text-2xl text-cyan-400 my-3">Watch </h1>
      <p class="text-white"><b>Username:</b> {{ pending ? 'Loading...' : data?.data?.user.username }}</p>
      <p class="text-white"><b>Nickname:</b> {{ pending ? 'Loading...' : data.data.user.nickname }}</p>
      <p class="text-white"><b>Duration:</b> {{ pending ? 'Loading...' : data.data.duration }}</p>
      <a class="text-blue-400 mt-2" :href="'https://www.tiktok.com/@' + data?.data?.user?.username">View User</a>
      <a class="text-blue-400" :href="data?.data?.url">View Video</a>
      <p class="mt-3 text-white">
        This video is hosted on tiktok.
      </p>
    </div>
    <div :class="pending ? 'hidden' : ''" class="w-auto h-[16rem] flex items-center justify-center mt-2">
      <video v-if="!pending" class="h-auto h-[16rem] w-[9rem] rounded shadow mx-3" controls autoplay loop>
        <source :src="pending ? '' : data?.data?.url" type="video/mp4">
      </video>
    </div>
  </div>
</template>
