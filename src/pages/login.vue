<template>
  <div class="container">
    <el-form :form="form" :model="form" :rules="rules" label-width="80">
      <el-form-item label="账号:" prop="username">
        <el-input v-model="form.username" placeholder="请输入您的账号" />
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input v-model="form.password" placeholder="请输入您的密码" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const form = reactive({
  username: "",
  password: "",
});
const rules = {
  username: [
    { required: true, message: "请输入账号", trigger: "blur" },
    { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 6, max: 10, message: "长度在 6 到 10 个字符", trigger: "blur" },
  ],
};

function submit() {
  router.push("/home");
}
</script>

<style scoped>
.container {
  width: 400px;
  margin: 0 auto;
}
</style>
