<script setup>
defineProps({
  rank: String,
  name: String,
  requests: String,
});
</script>
<template>
  <tr class="even:bg-slate-500 odd:bg-slate-600 h-14 shadow">
    <td>{{ rank }}</td>
    <td>{{ name }}</td>
    <td>{{ requests }}</td>
  </tr>
</template>
