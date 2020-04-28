<template>
  <div class="charts-bar">
    <e-charts :options="chartsOption" />
  </div>
</template>
<script>
import ECharts from 'vue-echarts'
require('echarts/lib/chart/bar')
export default {
  components: {
    ECharts
  },
  mixins: [],
  props: {
    chartsData: {
      type: Object,
      default: () => {
        return {
          '12.02': {
            amount: 60000,
            salary: 50000
          },
          '12.03': {
            amount: 60000,
            salary: 50000
          },
          '12.04': {
            amount: 60000,
            salary: 50000
          },
          '12.05': {
            amount: 60000,
            salary: 50000
          },
          '12.06': {
            amount: 60000,
            salary: 50000
          },
          '12.07': {
            amount: 60000,
            salary: 50000
          },
          '12.08': {
            amount: 60000,
            salary: 50000
          }
        }
      }
    }
  },
  data () {
    return {
      option: {}
    }
  },
  computed: {
    chartsOption () {
      const option = {
        textStyle: {
          color: '#bda270',
          fontFamily: 'BellMTBold',
          fontSize: 16
        },
        color: ['#000', '#9d8458', '#c8c7c6', '#000'],
        xAxis: [
          {
            type: 'category',
            axisTick: {
              show: false
            },
            data: ['12.02', '12.03', '12.04', '12.05', '12.06', '12.07', '12.08'],
            axisLine: {
              lineStyle: {
                color: '#9d8458'
              }
            }
          }
        ],
        yAxis: {
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#9d8458'
            }
          },
          splitLine: {
            lineStyle: {
              color: '#9d8458'
            }
          }
        },
        series: [
          {
            name: 'fixed',
            type: 'bar',
            data: [0, 0, 0, 0, 0, 0, 0]
          },
          {
            name: 'Amount',
            type: 'bar',
            data: [60000, 20000, 50000, 40000, 30000, 10000, 20000]
          },
          {
            name: 'Salary',
            type: 'bar',
            data: [10000, 10000, 10000, 10000, 10000, 10000, 10000]
          },
          {
            name: 'fixed',
            type: 'bar',
            data: [0, 0, 0, 0, 0, 0, 0]
          }
        ]
      }
      return option
    }
  },
  watch: {},
  mounted () { },
  created () { },
  methods: {}
}
</script>
<style lang='scss' scoped>
.charts-bar {
  .echarts {
    width: 100%;
    height: 380px;
  }
}
</style>
