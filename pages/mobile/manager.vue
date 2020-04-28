<template>
  <div class="manager">
    <el-row>
      <el-col :span="12">
        <image-button
          :src="require('@/assets/img/mobile/manager_run_dashboard.png')"
          label="RUN DASHBOARD"
          @click.native="dashboardHandle"
        />
      </el-col>
      <el-col :span="12">
        <image-button
          :src="require('@/assets/img/mobile/manager_check_booking.png')"
          label="CHECK BOOKING"
          @click.native="checkBookingHandle"
        />
      </el-col>
    </el-row>
    <back-button style="padding-top: 128px;" />
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
    dashboardHandle () {
      this.$router.push({
        path: '/dashboard'
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.manager {
  width:836px;
  margin: 0 auto;
  padding-top: 148px;
  .el-col {
    padding-top: 10px;
    padding-bottom: 10px;
  }
}
</style>
