<template>
  <div class="m_list">
    <div class="m_list_title">{{ params.title }}</div>
    <ul class="m_list_ul">
      <li v-for="item in params.list" @click="changeSelected(item)">
        <router-link :to="item.path" :class="{li_selected: item.selected}">
          <i class="iconfont" :class="item.icon"></i>
          <span>{{item.value}}</span>
        </router-link>
      </li>
      
    </ul>
  </div>
</template>

<script>
export default {
  name: 'mList',
  
  props: ['params'],

  methods: {
    changeSelected(item){
      this.$store.dispatch('changeSelected', item);
    }
  },

  mounted () {

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
}

.m_list{
	width: 100%;
  line-height: 30px;
}

.m_list .m_list_title {
  padding: 0 10px;
}

.m_list .m_list_title,
.m_list .m_list_ul{
  font-size: 14px;
  text-align: left;
  color: rgba(255, 255, 255, 0.5);
}

.m_list .m_list_ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.m_list .m_list_ul a{
  display: block;
  cursor: pointer;
  padding: 0 10px 0 20px;
  border-left: 3px solid transparent;
}

.m_list .m_list_ul a:hover *,
.li_selected *{
  color: rgba(255, 255, 255, 1);
}

.li_selected{
  border-left: 3px solid #B82525!important;
  background-color: #26282C;
}


</style>