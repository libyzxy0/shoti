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
    <h1 class="px-4 text-2xl text-cyan-400 font-medium">Shoti API</h1>
    <IconsBar @click="toggleMenu()" :class="isMenuOpen ? 'hidden' : ''" />
    <IconsX @click="toggleMenu()" :class="isMenuOpen ? '' : 'hidden'" />
  </div>

  <div
    :class="isMenuOpen ? 'h-[15.8rem] mt-3 shadow' : 'h-0'"
    class="fixed flex top-0 bg-slate-700 w-full z-10 transition-all"
  >
    <ul
      :class="isMenuOpen ? 'mt-[3rem]' : 'mt-[-7rem]'"
      class="transition-all flex flex-col text-center w-full items-center"
    >
      <hr class="h-px bg-slate-600 border-0 w-[90%] mb-2" />
      <li class="flex flex-row text-white text-base my-4">
        <IconsHome />
        <NuxtLink class="mx-2" to="/">Home</NuxtLink>
      </li>
      <li class="flex flex-row text-white text-base mb-4">
        <IconsBook />
        <NuxtLink class="mx-2" to="/docs">Docs</NuxtLink>
      </li>
      <li class="flex flex-row text-white text-base mb-4">
        <IconsPlus />
        <NuxtLink class="mx-2" to="/leaderboard">Leaderboard</NuxtLink>
      </li>
      <li class="flex flex-row text-white text-base mb-4">
        <IconsPlus />
        <NuxtLink class="mx-2" to="/add-video">Add Video</NuxtLink>
      </li>
    </ul>
  </div>
</template>
