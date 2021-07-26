<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>ลำดับ</th>
          <th>วัน</th>
          <th>ประเภท</th>
          <th>จำนวน</th>
          <th>คำอธิบาย</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(list, index) in lists" :key="index">
          <td>{{ index+1 }}</td>
          <td>{{ list.date}}</td>
          <td>{{ list.type}}</td>
          <td>{{ list.amount}}</td>
          <td>{{ list.information}}</td>
        </tr>
      
      </tbody>
        </table>
      <div class ="sum">
        <h2>ยอดคงเหลือ</h2>
        <h1>{{ calculate()}}</h1>
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
            //console.log(this.lists[0]);
        },
        calculate(){
          var income = 0
          var expense = 0
          for(let count = 0;this.lists.length>count;count++){
            if(this.lists[count].amount>0){
              if(this.lists[count].type =="รายรับ"){
                income+=parseFloat(this.lists[count].amount)
              }
              if(this.lists[count].type =="รายจ่าย"){
                expense+=parseFloat(this.lists[count].amount)
              }
            }
          }
          return income-expense
        }
    }
}
</script>
<style scoped lang="scss">
  table{
    background-color: rgb(231, 179, 231);
    left: 70%;
    bottom: 50%;
    margin-left: 65%;
    margin-top:-15%;
  }
  th,td{
    font-size: 1.5em;
    font-family: 'Athiti', sans-serif;
  }
  table th{
    background-color: rgb(228, 103, 241)
  }
  table th:hover{
    color: rgb(24, 28, 245);
    font-size: 1.8em;
  }
  table td:hover{
    color: rgb(24, 28, 245);
    font-size: 1.8em;
  }
  h2,h1{
    font-family: 'Athiti', sans-serif;
    font-size: 2.2em;
  }
  h1{
    color: green;
  }
  .sum{
    margin-left:70%;
    margin-top:10%;
  }

</style>