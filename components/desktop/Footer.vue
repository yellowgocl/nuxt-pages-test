<template>
  <div class="footer em-container">
    <el-divider class="ma-0" />
    <!-- <el-row type="flex" align="middle" class="em-content">
      <el-col :span="4">
        <div>
          <el-image :src="require('@/assets/img/desktop/app_logo.png')" />
        </div>
      </el-col>
      <el-col :span="20">
        <div class="list d-f justify-space-between" style="max-width: 1132px;">
          <template v-for="item in listData">
            <div :key="item.label">
              <p class="item-label primary-color">{{ item.label }}</p>
              <template v-for="subItem in item.sub">
                <p :key="subItem.lebel" class="primary-color">
                  {{ subItem.label }}
                </p>
              </template>
            </div>
          </template>
        </div>
      </el-col>
    </el-row> -->
    <div class="em-content d-f justify-space-between align-items-center" style="padding-top:30px;padding-bottom:29px;">
      <div>
        <el-image :src="require('@/assets/img/desktop/app_logo.png')" />
      </div>
      <div class="list d-f justify-space-between" style="width: 1132px;">
        <template v-for="item in listData">
          <div :key="item.label">
            <p class="item-label primary-color">{{ item.label }}</p>
            <template v-for="subItem in item.sub">
              <p :key="subItem.lebel" class="primary-color">
                {{ subItem.label }}
              </p>
            </template>
          </div>
        </template>
      </div>
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
      listData: [
        {
          label: 'SEVICE',
          sub: [
            {
              label: 'Nail Services',
              href: ''
            },
            {
              label: 'Hair Cut',
              href: ''
            },
            {
              label: 'Laser',
              href: ''
            },
            {
              label: 'Spray Tan',
              href: ''
            },
            {
              label: 'Beauty Services',
              href: ''
            }
          ]
        },
        {
          label: 'MEMBERSHIP',
          sub: [
            {
              label: 'Go To Member Center',
              href: ''
            }
          ]
        },
        {
          label: 'OURTEAM',
          sub: [
            {
              label: 'Nail',
              href: ''
            },
            {
              label: 'Hair Cut',
              href: ''
            },
            {
              label: 'Laser',
              href: ''
            }
          ]
        },
        {
          label: 'PRODUCTS',
          sub: [
            {
              label: 'Nail',
              href: ''
            },
            {
              label: 'Oil',
              href: ''
            },
            {
              label: 'Lotion',
              href: ''
            }
          ]
        },
        {
          label: 'INFOMATION',
          sub: [
            {
              label: 'About Us',
              href: ''
            },
            {
              label: 'Location',
              href: ''
            },
            {
              label: 'Contact Us',
              href: ''
            }
          ]
        },
        {
          label: 'ENTRY',
          sub: [
            {
              label: 'Booking Info',
              href: ''
            }
          ]
        }
      ]
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
.footer {
  min-height: 300px;
  .list {
    .item-label {
      font-family: 'BellMTBold';
      font-size: 20px;
    }
  }
}
</style>
