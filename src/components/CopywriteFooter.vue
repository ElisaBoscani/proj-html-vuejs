<script>
import data from "../data/data.js";
import AppInfo from "./AppInfo.vue";
export default {
  name: "CopywriteFooter",
  data() {
    return {
      data,
    };
  },
  components: {
    AppInfo,
  },
};
</script>
<template>
  <section class="copy">
    <ul class="d-flex justify-content-center">
      <AppInfo :item="item" v-for="item in data.linkCopywrite"></AppInfo>
    </ul>
  </section>
</template>
<style lang="scss" scoped>
@use "../src/scss/variables" as *;
</style>
