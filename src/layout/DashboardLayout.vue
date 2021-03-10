<template>
  <div class="wrapper">
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
export default {
  components: {
    Navbar,
    Sidebar,
    DashboardContent,
  },
};
</script>
