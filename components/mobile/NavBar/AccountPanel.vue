<template>
  <div class="account-panel em-container">
    <div class="em-m-content justify-end">
      <el-dropdown trigger="click" class="d-f align-items-center mx-3" @visible-change="dropdownHandle">
        <div class="el-dropdown-link primary-color">
          <span>
            <i class="el-icon-user el-icon--left"></i>
            {{ isLogin ? `${info.lastName} ${info.firstName}` : 'ACCOUNT' }}
            <i class="el-icon--right" :class="isShowDropdown?'el-icon-arrow-down':'el-icon-arrow-up'"></i>
          </span>
        </div>
        <el-dropdown-menu slot="dropdown" class="ma-0" style="width:104px;">
          <el-dropdown-item>
            <el-button v-if="!isLogin" type="text" @click="loginHandle">
              LOGIN
            </el-button>
            <el-button v-else type="text" @click="infoHandle">
              INFO
            </el-button>
          </el-dropdown-item>
          <el-dropdown-item>
            <el-button v-if="!isLogin" type="text" @click="registHandle">
              REGITS
            </el-button>
            <el-button v-else type="text" @click="logoutHandle">
              LOGOUT
            </el-button>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-button type="text" icon="el-icon-user" class="primary-color mx-3">JOIN US</el-button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AccountPanel',
  components: {},
  mixins: [],
  props: {
  },
  data () {
    return {
      isShowDropdown: false
    }
  },
  computed: {
    ...mapGetters(['info', 'isLogin', 'isMobile', 'token']),
    buttonClass () {
      const padding = this.isMobile ? 'px-1' : 'px-3'
      const margin = this.isMobile ? 'mx-1' : 'mx-3'
      return ['primary-color', padding, margin]
    }
  },
  watch: {},
  mounted () { },
  created () { },
  methods: {
    loginHandle () {
      this.$router.push({
        path: '/login'
      })
    },
    infoHandle () {
      this.$store.dispatch('user/getInfo', this.token).then(res => {
        console.log('homeInfo', res)
      })
    },
    logoutHandle () {
      this.$store.dispatch('user/logout', this.token).then(res => {
        console.log('homeLogout', res)
      })
    },
    registHandle () {
      this.$router.push({
        path: '/regist'
      })
    },
    dropdownHandle (value) {
      this.isShowDropdown = value
    }
  }
}
</script>
<style lang='scss' scoped>
.account-panel{
  height: 60px;
  background: rgba($color: #000000, $alpha: .5);
  .el-button {
    font: 400 13px system-ui;
  }
  .el-dropdown-link {
    cursor: pointer;
    span {
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      font-weight: 500;
      font: 400 13px system-ui;
    }
  }
  .el-icon-arrow-down, .el-icon-user {
    font-size: 13px;
  }
  .icon-push {
    display: block;
    position: absolute;
    font-size: 4px;
    top: 28px;
    left: 10px;
    height: 8px;
    line-height: 8px;
  }
}
</style>
