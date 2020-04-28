<template>
  <div class="login d-f justify-center">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <el-form-item prop="email" class="ma-0 py-3">
        <el-input
          ref="email"
          v-model="loginForm.email"
          size="large"
          placeholder="E-mail"
          type="text"
          tabindex="1"
          auto-complete="on"
        >
          <i slot="suffix" class="el-icon-message d-f align-items-center"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password" class="ma-0 py-3">
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          size="large"
          :type="passwordType"
          placeholder="Password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="loginHandle"
        >
          <i slot="suffix" :class="lockIcon" class="d-f align-items-center" style="cursor: pointer;" @click="()=>showPass=!showPass"></i>
        </el-input>
      </el-form-item>
      <div class="py-3">
        <el-button
          :loading="loading"
          class="login-button em-m-button"
          @click.native.prevent="loginHandle"
        >LOGIN</el-button>
      </div>
      <div class="py-3">
        <el-button
          :loading="loading"
          class="regist-button em-m-button"
          @click.native.prevent="registHandle"
        >REGISTER</el-button>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'Login',
  components: {},
  mixins: [],
  props: {
  },
  data () {
    return {
      loginForm: {
        email: 'chan.chen@comprame.com',
        password: '1234'
      },
      loginRules: {
        email: [{ required: true, trigger: 'blur', type: 'email' }],
        password: [{ required: true, trigger: 'blur' }]
      },
      loading: false,
      showPass: false,
      redirect: undefined
    }
  },
  computed: {
    passwordType () {
      return this.showPass ? 'text' : 'password'
    },
    lockIcon () {
      return this.showPass ? 'el-icon-unlock' : 'el-icon-lock'
    }
  },
  watch: {
  },
  mounted () {
  },
  created () { },
  methods: {
    loginHandle () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    registHandle () {
      this.$router.push({
        path: '/regist'
      })
    }
  },
  middleware: ['auth']
}
</script>
<style lang='scss' scoped>
.login {
  padding: 50px 0;
  .login-form {
    width: 686px;
    .login-button, .regist-button {
      display: block;
      width:500px;
      margin: 0 auto;
      // height:45px;
      font: bold 22px 'BellMTBold';
    }
  }
  .title-content {
    .title {
      margin-top: 0;
      margin-bottom: 40px;
      font-size: 45px;
      text-align: center;
    }
  }
  .link-button{
    font-size: 18px;
    padding-top: 2px;
  }
}
</style>
