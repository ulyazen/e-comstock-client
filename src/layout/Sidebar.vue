<template>
  <nav
    id="sidebarMenu"
    class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
  >
    <div class="sidebar-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link
            :to="{
              name: 'dashboard.index',
            }"
            class="nav-link"
          >
            <i class="fas fa-tachometer-alt"></i> Dashboard</router-link
          >
        </li>

        <li class="nav-item">
          <router-link
            :to="{
              name: 'pengisian.bangsal',
            }"
            class="nav-link"
          >
            <i class="fas fa-file-alt"></i> Buat File Baru</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            :to="{
              name: 'pengisian.index',
            }"
            class="nav-link"
          >
            <i class="fas fa-file-alt"></i> File Tersimpan</router-link
          >
        </li>
        <router-link
          :to="{
            name: 'hasil.index',
          }"
          class="nav-link"
        >
          <i class="fas fa-calculator"></i> Hasil Peniliaian</router-link
        >
      </ul>
      <h6
        class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
      >
        <span>Manajemen Data</span>
        <a
          class="d-flex align-items-center text-muted"
          href="#"
          aria-label="Add a new report"
        >
          <span data-feather="plus-circle"></span>
        </a>
      </h6>
      <ul class="nav flex-column mb-2">
        <li class="nav-item">
          <router-link
            :to="{
              name: 'bangsal.index',
            }"
            class="nav-link"
          >
            <i class="fas fa-file-alt"></i> Data Bangsal</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            :to="{
              name: 'pasien.index',
            }"
            class="nav-link"
          >
            <i class="fas fa-file-alt"></i> Data Pasien</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import $ from "jquery";
export default {
  watch: {
    $route() {
      $("#sidebarMenu").collapse("hide");
    },
  },
};
</script>
