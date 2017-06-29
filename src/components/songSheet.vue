<template>
	<div class="s_songSheet">
		<div class="s_songSheet_title">
			<span class="s_songSheet_title_big">{{songSheetList.title}}</span>
			<span class="s_songSheet_title_small">{{songSheetList.more}}</span>
		</div>
		<div class="s_songSheet_container">
			<div class="s_songSheet_item" v-for="item in songSheetList.list">
				<div class="s_songSheet_item_box">
					<img :src="item.img">
					<div class="s_songSheet_item_count">
						<i class="iconfont s-headset">{{item.count}}</i>
					</div>
					<div class="s_songSheet_item_more"></div>
				</div>
				<div class="s_songSheet_item_discribe">
					<span>{{item.discribe}}</span>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script type="text/javascript">

import { mapGetters, mapActions } from 'vuex';

export default {
	name: 'songSheet',

	computed: mapGetters({
  		songSheetList: 'songSheetList'
	}),

	created() {
		// console.log(this.songSheetList)
	}

}

</script>

<style>
.s_songSheet{
	
}

.s_songSheet_title{
	line-height: 30px;
	border-bottom: 1px solid #202226;
	overflow: hidden;
}

.s_songSheet_title_big{
	font-size: 14px;
	float: left;
	color: white;
}

.s_songSheet_title_small{
	font-size: 12px;
	float: right;
	cursor: pointer;
	color: rgba(255, 255, 255, 0.5);
}

.s_songSheet_title_small:hover{
	color: rgba(255, 255, 255, 1);
}

.s_songSheet_container{
	overflow: hidden;
}

.s_songSheet_item{
	float: left;
	padding: 10px;
	width: 25%;
	box-sizing: border-box;

}

.s_songSheet_item_box{
	position: relative;
	width: 100%;
	height: 0;
	padding-top:100%;
	cursor: pointer;
	overflow: hidden;
}

.s_songSheet_item_box > img{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: white;
}

.s_songSheet_item_box .s_songSheet_item_count{
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.5);
	text-align: right;
	padding: 0 10px;
	color: white;
}

.s_songSheet_item_box .s_songSheet_item_more{
	position: absolute;
	top: -40px;
	left: 0;
	width: 100%;
	height: 40px;
	background-color: rgba(0, 0, 0, 0.5);
	-webkit-transition: top 0.5s;
}

.s_songSheet_item_box .s_songSheet_item_more_show{
	top: 0;
}

/*.s_songSheet_item_discribe{
	
}*/

.s_songSheet_item_discribe > span{
	display: block;
	text-align: left;
	height: 40px;
	line-height: 20px;
	color: white;
	padding: 5px 0;
}

</style>