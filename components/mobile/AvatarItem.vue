<template>
  <div class="avater">
    <div class="head-content d-f align-items-center">
      <el-image :src="src" />
    </div>
    <span class="name-content my-3 primary-color">
      <template v-if="hasLabelProp">
        {{ label }}
      </template>
      <slot v-else></slot>
    </span>
  </div>
</template>
<script>
import { isEmpty } from 'lodash'
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
  computed: {
    hasLabelProp () {
      return !isEmpty(this.label)
    }
  },
  watch: {},
  mounted () { },
  created () { },
  methods: {}
}
</script>
<style lang='scss' scoped>
.avater {
  width: 134px;
  height: 233px;
  min-height: 159px;
  background-image: url('~assets/img/mobile/avatar.png');
  background-repeat: no-repeat;
  padding-top: 38px;
  display: inline-block;
  .head-content {
    width: 114px;
    height: 114px;
    overflow: hidden;
    margin: 0 auto;
    background-color: #6f6f6f;
  }
  .name-content {
    display: block;
    text-align: center;
    font-size: 18px;
  }
}
</style>
