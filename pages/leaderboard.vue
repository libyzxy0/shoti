<script setup>
  let { pending, data } = useFetch('https://shoti-api.libyzxy0.repl.co/get/leaderboard', {
    lazy: true, 
    server: false, 
    method: "POST", 
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({ f: 'leaderboard' })
  });
</script>
<template>
  <Header />
  <div class="container mt-14 w-full">
    <table class="table-fixed w-full">
  <thead class="w-full bg-slate-700 h-14 px-5 text-white shadow">
    <tr>
      <th class="bg-blue-600">Rank</th>
      <th class="bg-cyan-400">Name</th>
      <th class="bg-green-400">Requests</th>
    </tr>
  </thead>
  <tbody class="text-center text-white">
    <Tableitem v-if="pending" rank="Loading" name="Loading" requests="Loading" />
    <Tableitem v-if="!pending" v-for="(res, index) in data.filter(item => item.requests !== 0)" :key="index" :rank="index + 1" :name="res.username" :requests="res.requests"/>
  </tbody>
</table>
  </div>
</template>
