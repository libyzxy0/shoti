<template>
  <div class="fixed top-0 bottom-0 right-0 left-0 z-40 flex justify-center items-center" :class="isHidden ? 'hidden' : ''">
    <div class="w-[80%] h-auto bg-slate-700 rounded-lg shadow border border-green-300">
      <h1 class="text-left text-green-400 font-bold text-2xl mt-3 ml-3">Shoti API | Gcash Donate</h1>
      <p class="ml-3 text-gray-200 font-medium">Your donation can help us take it to the next level, making a real impact.</p>
      <h1 class="text-green-400 font-bold text-2xl text-center p-5">+63 997 6953 621</h1>
      <div class="flex items-center justify-center">
      <button class="outline-none border-none py-2 mb-4 w-[80%] bg-green-400 rounded font-bold text-white" @click="hideModal">Close</button>
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