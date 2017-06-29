<template>
  <div>
  	<div class="s_header">
    	<sheader></sheader>
    </div>
    <div class="s_body">
    	<div class="s_menu">
  			<smenu :menuList="menuList"></smenu>
    	</div>
    	<div class="s_iframe">
    		<router-view></router-view>
    	</div>
    </div>
    <div class="s_footer">
    	<sfooter :currentSong="currentSong"></sfooter>
    </div>
  </div>
</template>

<script>

import sheader from '@/components/header';
import sfooter from '@/components/footer';
import smenu from '@/components/menu';
import scontrol from '@/components/control'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'home',
  
  data(){
    return{
      msg: '00:00'
    }
  },

  components: { sheader, sfooter, smenu },
  
  computed: mapGetters({
    menuList: 'menuList',
    musicList: 'musicList',
    currentSong: 'currentSong',
    suspend: 'suspend',
  }),

  methods: {
    
  },

  mounted () {
    console.log()
  },

  created () {
    // console.log(this.menuList);
    // this.$store.dispatch('getAllProducts')
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.s_header,
.s_body,
.s_footer{
	position: absolute;
}

.s_header{
	top: 0;
	width: 100%;
	height: 40px;
}

.s_body{
	top: 40px;
	left: 0;
	right: 0;
	bottom: 45px;
	overflow: hidden;
}

.s_body .s_menu,
.s_body .s_iframe{
	float: left;
  overflow: auto;
}

.s_body .s_menu{
	height: 100%;
	width: 200px;
  background-color: #191B1F;
	border-right: 1px solid #23262C;
  box-sizing: border-box;
}

.s_body .s_iframe{
	height: 100%;
	width: 800px;
	border: none;
	padding: 0 20px;
	margin: 0;
  box-sizing: border-box;
	background-color: #16181C;
}

.s_footer{
	bottom: 0;
	width: 100%;
	height: 45px;
}

::-webkit-scrollbar{width:5px;height:5px;border-radius:50%;}
::-webkit-scrollbar-track{background-color:#16181C;}
::-webkit-scrollbar-thumb{background-color:#2C2E32;}
::-webkit-scrollbar-thumb:hover {background-color:#2C2E32}
::-webkit-scrollbar-thumb:active {background-color:#2C2E32}

</style>