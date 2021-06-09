<template>
  <nav
    id="sidebarMenu"
    class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
  >
    <div class="sidebar-sticky pt-3">
      <ul class="nav flex-column">
        <h6
          class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
        >
          <span>Menu Utama</span>
        </h6>
        <li class="nav-item">
          <router-link
            :to="{
              name: 'dashboard.index',
            }"
            class="nav-link"
          >
            <font-awesome-icon icon="tachometer-alt" /> Dashboard</router-link
          >
        </li>

        <li class="nav-item">
          <router-link
            :to="{
              name: 'pengisian.bangsal',
            }"
            class="nav-link"
          >
            <font-awesome-icon icon="file-alt" /> Buat File Baru</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            :to="{
              name: 'pengisian.index',
            }"
            class="nav-link"
          >
            <font-awesome-icon icon="file-signature" /> File
            Tersimpan</router-link
          >
        </li>
        <router-link
          :to="{
            name: 'hasil.index',
          }"
          class="nav-link"
        >
          <font-awesome-icon icon="calculator" /> Hasil Peniliaian</router-link
        >
      </ul>
      <h6
        class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
      >
        <span>Manajemen Data</span>
      </h6>
      <ul class="nav flex-column mb-2">
        <li class="nav-item">
          <router-link
            :to="{
              name: 'bangsal.index',
            }"
            class="nav-link"
          >
            <font-awesome-icon icon="file-alt" /> Data Bangsal</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            :to="{
              name: 'pasien.index',
            }"
            class="nav-link"
          >
            <font-awesome-icon icon="file-alt" /> Data Pasien</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            :to="{
              name: 'sisa_pagi.index',
            }"
            class="nav-link"
          >
            <font-awesome-icon icon="file-alt" /> Data Sisa Makanan
            Pagi</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            :to="{
              name: 'sisa_siang.index',
            }"
            class="nav-link"
          >
            <font-awesome-icon icon="file-alt" /> Data Sisa Makanan
            Siang</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            :to="{
              name: 'sisa_malam.index',
            }"
            class="nav-link"
          >
            <font-awesome-icon icon="file-alt" /> Data Sisa Makanan
            Malam</router-link
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
