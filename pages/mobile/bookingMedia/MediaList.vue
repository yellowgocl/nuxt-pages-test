<template>
  <div class="media-list">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane
        v-for="item in data"
        :key="item.label"
        :label="item.label"
        :name="item.label"
      >
        <media-item-group :data="currentGroupData" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import MediaItemGroup from './MediaItemGroup'
export default {
  components: {
    MediaItemGroup
  },
  mixins: [],
  props: {
    data: {
      type: Array,
      default: () => { return [] }
    }
  },
  data () {
    return {
      activeName: '',
      currentGroupData: [
        {
          name: '1',
          img: '',
          src: ''
        },
        {
          name: '2',
          img: '',
          src: ''
        },
        {
          name: '3',
          img: '',
          src: ''
        },
        {
          name: '4',
          img: '',
          src: ''
        },
        {
          name: '5',
          img: '',
          src: ''
        },
        {
          name: '6',
          img: '',
          src: ''
        },
        {
          name: '7',
          img: '',
          src: ''
        }
      ]
    }
  },
  computed: {},
  watch: {
    data (n, o) {
      if (n !== o && n.length !== 0) {
        this.activeName = n[0].label || ''
      }
    }
  },
  mounted () {
    if (this.data.length !== 0) {
      this.activeName = this.data[0].label || ''
    }
  },
  created () { },
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event)
    }
  }
}
</script>
<style lang='scss'>
.media-list {
  width: 343px;
  height: 333px;
  background-color: none;
  .el-tabs {
    width:100%;
    .el-tabs__header {
      margin: 0;
      .el-tabs__active-bar {
        display: none;
      }
      .el-tabs__nav-wrap::after {
        background: none;
      }
      .el-tabs__item {
        color: #c9bc84;
        width: 61px;
        height: 26px;
        line-height: 26px;
        padding: 0;
        text-align: center;
        border-radius: 4px;
        margin-left: 8px;
        margin-right: 8px;
        &:hover {
          background-color: white;
          color: #c9bc84;
        }
        &.is-active {
          background-color: white;
          color: #c9bc84;
        }
      }
    }
  }
}
</style>
