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
        <li class="breadcrumb-item active" aria-current="page">
          Data Sisa Makanan Pagi
        </li>
      </ol>
    </nav>
    <div class="card">
      <div class="card-header">Data Sisa Makanan Pagi</div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Nama Pasien</th>
                <th>No Rekam Medis</th>
                <th>Nama Bangsal</th>
                <th>Siklus</th>
                <th>Tanggal Bangsal</th>
                <th>Makanan Pokok</th>
                <th>Lauk Hewani</th>
                <th>Lauk Nabati</th>
                <th>Sayur</th>
                <th>Buah</th>
                <th>Snack</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(sisa_pagi, index) in sisa_pagi.data" :key="index">
                <td>{{ sisa_pagi.nama_pasien }}</td>
                <td v-if="sisa_pagi.no_rekam_medis == NULL">Kosong</td>
                <td v-else>{{ sisa_pagi.no_rekam_medis }}</td>
                <td>{{ sisa_pagi.nama_bangsal }}</td>
                <td>{{ sisa_pagi.siklus }}</td>
                <td>{{ sisa_pagi.tanggal }}</td>
                <td v-if="sisa_pagi.makanan_pokok == NULL">
                  Tidak Tersedia
                </td>
                <td v-else>{{ sisa_pagi.makanan_pokok }}%</td>
                <td v-if="sisa_pagi.lauk_hewani == NULL">Tidak Tersedia</td>
                <td v-else>{{ sisa_pagi.lauk_hewani }}%</td>
                <td v-if="sisa_pagi.lauk_nabati == NULL">Tidak Tersedia</td>
                <td v-else>{{ sisa_pagi.lauk_nabati }}%</td>
                <td v-if="sisa_pagi.sayur == NULL">Tidak Tersedia</td>
                <td v-else>{{ sisa_pagi.sayur }}%</td>
                <td v-if="sisa_pagi.buah == NULL">Tidak Tersedia</td>
                <td v-else>{{ sisa_pagi.buah }}%</td>
                <td v-if="sisa_pagi.snack == NULL">Tidak Tersedia</td>
                <td v-else>{{ sisa_pagi.snack }}%</td>
                <td>
                  <div class="btn-group">
                    <router-link
                      :to="{
                        name: 'sisa_pagi.edit',
                        params: { id: sisa_pagi.id },
                      }"
                      class="btn btn-sm btn-outline-info"
                      >Edit</router-link
                    >
                    <button
                      class="btn btn-sm btn-outline-danger"
                      @click.prevent="destroy(sisa_pagi.id, index)"
                    >
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="sisa_pagi.data == 0">
          <p>Data Sisa Makanan Pagi Belum Diisi.</p>
        </div>
        <div
          v-if="sisa_pagi.length === 0"
          class="d-flex justify-content-center"
        >
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
    let sisa_pagi = ref([]);

    onMounted(() => {
      axios
        .get("/api/sisa/pagi", {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((result) => {
          sisa_pagi.value = result.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    });

    function destroy(id, index) {
      axios.get("/sanctum/csrf-cookie").then(() => {
        axios
          .delete(`api/sisa/pagi/${id}`, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then(() => {
            sisa_pagi.value.data.splice(index, 1);
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      });
    }

    return {
      sisa_pagi,
      destroy,
    };
  },
};
</script>
