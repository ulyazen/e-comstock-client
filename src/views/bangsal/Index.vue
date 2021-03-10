<template>
  <div class="container my-3">
    <router-link
      :to="{ name: 'bangsal.create' }"
      class="btn btn-primary btn-sm rounded shadow mb-3"
      >Buat File Baru</router-link
    >
    <div class="card">
      <div class="card-header">Data Bangsal</div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Nama Bangsal</th>
                <th>Siklus</th>
                <th>Tanggal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(bangsal, index) in bangsal.data" :key="index">
                <td>{{ bangsal.nama }}</td>
                <td>{{ bangsal.siklus }}</td>
                <td>{{ bangsal.tanggal }}</td>
                <td>
                  <div class="btn-group">
                    <router-link
                      :to="{
                        name: 'bangsal.edit',
                        params: { id: bangsal.id },
                      }"
                      class="btn btn-sm btn-info"
                      >Edit</router-link
                    >
                    <button
                      class="btn btn-sm btn-danger"
                      @click.prevent="destroy(bangsal.id, index)"
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
    let bangsal = ref([]);

    onMounted(() => {
      axios
        .get("https://e-comstock.herokuapp.com/api/bangsal")
        .then((result) => {
          bangsal.value = result.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    });

    function destroy(id, index) {
      axios
        .delete(`https://e-comstock.herokuapp.com/api/bangsal/${id}`)
        .then(() => {
          bangsal.value.data.splice(index, 1);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }

    return {
      bangsal,
      destroy,
    };
  },
};
</script>
