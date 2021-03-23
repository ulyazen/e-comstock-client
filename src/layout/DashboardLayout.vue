<template>
  <div class="wrapper bg-white">
    <navbar></navbar>
    <div class="container-fluid">
      <div class="row">
        <sidebar> </sidebar>
        <dashboard-content> </dashboard-content>
      </div>
    </div>
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
