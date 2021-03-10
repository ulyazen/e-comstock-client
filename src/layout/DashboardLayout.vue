<template>
  <div class="wrapper">
    <navbar></navbar>
    <div class="container-fluid">
      <div class="row">
        <sidebar> </sidebar>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <div
            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
          >
            <dashboard-content> </dashboard-content>
          </div>
        </main>
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
