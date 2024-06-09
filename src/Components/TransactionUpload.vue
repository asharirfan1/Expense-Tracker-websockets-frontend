<script setup lang="ts">
import { defineProps, ref } from 'vue'
//
// const props = defineProps<{
//   balance:any
// }>();

</script>

<template>
  <form @click="uploadFile()">
    <div class="mb-3">
      <label for="formFile" class="form-label">Default file input example</label>
      <input class="form-control" type="file" id="formFile">
    </div>
  </form>


</template>
