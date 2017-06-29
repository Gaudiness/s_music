<template>
  <div class="s_mune">
    <div v-for="item in menuList">
      <mList :params.sync="item"></mList>
    </div>
  </div>
</template>

<script>

import mList from '@/components/m_list';

export default {
  name: 'smune',

  props: ['menuList'],

  components:{ mList },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.s_mune{
	width: 100%;
  height: 100%;

}
</style>
