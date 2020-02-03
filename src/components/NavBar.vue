<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">菜单栏</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li><router-link to="/">主页</router-link></li>
            <li><router-link to="/about">关于</router-link></li>
            <li><a href="">个人</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><router-link to="/add">添加用户</router-link></li>
            <li><a href="../navbar-fixed-top/">Fixed top</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div><!--/.container-fluid -->
    </nav>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>

</style>