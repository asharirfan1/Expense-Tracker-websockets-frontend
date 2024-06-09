<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  totalExpense: any
}>();

</script>

<template>
  <div class="inc-exp-container">
    <div>
      <h4>Total Expense</h4>
      <p id="money-minus" class="money minus">{{props.totalExpense}}</p>
    </div>
  </div>
</template>

