<template>
  <div class="main-menu em-container">
    <div class="em-content">
      <el-menu
        mode="horizontal"
        class="menu d-f justify-space-between align-items-center"
        router
      >
        <el-menu-item
          v-for="(item, i) in menuData"
          :key="i"
          class="pt-1"
          :class="{'logo': item.type === 'image'}"
          style="min-width: 150px; text-align: center;"
          :index="item.href"
        >
          <template v-if="item.type === 'button'">
            {{ item.label }}
          </template>
          <template v-else-if="item.type === 'image'">
            <el-image :src="require('@/assets/img/desktop/app_logo.png')" />
          </template>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  mixins: [],
  props: {
  },
  data () {
    return {
      menuData: [
        {
          label: 'SERVICE',
          href: '/service',
          img: '',
          type: 'button'
        },
        {
          label: 'MEMBERSHIP',
          href: '/membership',
          img: '',
          type: 'button'
        },
        {
          label: 'OURTEAM',
          href: '/ourteam',
          img: '',
          type: 'button'
        },
        {
          label: 'INDEX',
          href: '/home',
          img: '',
          type: 'image'
        },
        {
          label: 'PRODUCTS',
          href: '/produces',
          img: '',
          type: 'button'
        },
        {
          label: 'INFOMATION',
          href: '/infomation',
          img: '',
          type: 'button'
        },
        {
          label: 'ENTRY',
          href: '/entry',
          img: '',
          type: 'button'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  mounted () { },
  created () { },
  methods: {
    handle (item) {
      console.log()
    }
  }
}
</script>
<style lang='scss' scoped>
.main-menu {
  height: 240px;
  .menu {
    background: none;
    width: 100%;
    border-bottom: none;
    .logo {
      height: auto;
    }
  }
}
</style>
