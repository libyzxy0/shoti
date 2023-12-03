<script setup>
  const isLoggedIn = ref(false);

  const toggleLogin = () => {
    isLoggedIn.value = !isLoggedIn.value;
  };
</script>

<template>
  <div class="bg-white w-full h-screen" v-if="isLoggedIn">
    
  </div>
  <div class="bg-slate-800 w-full h-screen flex flex-col items-center" v-else>
    <h1 class="my-12 text-cyan-400 text-3xl font-medium">Shoti API | Admin</h1>
    <div class="mt-24 px-8 w-full">
      <input
        type="text"
        class="outline-none border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-cyan-500 focus:border-cyan-500"
        placeholder="Username"
        required
      >
      <input
        type="password"
        class="outline-none border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-cyan-500 focus:border-cyan-500 mt-4"
        placeholder="Password"
        required
      >
  
      <button
        :class="isLoading ? 'bg-cyan-500' : 'bg-cyan-400'"
        class="bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded w-full mt-5"
      >
        {{ isLoading ? "Loading..." : "Login" }}
      </button>
        
    </div>
  </div>
</template>
