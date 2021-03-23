<template>
  <nav class="navbar navbar-dark sticky-top bg-info flex-md-nowrap p-0 shadow">
    <router-link
      :to="{
        name: 'dashboard.index',
      }"
      class="navbar-brand col-md-3 col-lg-2 mr-0 px-3"
    >
      E-Comstock</router-link
    >

    <button
      class="navbar-toggler position-absolute d-md-none collapsed"
      type="button"
      data-toggle="collapse"
      data-target="#sidebarMenu"
      aria-controls="sidebarMenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <ul class="navbar-nav px-3">
      <li class="nav-item text-nowrap">
        <div @click="logout" class="nav-link border-light" href="#">
          Sign out
        </div>
      </li>
    </ul>
  </nav>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      loggedIn: localStorage.getItem("loggedIn"),
      token: localStorage.getItem("token"),
    };
  },
  methods: {
    logout() {
      axios
        .post(
          "/api/logout",
          {},
          {
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
        )
        .then(() => {
          localStorage.removeItem("loggedIn");
          return this.$router.push({ name: "login" });
        });
    },
  },
  mounted() {
    if (!this.loggedIn) {
      return this.$router.push({ name: "login" });
    }
  },
};
</script>
