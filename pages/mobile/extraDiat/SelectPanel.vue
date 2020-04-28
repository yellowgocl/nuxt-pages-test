<template>
  <div class="select-panel pa-3">
    <span class="title primary-color">
      {{ title }}
    </span>
    <div class="inner-content em-m-border f-wrap d-f justify-space-between py-3">
      <template v-for="item in data">
        <!-- <em-button :key="item.name" /> -->
        <el-button :key="item.name" class="em-m-button my-3" :class="{'is-active': item.value === selected}" @click="selectHandle(item)">
          <template v-if="hasPrice(item)">
            {{ item.name }}
          </template>
          <template v-else>
            <p>{{ item.name }}</p>
            <p>{{ item.price }}</p>
          </template>
        </el-button>
      </template>
    </div>
    <!-- <el-divider class="ma-0" /> -->
  </div>
</template>
<script>
// import EmButton from '@/components/mobile/EmButton'
import { isUndefined } from 'lodash'
export default {
  components: {
    // EmButton
  },
  mixins: [],
  props: {
    title: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      selected: ''
    }
  },
  computed: {},
  watch: {},
  mounted () { },
  created () { },
  methods: {
    selectHandle (item) {
      this.selected = item.value
    },
    hasPrice (item) {
      return isUndefined(item['price'])
    }
  }
}
</script>
<style lang='scss' scoped>
.select-panel {
  .title {
    font-size: 35px;
  }
  .inner-content {
    .em-m-button {
      min-width: 196px;
    }
  }
}
</style>
