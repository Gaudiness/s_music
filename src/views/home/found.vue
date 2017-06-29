<template>
  <div class="s_found">
    <tabs></tabs>
    <carousel></carousel>
    <songSheet></songSheet>
  </div>
</template>

<script>

import tabs from '@/components/tabs';
import carousel from '@/components/carousel';
import songSheet from '@/components/songSheet';
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'found',
  components:{ tabs, carousel, songSheet },
  coputed: mapGetters({
  	tabList: 'tabList'
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.s_found{
	/*padding: 0 20px;*/
}
</style>