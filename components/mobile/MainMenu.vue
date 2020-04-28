<template>
  <div class="main-menu em-container">
    <div class="d-f justify-center" style="padding-top: 11px; padding-bottom: 11px;">
      <el-image :src="require('@/assets/img/mobile/app_logo.png')" style="cursor: pointer; width: 85px;" @click="homepageHandle" />
    </div>
    <el-divider class="ma-0 em-m-divider" />
  </div>
</template>
<script>
export default {
  components: {},
  mixins: [],
  props: {
  },
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  mounted () { },
  created () { },
  methods: {
    homepageHandle () {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.main-menu {
  height: 146px;
  .menu {
    background: none;
    width: 100%;
    border-bottom: none;
    .logo {
      height: auto;
    }
  }
}
</style>
