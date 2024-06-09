<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  name:any
}>();
</script>

<template>
  <button class="btn">{{props.name}}</button>

</template>

<style scoped>

</style>