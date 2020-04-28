<template>
  <div class="confirm pa-3">
    <span class="title primary-color">
      4. Confirm Your Booking
    </span>
    <div class="inner-content d-f justify-center">
      <avatar-item
        :src="avatar"
      />
      <div class="pl-5 pt-3 primary-color">
        <p class="pt-3">{{ service }}</p>
        <p>{{ staffName }}</p>
        <p>
          <span>{{ date }}</span>
          <span>{{ time }}</span>
        </p>
      </div>
    </div>
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
    avatar: {
      type: String,
      default: require('@/assets/img/mobile/user-head.png')
    },
    service: {
      type: String,
      default: 'NAIL'
    },
    staffName: {
      type: String,
      default: 'LIA WATSON'
    },
    date: {
      type: String,
      default: '2019-12-7'
    },
    time: {
      type: String,
      default: '10:00'
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
.confirm {
  .title {
    font-size: 35px;
  }
  .inner-content {
    padding-top: 100px;
  }
}
</style>
