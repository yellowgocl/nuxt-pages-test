<template>
  <div class="staff">
    <el-row>
      <el-col :span="12">
        <image-button
          :src="require('@/assets/img/mobile/staff_check_booking.png')"
          label="CHECK BOOKING"
          @click.native="checkBookingHandle"
        />
      </el-col>
      <el-col :span="12">
        <image-button
          :src="require('@/assets/img/mobile/staff_check_salary.png')"
          label="CHECK SALARY"
          @click.native="checkSalaryHandle"
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
    checkSalaryHandle () {
      this.$router.push({
        path: '/checkSalary'
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.staff {
  width:836px;
  margin: 0 auto;
  padding-top: 144px;
  .el-col {
    padding-top: 10px;
    padding-bottom: 10px;
  }
}
</style>
