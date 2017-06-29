<template>
  <div class="s_header">
  	<div class="s_header_logo">
    	<i class="iconfont s-logo"></i>
    	<span>网易云音乐</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sheader',
  data () {
    return {
      msg: 'sheader'
    }
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.s_header{
	width: 100%;
	height: 40px;
	background-color: #232326;
	border-bottom: 2px solid #710909;
	box-sizing: border-box;
}

.s_header .s_header_logo{
	/*width: 200px;*/
	display: inline-block;
	float: left;
	line-height: 40px;
	text-align: left;
	color: white;
	padding: 0 10px;
	cursor: pointer;
}

.s_header .s_header_logo > i{
	font-size: 26px;
  font-weight: 900;
  display: inline-block;
  height: 43px;
}

.s_header .s_header_logo > i,
.s_header .s_header_logo > span{
	vertical-align: middle;
}

</style>
