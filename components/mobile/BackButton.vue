<template>
  <div class="back-content d-f justify-center">
    <el-button
      class="em-m-button"
      :style="{ 'height': height === -1 ? 'auto' : `${height}px`, 'width': `${width}px` }"
      @click="goBackHandle"
    >
      BACK
    </el-button>
  </div>
</template>
<script>
export default {
  components: {},
  mixins: [],
  props: {
    height: {
      type: Number,
      default: -1
    },
    width: {
      type: Number,
      default: 500
    }
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
    goBackHandle () {
      console.log('goBack')
    }
  }
}
</script>
<style lang='scss' scoped>
.back-content {
  .em-m-button {
    width: 500px;
  }
}
</style>
