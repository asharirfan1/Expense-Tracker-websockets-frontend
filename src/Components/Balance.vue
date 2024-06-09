<script setup lang="ts">
import { defineProps, ref } from 'vue'

const props = defineProps<{
  balance:any
}>();

const totalAmount  = ref(40000)
</script>

<template>
  <h4>Your Balance</h4>
  <h1 id="balance">{{ totalAmount - props.balance }}</h1>
</template>
