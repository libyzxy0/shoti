<script setup>
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
<template>
  <div
    class="fixed transition-all flex flex-row justify-between top-0 bg-slate-700 py-3 w-full z-20"
    :class="isMenuOpen ? '' : 'shadow'"
  >
    <h1 class="flex flex-row px-4 text-2xl text-cyan-400 font-medium">
      Shoti API
    </h1>
    <IconsBar @click="toggleMenu()" :class="isMenuOpen ? 'hidden' : ''" />
    <IconsX @click="toggleMenu()" :class="isMenuOpen ? '' : 'hidden'" />
  </div>

  <div
    :class="isMenuOpen ? 'h-[15rem] mt-3 shadow' : 'h-0'"
    class="fixed flex top-0 bg-slate-700 w-full z-10 transition-all py-1"
  >
    <ul
      :class="isMenuOpen ? '' : 'mt-[-8rem]'"
      class="transition-all flex flex-col text-center w-full"
    >
      <hr
        :class="isMenuOpen ? 'mt-10' : ''"
        class="h-px bg-slate-600 border-0 w-full mb-2"
      />
      <li class="flex flex-row text-white text-base my-4 px-4">
        <IconsHome />
        <NuxtLink class="mx-2" to="/">Home</NuxtLink>
      </li>
      <li class="flex flex-row text-white text-base mb-4 px-4">
        <IconsBook />
        <NuxtLink class="mx-2" to="/docs">Docs</NuxtLink>
      </li>
      <li class="flex flex-row text-white text-base mb-4 px-4">
        <IconsChart />
        <NuxtLink class="mx-2" to="/leaderboard">Leaderboard</NuxtLink>
      </li>
      <li class="flex flex-row text-white text-base mb-4 px-4">
        <IconsInfo />
        <NuxtLink class="mx-2" to="/info">API Info</NuxtLink>
      </li>
    </ul>
  </div>
</template>
