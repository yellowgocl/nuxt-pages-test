<template>
  <div class="regist">
    <el-form
      ref="registForm"
      :model="registForm"
      :rules="registRules"
      class="regist-form"
      auto-complete="on"
      label-position="left"
    >
      <div class="title-content">
        <p class="title primary-color">MEMBERSHIP/BOOKING INFO</p>
      </div>
      <div class="form-item-content">
        <el-form-item prop="firstName" :rules="registRules.firstName" class="ma-0 py-3">
          <el-input
            ref="firstName"
            v-model="registForm.firstName"
            placeholder="First Name"
            type="text"
            size="large"
            auto-complete="on"
          >
            <i slot="suffix" class="d-f align-items-center el-icon-s-custom"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="lastName" :rules="registRules.lastName" class="ma-0 py-3">
          <el-input
            ref="lastName"
            v-model="registForm.lastName"
            placeholder="Last Name"
            type="text"
            size="large"
            auto-complete="on"
          >
            <i slot="suffix" class="d-f align-items-center el-icon-s-custom"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="email" :rules="registRules.email" class="ma-0 py-3">
          <el-input
            ref="email"
            v-model="registForm.email"
            placeholder="E-mail"
            type="text"
            size="large"
            auto-complete="on"
          >
            <i slot="suffix" class="d-f align-items-center el-icon-message"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="phone" :rules="registRules.phone" class="ma-0 py-3">
          <el-input
            ref="phone"
            v-model="registForm.phone"
            placeholder="Mobile Phone"
            type="text"
            size="large"
            auto-complete="on"
          >
            <i slot="suffix" class="d-f align-items-center el-icon-phone"></i>
          </el-input>
        </el-form-item>
      </div>
      <div class="title-content" style="padding-top:100px; padding-bottom:100px;">
        <p class="title primary-color">SET PASSWORD TO CHECK THE BOOKING INFO</p>
      </div>
      <div class="form-item-content">
        <el-form-item prop="password" :rules="registRules.password" class="ma-0 py-3">
          <el-input
            ref="password"
            v-model="registForm.password"
            placeholder="Password"
            type="password"
            size="large"
            auto-complete="on"
          >
            <i slot="suffix" class="d-f align-items-center el-icon-lock"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="confirmPassword" :rules="registRules.confirmPassword" class="ma-0 py-3">
          <el-input
            ref="confirmPassword"
            v-model="registForm.confirmPassword"
            placeholder="Confirm Password"
            type="password"
            size="large"
            auto-complete="on"
          >
            <i slot="suffix" class="d-f align-items-center el-icon-lock"></i>
          </el-input>
        </el-form-item>
      </div>
    </el-form>
    <div class="button-content d-f justify-space-between">
      <el-button type="dark">BACK</el-button>
      <el-button type="dark" @click="resetForm">RESET</el-button>
      <el-button @click="registHandle">JOIN NOW</el-button>
    </div>
    <div class="link-button-content d-f">
      <i class="el-icon-question mr-3 primary-color"></i>
      <span>Already haved  menbership ?     Turn to <el-link type="primary" class="link-button" @click="loginHandle">Login >></el-link></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Regist',
  components: {},
  mixins: [],
  props: {
  },
  data () {
    const confirmPassword = (rule, value, callback) => {
      if (value !== this.registForm.password) {
        callback(new Error('confirm password is not same'))
      } else {
        callback()
      }
    }
    return {
      registForm: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
      },
      registRules: {
        firstName: [
          { required: true, trigger: 'blur' }
        ],
        lastName: [
          { required: true, trigger: 'blur' }
        ],
        email: [{ required: true, trigger: 'blur' }],
        phone: [
          { required: true, trigger: 'blur' }
        ],
        password: [
          {
            required: true,
            trigger: 'blur'
          }
        ],
        confirmPassword: [
          {
            required: true,
            trigger: 'blur'
          },
          {
            validator: confirmPassword,
            trigger: 'blur'
          }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  mounted () { },
  created () { },
  methods: {
    resetForm () {
      this.$refs['registForm'].resetFields()
    },
    registHandle () {
      this.$refs['registForm'].validate((valid) => {
        if (valid) {
          this.$store.dispatch('user/regist', this.registForm).then(res => {
            console.log(res)
            const { flag } = res
            if (flag) {
              this.$router.push({
                path: '/'
              })
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    loginHandle () {
      this.$router.push({
        path: '/login'
      })
    }
  },
  middleware: ['auth']
}
</script>
<style lang='scss' scoped>
.regist {
  .regist-form {
    .form-item-content {
      width: 686px;
      margin: 0 auto;
    }
    .title-content {
      width:1084px;
      margin: 0 auto;
      .title {
        margin-top: 0;
        margin-bottom: 40px;
        font-size: 45px;
        text-align: center;
      }
    }
  }
  .link-button-content {
    width:1084px;
    margin: 0 auto;
    color:white;
    padding-bottom: 162px;
    .link-button{
      font-size: 18px;
      padding-top: 2px;
    }
  }
  .button-content {
    width:1084px;
    margin: 0 auto;
    padding-top: 80px;
    padding-bottom: 80px;
    button {
      width: 341px;
      height:62px;
      font: bold 30px 'BellMTBold';
    }
  }
}
</style>
