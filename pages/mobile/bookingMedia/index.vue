<template>
  <div class="booking-media">
    <div class="button-content d-f justify-center my-5">
      <el-button class="mr-4 em-m-button" :class="{ 'is-active': selected === 'movie' }" @click="selectHandle('movie')">MOVIE</el-button>
      <el-button class="ml-4 em-m-button" :class="{ 'is-active': selected === 'music' }" @click="selectHandle('music')">MUSIC</el-button>
    </div>
    <div class="inner-content d-f justify-center">
      <div class="playback-content pr-3">
        <video-playback v-show="selected === 'movie'" />
        <music-playback v-show="selected === 'music'" />
      </div>
      <div class="list-content pl-3">
        <media-list :data="mediaData" />
      </div>
    </div>
    <back-button style="padding-top:47px;" />
  </div>
</template>
<script>
import VideoPlayback from './VideoPlayback'
import MusicPlayback from './MusicPlayback'
import MediaList from './MediaList'
import BackButton from '@/components/mobile/BackButton'
export default {
  components: {
    VideoPlayback,
    MusicPlayback,
    MediaList,
    BackButton
  },
  mixins: [],
  props: {
  },
  data () {
    return {
      selected: 'movie',
      movieData: [
        {
          label: '2018',
          data: [
            {
              img: '',
              href: ''
            },
            {
              img: '',
              href: ''
            },
            {
              img: '',
              href: ''
            }
          ]
        },
        {
          label: '2019',
          data: [
            {
              img: '',
              href: ''
            },
            {
              img: '',
              href: ''
            },
            {
              img: '',
              href: ''
            }
          ]
        }
      ],
      musicData: [
        {
          label: '2019',
          data: [
            {
              img: '',
              href: ''
            },
            {
              img: '',
              href: ''
            },
            {
              img: '',
              href: ''
            }
          ]
        },
        {
          label: '2020',
          data: [
            {
              img: '',
              href: ''
            },
            {
              img: '',
              href: ''
            },
            {
              img: '',
              href: ''
            }
          ]
        }
      ]
    }
  },
  computed: {
    mediaData () {
      return this.selected === 'movie' ? this.movieData : this.musicData
    }
  },
  watch: {},
  mounted () { },
  created () { },
  methods: {
    selectHandle (target) {
      this.selected = target
    }
  }
}
</script>
<style lang='scss' scoped>
.booking-media {
  .button-content {
    .el-button {
      &.active {
        color: #bfa471;
        background-color: #fff;
      }
      width: 195px;
      height: 44px;
      font-family: 'BellMTBold';
      font-size: 22px;
    }
  }
  .inner-content {
  }
}
</style>
