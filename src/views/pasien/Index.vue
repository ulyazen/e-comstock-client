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
        <li class="breadcrumb-item active" aria-current="page">Data Pasien</li>
      </ol>
    </nav>
    <div class="card">
      <div class="card-header">Data Pasien</div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Nama Pasien</th>
                <th>Id Bangsal</th>
                <th>No Rekam Medis</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(pasien, index) in pasien.data" :key="index">
                <td>{{ pasien.nama }}</td>
                <td>{{ pasien.id_bangsal }}</td>
                <td v-if="pasien.no_rekam_medis == NULL">Kosong</td>
                <td v-else>{{ pasien.no_rekam_medis }}</td>
                <td>
                  <div class="btn-group">
                    <router-link
                      :to="{
                        name: 'pasien.edit',
                        params: { id: pasien.id },
                      }"
                      class="btn btn-sm btn-outline-info"
                      >Edit</router-link
                    >
                    <button
                      class="btn btn-sm btn-outline-danger"
                      @click.prevent="destroy(pasien.id, index)"
                    >
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="pasien.data == 0">
          <p>Data Bangsal Pasien Belum Diisi.</p>
        </div>
        <div v-if="pasien.length === 0" class="d-flex justify-content-center">
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
    let pasien = ref([]);

    onMounted(() => {
      axios
        .get("/api/pasien", {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((result) => {
          pasien.value = result.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    });

    function destroy(id, index) {
      axios.get("/sanctum/csrf-cookie").then(() => {
        axios
          .delete(`api/pasien/${id}`, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then(() => {
            pasien.value.data.splice(index, 1);
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      });
    }

    return {
      pasien,
      destroy,
    };
  },
};
</script>
