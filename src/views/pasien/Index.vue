<template>
  <div class="container my-3">
    <router-link
      :to="{ name: 'pasien.create' }"
      class="btn btn-primary btn-sm rounded shadow mb-3"
      >Buat File Baru</router-link
    >
    <div class="card">
      <div class="card-header">Data Pasien</div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Nama Pasien</th>
                <th>Id Bangsal</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(pasien, index) in pasien.data" :key="index">
                <td>{{ pasien.nama }}</td>
                <td>{{ pasien.id_bangsal }}</td>

                <td>
                  <div class="btn-group">
                    <router-link
                      :to="{
                        name: 'pasien.edit',
                        params: { id: pasien.id },
                      }"
                      class="btn btn-sm btn-info"
                      >Edit</router-link
                    >
                    <button
                      class="btn btn-sm btn-danger"
                      @click.prevent="destroy(pasien.id, index)"
                    >
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
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
    //reactive state
    let pasien = ref([]);

    onMounted(() => {
      axios
        .get("https://e-comstock.herokuapp.com/api/pasien")
        .then((result) => {
          pasien.value = result.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    });

    function destroy(id, index) {
      axios
        .delete(`https://e-comstock.herokuapp.com/api/pasien/${id}`)
        .then(() => {
          pasien.value.data.splice(index, 1);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }

    return {
      pasien,
      destroy,
    };
  },
};
</script>
