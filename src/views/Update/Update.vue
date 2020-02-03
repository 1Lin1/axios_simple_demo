<template>
  <div class="update container">
    <h1 class="page-header">编辑用户</h1>
    <form v-on:submit="updateCustomer">
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
        
        <button class="btn btn-primary" type="submit">确定修改</button>
      </div>
    </form>
  </div>
</template>

<script>
  import axios from "axios";
  import {updateCustomer} from "../../network/home";

  export default {
    name: "Update",
    data(){
      return{
        customer:{}
      }
    },
    methods:{
      fetchUsers(){
        let userId = this.$route.query.id;
        axios.get('http://localhost:3000/users/' + userId).then(res =>{
          this.customer = res.data;
        })
      },
      updateCustomer(){
        let newCustomer = {
          name:this.customer.name,
          phone:this.customer.phone,
          email:this.customer.email,
        }
        console.log(newCustomer);
        let userId = this.$route.query.id;
        updateCustomer(userId,newCustomer).then(res =>{
          console.log('success');
        })
        // axios.patch('http://localhost:3000/users/' + userId,newCustomer).then(res =>{
        //
        // })
        this.$router.push({
          path:'/',
          query:{
            message:'编辑用户成功'
          }
        })
      }
    },
    created() {
      this.fetchUsers();
    }
  }
</script>

<style scoped>

</style>