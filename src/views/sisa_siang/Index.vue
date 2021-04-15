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
          Data Sisa Makanan Siang
        </li>
      </ol>
    </nav>
    <div class="card">
      <div class="card-header">Data Sisa Makanan Siang</div>
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
              <tr v-for="(sisa_siang, index) in sisa_siang.data" :key="index">
                <td>{{ sisa_siang.nama_pasien }}</td>
                <td v-if="sisa_siang.no_rekam_medis == NULL">Kosong</td>
                <td v-else>{{ sisa_siang.no_rekam_medis }}</td>
                <td>{{ sisa_siang.nama_bangsal }}</td>
                <td>{{ sisa_siang.siklus }}</td>
                <td>{{ sisa_siang.tanggal }}</td>
                <td v-if="sisa_siang.makanan_pokok == NULL">
                  Tidak Tersedia
                </td>
                <td v-else>{{ sisa_siang.makanan_pokok }}%</td>
                <td v-if="sisa_siang.lauk_hewani == NULL">Tidak Tersedia</td>
                <td v-else>{{ sisa_siang.lauk_hewani }}%</td>
                <td v-if="sisa_siang.lauk_nabati == NULL">Tidak Tersedia</td>
                <td v-else>{{ sisa_siang.lauk_nabati }}%</td>
                <td v-if="sisa_siang.sayur == NULL">Tidak Tersedia</td>
                <td v-else>{{ sisa_siang.sayur }}%</td>
                <td v-if="sisa_siang.buah == NULL">Tidak Tersedia</td>
                <td v-else>{{ sisa_siang.buah }}%</td>
                <td v-if="sisa_siang.snack == NULL">Tidak Tersedia</td>
                <td v-else>{{ sisa_siang.snack }}%</td>
                <td>
                  <div class="btn-group">
                    <router-link
                      :to="{
                        name: 'sisa_siang.edit',
                        params: { id: sisa_siang.id },
                      }"
                      class="btn btn-sm btn-outline-info"
                      >Edit</router-link
                    >
                    <button
                      class="btn btn-sm btn-outline-danger"
                      @click.prevent="destroy(sisa_siang.id, index)"
                    >
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="sisa_siang.data == 0">
          <p>Data Sisa Makanan Siang Belum Diisi.</p>
        </div>
        <div
          v-if="sisa_siang.length === 0"
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
    let sisa_siang = ref([]);
    const progressBar = inject("progressBar");
    let id_user = localStorage.getItem("token");
    onMounted(() => {
      axios
        .get(`/api/siangU/${id_user}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((result) => {
          sisa_siang.value = result.data;
        });
    });

    function destroy(id, index) {
      progressBar.start();
      axios.get("/sanctum/csrf-cookie").then(() => {
        axios
          .delete(`api/sisa/siang/${id}`, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then(() => {
            progressBar.finish();
            sisa_siang.value.data.splice(index, 1);
          })
          .catch(() => {
            progressBar.fail();
          });
      });
    }

    return {
      sisa_siang,
      destroy,
    };
  },
};
</script>
