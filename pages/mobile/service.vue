<template>
  <div class="service">
    <div class="scroll-content">
      <el-scrollbar style="height:100%; width:100%;">
        <el-row>
          <el-col :span="12">
            <image-button
              :src="require('@/assets/img/mobile/service_nailservices.png')"
              label="NAIL SERVICE"
            />
          </el-col>
          <el-col :span="12">
            <image-button
              :src="require('@/assets/img/mobile/service_haircut.png')"
              label="HAIR CUT"
            />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <image-button
              :src="require('@/assets/img/mobile/service_laser.png')"
              label="LASER"
            />
          </el-col>
          <el-col :span="12">
            <image-button
              :src="require('@/assets/img/mobile/service_waxing.png')"
              label="WAXING"
            />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <image-button
              :src="require('@/assets/img/mobile/service_spraytan.png')"
              label="SPRAY TAN"
            />
          </el-col>
          <el-col :span="12">
            <image-button
              :src="require('@/assets/img/mobile/service_beautyservices.png')"
              label="BEAUTY SERVICES"
            />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <image-button
              :src="require('@/assets/img/mobile/service_hifu.png')"
              label="HIFU"
            />
          </el-col>
          <el-col :span="12">
            <image-button
              :src="require('@/assets/img/mobile/service_facials.png')"
              label="FACIALS"
            />
          </el-col>
        </el-row>
      </el-scrollbar>
    </div>
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
      console.log('introductionHandle')
    },
    ourTeamHandle () {
      console.log('ourTeamHandle')
    },
    serviceHandle () {
      console.log('serviceHandle')
    },
    membershipHandle () {
      console.log('membershipHandle')
    }
  }
}
</script>
<style lang='scss' scoped>
.service {
  .scroll-content {
    height: 525px;
    width:842px;
    margin: 0 auto;
    padding-top:24px;
    padding-bottom:16px;
    .el-col {
      padding-top: 6px;
      padding-bottom: 6px;
    }
    .el-scrollbar__wrap {
      overflow-x: hidden;
    }
  }
}
</style>
