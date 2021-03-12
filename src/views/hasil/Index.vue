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
          Hasil Penilaian
        </li>
      </ol>
    </nav>
    <div class="card">
      <div class="card-header">Data Bangsal</div>
      <div class="card-body">
        <div class="accordion" id="accordionExample">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h2 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Rata-rata Sisa Berdasar Bangsal
                </button>
              </h2>
            </div>
            <div
              id="collapseOne"
              class="collapse"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Nama Bangsal</th>
                        <th>Siklus</th>
                        <th>Tanggal</th>
                        <th>Hasil Penilaian</th>
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
                                name: 'hasil.bangsal',
                                params: { id: bangsal.id, nama: bangsal.nama },
                              }"
                              class="btn btn-sm btn-outline-info"
                              >Olah Data</router-link
                            >
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  v-if="bangsal.length === 0"
                  class="d-flex justify-content-center"
                >
                  <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h2 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Rata-rata Sisa Makanan pada Menu Keseluruhan
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table" style="width: 100%" id="example">
                    <thead>
                      <tr>
                        <th>Siklus</th>
                        <th>Makanan Pokok</th>
                        <th>Lauk Hewani</th>
                        <th>Lauk Nabati</th>
                        <th>Sayur</th>
                        <th>Buah</th>
                        <th>Snack</th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingThree">
              <h2 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Rata-rata Sisa Menurut Kelompok Makanan pada Menu Keseluruhan
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                And lastly, the placeholder content for the third and final
                accordion panel. This panel is hidden by default.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
import $ from "jquery";

export default {
  setup() {
    //reactive state
    let bangsal = ref([]);

    onMounted(async () => {
      await axios
        .get("https://e-comstock.herokuapp.com/api/bangsal")
        .then((result) => {
          bangsal.value = result.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
      $("#example").DataTable({
        processing: true,
        serverSide: true,
        searching: false,
        paging: false,
        info: false,
        ajax: {
          url: "https://e-comstock.herokuapp.com/api/pasienAvgSisa",
          type: "GET",
        },
        dom: "Bfrtip",
        buttons: ["excel", "print"],
        columns: [
          { data: "siklus", name: "siklus" },
          { data: "makanan_pokok", name: "makanan_pokok" },
          { data: "lauk_hewani", name: "lauk_hewani" },
          { data: "lauk_nabati", name: "lauk_nabati" },
          { data: "sayur", name: "sayur" },
          { data: "buah", name: "buah" },
          { data: "snack", name: "snack" },
        ],
      });
    });

    return {
      bangsal,
    };
  },
};
</script>
