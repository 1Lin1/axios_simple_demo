<template>
  <div class="users container">
    <h1 class="page-header">用户管理系统</h1>
    <alert v-if="alert" :message="alert"></alert>
  
<!--    必须是v-model 表单外无效果-->
    <input type="text" class="form-control" placeholder="Search for..." v-model="filterInput">
    
    <table class="table table-striped">
      <thead>
      <tr>
        <th>名字</th>
        <th>电话</th>
        <th>邮箱</th>
      </tr>
      </thead>
      
      <tbody>
        <tr v-for="user in filterBy(users,filterInput)">
          <td>{{user.name}}</td>
          <td>{{user.phone}}</td>
          <td>{{user.email}}</td>
          <td><button @click="toDetails(user.id)">详情</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import axios from 'axios'
  import {fetchUsers} from "../../network/home";
  import Alert from "../Alert/Alert";
  export default {
    name: "Home",
    components: {Alert},
    data(){
      return{
        users:[],
        alert:'',
        filterInput:""
      }
    },
    methods:{
      //搜索
      filterBy(users,InputValue){
        return users.filter(user => {
          return user.name.match(InputValue)
        })
      },
      fetchUsers(){
        fetchUsers().then(res =>{
          this.users = res;
        })
        // axios.get('http://localhost:3000/users').then(res =>{
        //   this.users = res.data;
        // })
      },
      toDetails(id){
        this.$router.push({
          path:'/details',
          query:{
            id:id,
          }
        })
      }
      
    
    },
    
    created() {
      this.fetchUsers();
      //如果有添加用户 即弹窗
      if(this.$route.query.message){
        this.alert = this.$route.query.message;
      }
    },
    
    updated() {
      // this.fetchUsers();
    }
  }
  
</script>



<style scoped>

</style>