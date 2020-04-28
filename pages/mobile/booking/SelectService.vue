<template>
  <div class="select-service pa-3">
    <span class="title primary-color">
      1. Select Your Service
    </span>
    <div class="inner-content f-wrap d-f justify-space-between">
      <template v-for="item in data">
        <el-button :key="item.name" class="em-m-button" :class="{'is-active': item.value === selected}" @click="selectHandle(item)">
          {{ item.name }}
        </el-button>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  mixins: [],
  props: {
    data: {
      type: Array,
      default: () => {
        return [
          {
            name: 'NAIL',
            value: 'nail'
          },
          {
            name: 'HAIR CUT',
            value: 'hairCut'
          },
          {
            name: 'LASER',
            value: 'laser'
          },
          {
            name: 'WAXING',
            value: 'waxing'
          },
          {
            name: 'SPRAY TAN',
            value: 'sprayTan'
          },
          {
            name: 'BEAUTY SERV',
            value: 'beautyServ'
          },
          {
            name: 'HIFU',
            value: 'hifu'
          },
          {
            name: 'FACIALS',
            value: 'facials'
          }
        ]
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
    }
  }
}
</script>
<style lang='scss' scoped>
.select-service {
  .title {
    font-size: 35px;
  }
  .inner-content {
    .em-m-button {
      width: 196px;
      margin-top: 13px;
      margin-bottom: 13px;
      &.is-active {
        background-color: white;
        color: #c9bc84;
      }
    }
  }
}
</style>
