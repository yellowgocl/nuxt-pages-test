<template>
  <div class="about-us">
    <el-row>
      <el-col :span="12">
        <image-button
          :src="require('@/assets/img/mobile/aboutus_introduction.png')"
          label="EMPRESS INTRODUCTION"
          @click.native="introductionHandle"
        />
      </el-col>
      <el-col :span="12">
        <image-button
          :src="require('@/assets/img/mobile/aboutus_ourteam.png')"
          label="OUR TEAM"
          @click.native="ourTeamHandle"
        />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <image-button
          :src="require('@/assets/img/mobile/aboutus_service.png')"
          label="SERVICE"
          @click.native="serviceHandle"
        />
      </el-col>
      <el-col :span="12">
        <image-button
          :src="require('@/assets/img/mobile/aboutus_membership.png')"
          label="MEMBERSHIP"
          @click.native="membershipHandle"
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
    introductionHandle () {
      this.$router.push({
        path: '/introduction'
      })
    },
    ourTeamHandle () {
      this.$router.push({
        path: '/ourTeam'
      })
    },
    serviceHandle () {
      this.$router.push({
        path: '/service'
      })
    },
    membershipHandle () {
      this.$router.push({
        path: '/membership'
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.about-us {
  width:836px;
  margin: 0 auto;
  padding-top: 24px;
  .el-col {
    padding-top: 10px;
    padding-bottom: 10px;
  }
}
</style>
