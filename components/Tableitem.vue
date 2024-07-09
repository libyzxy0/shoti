<script setup>
defineProps({
  rank: String,
  name: String,
  requests: String,
});
</script>
<template>
  <tr class="even:bg-gray-700 odd:bg-gray-600 h-14 shadow">
    <td>{{ rank }}</td>
    <td>{{ name }}</td>
    <td>{{ requests }}</td>
  </tr>
</template>
