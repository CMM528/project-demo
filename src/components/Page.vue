<template>
  <el-container class="container">
    <el-header class="header">
      <slot name="header"></slot>
    </el-header>
    <div class="content">
      <el-aside class="left">
        <el-row class="tac">
          <el-col :span="24">
            <el-menu
              active-text-color="#ffd04b"
              background-color="#545c64"
              class="el-menu-vertical-demo"
              default-active="2"
              text-color="#fff"
              @close="handleClose"
              @open="handleOpen"
            >
              <el-sub-menu index="1">
                <template #title>
                  <el-icon>
                    <location />
                  </el-icon>
                  <span>Navigator One</span>
                </template>
                <el-menu-item index="1-3">item 1</el-menu-item>
                <el-menu-item index="1-3">item 2</el-menu-item>
                <el-menu-item index="1-3">item 3</el-menu-item>
              </el-sub-menu>
              <el-menu-item index="2">
                <el-icon>
                  <icon-menu />
                </el-icon>
                <span>Navigator Two</span>
              </el-menu-item>

              <el-menu-item index="4">
                <el-icon>
                  <setting />
                </el-icon>
                <span>Navigator Four</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>
        <div class="menu"></div>
        <slot name="main"></slot>
      </el-main>
    </div>
  </el-container>
</template>

<script setup>
import { Location, Menu as IconMenu, Setting } from "@element-plus/icons-vue";

const handleOpen = (key, keyPath) => {
  // console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  // console.log(key, keyPath);
};
</script>
<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
}

.content {
  display: flex;
  height: calc(100vh - 60px);
}

.header {
  height: 60px;
  background-color: #409eff;
}

.left,
.tac,
.el-menu-vertical-demo {
  height: 100%;
}
.el-menu-vertical-demo,
.left {
  width: 200px;
}
.menu {
  width: 100%;
  height: 50px;
}
</style>
