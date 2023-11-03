<script setup>
defineProps({
  name: String,
  status: String,
});
</script>
<template>
  <div
    :class="status == 'success' ? '' : 'hidden'"
    class="h-12 w-32 border border-gray-600 rounded shadow border-2 flex flex-row justify-center items-center my-2"
  >
    <IconsCheck class="stroke-green-400" />
    <h1 class="text-white text-1xl mx-1 flex flex-row">{{ name }}</h1>
  </div>
  <div
    :class="status == 'warning' ? '' : 'hidden'"
    class="h-12 w-32 border border-gray-600 rounded shadow border-2 flex flex-row justify-center items-center my-2"
  >
    <IconsInfo class="stroke-yellow-400" />
    <h1 class="text-white text-1xl mx-1 flex flex-row">{{ name }}</h1>
  </div>
  <div
    :class="status == 'error' ? '' : 'hidden'"
    class="h-12 w-[8.3rem] border border-gray-600 rounded shadow border-2 flex flex-row justify-center items-center my-2"
  >
    <IconsXcircle class="stroke-red-400" />
    <h1 class="text-white text-1xl mx-1 flex flex-row">{{ name }}</h1>
  </div>
</template>
