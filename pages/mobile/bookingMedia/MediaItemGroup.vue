<template>
  <div class="media-item-group">
    <el-scrollbar style="height:100%; width:100%;">
      <div class="scroll-content d-f f-wrap justify-start">
        <template v-for="item in data">
          <div :key="item.name" class="item ma-2">
            {{ item.name }}
          </div>
        </template>
      </div>
    </el-scrollbar>
  </div>
</template>
<script>
export default {
  components: {},
  mixins: [],
  props: {
    data: {
      type: Array,
      default: () => { return [] }
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
.media-item-group {
  width: 100%;
  height: 306px;
  .item {
    width: 97px;
    height: 137px;
    background-color: #fff;
  }
  .scroll-content {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
}
</style>
