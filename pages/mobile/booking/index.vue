<template>
  <div class="booking">
    <el-carousel
      ref="bookingCarousel"
      height="457px"
      :autoplay="false"
      :direction="'vertical'"
      :arrow="'never'"
    >
      <el-carousel-item class="pa-4">
        <select-service />
      </el-carousel-item>
      <el-carousel-item class="pa-4">
        <select-staff />
      </el-carousel-item>
      <el-carousel-item class="pa-4">
        <select-date />
      </el-carousel-item>
      <el-carousel-item class="pa-4">
        <confirm-booking />
      </el-carousel-item>
    </el-carousel>
    <div class="button-content">
      <div v-if="active!==3" class="button-group d-f justify-space-between">
        <el-button class="em-m-button" :disabled="active===0" @click="backHandle">PREVIOUS</el-button>
        <el-button class="em-m-button" :disabled="active===3" @click="nextHandle">NEXT</el-button>
      </div>
      <div v-else class="button-group d-f justify-space-between">
        <el-button class="em-m-button" @click="resetHandle">RESET</el-button>
        <el-button class="em-m-button" @click="confirmHandle">BOOK NOW</el-button>
      </div>
    </div>
    <back-button />
  </div>
</template>
<script>
import SelectService from './SelectService'
import SelectStaff from './SelectStaff'
import SelectDate from './SelectDate'
import ConfirmBooking from './ConfirmBooking'
import BackButton from '@/components/mobile/BackButton'
export default {
  components: {
    SelectService,
    SelectStaff,
    SelectDate,
    ConfirmBooking,
    BackButton
  },
  mixins: [],
  props: {
  },
  data () {
    return {
      active: 0
    }
  },
  computed: {},
  watch: {
    active (n, o) {
      this.$refs.bookingCarousel.setActiveItem(n)
    }
  },
  mounted () {
  },
  created () { },
  methods: {
    backHandle () {
      if (this.active-- < 0) {
        this.active = 2
      }
    },
    nextHandle () {
      if (this.active++ > 2) this.active = 0
    },
    resetHandle () {
      this.active = 0
    },
    confirmHandle () {}
  }
}
</script>
<style lang='scss' scoped>
.booking {
  .button-content {
    padding-top:10px;
    padding-bottom: 10px;
    .button-group {
      width: 500px;
      margin: 0 auto;
      .em-m-button {
        width: 245px;
      }
    }
  }
}
</style>
