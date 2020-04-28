<template>
  <div class="select-staff pa-3">
    <span class="title primary-color">
      2. Choose Your Favor Staff
    </span>
    <el-scrollbar style="height:420px; width:100%;">
      <div class="inner-content f-wrap d-f justify-space-between">
        <el-radio-group v-model="radio">
          <template v-for="(item, i) in data">
            <el-radio :key="i" :label="i">
              <avatar-item
                :label="item.name"
                :src="item.head"
              />
            </el-radio>
          </template>
        </el-radio-group>
      </div>
    </el-scrollbar>
  </div>
</template>
<script>
import AvatarItem from '@/components/mobile/AvatarItem'
export default {
  components: {
    AvatarItem
  },
  mixins: [],
  props: {
    data: {
      type: Array,
      default: () => {
        return [
          {
            head: require('@/assets/img/mobile/user-head.png'),
            name: 'aaa'
          },
          {
            head: require('@/assets/img/mobile/user-head.png'),
            name: 'aaa'
          },
          {
            head: require('@/assets/img/mobile/user-head.png'),
            name: 'aaa'
          },
          {
            head: require('@/assets/img/mobile/user-head.png'),
            name: 'aaa'
          },
          {
            head: require('@/assets/img/mobile/user-head.png'),
            name: 'aaa'
          },
          {
            head: require('@/assets/img/mobile/user-head.png'),
            name: 'aaa'
          },
          {
            head: require('@/assets/img/mobile/user-head.png'),
            name: 'aaa'
          },
          {
            head: require('@/assets/img/mobile/user-head.png'),
            name: 'aaa'
          },
          {
            head: require('@/assets/img/mobile/user-head.png'),
            name: 'aaa'
          },
          {
            head: require('@/assets/img/mobile/user-head.png'),
            name: 'aaa'
          },
          {
            head: require('@/assets/img/mobile/user-head.png'),
            name: 'aaa'
          },
          {
            head: require('@/assets/img/mobile/user-head.png'),
            name: 'aaa'
          },
          {
            head: require('@/assets/img/mobile/user-head.png'),
            name: 'aaa'
          },
          {
            head: require('@/assets/img/mobile/user-head.png'),
            name: 'aaa'
          },
          {
            head: require('@/assets/img/mobile/user-head.png'),
            name: 'aaa'
          },
          {
            head: require('@/assets/img/mobile/user-head.png'),
            name: 'aaa'
          },
          {
            head: require('@/assets/img/mobile/user-head.png'),
            name: 'aaa'
          },
          {
            head: require('@/assets/img/mobile/user-head.png'),
            name: 'aaa'
          },
          {
            head: require('@/assets/img/mobile/user-head.png'),
            name: 'aaa'
          },
          {
            head: require('@/assets/img/mobile/user-head.png'),
            name: 'aaa'
          }
        ]
      }
    }
  },
  data () {
    return {
      radio: ''
    }
  },
  computed: {},
  watch: {},
  mounted () { },
  created () { },
  methods: {}
}
</script>
<style lang='scss'>
.select-staff {
  .title {
    font-size: 35px;
  }
  .el-radio {
    .el-radio__input {
      position: absolute;
      top: 90px;
      left: 0;
      height: 14px;
      .el-radio__inner {
        background: none;
        border-color: #c9bc84;
      }
    }
    .el-radio__label {
      display: inline-block;
      padding-left: 24px;
    }
  }
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
}
</style>
