<template>
  <div class="membership">
    <div class="scroll-content primary-color">
      <el-scrollbar style="height:100%; width:100%;">
        <div class="inner-item">
          <h1 class="inner-title">Get your Spa Membership Today</h1>
          <span class="inner-text">
            A Membership at the Spa at the Glen in Brea is an excellent way to help ensure making wellness and self care is a priority. Take advantage of all the perks and escape to the Spa for relaxing treatments, anytime me-time, and exclusive savings on retail products and additional treatments!
          </span>
        </div>
        <div class="inner-item">
          <h1 class="inner-title">Benefits of  Membership</h1>
          <span class="inner-text">
            We live in a fast-paced world and we realize the importance of flexibility in your schedules. Our membership program is designed to fit your busy lifestyle and to address your individual health objectives.  The Brea Spa member program is also designed to give you maximum benefit at minimum cost.  During your membership, you will enjoy additional discounted spa treatments and 10% discount on all retail items.
          </span>
        </div>
      </el-scrollbar>
    </div>
    <back-button />
  </div>
</template>
<script>
import BackButton from '@/components/mobile/BackButton'
export default {
  components: {
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
  methods: {}
}
</script>
<style lang='scss' scoped>
.membership {
  .scroll-content {
    height: 525px;
    padding: 46px;;
    .inner-item {
      display: block;
      line-height: 32px;
      font-size: 16px;
    }
    .el-scrollbar__wrap {
      overflow-x: hidden;
    }
  }
}
</style>
