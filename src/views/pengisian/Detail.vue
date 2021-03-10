<template>
  <div class="container my-3">
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
                <td v-if="tampil_pagi.makanan_pokok == NULL">Kosong</td>
                <td v-else>{{ tampil_pagi.makanan_pokok }}%</td>
                <td v-if="tampil_pagi.lauk_hewani == NULL">Kosong</td>
                <td v-else>{{ tampil_pagi.lauk_hewani }}%</td>
                <td v-if="tampil_pagi.lauk_nabati == NULL">Kosong</td>
                <td v-else>{{ tampil_pagi.lauk_nabati }}%</td>
                <td v-if="tampil_pagi.sayur == NULL">Kosong</td>
                <td v-else>{{ tampil_pagi.sayur }}%</td>
                <td v-if="tampil_pagi.buah == NULL">Kosong</td>
                <td v-else>{{ tampil_pagi.buah }}%</td>
                <td v-if="tampil_pagi.snack == NULL">Kosong</td>
                <td v-else>{{ tampil_pagi.snack }}%</td>
              </tr>
            </tbody>
          </table>
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
                <td v-if="tampil_siang.makanan_pokok == NULL">Kosong</td>
                <td v-else>{{ tampil_siang.makanan_pokok }}%</td>
                <td v-if="tampil_siang.lauk_hewani == NULL">Kosong</td>
                <td v-else>{{ tampil_siang.lauk_hewani }}%</td>
                <td v-if="tampil_siang.lauk_nabati == NULL">Kosong</td>
                <td v-else>{{ tampil_siang.lauk_nabati }}%</td>
                <td v-if="tampil_siang.sayur == NULL">Kosong</td>
                <td v-else>{{ tampil_siang.sayur }}%</td>
                <td v-if="tampil_siang.buah == NULL">Kosong</td>
                <td v-else>{{ tampil_siang.buah }}%</td>
                <td v-if="tampil_siang.snack == NULL">Kosong</td>
                <td v-else>{{ tampil_siang.snack }}%</td>
              </tr>
            </tbody>
          </table>
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
                <td v-if="tampil_malam.makanan_pokok == NULL">Kosong</td>
                <td v-else>{{ tampil_malam.makanan_pokok }}%</td>
                <td v-if="tampil_malam.lauk_hewani == NULL">Kosong</td>
                <td v-else>{{ tampil_malam.lauk_hewani }}%</td>
                <td v-if="tampil_malam.lauk_nabati == NULL">Kosong</td>
                <td v-else>{{ tampil_malam.lauk_nabati }}%</td>
                <td v-if="tampil_malam.sayur == NULL">Kosong</td>
                <td v-else>{{ tampil_malam.sayur }}%</td>
                <td v-if="tampil_malam.buah == NULL">Kosong</td>
                <td v-else>{{ tampil_malam.buah }}%</td>
                <td v-if="tampil_malam.snack == NULL">Kosong</td>
                <td v-else>{{ tampil_pagi.snack }}%</td>
              </tr>
            </tbody>
          </table>
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
    let tampil_pagi = ref([]);
    let tampil_siang = ref([]);
    let tampil_malam = ref([]);
    const route = useRoute();
    const id_bangsal = route.params.id_bangsal;
    onMounted(() => {
      axios
        .get(
          `https://e-comstock.herokuapp.com/api/sisa/pasienPagi/${route.params.id}`
        )
        .then((result1) => {
          tampil_pagi.value = result1.data;
        })
        .catch((err1) => {
          console.log(err1.response);
        });
      axios
        .get(
          `https://e-comstock.herokuapp.com/api/sisa/pasienSiang/${route.params.id}`
        )
        .then((result2) => {
          tampil_siang.value = result2.data;
        })
        .catch((err2) => {
          console.log(err2.response);
        });
      axios
        .get(
          `https://e-comstock.herokuapp.com/api/sisa/pasienMalam/${route.params.id}`
        )
        .then((result3) => {
          tampil_malam.value = result3.data;
        })
        .catch((err3) => {
          console.log(err3.response);
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
