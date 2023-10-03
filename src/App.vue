<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AppHeader from "./components/AppHeader.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    FontAwesomeIcon,
    AppHeader,
  },
};
</script>

<template>
  <AppHeader></AppHeader>
</template>

<style lang="scss" scoped></style>
