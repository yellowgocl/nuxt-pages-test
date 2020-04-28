<template>
  <div class="our-team">
    <div class="scroll-content">
      <el-scrollbar style="height:100%; width:100%; padding:30px 37px;">
        <template v-for="(item, i) in avatarListData">
          <avatar-item
            :key="i"
            :label="item.name"
            :src="item.head"
            style="margin: 0 28px;"
            @click.native="avatarHandle(item)"
          >
            aaaaa
          </avatar-item>
        </template>
      </el-scrollbar>
    </div>
    <back-button />
  </div>
</template>
<script>
import AvatarItem from '@/components/mobile/AvatarItem'
import BackButton from '@/components/mobile/BackButton'
import { mapGetters } from 'vuex'
export default {
  components: {
    AvatarItem,
    BackButton
  },
  mixins: [],
  props: {
  },
  data () {
    return {
      avatarListData: [
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
  },
  computed: {
    ...mapGetters(['token', 'info', 'isLogin'])
  },
  watch: {
  },
  mounted () {
  },
  created () { },
  methods: {
    avatarHandle (item) {
      console.log(item)
    }
  }
}
</script>
<style lang='scss' scoped>
.our-team{
  .scroll-content {
    height: 525px;
    .el-scrollbar__wrap {
      overflow-x: hidden;
    }
  }
}
</style>
