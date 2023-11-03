<template>
  <div class="flex flex-row text-white mb-4 w-auto">
    <IconsEdit class="ml-5" />
    <a :href="'https://github.com/libyzxy0/shoti/tree/main/content' + ($route.path == '/docs' ? '/docs/index' : $route.path) + '.md'" class="ml-2">Edit this page on github.</a>
  </div>
</template>