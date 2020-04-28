<template>
  <div class="extra-diat">
    <div class="pa-4">
      <select-panel
        title="1. Select Your Diat"
        :data="diatData"
      />
      <select-panel
        title="2. Choose Your Location"
        :data="locationData"
      />
      <div class="px-3" style="padding-top: 33px;">
        <el-button class="em-m-button">CONFIRM</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import SelectPanel from './SelectPanel'
export default {
  components: {
    SelectPanel
  },
  mixins: [],
  props: {
  },
  data () {
    return {
      diatData: [
        {
          name: 'SALAD',
          price: '$5.00',
          value: 'salad'
        },
        {
          name: 'MILK TEA',
          price: '$5.00',
          value: 'milkTea'
        },
        {
          name: 'JUICE',
          price: '$8.00',
          value: 'juice'
        },
        {
          name: 'LEMON TEA',
          price: '$5.00',
          value: 'lemonTea'
        }
      ],
      locationData: [
        {
          name: 'AREA A',
          value: 'a'
        },
        {
          name: 'AREA B',
          value: 'b'
        },
        {
          name: 'AREA C',
          value: 'c'
        },
        {
          name: 'AREA D',
          value: 'd'
        },
        {
          name: 'AREA E',
          value: 'e'
        },
        {
          name: 'AREA F',
          value: 'f'
        },
        {
          name: 'AREA G',
          value: 'g'
        },
        {
          name: 'AREA H',
          value: 'h'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  mounted () {
  },
  created () { },
  methods: {}
}
</script>
<style lang='scss' scoped>
.extra-diat {
  .em-m-button {
    width: 100%;
  }
}
</style>
