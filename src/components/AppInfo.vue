<script>
export default {
  name: "AppInfo",
  props: {
    item: String,
  },
  data() {
    return {
      contactor: 0,
    };
  },
};
</script>

<template>
  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">{{ item }}</a>
    </li>
  </ul>
</template>
