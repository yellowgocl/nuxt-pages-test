<template>
  <div class="content">
    <el-image :src="src" />
    <div class="label">
      <span>{{ label }}</span>
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
  methods: {}
}
</script>
<style lang='scss' scoped>
.content {
  width: auto;
  height: auto;
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
      background: #f3df98;
      font-size: 24px;
      padding-top: 10px;
    }
  }
}
</style>
