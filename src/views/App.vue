<script setup lang="ts">
import Header from '@/Components/Header.vue'
import Balance from '@/Components/Balance.vue'
import IncomeExpense from '@/Components/IncomeExpense.vue'
import TransactionList from '@/Components/TransactionList.vue'
import AddTransaction from '@/Components/AddTransaction.vue'
import axios from 'axios'
import PrimaryButton from '@/Components/PrimaryButton.vue'
import { computed, onMounted, ref } from 'vue'
import TransactionUpload from '@/Components/TransactionUpload.vue'

const totalExpenseAmount = ref([])


const getTotalExpenseAmount = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/transaction-total');
    console.log(response , "this is response")
    totalExpenseAmount.value = response.data.data;
  } catch (e) {
    console.error('Error:', e.message);
  }
};

onMounted(()=>{
  getTotalExpenseAmount();
})

</script>

<template>
  <Header></Header>
  <div style="display: flex; justify-content: space-between; align-items: flex-start;">
    <TransactionUpload></TransactionUpload>
    <div style="flex-grow: 1; padding-left: 20px;">
      <IncomeExpense :totalExpense="totalExpenseAmount"></IncomeExpense>
      <TransactionList></TransactionList>
    </div>
  </div>
</template>