<template>
  <div class="my-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link
            :to="{
              name: 'pengisian.index',
            }"
            class="breadcrumb-item"
          >
            Pengisian</router-link
          >
        </li>
        <li class="breadcrumb-item">
          <router-link
            :to="{
              name: 'pengisian.pasien',
              params: { id: id_bangsal },
            }"
            class="breadcrumb-item"
          >
            Data Pasien</router-link
          >
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Detail Data Pasien
        </li>
      </ol>
    </nav>
    <div class="card">
      <div class="card-header">Data Pasien Pagi</div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Makanan Pokok</th>
                <th>Lauk Hewani</th>
                <th>Lauk Nabati</th>
                <th>Sayur</th>
                <th>Buah</th>
                <th>Snack</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(tampil_pagi, index) in tampil_pagi.data" :key="index">
                <td v-if="tampil_pagi.makanan_pokok == NULL">Tidak Tersedia</td>
                <td v-else>{{ tampil_pagi.makanan_pokok }}%</td>
                <td v-if="tampil_pagi.lauk_hewani == NULL">Tidak Tersedia</td>
                <td v-else>{{ tampil_pagi.lauk_hewani }}%</td>
                <td v-if="tampil_pagi.lauk_nabati == NULL">Tidak Tersedia</td>
                <td v-else>{{ tampil_pagi.lauk_nabati }}%</td>
                <td v-if="tampil_pagi.sayur == NULL">Tidak Tersedia</td>
                <td v-else>{{ tampil_pagi.sayur }}%</td>
                <td v-if="tampil_pagi.buah == NULL">Tidak Tersedia</td>
                <td v-else>{{ tampil_pagi.buah }}%</td>
                <td v-if="tampil_pagi.snack == NULL">Tidak Tersedia</td>
                <td v-else>{{ tampil_pagi.snack }}%</td>
              </tr>
            </tbody>
          </table>
          <div v-if="tampil_pagi.data == 0">
            <p>Data Sisa Makanan Pagi Belum Diisi.</p>
          </div>
          <div
            v-if="tampil_pagi.length === 0"
            class="d-flex justify-content-center"
          >
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card rounded my-2">
      <div class="card-header">Data Pasien Siang</div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Makanan Pokok</th>
                <th>Lauk Hewani</th>
                <th>Lauk Nabati</th>
                <th>Sayur</th>
                <th>Buah</th>
                <th>Snack</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(tampil_siang, index) in tampil_siang.data"
                :key="index"
              >
                <td v-if="tampil_siang.makanan_pokok == NULL">
                  Tidak Tersedia
                </td>
                <td v-else>{{ tampil_siang.makanan_pokok }}%</td>
                <td v-if="tampil_siang.lauk_hewani == NULL">Tidak Tersedia</td>
                <td v-else>{{ tampil_siang.lauk_hewani }}%</td>
                <td v-if="tampil_siang.lauk_nabati == NULL">Tidak Tersedia</td>
                <td v-else>{{ tampil_siang.lauk_nabati }}%</td>
                <td v-if="tampil_siang.sayur == NULL">Tidak Tersedia</td>
                <td v-else>{{ tampil_siang.sayur }}%</td>
                <td v-if="tampil_siang.buah == NULL">Tidak Tersedia</td>
                <td v-else>{{ tampil_siang.buah }}%</td>
                <td v-if="tampil_siang.snack == NULL">Tidak Tersedia</td>
                <td v-else>{{ tampil_siang.snack }}%</td>
              </tr>
            </tbody>
          </table>
          <div v-if="tampil_siang.data == 0">
            <p>Data Sisa Makanan Siang Belum Diisi.</p>
          </div>
          <div
            v-if="tampil_siang.length === 0"
            class="d-flex justify-content-center"
          >
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card rounded my-2">
      <div class="card-header">Data Pasien Malam</div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Makanan Pokok</th>
                <th>Lauk Hewani</th>
                <th>Lauk Nabati</th>
                <th>Sayur</th>
                <th>Buah</th>
                <th>Snack</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(tampil_malam, index) in tampil_malam.data"
                :key="index"
              >
                <td v-if="tampil_malam.makanan_pokok == NULL">
                  Tidak Tersedia
                </td>
                <td v-else>{{ tampil_malam.makanan_pokok }}%</td>
                <td v-if="tampil_malam.lauk_hewani == NULL">Tidak Tersedia</td>
                <td v-else>{{ tampil_malam.lauk_hewani }}%</td>
                <td v-if="tampil_malam.lauk_nabati == NULL">Tidak Tersedia</td>
                <td v-else>{{ tampil_malam.lauk_nabati }}%</td>
                <td v-if="tampil_malam.sayur == NULL">Tidak Tersedia</td>
                <td v-else>{{ tampil_malam.sayur }}%</td>
                <td v-if="tampil_malam.buah == NULL">Tidak Tersedia</td>
                <td v-else>{{ tampil_malam.buah }}%</td>
                <td v-if="tampil_malam.snack == NULL">Tidak Tersedia</td>
                <td v-else>{{ tampil_malam.snack }}%</td>
              </tr>
            </tbody>
          </table>
          <div v-if="tampil_malam.data == 0">
            <p>Data Sisa Makanan Malam Belum Diisi.</p>
          </div>
          <div
            v-if="tampil_malam.length === 0"
            class="d-flex justify-content-center"
          >
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
export default {
  setup() {
    let token = localStorage.getItem("token");
    let tampil_pagi = ref([]);
    let tampil_siang = ref([]);
    let tampil_malam = ref([]);
    const route = useRoute();
    const id_bangsal = route.params.id_bangsal;
    onMounted(() => {
      axios
        .get(`api/sisa/pasienPagi/${route.params.id}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((result1) => {
          tampil_pagi.value = result1.data;
        });
      axios
        .get(`/api/sisa/pasienSiang/${route.params.id}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((result2) => {
          tampil_siang.value = result2.data;
        });

      axios
        .get(`/api/sisa/pasienMalam/${route.params.id}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((result3) => {
          tampil_malam.value = result3.data;
        });
    });
    return {
      id_bangsal,
      tampil_pagi,
      tampil_siang,
      tampil_malam,
    };
  },
};
</script>
