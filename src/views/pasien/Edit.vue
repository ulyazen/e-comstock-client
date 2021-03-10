<template>
  <div class="container my-3">
    <div class="row justify-content-center">
      <div class="col-12">
        <router-link
          :to="{ name: 'pasien.index' }"
          class="btn btn-primary btn-sm rounded shadow mb-3"
          >Back</router-link
        >
        <div class="card rounded shadow">
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
                <label for="" class="from-label">Siklus</label>
                <select id="" class="form-select" v-model="pasien.id_bangsal">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                </select>
                <div v-if="validation.id_bangsal" class="text-danger">
                  {{ validation.id_bangsal[0] }}
                </div>
              </div>
              <button class="btn btn-primary">Submit</button>
            </form>
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
  setup() {
    let pasien = reactive({
      nama: "",
      id_bangsal: "",
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
