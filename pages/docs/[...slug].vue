<script setup>  
useSeoMeta({
  title: 'Shoti API | Documentation',
  ogTitle: 'Shoti API | Documentation',
  description: 'A powerful api that sends random tiktok beautiful girl videos.',
  ogDescription: 'A powerful api that sends random tiktok beautiful girl videos.',
  ogImage: 'https://shoti.vercel.app/favicon.png',
  twitterCard: 'summary_large_image',
})
</script>
<template>
  <main>
    <Header />
    <ContentDoc class="markdown-body">
      <template #not-found>
        <h1>Document not found</h1>
      </template>
    </ContentDoc>
    <Githubedit />
  </main>
</template>
