<template>
  <div class="Page">
    <div class="Header">
      <el-button type="primary" @click="login">登陆</el-button>
    </div>
    <div class="Main">
      <div class="Sidebar">
        

      </div>
      <div class="Content">
          <router-view ></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
      login() {
        this.$router.push("/MainWindown");
    },
    }
  }
</script>

<style scoped>
.Page{
  display: flex;
  width: 100vw;
  height: 100vh;
  align-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffe4c4;
}


</style>
