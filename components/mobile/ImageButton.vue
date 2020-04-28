<template>
  <div class="image-button">
    <el-image
      style="width: 100%; height: 100%"
      :src="src"
      :fit="'cover'"
    />
    <div class="label">
      <span :style="{'font-size': `${fontSize}px`}">{{ label }}</span>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  mixins: [],
  props: {
    src: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    fontSize: {
      type: Number,
      default: 24
    }
  },
  data () {
    return {
    }
  },
  computed: {
  },
  watch: {},
  mounted () { },
  created () { },
  methods: {}
}
</script>
<style lang='scss' scoped>
.image-button {
  width: 404px;
  height: 230px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  .label {
    position: absolute;
    bottom: 14px;
    left: 0;
    width:100%;
    padding: 0 30px;
    span {
      display: block;
      background-image: repeating-linear-gradient(135deg, #88754c, #dfcc8b 50%, #88754c 100%);
      font-size: 24px;
      font-family: 'BellMTBold';
      // padding-top: 10px;
      line-height: 34px;
    }
  }
}
</style>
