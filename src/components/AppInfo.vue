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
  <li>
    <a class="border-0 text-capitalize" aria-current="page" href="#">{{
      item
    }}</a>
  </li>
</template>

<style lang="scss" scoped>
a {
  color: white;
}
</style>
