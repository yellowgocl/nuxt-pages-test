<template>
  <div class="menber-payment">
    <div class="table-content">
      <el-table
        :data="bookingData"
        :border="false"
        :header-row-class-name="'el-table-header-row'"
        :row-class-name="tableRowClassName"
        tooltip-effect="dark"
        height="457"
      >
        <template v-for="(item, i) in propConfig">
          <el-table-column
            v-if="item.label!=='EDIT'"
            :key="i"
            header-align="center"
            align="center"
            :prop="item.prop"
            :label="item.label"
            width="186"
          />
          <el-table-column
            v-else
            :key="i"
            header-align="center"
            align="center"
            :label="item.label"
            width="186"
          >
            <template slot-scope="scope">
              <a v-if="scope.row.state!=='Canceled'" @click.prevent="handleClick(scope.row)">{{ scope.row['edit'].label }}</a>
            </template>
          </el-table-column>
        </template>
      </el-table>
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
      propConfig: [
        {
          prop: 'date',
          label: 'DATE'
        },
        {
          prop: 'staff',
          label: 'STAFF'
        },
        {
          prop: 'service',
          label: 'SERVICE'
        },
        {
          prop: 'state',
          label: 'STATE'
        },
        {
          prop: 'edit',
          label: 'EDIT'
        }
      ],
      bookingData: [
        {
          date: '2019 1010-10:30',
          staff: 'Mia',
          service: 'Laser',
          state: 'Finished',
          edit: {
            label: 'Reviews',
            href: ''
          }
        },
        {
          date: '2019 1010-10:30',
          staff: 'Mia',
          service: 'Laser',
          state: 'Canceled',
          edit: {
            label: 'Reviews',
            href: ''
          }
        },
        {
          date: '2019 1010-10:30',
          staff: 'Mia',
          service: 'Laser',
          state: 'Finished',
          edit: {
            label: 'Reviews',
            href: ''
          }
        },
        {
          date: '2019 1010-10:30',
          staff: 'Mia',
          service: 'Laser',
          state: 'Finished',
          edit: {
            label: 'Reviews',
            href: ''
          }
        },
        {
          date: '2019 1010-10:30',
          staff: 'Mia',
          service: 'Laser',
          state: 'Finished',
          edit: {
            label: 'Reviews',
            href: ''
          }
        },
        {
          date: '2019 1010-10:30',
          staff: 'Mia',
          service: 'Laser',
          state: 'Finished',
          edit: {
            label: 'Reviews',
            href: ''
          }
        },
        {
          date: '2019 1010-10:30',
          staff: 'Mia',
          service: 'Laser',
          state: 'Finished',
          edit: {
            label: 'Reviews',
            href: ''
          }
        },
        {
          date: '2019 1010-10:30',
          staff: 'Mia',
          service: 'Laser',
          state: 'Finished',
          edit: {
            label: 'Reviews',
            href: ''
          }
        }
      ]
    }
  },
  computed: {},
  watch: {},
  mounted () { },
  created () { },
  methods: {
    tableRowClassName ({ row, rowIndex }) {
      return row.state === 'Canceled' ? 'canceled-row' : 'finished-row'
    },
    handleClick (row) {
      console.log(row)
    }
  }
}
</script>
<style lang='scss' scoped>
.menber-payment {
  .table-content {
    width: 100%;
    padding: 34px 47px;
  }
}
</style>
