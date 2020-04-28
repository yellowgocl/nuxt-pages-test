<template>
  <div class="home">
    <el-carousel class="banner-panel" height="1080px">
      <el-carousel-item v-for="(item, i) in bannerList" :key="i">
        <el-image :src="item.src" />
      </el-carousel-item>
    </el-carousel>
    <div></div>
    <div class="hot-reviews-panel panel">
      <div class="title-content primary-color">
        <span>HOT REVIEWS</span>
      </div>
      <el-carousel
        class="carousel-content"
        :interval="4000"
        height="600px"
        type="card"
        :autoplay="false"
        indicator-position="outside"
      >
        <el-carousel-item v-for="(item, i) in hotList" :key="i">
          <div class="hot-reviews-item"></div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="popular-products-panel panel">
      <div class="title-content primary-color">
        <span>POPULAR PRODUCTS</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {},
  mixins: [],
  props: {},
  asyncData ({ params, error }) {
    return {}
  },
  data () {
    return {
      bannerList: [
        {
          src: require('@/assets/img/desktop/home_banner.jpg'),
          href: ''
        },
        {
          src: require('@/assets/img/desktop/home_banner.jpg'),
          href: ''
        },
        {
          src: require('@/assets/img/desktop/home_banner.jpg'),
          href: ''
        }
      ],
      hotList: []
    }
  },
  computed: {
    ...mapGetters(['token', 'info', 'isLogin']),
    email () {
      return this.info.email
    }
  },
  watch: {},
  async mounted () {
    if (this.isLogin) {
      const res = await this.$store.dispatch('ourTeam/getHotStaff', this.token)
      const { flag } = res
      if (flag) {
        this.hotList = res.data
      }
    }
  },
  created () {},
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.home {
  .panel {
    margin-bottom: 60px;
    .title-content {
      span {
        display: block;
        text-align: center;
        padding-top: 60px;
        padding-bottom: 44px;
        font-size: 60px;
      }
    }
  }
  .banner-panel{}
  .hot-reviews-panel{
    .carousel-content {
      width: 1400px;
      margin:0 auto;
      .hot-reviews-item {
        width: 700px;
        height: 486px;
        border-radius: 10px;
        background-image: linear-gradient(to bottom right, #e0c776, #8a7247);
      }
    }
  }
  .popular-products-panel{}
}
</style>
