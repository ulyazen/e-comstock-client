<template>
  <div class="wrapper bg-white">
    <navbar></navbar>
    <div class="container-fluid mb-2 bg-white">
      <div class="row">
        <sidebar> </sidebar>
        <dashboard-content> </dashboard-content>
      </div>
    </div>
    <nav class="navbar navbar-dark bg-info navbar-expand fixed-bottom">
      <ul class="navbar-nav nav-justified w-100">
        <div class="d-flex align-items-center justify-content-between small">
          <div class="text-white">
            Copyright &copy; E-Comstock 2021
          </div>
        </div>
      </ul>
    </nav>
    <nav
      class="navbar navbar-dark bg-info navbar-expand d-md-none d-lg-none d-xl-none fixed-bottom"
    >
      <ul class="navbar-nav nav-justified w-100">
        <li class="nav-item">
          <router-link
            :to="{
              name: 'dashboard.index',
            }"
            class="nav-link"
          >
            <i class="fas fa-home text-light fa-lg"></i>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{
              name: 'pengisian.bangsal',
            }"
            class="nav-link"
          >
            <i class="fas fa-file-alt text-light fa-lg"></i
          ></router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{
              name: 'pengisian.index',
            }"
            class="nav-link"
          >
            <i class="fas fa-file-signature text-light fa-lg"></i
          ></router-link>
        </li>
        <router-link
          :to="{
            name: 'hasil.index',
          }"
          class="nav-link"
        >
          <i class="fas fa-calculator text-light fa-lg"></i
        ></router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Sidebar from "./Sidebar.vue";
import DashboardContent from "./Content.vue";
import "@/assets/dashboard.css";
export default {
  data() {
    return {
      loggedIn: localStorage.getItem("loggedIn"),
    };
  },
  mounted() {
    if (!this.loggedIn) {
      return this.$router.push({ name: "login" });
    }
  },
  components: {
    Navbar,
    Sidebar,
    DashboardContent,
  },
};
</script>
<style></style>
