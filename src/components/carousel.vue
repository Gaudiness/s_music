<template>
  <div class="s_carousel">
  	<div class="s_carousel_container">
  	<!-- s_carousel_center s_carousel_left s_carousel_right s_carousel_back -->
	  	<div class="s_carousel_item" v-for="item in carouselList.list" :class="item.pos">
	    	<img :src="item.src">
	    	<div></div>
	    </div>
    </div>
    <div class="s_carousel_footer">
    	<span class="s_carousel_trun" v-for="item in carouselList.list" :class="{s_carousel_trun_selected: item.selected}" @mouseover="mouseover(item)"></span>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'carousel',

  computed: mapGetters({
    carouselList: 'carouselList'
  }),

  methods: {
  	mouseover(item){
  		this.$store.dispatch('changeCarouselSelected', item);
  	},

  	carouselStart(){
  		var _this = this,
  				list = _this.carouselList.list,
  				center;

  		if(!window.interval){
	  		window.interval = setInterval(function(){
	  			list.forEach(function(item, index){
	  				if(item.pos === 's_carousel_center'){
	  					center = index + 1
	  					if(index + 1 >= 4)
	  						center = index + 1 - 4;
	  				}
	  			});
	  			_this.$store.dispatch('changeCarouselSelected', list[center]);	
	  		}, 4000);
  		}
  	}
  },

 	mounted () {

  },

  created () {

 		this.carouselStart();
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.s_carousel{
	width: 100%;
	padding: 15px 0;
}

.s_carousel_container{
	position: relative;
	height: 200px;
}

.s_carousel_item{
	position: absolute;
	width: 540px;
	height: 100%;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	-webkit-transition: width 0.5s, height 0.5s, left 0.5s, right 0.5s;

}

.s_carousel_item > div{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.3);
}

.s_carousel_item > img{
	width: 100%;
	height: 100%;
}

.s_carousel_left,
.s_carousel_right{
	z-index: 2;
	width: 500px;
	height: 185px;
}

.s_carousel_center,
.s_carousel_back{
	
}

.s_carousel_left{
	/*left: 0;*/
	left: -260px;
}

.s_carousel_right{
	/*right: 0;*/
	right: -260px;
}

.s_carousel_center{
	z-index: 3;
}

.s_carousel_center > div{
	background-color: transparent;
}

.s_carousel_back{
	z-index: 1;
	width: 460px;
	height: 170px;
}

.s_carousel_footer .s_carousel_trun{
	cursor: pointer;
	display: inline-block;
	width: 20px;
	height: 3px;
	border-radius: 3px;
	margin: 0 5px;
	background-color: rgba(255, 255, 255, 0.3);
}

.s_carousel_footer .s_carousel_trun_selected,
.s_carousel_footer .s_carousel_trun:hover{
	background-color: rgba(255, 255, 255, 0.7);
}

</style>