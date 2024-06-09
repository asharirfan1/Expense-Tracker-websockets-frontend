<script setup lang="ts">

import axios from 'axios'
import { computed, defineProps, ref } from 'vue'
import { createToaster } from '@meforma/vue-toaster'

const toaster = createToaster({ /* options */ })
const name = ref('')
const amount = ref('')

const props = defineProps<{
  transactions: object

}>()


const addTransaction = async () => {
  try {
    const response = await axios.post('http://localhost:8000/api/transaction', {
      name: name.value,
      amount: amount.value
    })
    const newTransaction = response.data.data
    props.transactions.push(newTransaction)
    name.value = ''
    amount.value = ''
    toaster.success('transaction addeed uccessfully')

  } catch (e) {
    toaster.error(e.message)
  }
}


</script>
<template>
  <h3>Add new transaction</h3>
  <form id="form" @submit.prevent="addTransaction()">
    <div class="form-control">
      <label for="name">Name</label>
      <input type="text" id="name" placeholder="Enter text..." v-model="name" />
    </div>
    <div class="form-control">
      <label for="amount"
      >Amount <br />
        (negative - expense, positive - income)</label
      >
      <input
        type="text"
        id="amount"
        placeholder="Enter amount..."
        v-model="amount"
      />
    </div>
    <button type="submit" class="btn">Add transaction</button>
  </form>
</template>


