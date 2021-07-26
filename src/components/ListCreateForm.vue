<template>
  <div>
    <h1>บันทึกรายรับ-รายจ่าย</h1>
    <div class="date">
      <label for="date">วันที่  </label>
      <input class ="date2" type="date" id="date" name="date" v-model="form.date">
    </div>
    <div class = "type">
        <label for="type">ประเภท  </label>
        <select class ="type2" type ="type" name="option" v-model="form.type">
            <option value="" disabled selected>เลือกรายการ</option>
            <option >รายรับ</option>
            <option >รายจ่าย</option>
        </select>
    </div>
    <div class = "amount">
        <label for="amount">จำนวนเงิน </label>
        <input class ="amount2" type="text" v-model="form.amount">
    </div>
    <div class ="information">
        <label for="information">คำอธิบาย </label>
        <input class = "amount2" type="text" v-model="form.information">
    </div>
    <button @click="addList">Add</button>

  </div>
</template>

<script>
import ListStore from '@/store/statement.js'
export default {
    data(){
        return{
            lists: [],
            form:{
                date:"",
                type:"",
                amount:"",
                information:""
                }
        }
    },
    methods:{
        clearForm(){
            this.form={
                date:"",
                type:"",
                amount:"",
                information:""
            }
        },
        addList(){
            //console.log(this.form.date);
            
            let payload = {
                date: this.form.date,
                type: this.form.type,
                amount: this.form.amount,
                information: this.form.information
            }
            ListStore.dispatch("addList",payload)
            this.clearForm()
        },
    }
}
</script>

<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Sriracha&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Athiti:wght@200&display=swap');
    h1{
        font-family: 'Sriracha', cursive;
        color: rgb(69, 238, 238);
        font-size: 3em;

    }
    .date,.type{
        width:30%;
        font-size: 1.5em;
        margin-bottom: 15px;
        font-family: 'Athiti', sans-serif;
    }
    .type2{
        font-size: 0.6em;
    }
    .amount,.information{
        width:27%;
        font-size: 1.5em;
        margin-bottom: 25px;
        font-family: 'Athiti', sans-serif;
    }
    button{
        background-color: white;
        font-size: 1.5em;
        width : 7%;
        margin-right: 70%;
        border-radius: 0.5rem;
        border: 2px solid #4CAF50;
    }
    button:hover {
        background-color: rgb(158, 238, 211);
    }
    .type2,.date2,.amount2,.information2{
        font-family: 'Athiti', sans-serif;
        background-color:rgb(196, 255, 221);
        width: 50%
    }

</style>