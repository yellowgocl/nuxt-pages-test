<template>
  <div class="reception">
    <el-row>
      <el-col :span="12">
        <image-button
          :src="require('@/assets/img/mobile/reception_check_booking.png')"
          label="CHECK BOOKING"
          :font-size="22"
          @click.native="checkBookingHandle"
        />
      </el-col>
      <el-col :span="12">
        <image-button
          :src="require('@/assets/img/mobile/reception_booking.png')"
          label="BOOKING"
          :font-size="22"
          @click.native="bookingHandle"
        />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <image-button
          :src="require('@/assets/img/mobile/reception_check_member_payment_list.png')"
          label="CHECK MEMBER PAYMENT LIST"
          :font-size="21"
          @click.native="checkMemberPaymentListHandle"
        />
      </el-col>
      <el-col :span="12">
        <back-button :height="85" :width="347" style="padding-top:82px;" />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import ImageButton from '@/components/mobile/ImageButton'
import BackButton from '@/components/mobile/BackButton'
export default {
  components: {
    ImageButton,
    BackButton
  },
  mixins: [],
  props: {
  },
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  mounted () { },
  created () { },
  methods: {
    checkBookingHandle () {
      this.$router.push({
        path: '/checkBooking'
      })
    },
    bookingHandle () {
      this.$router.push({
        path: '/booking'
      })
    },
    checkMemberPaymentListHandle () {
      this.$router.push({
        path: '/checkMemberPaymentList'
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.reception {
  width:836px;
  margin: 0 auto;
  padding-top: 24px;
  .el-col {
    padding-top: 10px;
    padding-bottom: 10px;
  }
}
</style>
