<template>
  <div class="search-container-header">
    <h2 class="h4">
      Let us clean, <font-awesome-icon icon="fa-broom" style="color: #64b8e7"></font-awesome-icon>
      <br />
      <font-awesome-icon icon="fa-house" style="color: #64b8e7"></font-awesome-icon> you relax.
    </h2>
  </div>
  <div class="form-container">
    <p class="large">What would you like?</p>
    <form>
      <!-- Location Dropdown -->
      <select name="location" id="select-location" placeholder="Select location">
        <option value="" disabled selected>Select location</option>
        <option value="london">London</option>
        <option value="manchester">Manchester</option>
        <option value="birmingham">Birmingham</option>
        <option value="leeds">Leeds</option>
        <option value="glasgow">Glasgow</option>
      </select>

      <!-- Building Type Dropdown -->
      <select name="building-type" id="select-building-type" placeholder="Select building type">
        <option value="" disabled selected>Select building type</option>
        <option value="studio">Studio</option>
        <option value="apartment">Apartment</option>
        <option value="house">House</option>
        <option value="office">Office</option>
      </select>

      <!-- Room Type Dropdown -->
      <select name="room" id="select-room" placeholder="Select room type">
        <option value="" disabled selected>Select room type</option>
        <option value="one-bedroom">1 Bedroom</option>
        <option value="two-bedroom">2 Bedrooms</option>
        <option value="three-bedroom">3+ Bedrooms</option>
        <option value="office-space">Office Space</option>
      </select>

      <!-- Cleaning Type Dropdown -->
      <select name="cleaning-type" id="select-cleaning-type" placeholder="Select cleaning type">
        <option value="" disabled selected>Select cleaning type</option>
        <option value="standard-cleaning">Standard Cleaning</option>
        <option value="deep-cleaning">Deep Cleaning</option>
        <option value="moving-out-cleaning">Moving Out Cleaning</option>
      </select>

      <!-- Submit Button -->
      <button class="searchButton" type="button" @click="popUp">Search</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
const popUp = () => {
  return window.alert('This button would do something later!')
}
</script>

<style scoped>
.form-container,
.search-container-header {
  text-align: center;
  margin: 1rem 0;
}
.searchButton {
  border: 2px solid var(--lightBlue);
  padding: 0.5rem 1rem;
  background-color: var(--white);
  text-align: center;
  color: var(--lightBlue);
  margin-left: 1rem;
}

.searchButton:hover {
  background-color: var(--lightBlue);
  color: var(--white);
}
</style>
