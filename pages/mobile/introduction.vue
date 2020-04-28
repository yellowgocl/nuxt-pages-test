<template>
  <div class="introduction">
    <div class="scroll-content">
      <el-scrollbar style="height:100%; width:100%;">
        <span class="inner-text primary-color">
          Empress Spa was founded in 2013 and recently established its first in 2020. Empress Spa focus and pursuit the service, integrity and excellence for the beauty industry. Empress Spa main focus is high quality service, fully certified professionals. We are able to say that we are the best in the industry to provide the most professional beauty services in our care.<br />
          <br />Again we would love to say thank you for your visit. Relax, Refresh, Renew, Remember and Rejuvenat!.<br />
          <br />Surrender your body to complete relaxation with our unique spa treatments and balancing therapies honoring global traditions. Cleanse, refresh, restore and balance your body through medium pressured relaxation massages, facials and body treatments.<br />
          <br />Geothermal bathing in our Spa is included with all treatments. We recommend bathing prior to your treatment to enjoy deeper benefits, eliminate body toxins, promote healthy skin and feel the therapeutic results more deeply. Connect with yourself and nature in the company of others. Immerse yourself in natural thermal mineral waters which flow from deep underground into pools and private baths at Peninsula Hot Springs. Awaken your senses and nourish your soul in nature.<br />
          <br />“Small steaming spas hidden around tree-lined corners, in caves and up stone steps mean you can easily find yourself in a world of your own with only the sound of nearby frogs to accompany you.”<br />
          <br />Relax, Refresh Renew, Remember and Rejuvenate!.
        </span>
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
.introduction {
  .scroll-content {
    height: 525px;
    .inner-text {
      padding: 46px;
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
