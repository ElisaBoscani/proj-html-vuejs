<script>
export default {
  name: "AppInfo",
  props: {
    item: String,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <li class="">
    <a
      class="border-0 text-white fs-3 text-capitalize fw-medium lh-lg active"
      aria-current="page"
      href="#"
      >{{ item }}</a
    >
  </li>
</template>

<style lang="scss" scoped></style>
