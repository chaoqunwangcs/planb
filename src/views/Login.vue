<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginData" :rules="loginRules">
      <el-form-item label="Username" prop="username">
        <el-input v-model="loginData.username"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input type="password" v-model="loginData.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const loginData = reactive({
      username: '',
      password: ''
    });

    const loginRules = {
      username: [
        { required: true, message: 'Please enter your username', trigger: 'blur' }
      ],
      password: [
        { required: true, message: 'Please enter your password', trigger: 'blur' }
      ]
    };
    const login = () => {
      // Add your login logic here, for demonstration purposes, let's assume
      // the login is successful when username and password are both "admin"
      if (loginData.username === 'admin' && loginData.password === 'admin') {
        alert('Login successful!');
        // You can perform page redirection or other actions here
      } else {
        alert('Username or password is incorrect');
      }
    };

    return {
      loginData,
      loginRules,
      login
    };
  }
};
</script>

<style scoped="less">
.login-container {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.el-form-item {
  margin-bottom: 15px;
}
</style>
