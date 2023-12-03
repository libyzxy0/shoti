<script setup>
import { onMounted, useContext } from 'vue';

const config = useRuntimeConfig();

const apikey = ref("");
const responseData = ref({
  pending: true,
  data: { requests: 0, users: 0, videos: 0 },
});

const fetchData = async () => {
  try {
    let response = await fetch(config.public.apiBase + "/info", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ f: "stats" }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let data = await response.json();

    // Assuming your API response structure has a 'data' property
    responseData.value.data = data;

    // Assuming you want to set 'pending' to false when data is received
    responseData.value.pending = false;

    if (!responseData.value.pending) {
      apikey.value = localStorage.getItem("saved_apikey");
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(() => {
  fetchData(); // Initial data fetch
  setInterval(fetchData, 1000); // Fetch data every 1 second
});
</script>

<template>
  <Header />
  <div class="container w-full mt-24 w-full px-3">
    <h1 class="text-2xl font-medium text-white">Services</h1>
    <div class="w-full h-auto flex flex-wrap flex-row my-3 justify-between">
      <Servicecard name="Website" status="success" />
      <Servicecard name="Get Shoti" status="success" />
      <Servicecard name="Add Shoti" status="warning" />
      <Servicecard name="Create Key" status="success" />
    </div>
    <h1 class="text-2xl font-medium text-white">Statistics</h1>
    <div class="w-full my-5 text-center">
      <hr class="h-px bg-slate-600 border-0 w-full mb-2" />
      <h1 class="text-white font-medium text-5xl mt-5 transition-all">
        {{ responseData.pending ? "0" : responseData.data.requests }}
      </h1>
      <p class="text-white mt-3">Total Requests</p>
      <h1 class="text-white font-medium text-5xl mt-5 transition-all">
        {{ responseData.pending ? "0" : responseData.data.users }}
      </h1>
      <p class="text-white mt-3">Users</p>
      <h1 class="text-white font-medium text-5xl mt-5 transition-all">
        {{ responseData.pending ? "0" : responseData.data.videos }}
      </h1>
      <p class="text-white mt-3">Videos</p>
    </div>
    <hr class="h-px bg-slate-600 border-0 w-full mb-2" />
    <h1 class="text-2xl font-medium text-white my-5">Your API Key</h1>
    <input
      type="text"
      class="py-3 px-4 block w-full rounded-md text-sm bg-slate-700 border-gray-700 text-gray-400 my-5"
      :value="apikey ? apikey : 'You dont have an apikey'"
      readonly
    />
  </div>
</template>
