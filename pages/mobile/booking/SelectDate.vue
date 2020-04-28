<template>
  <div class="select-date pa-3">
    <span class="title primary-color">
      3. Select The Date
    </span>
    <el-row type="flex" class="inner-content" justify="space-between">
      <div class="calendar-content">
        <el-calendar v-model="selectedDay" first-day-of-week="7" />
      </div>
      <div class="timing-content">
        <template v-for="(value, key) in timingList">
          <div :key="key" class="pb-3">
            <span class="timing-title primary-color px-2">{{ key }}</span>
            <div>
              <el-button v-for="(item, i) in value" :key="i" class="em-m-button ma-2">
                {{ item.label }}
              </el-button>
            </div>
          </div>
        </template>
      </div>
    </el-row>
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
      selectedDay: '',
      selectedTime: '',
      timingList: {
        AM: [
          {
            label: '9:00',
            value: '9:00'
          },
          {
            label: '9:30',
            value: '9:30'
          },
          {
            label: '10:00',
            value: '10:00'
          },
          {
            label: '10:30',
            value: '10:30'
          },
          {
            label: '11:00',
            value: '11:00'
          },
          {
            label: '11:30',
            value: '11:30'
          },
          {
            label: '12:00',
            value: '12:00'
          },
          {
            label: '12:30',
            value: '12:30'
          }
        ],
        PM: [
          {
            label: '13:00',
            value: '13:00'
          },
          {
            label: '14:00',
            value: '14:00'
          },
          {
            label: '15:00',
            value: '15:00'
          },
          {
            label: '16:00',
            value: '16:00'
          },
          {
            label: '17:00',
            value: '17:00'
          },
          {
            label: '18:00',
            value: '18:00'
          }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  mounted () { },
  created () { },
  methods: {}
}
</script>
<style lang='scss'>
.select-date {
  .title {
    font-size: 35px;
  }
  .calendar-content {
    width: 367px;
    height: 314px;
    display: inline-block;
    .el-calendar {
      background-color: #806b41;
      .is-selected {
        background: none;
        color: #1989FA;
      }
      .el-calendar__header {
        border: none;
        .el-calendar__title {
          color: #fff;
        }
      }
      .el-calendar__body {
        padding: 0;
        .el-calendar-table {
          thead {
            height: 32px;
            background-image: linear-gradient(to bottom, #927f50, #b2a36b);
            th {
              color: #fff;
              padding: 0;
              line-height: 32px;
            }
          }
          tbody {
            background-color: #fff;
          }
          .el-calendar-day {
            &:hover {
              background: none;
            }
            height: 40px;
            padding: 0;
            span {
              line-height: 40px;
              display: block;
              text-align: center;
            }
          }
        }
      }
    }
  }
  .timing-content {
    width:515px;
    .em-m-button {
      width: 111px;
    }
  }
}
</style>
