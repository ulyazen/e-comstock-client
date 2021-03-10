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
        <li class="breadcrumb-item">
          <router-link
            :to="{
              name: 'pasien.index',
            }"
            class="breadcrumb-item"
          >
            Data Pasien</router-link
          >
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Edit Data Pasien
        </li>
      </ol>
    </nav>
    <div class="card rounded">
      <div class="card-header">Edit Data Pasien</div>
      <div class="card-body">
        <form @submit.prevent="update()">
          <div class="mb-3">
            <label for="" class="from-label">Nama Pasien</label>
            <input type="text" class="form-control" v-model="pasien.nama" />
            <div v-if="validation.nama" class="text-danger">
              {{ validation.nama[0] }}
            </div>
          </div>
          <div class="mb-3">
            <label for="" class="from-label">Nomor Rekam Medis</label>
            <input
              placeholder="Nomor Rekam Medis"
              type="text"
              class="form-control"
              v-model="pasien.no_rekam_medis"
            />
          </div>
          <button class="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

import axios from "axios";
export default {
  setup() {
    let pasien = reactive({
      nama: "",
      id_bangsal: "",
      no_rekam_medis: "",
    });
    const validation = ref([]);
    const router = useRouter();
    const route = useRoute();
    onMounted(() => {
      axios
        .get(`https://e-comstock.herokuapp.com/api/pasien/${route.params.id}`)
        .then((result) => {
          pasien.nama = result.data.data.nama;
          pasien.id_bangsal = result.data.data.id_bangsal;
          pasien.no_rekam_medis = result.data.data.no_rekam_medis;
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    });
    function update() {
      axios
        .put(
          `https://e-comstock.herokuapp.com/api/pasien/${route.params.id}`,
          pasien
        )
        .then(() => {
          router.push({
            name: "pasien.index",
          });
        })
        .catch((err) => {
          validation.value = err.response.data;
        });
    }
    return {
      pasien,
      validation,
      router,
      update,
    };
  },
};
</script>
