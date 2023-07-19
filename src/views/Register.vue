<template>
  <div class="registration-container">
    <el-form :model="formData" label-width="80px">
      <el-form-item label="Username">
        <el-input v-model="formData.username" placeholder="Enter your username"></el-input>
      </el-form-item>
      <el-form-item label="Email">
        <el-input v-model="formData.email" placeholder="Enter your email"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="formData.password" type="password" placeholder="Enter your password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="register">Register</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    register() {
      // Handle registration logic here
      console.log(this.formData);
    }
  }
};
</script>

<style>
.registration-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}
</style>
