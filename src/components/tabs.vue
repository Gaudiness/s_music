<template>
  <div class="s_tabs">
  	<template v-for="tab in tabList">
    	<span :class="{s_tabs_selected:tab.selected}" @click="tabSelctedChange(tab)">{{ tab.value }}</span>
  	</template>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'tabs',
  computed: mapGetters({
    tabList: 'tabList'
  }),

  methods:{
  	tabSelctedChange(item){
  		this.$store.dispatch('changeTabSelected', item);
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.s_tabs{
	cursor: pointer;
	width: 100%;
	height: 40px;
	line-height: 40px;
	font-size: 14px;
	border-bottom: 1px solid #202226;
	
}

.s_tabs > span{
	margin: 0 10px;
	display: inline-block;
	height: 39px;
	line-height: 39px;
	padding: 0 15px;
	color: rgba(255, 255, 255, 0.5);
}

.s_tabs > span:hover,
.s_tabs_selected{
	color: rgba(255, 255, 255, 1)!important;
}

.s_tabs_selected{
	border-bottom: 2px solid white;
}

</style>