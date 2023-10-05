<script>
export default {
  name: "Bnt",
  props: {
    card: Object,
  },
};
</script>
<template>
  <div class="col">
    <img :src="card.img" alt="" />
    <div>
      <a href="#" class="hover_bnt">{{ card.text }}</a>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
