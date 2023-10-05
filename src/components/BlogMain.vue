<script>
export default {
  name: "BlogMain",
  data() {
    return {};
  },
};
</script>
<template>
  <section class="blog pt-5">
    <div
      class="d-flex flex-column justify-content-center align-items-center py-5"
    >
      <span>Tales from the barber shop</span>
      <h2>Recent Blog Post</h2>
    </div>
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3">
        <div class="col d-flex flex-column align-items-center gap-3">
          <img
            src="../assets/img/avadabarbers-second-blog-320x202.jpg"
            alt=""
          />
          <h3 class="text-center">Avada Barbers Now Open</h3>
          <p class="text-center fw-light lh-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos hic
            quae delectus ipsum maxime quis quod!
          </p>
        </div>

        <div class="col d-flex flex-column align-items-center gap-3">
          <img
            src="../assets/img/avadabarbers-choosing-blog-320x202.jpg"
            alt=""
          />
          <h3>Choosing The Right Barber</h3>
          <p class="text-center fw-light lh-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos hic
            quae delectus ipsum maxime quis quod!
          </p>
        </div>
        <div class="col d-flex flex-column align-items-center gap-3">
          <img
            src="../assets/img/avadabarbers-ourservice-blog-320x202.jpg"
            alt=""
          />
          <h3>Quick Service Guide</h3>
          <p class="text-center fw-light lh-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos hic
            quae delectus ipsum maxime quis quod!
          </p>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center p-2">
      <a href="#">Read more our blog</a>
    </div>
  </section>
</template>
