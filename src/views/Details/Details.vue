<template>
  <div>
      <h1 class="page-header">
        {{user.name}}
        <span class="pull-right">
        <button @click="toUpdate(user.id)" class="btn-success btn" style="margin-right: 5px">编辑</button>
        <button @click="toDelete(user.id)" class="btn-danger btn" style="margin-right: 5px">删除</button>
      </span>
      </h1>
     
      <ul class="list-group">
        <li class="list-group-item">电话:{{user.phone}}</li>
        <li class="list-group-item">邮箱:{{user.email}}</li>
      </ul>

  </div>
</template>

<script>
  import axios from "axios";
  import {delCustomer} from "../../network/home";

  export default {
    name: "Details",
    data(){
      return{
        user:{}
      }
    },
    methods:{
      fetchUsers(){
        let userId = this.$route.query.id
        axios.get('http://localhost:3000/users/' + userId).then(res =>{
          this.user = res.data;
        })
      },
      toDelete(id){
        delCustomer(id).then(() => {
          this.$router.push({
            path:'/',
            query:{
              message:'删除成功'
            }
          })
        })
        // axios.delete('http://localhost:3000/users/' + id).then(() =>{
        //   this.$router.push({
        //     path:'/',
        //     query:{
        //       message:'删除成功'
        //     }
        //   })
        // })
      },
      toUpdate(id){
        this.$router.push({
          path:'/update',
            query:{
              id:id,
          }
        })
      }
    },
    created() {
      //一进入页面就获取
      this.fetchUsers();
    },
    
  }
</script>

<style scoped>

</style>