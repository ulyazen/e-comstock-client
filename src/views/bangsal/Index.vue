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
          Data Bangsal
        </li>
      </ol>
    </nav>
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
                      class="btn btn-outline-info"
                      >Edit</router-link
                    >
                    <button
                      class="btn btn btn-outline-danger"
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
        <div v-if="bangsal.length === 0" class="d-flex justify-content-center">
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
