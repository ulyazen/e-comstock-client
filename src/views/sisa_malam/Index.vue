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
          Data Sisa Makanan Malam
        </li>
      </ol>
    </nav>
    <div class="card">
      <div class="card-header">Data Sisa Makanan Malam</div>
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
              <tr v-for="(sisa_malam, index) in sisa_malam.data" :key="index">
                <td>{{ sisa_malam.nama_pasien }}</td>
                <td v-if="sisa_malam.no_rekam_medis == NULL">Kosong</td>
                <td v-else>{{ sisa_malam.no_rekam_medis }}</td>
                <td>{{ sisa_malam.nama_bangsal }}</td>
                <td>{{ sisa_malam.siklus }}</td>
                <td>{{ sisa_malam.tanggal }}</td>
                <td v-if="sisa_malam.makanan_pokok == NULL">
                  Tidak Tersedia
                </td>
                <td v-else>{{ sisa_malam.makanan_pokok }}%</td>
                <td v-if="sisa_malam.lauk_hewani == NULL">Tidak Tersedia</td>
                <td v-else>{{ sisa_malam.lauk_hewani }}%</td>
                <td v-if="sisa_malam.lauk_nabati == NULL">Tidak Tersedia</td>
                <td v-else>{{ sisa_malam.lauk_nabati }}%</td>
                <td v-if="sisa_malam.sayur == NULL">Tidak Tersedia</td>
                <td v-else>{{ sisa_malam.sayur }}%</td>
                <td v-if="sisa_malam.buah == NULL">Tidak Tersedia</td>
                <td v-else>{{ sisa_malam.buah }}%</td>
                <td v-if="sisa_malam.snack == NULL">Tidak Tersedia</td>
                <td v-else>{{ sisa_malam.snack }}%</td>
                <td></td>
                <td>
                  <div class="btn-group">
                    <router-link
                      :to="{
                        name: 'sisa_malam.edit',
                        params: { id: sisa_malam.id },
                      }"
                      class="btn btn-sm btn-outline-info"
                      >Edit</router-link
                    >
                    <button
                      class="btn btn-sm btn-outline-danger"
                      @click.prevent="destroy(sisa_malam.id, index)"
                    >
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="sisa_malam.data == 0">
          <p>Data Sisa Makanan Malam Belum Diisi.</p>
        </div>
        <div
          v-if="sisa_malam.length === 0"
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
import { inject } from "vue";
export default {
  setup() {
    let token = localStorage.getItem("token");
    let sisa_malam = ref([]);
    const progressBar = inject("progressBar");
    onMounted(() => {
      axios
        .get("/api/sisa/malam", {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((result) => {
          sisa_malam.value = result.data;
        });
    });

    function destroy(id, index) {
      progressBar.start();
      axios.get("/sanctum/csrf-cookie").then(() => {
        axios
          .delete(`api/sisa/malam/${id}`, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then(() => {
            progressBar.finish();
            sisa_malam.value.data.splice(index, 1);
          })
          .catch(() => {
            progressBar.fail();
          });
      });
    }

    return {
      sisa_malam,
      destroy,
    };
  },
};
</script>
