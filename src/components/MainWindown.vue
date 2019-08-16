<template>
  <div class="Page">
    <div class="Header">
      <el-button type="primary" @click="Back">Log Out</el-button>
      
      <el-button type="primary" icon="el-icon-s-operation" v-on:click="isCollapse=!isCollapse" >
      </el-button>
    </div>
    <div class="Main">
      <div class="Sidebar">
        <el-menu
          :router="true"
          default-active="this.$router.path"
          class="MainMenu"
          :collapse="isCollapse"
          @open="handleOpen"
          @close="handleClose"
          background-color="#2058ad"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <!-- default-openeds=[1,2] -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>会议模块</span>
            </template>
            <el-menu-item-group title="事件管理">
              <el-menu-item index="1-1" route="/SubmitThings">事件提交</el-menu-item>
              <el-menu-item index="1-2" route="/DutyThings">责任事件</el-menu-item>
              <el-menu-item index="1-3" route="/TOPThings">TOP提交</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="会议管理">
              <el-menu-item index="1-4" route="/MeetingManagement">会议管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>KPI模块</span>
            </template>
            <el-menu-item-group title="KPI模板管理">
              <el-menu-item index="2-1">KPI模板</el-menu-item>
              <el-menu-item index="2-2">指标制定</el-menu-item>
              <el-menu-item index="2-3">TOP提交</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="数据录入">
              <el-menu-item index="2-4">KPI录入</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
      <div class="Content">
        <router-view ></router-view>
       
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
      num:1
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    Back() {
      // debugger;
      this.$router.push("/Login");
    },
    OperateNav(){
      isCollapse=!isCollapse;
      return isCollapse;
    }
  }
};
</script>

<style scoped>
.Page {
  display: flex;
  width: 100vw;
  height: 100vh;
  align-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffe4c4;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.Header {
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  background-color: #16f5e2;
}

.Main {
  display: flex;
  width: 100%;
  background-color: #3aee94;
  flex-grow: 1;
}

.Sidebar {
  display: flex;
  height: 100%;
  align-items: top;
  /* background-color: #2058ad; */
}

.Content {
  display: flex;
  flex-grow: 1;
  align-items: top;
  width: 100%;
  background-color: #ffffff;
}
</style>
