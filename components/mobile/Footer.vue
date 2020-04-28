<template>
  <div class="footer em-container">
    <div class="em-m-content d-f justify-center f-col">
      <span class="r-text primary-color" :class="isHomePage?'custom-padding':''">
        © 2003-2020 Epress Spa, inc.
      </span>
    </div>
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
  computed: {
    isHomePage () {
      return this.$route.name === 'mobile-home' || this.$route.name === 'mobile-login' || this.$route.name === 'mobile-regist'
    }
  },
  watch: {
  },
  mounted () {
  },
  created () { },
  methods: {
  }
}
</script>
<style lang='scss' scoped>
.footer {
  max-height: 97px;
  .em-m-content {
    padding: 0;
    .go-back {
      width: 500px;
      margin: 0 auto;
      font-family: 'BellMTBold';
      font-size: 22px;
    }
    .r-text {
      margin: 0 auto;
      padding-top: 15px;
      padding-bottom: 15px;
    }
    .custom-padding {
      padding-top: 37px;
      padding-bottom: 37px;
    }
  }
}
</style>
