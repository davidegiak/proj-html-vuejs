<script>
import AppContentSec1 from './AppContentSec1.vue';
import AppContentSec2 from './AppContentSec2.vue';
import AppContentSec3 from './AppContentSec3.vue';


export default {
  components: {
    AppContentSec1,
    AppContentSec2,
    AppContentSec3,
  },
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {

  }


}
</script>


<template>
  <div class="my-bg-white black ">
    <main class="myContainer">
        <AppContentSec1 />
        <AppContentSec2 />
        <AppContentSec3 class="pt-5" />
    </main>
  </div>
</template>


<style scoped>
.myContainer {
  width: 1200px;
  margin: 0 auto;
}
</style>
