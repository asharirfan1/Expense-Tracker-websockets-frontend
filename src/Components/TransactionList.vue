  <script setup lang="ts">
  import Header from '@/Components/Header.vue'
  import Balance from '@/Components/Balance.vue'
  import IncomeExpense from '@/Components/IncomeExpense.vue'
  import TransactionList from '@/Components/TransactionList.vue'
  import AddTransaction from '@/Components/AddTransaction.vue'
  import axios from 'axios'
  import PrimaryButton from '@/Components/PrimaryButton.vue'
  import { onMounted, ref } from 'vue'
  import { createToaster } from "@meforma/vue-toaster";
  const toaster = createToaster({ /* options */ });
  const transactions = ref([])


  const fetchTransactions = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/transaction')
      transactions.value = response.data.data
    } catch (e) {
      console.error('Error:', e.message)
    }
  }

  const deleteTransaction = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/transaction/${id}`)
      console.log(response, ':this is response')
      transactions.value = transactions.value.filter(transaction => transaction.id !== id)
      toaster.success(response.data.message)
    }catch (e) {
        toaster.error(e.message)
    }
  }


  onMounted(() => {
    fetchTransactions()
  })
  </script>

  <template>
    <h3>History</h3>
    <ul id="list" class="list">
      <li class="minus" v-for="transaction in transactions" :key="transaction.id">
        {{ transaction.name }} <span>
        {{transaction.amount }}</span>
        <button class="delete-btn" @click="deleteTransaction(transaction.id)">x</button>
      </li>
      <!--    <li class="plus">-->
      <!--      Suit <span>Rs 6000  </span><button class="delete-btn">x</button>-->
      <!--    </li>-->
    </ul>
    <AddTransaction :transactions="transactions"></AddTransaction>

  </template>