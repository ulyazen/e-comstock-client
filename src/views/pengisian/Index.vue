<template>
  <div class="my-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link
            :to="{
              name: 'dashboard.index',
            }"
            class="breadcrumb-item"
          >
            Dashboard</router-link
          >
        </li>

        <li class="breadcrumb-item active" aria-current="page">Pengisian</li>
      </ol>
    </nav>
    <div class="card">
      <div class="card-header">Data Bangsal</div>
      <div class="card-header">
        <router-link
          :to="{ name: 'pengisian.bangsal' }"
          class="my-3 btn btn-info btn-sm rounded mb-3"
          >Buat File Baru</router-link
        >
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Nama Bangsal</th>
                <th>Siklus</th>
                <th>Tanggal</th>
                <th>Pengisian</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(bangsal, index) in bangsal.data" :key="index">
                <td>{{ bangsal.nama }}</td>
                <td>{{ bangsal.siklus }}</td>
                <td>{{ bangsal.tanggal }}</td>
                <td>
                  <div class="btn-group">
                    <router-link
                      :to="{
                        name: 'pengisian.pasien',
                        params: { id: bangsal.id, nama: bangsal.nama },
                      }"
                      class="btn btn-sm btn-outline-info"
                      >Data Pasien</router-link
                    >
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="bangsal.data == 0">
          <p>Data Bangsal Belum Diisi.</p>
        </div>
        <div v-if="bangsal.length === 0" class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";

export default {
  setup() {
    let token = localStorage.getItem("token");
    let bangsal = ref([]);

    onMounted(async () => {
      await axios
        .get("/api/bangsal", {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((result) => {
          bangsal.value = result.data;
        });
    });

    return {
      bangsal,
    };
  },
};
</script>
