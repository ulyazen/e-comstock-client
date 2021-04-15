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
              name: 'pengisian.index',
            }"
            class="breadcrumb-item"
          >
            Pengisian</router-link
          >
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Buat File Baru Bangsal
        </li>
      </ol>
    </nav>
    <div class="card">
      <div class="card-header">Buat File Baru Bangsal</div>
      <div class="card-body">
        <form @submit.prevent="store()">
          <div class="mb-3">
            <label for="" class="from-label">Nama Bangsal</label>
            <input
              type="text"
              class="form-control"
              placeholder="Nama Bangsal"
              v-model="bangsal.nama"
            />
            <div v-if="validation.nama" class="text-danger">
              {{ validation.nama[0] }}
            </div>
          </div>
          <div class="mb-3">
            <label for="" class="from-label">Siklus</label>
            <select class="custom-select" v-model="bangsal.siklus">
              <div v-if="validation.siklus" class="text-danger">
                {{ validation.siklus }}
              </div>
              <option value="" selected hidden>Pilih Siklus Makananan</option>
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
              placeholder="yyyyy-mm-dd"
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
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { inject } from "vue";
export default {
  setup() {
    const progressBar = inject("progressBar");
    let token = localStorage.getItem("token");
    const bangsal = reactive({
      nama: "",
      siklus: "",
      tanggal: "",
      id_user: "",
    });
    bangsal.id_user = localStorage.getItem("id_user");
    const validation = ref([]);
    const router = useRouter();
    function store() {
      progressBar.start();
      axios.get("/sanctum/csrf-cookie").then(() => {
        axios
          .post("/api/bangsal", bangsal, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then(() => {
            progressBar.finish();
            router.push({
              name: "pengisian.index",
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
      store,
    };
  },
};
</script>
