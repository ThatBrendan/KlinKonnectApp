<template>
  <SearchCleaner />
  <div class="index-container row no-gutter">
    <div class="col-lg-6 col-12 first">
      <h2 class="h6">KLIN KONNECT</h2>
      <ul class="no-style">
        <li><span class="large">1</span> Schedule a service using our simple search system</li>
        <li><span class="large">2</span> Provide us information required for our attendance</li>
        <li>
          <span class="large">3</span> We do our job and make sure our work is satisfactory to you
        </li>
        <li><span class="large">4</span> We clean, you grin! Book us again for a spotless win!</li>
      </ul>
    </div>
    <div class="col-lg-6 col-12 second">
      <img src="../assets/asset2.jpg" alt="" />
    </div>
    <div class="col-lg-6 col-12 third">
      <img src="../assets/asset7.jpg" alt="" />
    </div>
    <div class="col-lg-6 col-12 fourth">
      Welcome to KLIN KONNECT, your trusted partner for hassle-free cleaning solutions! Our mission
      is to simplify the way you find, book, and manage professional cleaning services. Whether you
      need a sparkling home, a spotless office, or a last-minute cleanup, we connect you with
      reliable, vetted cleaners who are ready to deliver top-notch results. <br />
      <br />
      With an easy-to-use platform, real-time booking, and transparent pricing, we are here to save
      you time and make your life easier. Experience convenience and peace of mind with KLIN KONNECT
      because your time is precious, and your space deserves the best care.
      <br />
      <br />
      Let us handle the mess while you focus on what truly matters!
    </div>
  </div>
</template>

<script lang="ts" setup>
import SearchCleaner from './SearchCleaner.vue'
</script>

<style scoped>
.index-container {
  border-top: 3px solid var(--lightBlue);
}
.index-container .first,
.index-container .fourth {
  text-align: center;
  align-content: center;
  padding: 0 2rem;
}
.second img,
.third img {
  display: block;
  width: 100%;
  object-fit: cover;
}
</style>
