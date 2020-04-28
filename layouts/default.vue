<template>
  <el-container class="bg">
    <el-header :style="headerStyleObject">
      <desktop-nav-bar v-if="!isMobile" />
      <!-- <mobile-nav-bar v-else /> -->
      <desktop-main-menu v-if="!isMobile" />
      <mobile-main-menu v-else />
    </el-header>
    <el-main :style="mainStyleObject">
      <nuxt />
    </el-main>
    <el-footer :style="footerStyleObject">
      <desktop-footer v-if="!isMobile" />
      <mobile-footer v-else />
    </el-footer>
  </el-container>
</template>
<script>
import { mapGetters } from 'vuex'
import DesktopMainMenu from '@/components/desktop/MainMenu'
import DesktopNavBar from '@/components/desktop/NavBar'
import DesktopFooter from '@/components/desktop/Footer'
import MobileMainMenu from '@/components/mobile/MainMenu'
// import MobileNavBar from '@/components/mobile/NavBar'
import MobileFooter from '@/components/mobile/Footer'
import ResizeMixin from '@/mixins/ResizeHandler'
export default {
  components: {
    DesktopNavBar,
    DesktopMainMenu,
    DesktopFooter,
    // MobileNavBar,
    MobileMainMenu,
    MobileFooter
  },
  mixins: [ResizeMixin],
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['deviceType']),
    isMobile () {
      return this.deviceType !== 'desktop'
    },
    isDesktopHomePage () {
      return this.$route.name === 'desktop-home'
    },
    headerStyleObject () {
      const o = {
        width: '100%',
        height: '100%',
        'z-index': '99'
      }
      return o
    },
    mainStyleObject () {
      return this.isDesktopHomePage ? {
        'margin-top': '-300px'
      } : {}
    },
    footerStyleObject () {
      const o = {
        width: '100%',
        height: 'auto'
      }
      if (this.isMobile) {
        o.position = 'absolute'
        o.bottom = '0'
      }
      return o
    }
  },
  mounted () {
  },
  created () {
  }
}
</script>
<style lang='scss' scoped>
.bg{
  background-image: url('~assets/img/mobile/background.png');
}
</style>
