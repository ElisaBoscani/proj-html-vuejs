<script>
export default {
  name: "ReviewsMain",
  data() {
    return {};
  },
};
</script>

<template>
  <section class="py-4 reviews">
    <div class="d-flex flex-column align-items-center">
      <span class="text-uppercase">What people say</span>
      <h2>Reviews</h2>
    </div>
    <div class="container pt-4">
      <div class="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3">
        <div class="col d-flex flex-column align-items-center gap-3">
          <p class="text-center lh-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ipsam
            autem optio ad blanditiis inventore eius facere aspernatur
            exercitationem cumque.
          </p>
          <img
            src="../assets/img/avadabarbers-trimcut-gallery6-200x200.jpg"
            alt="John Doe"
            class="square"
          />
          <span>John Doe</span>
        </div>
        <div class="col d-flex flex-column align-items-center gap-3">
          <p class="text-center lh-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ipsam
            autem optio ad blanditiis inventore eius facere aspernatur
            exercitationem cumque.
          </p>
          <img
            src="../assets/img/avadabarbers-trimcut-gallery7-200x201.jpg"
            alt="pete jones"
            class="square"
          />
          <span>Pete Jones</span>
        </div>
        <div class="col d-flex flex-column align-items-center gap-3">
          <p class="text-center fw-light lh-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ipsam
            autem optio ad blanditiis inventore eius facere aspernatur
            exercitationem cumque.
          </p>
          <img
            src="../assets/img/avadabarbers-trimcut-gallery3-200x201.jpg"
            alt="Mark Wilson"
            class="square"
          />
          <span>Mark Wilson</span>
        </div>
      </div>
    </div>
  </section>
</template>
