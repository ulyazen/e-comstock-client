<template>
  <div class=" my-3">
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
        <li class="breadcrumb-item active" aria-current="page">Data Pasien</li>
      </ol>
    </nav>
    <div class="card">
      <div class="card-header">
        Buat File Baru Pasien Bangsal {{ bangsal.nama_bangsal }}
      </div>
      <div class="card-body">
        <form @submit.prevent="store()">
          <div class="mb-3">
            <label for="" class="from-label">Nama Pasien</label>
            <input
              placeholder="Nama Pasien"
              type="text"
              class="form-control"
              v-model="tambah_pasien.nama"
            />
            <div v-if="validation.nama" class="text-danger">
              {{ validation.nama[0] }}
            </div>
            <label for="" class="from-label">Nomor Rekam Medis</label>
            <input
              placeholder="Nomor Rekam Medis"
              type="text"
              class="form-control"
              v-model="tambah_pasien.no_rekam_medis"
            />
          </div>
          <input type="hidden" v-model="tambah_pasien.id_bangsal" />
          <button class="btn btn-primary">Submit</button>
        </form>
        <div class="my-3 border-top">
          <h2 class="my-3">Daftar Pasien Bangsal {{ bangsal.nama_bangsal }}</h2>

          <ul
            class="list-group"
            v-for="(tampil, index) in tampil.data"
            :key="index"
          >
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              <div class="card border-0" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">{{ tampil.nama }}</h5>
                  <p class="card-text">
                    {{ tampil.no_rekam_medis }}
                  </p>
                </div>
              </div>

              <div class="btn-group">
                <div class="justify-content">
                  <router-link
                    :to="{
                      name: 'pengisian.pagi',
                      params: {
                        id: tampil.id,
                        id_bangsal: tampil.id_bangsal,
                      },
                    }"
                    class="btn btn-outline-primary btn-sm btn-block"
                    >Sisa Makanan Pagi</router-link
                  >
                  <router-link
                    :to="{
                      name: 'pengisian.siang',
                      params: {
                        id: tampil.id,
                        id_bangsal: tampil.id_bangsal,
                      },
                    }"
                    class="btn btn-outline-primary btn-sm btn-block"
                    >Sisa Makanan Siang</router-link
                  >
                  <router-link
                    :to="{
                      name: 'pengisian.malam',
                      params: {
                        id: tampil.id,
                        id_bangsal: tampil.id_bangsal,
                      },
                    }"
                    class="btn btn-outline-primary btn-sm btn-block"
                    >Sisa Makanan Malam</router-link
                  >
                  <router-link
                    :to="{
                      name: 'pengisian.detail',
                      params: {
                        id: tampil.id,
                        id_bangsal: tampil.id_bangsal,
                      },
                    }"
                    class="btn btn-outline-primary btn-sm btn-block"
                    >Tampilkan Data</router-link
                  >
                </div>
              </div>
            </li>
          </ul>
          <div v-if="tampil.length === 0" class="d-flex justify-content-center">
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
import { reactive, ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
export default {
  data: function() {
    return {
      isChecked: false,
    };
  },
  setup() {
    const bangsal = reactive({
      nama_bangsal: "",
    });
    let tambah_pasien = reactive({
      nama: "",
      id_bangsal: "",
      no_rekam_medis: "",
    });
    let tampil = ref([]);
    const validation = ref([]);
    const router = useRouter();
    const route = useRoute();
    onMounted(() => {
      axios
        .get(`https://e-comstock.herokuapp.com/api/bangsal/${route.params.id}`)
        .then((result) => {
          bangsal.nama_bangsal = result.data.data.nama;
          tambah_pasien.id_bangsal = result.data.data.id;
        })
        .catch((err) => {
          console.log(err.response.data);
        });
      getData();
    });
    function getData() {
      axios
        .get(
          `https://e-comstock.herokuapp.com/api/pasienBangsal/${route.params.id}`
        )
        .then((result2) => {
          tampil.value = result2.data;
        })
        .catch((err2) => {
          console.log(err2.response);
        });
    }
    function store() {
      axios
        .post("https://e-comstock.herokuapp.com/api/pasien", tambah_pasien)
        .then(() => {
          tambah_pasien.nama = "";
          tambah_pasien.no_rekam_medis = "";
          getData();
        });
    }
    return {
      bangsal,
      tambah_pasien,
      tampil,
      validation,
      router,
      store,
    };
  },
};
</script>
