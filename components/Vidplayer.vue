<script setup>
const config = useRuntimeConfig();
const { pending, data } = useFetch("https://libyzxy0.serv00.net", {
  lazy: true,
  server: false,
  method: "GET"
});
</script>

<template>
  <div
    :class="
      pending
        ? 'justify-center items-center h-[17rem]'
        : 'justify-between h-[17rem]'
    "
    class="flex flex-row bg-gray-800 w-full rounded shadow mb-3"
  >
    <h1 :class="pending ? '' : 'hidden'" class="text-2xl text-fuchsia-400">
      Fetching data from <a :href="$config.public.apiBase">server</a>.
    </h1>
    <div
      :class="pending ? 'hidden' : ''"
      class="flex flex-col w-[65%] h-auto text-center rounded px-2 py-2"
    >
      <h1 class="text-2xl text-fuchsia-400 my-3">Mini Player</h1>
      <p class="text-white">
        <b>Username:</b>
        {{ pending ? "Loading..." : data?.data?.user.username }}
      </p>
      <p class="text-white">
        <b>Nickname:</b> {{ pending ? "Loading..." : data.data.user.nickname }}
      </p>
      <p class="text-white">
        <b>Duration:</b> {{ pending ? "Loading..." : data.data.duration }}
      </p>
      <a
        class="text-blue-400 mt-2"
        :href="'https://www.tiktok.com/@' + data?.data?.user?.username"
        >View User</a
      >
      <a class="text-blue-400" :href="data?.data?.url">View Video</a>
      <p class="mt-3 text-white">This video is hosted on tiktok.</p>
    </div>
    <div
      :class="pending ? 'hidden' : ''"
      class="w-auto h-[16rem] flex items-center justify-center mt-2"
    >
      <video
        v-if="!pending"
        class="h-auto h-[16rem] w-[9rem] rounded shadow mx-3"
        :poster="
          pending
            ? 'https://shoti-api.vercel.app/favicon.png'
            : data?.data?.cover
        "
        controls
        loop
      >
        <source :src="pending ? '' : data?.data?.url" type="video/mp4" />
      </video>
    </div>
  </div>
</template>
