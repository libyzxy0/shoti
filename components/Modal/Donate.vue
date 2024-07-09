<template>
  <div class="fixed inset-0 z-40 flex justify-center items-center" :class="isHidden ? 'hidden' : ''">
    <div class="w-[90%] md:w-[50%] bg-gray-800 rounded-lg shadow-lg border border-fuchsia-400 p-5">
      <h1 class="text-left text-fuchsia-400 font-bold text-2xl mt-3">Shoti API | Gcash Donate</h1>
      <p class="mt-2 text-gray-300">Your donation can help us take it to the next level, making a real impact.</p>
      <div class="flex justify-center items-center my-4 space-x-3">
        <img src="https://seeklogo.com/images/G/gcash-logo-E93133FDA5-seeklogo.com.png" alt="GCash Logo" class="w-auto h-12 rounded">
        <h1 class="text-white">for</h1>
        <img src="https://shoti-api.deno.dev/favicon.png" alt="GCash Logo" class="w-auto h-12 rounded">
      </div>
      <h3 class="text-white font-bold text-xl text-center pt-4">J** LI*Y D.</h3>
      <h1 class="text-fuchsia-400 font-bold text-2xl text-center pb-5">+63 997 6953 621</h1>
      <div class="flex justify-center">
        <button class="outline-none border-none py-2 px-4 mb-4 w-[80%] bg-fuchsia-400 hover:bg-fuchsia-500 rounded font-bold text-white transition duration-300" @click="hideModal">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isHidden: false
      }
    }, 
    methods: {
      hideModal() {
        this.isHidden = true;
      }
    }
  }
</script>

<style scoped>
/* Add any additional styling here if needed */
</style>
