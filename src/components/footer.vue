<template>
  <div class="s_footer">
    <div class="s_current_music">
      <img src="../views/images/list1.jpg" class="">
      <div class="s_music_detail">
        <div>动物世界动物世界动物世界动物世界</div>
        <div>薛之谦</div>
      </div>
    </div>
    <div class="s_control">
      <span class="iconfont s-prev s_btn_small"></span>
      <span class="iconfont s_btn_big" @click="musicControl" :class="{ 's-go': suspend, 's-puase': !suspend }"></span>
      <span class="iconfont s-next s_btn_small"></span>
    </div>
    <div class="s_progress">
      <div class="s_time_current">{{currentSong.startTime}}</div>
      <div class="s_time_progress">
        <div class="s_progress_contaier">
          <template v-for="item in currentSong.timeLong">
            <div @click="setTimeProgress(item)" :style="{ width: currentSong.length }" :class="{ active: item <= currentSong.currentPoint }"></div>
          </template>
        </div>
        <div class="s_progress_btn" :style="{ left: currentSong.currentPosition }" @click="posDrag">
          <i></i>
          <span class="iconfont s-round"></span>
        </div>
      </div>
      <div class="s_time_total">{{currentSong.endTime}}</div>
    </div>
    <!-- <div class="s_vol">
      <div class="s_vol_container"></div>
      <div></div>
    </div> -->
    <div class="s_round_type"></div>
    <audio></audio>
  </div>

</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'sfooter',

  data(){
    return{
      interval: null
    }
  },

  props: ['musicList', 'currentSong', 'suspend' ],

  methods: {
    setCurrentSong(){
      this.$store.dispatch('setCurrentSong');
    },

    setTimeProgress(item){
      this.$store.dispatch('setTimeProgress', item);
    },

    musicControl(){
      var _this = this;
      if(!this.interval){
        this.interval = setInterval(function(){
          _this.$store.dispatch('setCurntPos');
          if(_this.currentSong.currentPoint >= _this.currentSong.timeLong){
            clearInterval(_this.interval);
            _this.interval = null;
            _this.$store.dispatch('musicControl');
          }
        }, 1000);
      }

      if(!this.suspend){
        clearInterval(this.interval);
        this.interval = null;
      }

      this.$store.dispatch('musicControl');
    },

    posDrag(){
      this.$store.dispatch('posDrag');
    },



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

.s_current_music,
.s_control,
.s_progress,
.s_vol,
.s_round_type{
  float: left;
  height: 100%;
}

.s_current_music{
  width: 200px;
  overflow: hidden;
  background-color: #191B1F;
  border-right: 1px solid #23262C;
  box-sizing: border-box;
}

.s_current_music > img,
.s_current_music .s_music_detail{
  float: left;
}

.s_current_music > img{
  width: 45px;
  height: 45px;
  border: none;
}

.s_current_music .s_music_detail{
  font-size: 12px;
  color: white;
  width: 154px;
  padding: 5px 10px;
  box-sizing: border-box;
}

.s_current_music .s_music_detail > div{
  width: 135px;
  line-height: 18px; 
  text-align: left;
  white-space:nowrap;
  overflow:hidden; 
  text-overflow:ellipsis;
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

}

.s_progress_btn{
  position: relative;
  top: -7px;
  width: 13px;
  height: 13px;
  cursor: pointer;
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
  border-radius: 3px;
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