<template>
  <div class="navbar">
    <nav class="header row no-gutter">
      <div class="col-3">
        <img src="./assets/companyLogo.png" alt="company logo" width="120px" height="120px" />
      </div>
      <div class="navigation-links col-6 hide-mobile">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Become a Cleaner</li>
          <li>Contact</li>
        </ul>
      </div>
      <div class="col-3 user-icon">
        <font-awesome-icon
          icon="fa-user"
          style="color: #64b8e7"
          @click="toggleDropdown"
        ></font-awesome-icon>
      </div>
      <div class="dropdown-container row hide-mobile" v-if="dropdown">
        <div class="dropdown-section">
          <ul>
            <li>Profile</li>
            <li>Inbox</li>
            <li>Settings</li>
            <li>Logout</li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <router-view />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const dropdown = ref(false)

const toggleDropdown = () => {
  dropdown.value = !dropdown.value
  document.body.classList.toggle('dropdown', dropdown.value)
}
</script>

<style scoped>
.navbar {
  padding: 0 2rem;
}
.navigation-links ul {
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  cursor: pointer;
}
nav.header {
  align-items: center;
}
svg.svg-inline--fa.fa-user {
  height: 30px;
  width: 30px;
  cursor: pointer;
}
.user-icon {
  text-align: center;
}
.dropdown-container {
  width: 240px;
  position: absolute;
  left: 77%;
  top: 94px;
  border-radius: 10px;
  border: 1px solid var(--lightBlue);
  background: var(--white);
}
</style>
