<template>
  <div class="customer">
    <el-row>
      <el-col :span="12">
        <image-button
          :src="require('@/assets/img/mobile/customer_check_booking.png')"
          label="CHECK BOOKING"
          @click.native="checkBookingHandle"
        />
      </el-col>
      <el-col :span="12">
        <image-button
          :src="require('@/assets/img/mobile/customer_booking.png')"
          label="BOOKING"
          @click.native="bookingHandle"
        />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <image-button
          :src="require('@/assets/img/mobile/customer_extra_diat.png')"
          label="EXTRA DIAT"
          @click.native="extraDiatHandle"
        />
      </el-col>
    </el-row>
    <back-button />
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
    extraDiatHandle () {
      this.$router.push({
        path: '/extraDiat'
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.customer {
  width:836px;
  margin: 0 auto;
  padding-top: 24px;
  .el-col {
    padding-top: 10px;
    padding-bottom: 10px;
  }
}
</style>
