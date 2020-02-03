<template>
  <div class="add container">
    <h1 class="page-header">添加用户</h1>
    <form>
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label for="name">姓名</label>
          <input class="form-control" type="text" id="name" placeholder="姓名" v-model="customer.name">
        </div>
  
        <div class="form-group">
          <label for="phone">电话</label>
          <input class="form-control" type="text" id="phone" placeholder="电话" v-model="customer.phone">
        </div>
  
        <div class="form-group">
          <label for="email">邮箱</label>
          <input class="form-control" type="text" id="email" placeholder="邮箱" v-model="customer.email">
        </div>
        
        <button class="btn btn-primary" @click="addCustomer">添加新用户</button>
      </div>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  import {addCustomer} from "../../network/home";

  export default {
    name: "Add",
    data(){
      return{
        customer:{}
      }
    },
    methods:{
      addCustomer(e){
        if(!this.customer.name || !this.customer.phone || !this.customer.email){
          alert('请添加完整信息');
        }else{
          let newCustomer = {
            name:this.customer.name,
            phone:this.customer.phone,
            email:this.customer.email,
          }
          addCustomer(newCustomer).then(() =>{
            console.log('success add');
            this.$router.push({
              path:'/',
              query:{
                message:'用户添加成功'
              }
            })
          }).catch(err =>{
            console.log(err);
          })
          // axios.post('http://localhost:3000/users',newCustomer).then(() =>{
          //   //跳转到主页 同时把弹窗信息发送过去
          // })
       
  
  
        }
       
      }
    }
  }
</script>

<style scoped>

</style>