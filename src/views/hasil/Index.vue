<template>
  <div class="container my-3">
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
                And lastly, the placeholder content for the third and final
                accordion panel. This panel is hidden by default.
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
                        <th>Nama Bangsal</th>
                        <th>Siklus</th>
                        <th>Tanggal</th>
                        <th>Pengisian</th>
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
import { onMounted, ref } from "vue";
import $ from "jquery";

export default {
  setup() {
    //reactive state
    let bangsal = ref([]);

    onMounted(async () => {
      $("#example").DataTable({
        processing: true,
        serverSide: true,
        searching: false,
        paging: false,
        info: false,
        ajax: {
          url: "https://e-comstock.herokuapp.com/api/bangsalDataTable",
          type: "GET",
        },
        dom: "Bfrtip",
        buttons: ["excel", "print"],
        columns: [
          { data: "nama", name: "nama" },
          { data: "siklus", name: "siklus" },
          { data: "tanggal", name: "tanggal" },
          { data: "created_at", name: "created_at" },
        ],
      });
    });

    return {
      bangsal,
    };
  },
};
</script>
