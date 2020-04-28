<template>
  <div class="home">
    <div class="d-f">
      <div style="width:532px;">
        <div class="d-f" style="height:261px;">
          <div class="button-content" style="width:267px;" @click="havefunHandle">
            <el-image :src="require('@/assets/img/mobile/home_havefun.png')" />
            <span class="button-text align-right background-black primary-color" style="bottom:13px;">HAVE FUN</span>
          </div>
          <div class="button-content" style="width:265px;" @click="aboutUsHandle">
            <el-image :src="require('@/assets/img/mobile/home_aboutus.png')" />
            <span class="button-text align-right background-black primary-color" style="bottom:13px;">ABOUT US</span>
          </div>
        </div>
        <div class="button-content" style="width:532px; height:264px;" @click="loginHandle">
          <el-image :src="require('@/assets/img/mobile/home_login.png')" />
          <span class="button-text align-right primary-color" style="bottom:8px;">{{ isLogin?'LOG OUT':'LOG IN' }}</span>
        </div>
      </div>
      <div class="button-content" style="width:492px; height:525px;" @click="checkBookingHandle">
        <el-image :src="require('@/assets/img/mobile/home_check_booking.png')" />
        <span class="button-text align-center primary-color" style="top:86px;">CHECK BOOKING</span>
      </div>
    </div>
    <el-divider class="ma-0" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {},
  mixins: [],
  props: {},
  asyncData ({ params, error }) {
    return {}
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['token', 'info', 'isLogin']),
    email () {
      return this.info.email
    }
  },
  watch: {},
  mounted () {
  },
  created () {},
  methods: {
    havefunHandle () {
      if (this.isLogin) {
        this.$store.dispatch('ourTeam/getHotStaff', this.token).then(res => {
          console.log('get_hot_staff', res)
        })
      } else {
        console.log('get_hot_staff noLogin')
      }
    },
    aboutUsHandle () {
      this.$router.push({
        path: '/aboutUs'
      })
    },
    loginHandle () {
      if (this.isLogin) {
        this.$store.dispatch('user/logout', this.token).then(res => {
          console.log('homeLogout', res)
        })
      } else {
        this.$router.push({
          path: '/login'
        })
      }
    },
    checkBookingHandle () {
      this.$router.push({
        path: '/checkBooking'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  .button-content {
    position: relative;
    .button-text {
      &.align-right{
        text-align: right;
      }
      &.align-center{
        text-align: center;
      }
      &.background-black {
        background: linear-gradient(to right, rgba(0,0,0,0) , rgba(0,0,0,1) );
      }
      display: block;
      width: 100%;
      padding: 0 16px;
      padding-top: 9px;
      position: absolute;
      bottom: 0;
      left: 0;
      font-size: 24px;
    }
  }
}
</style>
