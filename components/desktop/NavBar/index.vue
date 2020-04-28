<template>
  <div class="navbar">
    <account-panel v-if="showAccount" />
  </div>
</template>
<script>
import AccountPanel from './AccountPanel'
import { find, isUndefined } from 'lodash'
export default {
  components: {
    AccountPanel
  },
  mixins: [],
  props: {
  },
  data () {
    return {
      noAccountPanelPageList: [
        'desktop-login',
        'desktop-regist'
      ],
      showAccount: true
    }
  },
  computed: {
  },
  watch: {
    $route (route) {
      this.setAccountView(route)
    }
  },
  mounted () {
    this.setAccountView(this.$route)
  },
  created () { },
  methods: {
    setAccountView (route) {
      this.showAccount = isUndefined(find(this.noAccountPanelPageList, (t) => {
        return t === route.name
      }))
    }
  }
}
</script>
<style lang='scss' scoped>
.navbar {
  height: auto;
}
</style>
