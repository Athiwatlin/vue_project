<template>
  <div>
    <h1>บันทึกรายรับ-รายจ่าย</h1>
    <div>
      <label for="date">วันที่ </label>
      <input type="date" id="date" name="date" v-model="form.date">
    </div>
    <div>
        <select type ="type" name="option" v-model="form.type">
            <option value="" disabled selected>เลือกรายการ</option>
            <option >รายรับ</option>
            <option >รายจ่าย</option>
        </select>
    </div>
    <div>
        <label for="amount">จำนวนเงิน </label>
        <input class="w3-input w3-border w3-hover-blue" type="text" v-model="form.amount">
    </div>
    <div>
        <label for="information">คำอธิบาย </label>
        <input class="w3-input w3-border w3-hover-blue" type="text" v-model="form.information">
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
</style>