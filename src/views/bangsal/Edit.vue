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
              name: 'bangsal.index',
            }"
            class="breadcrumb-item"
          >
            Data Bangsal</router-link
          >
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Edit Data Pasien
        </li>
      </ol>
    </nav>
    <div class="card rounded">
      <div class="card-header">Edit Data Bangsal</div>
      <div class="card-body">
        <form @submit.prevent="update()">
          <div class="mb-3">
            <label for="" class="from-label">Nama Bangsal</label>
            <input type="text" class="form-control" v-model="bangsal.nama" />
            <div v-if="validation.nama" class="text-danger">
              {{ validation.nama[0] }}
            </div>
          </div>
          <div class="mb-3">
            <label for="" class="from-label">Siklus</label>
            <select id="" class="custom-select" v-model="bangsal.siklus">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
            </select>
            <div v-if="validation.siklus" class="text-danger">
              {{ validation.siklus[0] }}
            </div>
          </div>
          <div class="mb-3">
            <label for="" class="from-label">Tanggal</label>
            <input
              type="date"
              class="form-control"
              placeholder="yyyy-mm-dd"
              v-model="bangsal.tanggal"
            />
            <div v-if="validation.tanggal" class="text-danger">
              {{ validation.tanggal[0] }}
            </div>
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
import { inject } from "vue";
import axios from "axios";
export default {
  setup() {
    let token = localStorage.getItem("token");
    let bangsal = reactive({
      nama: "",
      siklus: "",
      tanggal: "",
    });
    const progressBar = inject("progressBar");
    const validation = ref([]);
    const router = useRouter();
    const route = useRoute();
    onMounted(() => {
      axios
        .get(`/api/bangsal/${route.params.id}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((result) => {
          bangsal.nama = result.data.data.nama;
          bangsal.siklus = result.data.data.siklus;
          bangsal.tanggal = result.data.data.tanggal;
        });
    });

    function update() {
      progressBar.start();
      axios.get("/sanctum/csrf-cookie").then(() => {
        axios
          .put(`/api/bangsal/${route.params.id}`, bangsal, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then(() => {
            progressBar.finish();
            router.push({
              name: "bangsal.index",
            });
          })
          .catch((err) => {
            progressBar.fail();
            validation.value = err.response.data;
          });
      });
    }
    return {
      bangsal,
      validation,
      router,
      update,
    };
  },
};
</script>
