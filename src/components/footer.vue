<template>
  <div class="s_footer">
    <div class="s_control">
      <span class="iconfont s-prev s_btn_small"></span>
      <span class="iconfont s-puase s_btn_big"></span>
      <span class="iconfont s-next s_btn_small"></span>
    </div>
    <div class="s_progress">
      <div class="s_time_current">{{currentSong.startTime}}</div>
      <div class="s_time_progress">
        <div class="s_progress_contaier">
          <template v-for="item in currentSong.timeLong">
            <div :style="{ width: currentSong.length }" :class="{ active: item <= currentSong.currentPoint }"></div>
          </template>
        </div>
        <div class="s_progress_btn" :style="{ left: currentSong.currentPosition }">
          <i></i>
          <span class="iconfont s-round"></span>
        </div>
      </div>
      <div class="s_time_total">{{currentSong.endTime}}</div>
    </div>
    <div class="s_vol"></div>
    <div class="s_round_type"></div>
    <audio></audio>
  </div>

</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'sfooter',

  props: ['musicList', 'currentSong', 'suspend' ],

  methods: {
    setCurrentSong(){
      this.$store.dispatch('setCurrentSong');
    }
  },

  mounted (){
    this.$store.dispatch('setCurrentSong');
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.s_footer{
	width: 100%;
	height: 45px;
  line-height: 43px;
	background-color: #232326;
  overflow: hidden;
	box-sizing: border-box;
}

.s_control,
.s_progress,
.s_vol,
.s_round_type{
  float: left;
  height: 100%;
}


.s_control{
  width: 200px;
}

.s_btn_small,
.s_btn_big{
  display: inline-block;
  border: 1px solid #666;
  border-radius: 50%;
  color: white;
  text-align: center;
  cursor: pointer;
  vertical-align: middle;
}

.s_btn_small:hover,
.s_btn_big:hover{
  border-color: #999;
}

.s_btn_small{
  width: 25px;
  height: 25px;
  line-height: 25px;
  font-size: 12px;
}

.s_btn_big{
  width: 35px;
  height: 35px;
  line-height: 35px;
  font-size: 14px;
  margin: 0 15px;
}

.s_progress{
  width: 500px; 
  color: #D2D3DA;
  overflow: hidden;
}

.s_progress .s_time_current,
.s_progress .s_time_progress,
.s_progress .s_time_total{
  float: left;
  height: 100%;
}

.s_progress .s_time_current,
.s_progress .s_time_total{
  font-size: 12px;
  width: 50px;
}

.s_progress .s_time_progress{
  position: relative;
  margin-top: 19px;
  width: 400px;
  height: 4px;
  background-color: #454546;
  border-radius: 3px;
}

.s_progress_btn{
  position: relative;
  top: -7px;
  width: 13px;
  height: 13px;
}

.s_progress .s_time_progress .s-round{
  position: absolute;
  left: -1px;
  top: -16px;
}

.s_progress_btn > i{
  position: absolute;
  left: 3px;
  top: 1px;
  width: 8px;
  height: 8px;
  background-color: #B82525;
}

.s_progress_contaier{
  height: 100%;
  overflow: hidden;
}

.s_progress_contaier > div{
  float: left;
  height: 100%;
}

.s_progress_contaier > div:first-child{
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}

.s_progress_contaier > div:last-child{
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}


.s_progress_contaier .active{
  background-color: #B82525;
}

.s_vol{
  width: 150px;
}

.s_round_type{
  width: 50px;
 
}
</style>