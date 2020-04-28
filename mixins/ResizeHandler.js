// import { mapGetters } from 'vuex'

const WIDTH = 992 // refer to Bootstrap's responsive design

export default {
  computed: {
  },
  watch: {
    $route (route) {
    }
  },
  beforeMount () {
    if (process.client) {
      window.addEventListener('resize', this.$_resizeHandler)
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.$_resizeHandler)
  },
  mounted () {
    // if (this.isMobile) {
    // }
  },
  methods: {
    // use $_ for mixins properties
    // https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
    $_isMobile () {
      const { body } = document
      const rect = body.getBoundingClientRect()
      return rect.width - 1 < WIDTH
    },
    $_resizeHandler () {
      // if (!document.hidden) {
      //   const isMobile = this.$_isMobile()
      //   this.$store.dispatch('common/setDeviceType', isMobile ? 'mobile' : 'desktop')
      // }
    }
  }
}
