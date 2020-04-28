<template>
  <div
    class="check-salary"
  >
    <div class="inner-content">
      <div class="select-content primary-color">
        <el-select v-model="sevicesSelected" placeholder="Total Sevices">
          <el-option
            v-for="item in sevicesOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="menu-content d-f align-items-center primary-color">
        <el-menu mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">Total Date</el-menu-item>
          <el-menu-item index="2">Month</el-menu-item>
          <el-menu-item index="3">Week</el-menu-item>
          <el-menu-item index="4">Day</el-menu-item>
        </el-menu>
      </div>
      <charts-bar />
    </div>
    <back-button />
  </div>
</template>
<script>
import BackButton from '@/components/mobile/BackButton'
import ChartsBar from '@/components/mobile/ChartsBar'
export default {
  components: {
    BackButton,
    ChartsBar
  },
  mixins: [],
  props: {
  },
  data () {
    return {
      sevicesSelected: '',
      staffSelected: '',
      sevicesOptions: [
        {
          value: 'option1',
          label: 'a'
        },
        {
          value: 'option2',
          label: 'b'
        },
        {
          value: 'option3',
          label: 'c'
        }
      ],
      staffOptions: [
        {
          value: 'option1',
          label: 'a'
        },
        {
          value: 'option2',
          label: 'b'
        },
        {
          value: 'option3',
          label: 'c'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  mounted () { },
  created () { },
  methods: {
    handleSelect () {}
  }
}
</script>
<style lang='scss' scoped>
.check-salary{
  .inner-content{
    width: 100%;
    padding: 34px 47px 0;
    .select-content{
      padding-left: 120px;
      .el-select {
        width: 406px;
      }
    }
    .menu-content {
      padding-top: 25px;
      padding-left: 120px;
      font-size: 18px;
      .el-menu--horizontal > .el-menu-item:not(.is-disabled):not(.logo):focus, .el-menu--horizontal > .el-menu-item:not(.is-disabled):not(.logo):hover, .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
        background: none;
        border-bottom: none;
        color: white;
      }
      .el-menu--horizontal > .el-menu-item {
        border: none;
        padding: 0 28px;
      }
      .el-menu--horizontal > .el-menu-item.is-active {
        border-bottom: none;
        color: white;
      }
      .el-menu.el-menu--horizontal {
        border: none;
        background: none;
      }
    }
  }
}
</style>
