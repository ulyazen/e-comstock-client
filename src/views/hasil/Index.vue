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
      <div class="card-header">Hasil Penilaian</div>
      <div class="card-body">
        <div class="accordion" id="accordionExample">
          <div class="card">
            <div class="card-header" id="headingFive">
              <h2 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Nilai Sisa Makanan Lengkap
                </button>
              </h2>
            </div>
            <div
              id="collapseFive"
              class="collapse"
              aria-labelledby="headingFive"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table" style="width: 100%" id="nilaiLengkap">
                    <thead>
                      <div class="mb-3">
                        <label for="" class="from-label"
                          >Filter Berdasar Tanggal</label
                        >
                        <input id="tanggal" type="date" class="form-control" />
                      </div>
                      <tr>
                        <th>Nama</th>
                        <th>Nomor Rekam Medis</th>
                        <th>Siklus</th>
                        <th>Bangsal</th>
                        <th>Tanggal</th>
                        <th>Makanan Pokok Pagi</th>
                        <th>Lauk Hewani Pagi</th>
                        <th>Lauk Nabati Pagi</th>
                        <th>Sayur Pagi</th>
                        <th>Buah Pagi</th>
                        <th>Snack Pagi</th>
                        <th>Makanan Pokok Siang</th>
                        <th>Lauk Hewani Siang</th>
                        <th>Lauk Nabati Siang</th>
                        <th>Sayur Siang</th>
                        <th>Buah Siang</th>
                        <th>Snack Siang</th>
                        <th>Makanan Pokok Malam</th>
                        <th>Lauk Hewani Malam</th>
                        <th>Lauk Nabati Malam</th>
                        <th>Sayur Malam</th>
                        <th>Buah Malam</th>
                        <th>Snack Malam</th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          </div>
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
                  Rata-rata Sisa Makanan Berdasarkan Bangsal
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
                <div v-if="bangsal.data == 0">
                  <p>Data Bangsal Belum Diisi.</p>
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
                  Rata-rata Sisa Makanan Berdasarkan Siklus dan Jenis Makanan
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
                  <table class="table" style="width: 100%" id="rataMakanan">
                    <thead>
                      <tr>
                        <th>Siklus</th>
                        <th>Makanan Pokok</th>
                        <th>Lauk Hewani</th>
                        <th>Lauk Nabati</th>
                        <th>Sayur</th>
                        <th>Buah</th>
                        <th>Snack</th>
                        <th>Rata-rata</th>
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
                  data-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Rata-rata Lengkap
                </button>
              </h2>
            </div>
            <div
              id="collapseFour"
              class="collapse"
              aria-labelledby="headingFour"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table" style="width: 100%" id="rataLengkap">
                    <thead>
                      <tr>
                        <th>Siklus</th>
                        <th>Makanan Pokok Pagi</th>
                        <th>Lauk Hewani Pagi</th>
                        <th>Lauk Nabati Pagi</th>
                        <th>Sayur Pagi</th>
                        <th>Buah Pagi</th>
                        <th>Snack Pagi</th>
                        <th>Rata-rata Pagi</th>
                        <th>Makanan Pokok Siang</th>
                        <th>Lauk Hewani Siang</th>
                        <th>Lauk Nabati Siang</th>
                        <th>Sayur Siang</th>
                        <th>Buah Siang</th>
                        <th>Snack Siang</th>
                        <th>Rata-rata Siang</th>
                        <th>Makanan Pokok Malam</th>
                        <th>Lauk Hewani Malam</th>
                        <th>Lauk Nabati Malam</th>
                        <th>Sayur Malam</th>
                        <th>Buah Malam</th>
                        <th>Snack Malam</th>
                        <th>Rata-rata Malam</th>
                        <th>Rata-rata Keseluruhan</th>
                      </tr>
                    </thead>
                  </table>
                </div>
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
    let token = localStorage.getItem("token");
    let bangsal = ref([]);
    let id_user = localStorage.getItem("id_user");
    onMounted(() => {
      axios
        .get(`/api/bangsalUser/${id_user}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((result) => {
          bangsal.value = result.data;
        });

      $("#rataMakanan").DataTable({
        searching: false,
        paging: false,
        info: false,
        ajax: {
          url: `https://e-comstock.herokuapp.com/api/pasienAvgSisaMakananUser/${id_user}`,
          type: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
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
          { data: "ratarata", name: "ratarata" },
        ],
        rowCallback: function(row, data) {
          $("td:eq(1)", row).html(
            parseFloat(data.makanan_pokok).toPrecision(3) + "%"
          );
          $("td:eq(2)", row).html(
            parseFloat(data.lauk_hewani).toPrecision(3) + "%"
          );
          $("td:eq(3)", row).html(
            parseFloat(data.lauk_nabati).toPrecision(3) + "%"
          );
          $("td:eq(4)", row).html(parseFloat(data.sayur).toPrecision(3) + "%");
          $("td:eq(5)", row).html(parseFloat(data.buah).toPrecision(3) + "%");
          $("td:eq(6)", row).html(parseFloat(data.snack).toPrecision(3) + "%");
          $("td:eq(7)", row).html(
            parseFloat(data.ratarata).toPrecision(3) + "%"
          );
        },
      });
      $("#rataLengkap").DataTable({
        searching: false,
        paging: false,
        info: false,
        ajax: {
          url: `https://e-comstock.herokuapp.com/api/pasienAvgLengkapUser/${id_user}`,
          type: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        },
        dom: "Bfrtip",
        buttons: ["excel", "print"],
        columns: [
          { data: "siklus", name: "siklus" },
          { data: "makanan_pokok_pagi", name: "makanan_pokok_pagi" },
          { data: "lauk_hewani_pagi", name: "lauk_hewani_pagi" },
          { data: "lauk_nabati_pagi", name: "lauk_nabati_pagi" },
          { data: "sayur_pagi", name: "sayur_pagi" },
          { data: "buah_pagi", name: "buah_pagi" },
          { data: "snack_pagi", name: "snack_pagi" },
          { data: "ratarata_pagi", name: "ratarata_pagi" },
          { data: "makanan_pokok_siang", name: "makanan_pokok_siang" },
          { data: "lauk_hewani_siang", name: "lauk_hewani_siang" },
          { data: "lauk_nabati_siang", name: "lauk_nabati_siang" },
          { data: "sayur_siang", name: "sayur_siang" },
          { data: "buah_siang", name: "buah_siang" },
          { data: "snack_siang", name: "snack_siang" },
          { data: "ratarata_siang", name: "ratarata_siang" },
          { data: "makanan_pokok_malam", name: "makanan_pokok_malam" },
          { data: "lauk_hewani_malam", name: "lauk_hewani_malam" },
          { data: "lauk_nabati_malam", name: "lauk_nabati_malam" },
          { data: "sayur_malam", name: "sayur_malam" },
          { data: "buah_malam", name: "buah_malam" },
          { data: "snack_malam", name: "snack_malam" },
          { data: "ratarata_malam", name: "ratarata_malam" },
          { data: "ratarata", name: "ratarata" },
        ],
        rowCallback: function(row, data) {
          $("td:eq(1)", row).html(
            parseFloat(data.makanan_pokok_pagi).toPrecision(3) + "%"
          );
          $("td:eq(2)", row).html(
            parseFloat(data.lauk_hewani_pagi).toPrecision(3) + "%"
          );
          $("td:eq(3)", row).html(
            parseFloat(data.lauk_nabati_pagi).toPrecision(3) + "%"
          );
          $("td:eq(4)", row).html(
            parseFloat(data.sayur_pagi).toPrecision(3) + "%"
          );
          $("td:eq(5)", row).html(
            parseFloat(data.buah_pagi).toPrecision(3) + "%"
          );
          $("td:eq(6)", row).html(
            parseFloat(data.snack_pagi).toPrecision(3) + "%"
          );
          $("td:eq(7)", row).html(
            parseFloat(data.ratarata_pagi).toPrecision(3) + "%"
          );
          $("td:eq(8)", row).html(
            parseFloat(data.makanan_pokok_siang).toPrecision(3) + "%"
          );
          $("td:eq(9)", row).html(
            parseFloat(data.lauk_hewani_siang).toPrecision(3) + "%"
          );
          $("td:eq(10)", row).html(
            parseFloat(data.lauk_nabati_siang).toPrecision(3) + "%"
          );
          $("td:eq(11)", row).html(
            parseFloat(data.sayur_siang).toPrecision(3) + "%"
          );
          $("td:eq(12)", row).html(
            parseFloat(data.buah_siang).toPrecision(3) + "%"
          );
          $("td:eq(13)", row).html(
            parseFloat(data.snack_siang).toPrecision(3) + "%"
          );
          $("td:eq(14)", row).html(
            parseFloat(data.ratarata_siang).toPrecision(3) + "%"
          );
          $("td:eq(15)", row).html(
            parseFloat(data.makanan_pokok_malam).toPrecision(3) + "%"
          );
          $("td:eq(16)", row).html(
            parseFloat(data.lauk_hewani_malam).toPrecision(3) + "%"
          );
          $("td:eq(17)", row).html(
            parseFloat(data.lauk_nabati_malam).toPrecision(3) + "%"
          );
          $("td:eq(18)", row).html(
            parseFloat(data.sayur_malam).toPrecision(3) + "%"
          );
          $("td:eq(19)", row).html(
            parseFloat(data.buah_malam).toPrecision(3) + "%"
          );
          $("td:eq(20)", row).html(
            parseFloat(data.snack_malam).toPrecision(3) + "%"
          );
          $("td:eq(21)", row).html(
            parseFloat(data.ratarata_malam).toPrecision(3) + "%"
          );
          $("td:eq(22)", row).html(
            parseFloat(data.ratarata).toPrecision(3) + "%"
          );
        },
      });

      var table = $("#nilaiLengkap").DataTable({
        paging: false,
        info: false,
        ajax: {
          url: `https://e-comstock.herokuapp.com/api/pasienNilaiLengkapUser/${id_user}`,
          type: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        },
        dom: "Bfrtip",
        buttons: ["excel", "print"],
        columns: [
          { data: "nama_pasien", name: "nama_pasien" },
          { data: "no_rekam_medis", name: "no_rekam_medis" },
          { data: "siklus", name: "siklus" },
          { data: "nama_bangsal", name: "nama_bangsal" },
          { data: "tanggal", name: "tanggal" },
          { data: "makanan_pokok_pagi", name: "makanan_pokok_pagi" },
          { data: "lauk_hewani_pagi", name: "lauk_hewani_pagi" },
          { data: "lauk_nabati_pagi", name: "lauk_nabati_pagi" },
          { data: "sayur_pagi", name: "sayur_pagi" },
          { data: "buah_pagi", name: "buah_pagi" },
          { data: "snack_pagi", name: "snack_pagi" },
          { data: "makanan_pokok_siang", name: "makanan_pokok_siang" },
          { data: "lauk_hewani_siang", name: "lauk_hewani_siang" },
          { data: "lauk_nabati_siang", name: "lauk_nabati_siang" },
          { data: "sayur_siang", name: "sayur_siang" },
          { data: "buah_siang", name: "buah_siang" },
          { data: "snack_siang", name: "snack_siang" },
          { data: "makanan_pokok_malam", name: "makanan_pokok_malam" },
          { data: "lauk_hewani_malam", name: "lauk_hewani_malam" },
          { data: "lauk_nabati_malam", name: "lauk_nabati_malam" },
          { data: "sayur_malam", name: "sayur_malam" },
          { data: "buah_malam", name: "buah_malam" },
          { data: "snack_malam", name: "snack_malam" },
        ],
        rowCallback: function(row, data) {
          $("td:eq(5)", row).html(data.makanan_pokok_pagi + "%");
          $("td:eq(6)", row).html(data.lauk_hewani_pagi + "%");
          $("td:eq(7)", row).html(data.lauk_nabati_pagi + "%");
          $("td:eq(8)", row).html(data.sayur_pagi + "%");
          $("td:eq(9)", row).html(data.buah_pagi + "%");
          $("td:eq(10)", row).html(data.snack_pagi + "%");
          $("td:eq(11)", row).html(data.makanan_pokok_siang + "%");
          $("td:eq(12)", row).html(data.lauk_hewani_siang + "%");
          $("td:eq(13)", row).html(data.lauk_nabati_siang + "%");
          $("td:eq(14)", row).html(data.sayur_siang + "%");
          $("td:eq(15)", row).html(data.buah_siang + "%");
          $("td:eq(16)", row).html(data.snack_siang + "%");
          $("td:eq(17)", row).html(data.makanan_pokok_malam + "%");
          $("td:eq(18)", row).html(data.lauk_hewani_malam + "%");
          $("td:eq(19)", row).html(data.lauk_nabati_malam + "%");
          $("td:eq(20)", row).html(data.sayur_malam + "%");
          $("td:eq(21)", row).html(data.buah_malam + "%");
          $("td:eq(22)", row).html(data.snack_malam + "%");
        },
      });
      $("#tanggal").on("change", function() {
        table.search(this.value).draw();
      });
      $(".dataTables_filter").hide();
    });

    return {
      bangsal,
    };
  },
};
</script>
