<template>
  <div class="playing">
    <div class="playing_left">
    	<div>
    		<img src="">
    	</div>
    	<div class="">
    		
    	</div>
    </div>
    <div class="playing_right">
    	<div class="playing_title"></div>
    	<div class="playing_subTitle"></div>
    	<div class="playing_lrc">
    		<div v-for="item in playingInfo.lrc">{{item}}</div>
    	</div>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'playing',
  
  computed: mapGetters({
  	playingInfo: 'playingInfo',
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.playing{
	position: relative;
	/*width: 800px;*/
	margin: 20 auto;
	overflow: hidden;
}

.playing_left,
.playing_right{
	float: left;
	width: 50%;
	height: 400px;
	/*border: 1px solid #ddd;*/
	box-sizing: border-box;
	overflow: auto;
	text-align: left;
}

/*.playing_left{
	width: 40%;
}

.playing_right{
	width: 60%;
}*/
</style>