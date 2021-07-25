<template>
  <div class="rc">
    <table>
      <thead>
        <tr>
          <th></th>
          <th>วัน</th>
          <th>ประเภท</th>
          <th>จำนวน</th>
          <th>คำอธิบาย</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(record, index) in lists" :key="index">
          <td>{{ index+1 }}</td>
          <td>{{ record.date}}</td>
          <td>{{ record.type}}</td>
          <td>{{ record.amount}}</td>
          <td>{{ record.information}}</td>
        </tr>
      
      </tbody>
        </table>
      <div>
        <h2>ยอดคงเหลือ</h2>
        <p>{{ calculate() }}</p>
      </div>
    </div>
    
</template>

<script>
import ListStore from '@/store/statement'
export default {
    data() {
        return {
            lists: []
        }
    },
    created() {
        this.fetchList()
    },
    methods: {
        fetchList() {
            ListStore.dispatch('fetchList')
            this.lists = ListStore.getters.lists
            console.log(this.lists[0]);
        },
        calculate(){
          var income = 0
          var expense = 0
          for(let count = 0;this.lists.length>count;count++){
            if(this.lists[count].type =="รายรับ"){
              income+=parseInt(this.lists[count].amount)
            }
            if(this.lists[count].type =="รายจ่าย"){
              expense+=parseInt(this.lists[count].amount)
            }
          }
          return income-expense
        }
    }
}
</script>