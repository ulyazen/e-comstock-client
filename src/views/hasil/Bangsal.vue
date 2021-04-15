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
              name: 'hasil.index',
            }"
            class="breadcrumb-item"
          >
            Hasil Penilaian</router-link
          >
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Hasil Penilaian Bangsal {{ bangsal.nama_bangsal }}
        </li>
      </ol>
    </nav>
    <div class="card">
      <div class="card-header">
        Hasil Penilaian Bangsal {{ bangsal.nama_bangsal }}
      </div>
      <div class="card-body">
        <div class="accordion" id="accordionExample">
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
                  Rata-rata Sisa Makanan Bedasarkan Siklus dan Jenis Makanan
                  Bangsal
                  {{ bangsal.nama_bangsal }}
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
                  <table
                    class="table"
                    style="width: 100%"
                    id="rataMakananBangsal"
                  >
                    <thead>
                      <tr>
                        <th>Nama Bangsal</th>
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
                  Rata-rata Sisa Makanan Bedasarkan Siklus Bangsal
                  {{ bangsal.nama_bangsal }}
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
                <div class="table-responsive">
                  <table class="table" style="width: 100%" id="rataBangsal">
                    <thead>
                      <tr>
                        <th>Nama Bangsal</th>
                        <th>Siklus</th>
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
                  Rata-rata Lengkap Bangsal {{ bangsal.nama_bangsal }}
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
                  <table
                    class="table"
                    style="width: 100%"
                    id="rataLengkapBangsal"
                  >
                    <thead>
                      <tr>
                        <th>Nama Bangsal</th>
                        <th>Siklus</th>
                        <th>Nama Pasien</th>
                        <th>Nomor Rekam Medis</th>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import $ from "jquery";
import axios from "axios";

export default {
  setup() {
    let token = localStorage.getItem("token");
    const bangsal = reactive({
      nama_bangsal: "",
    });
    const route = useRoute();
    onMounted(() => {
      axios
        .get(`/api/bangsal/${route.params.id}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((result) => {
          bangsal.nama_bangsal = result.data.data.nama;
        });

      $("#rataMakananBangsal").DataTable({
        searching: false,
        paging: false,
        info: false,
        ajax: {
          url: `https://e-comstock.herokuapp.com/api/pasienAvgSisaMakanan/${route.params.id}`,
          type: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        },
        dom: "Bfrtip",
        buttons: ["excel", "print"],
        columns: [
          { data: "nama", name: "nama" },
          { data: "siklus", name: "siklus" },
          { data: "makanan_pokok", name: "makanan_pokok" },
          { data: "lauk_hewani", name: "lauk_hewani" },
          { data: "lauk_nabati", name: "lauk_nabati" },
          { data: "sayur", name: "sayur" },
          { data: "buah", name: "buah" },
          { data: "snack", name: "snack" },
        ],
        rowCallback: function(row, data) {
          $("td:eq(2)", row).html(
            parseFloat(data.makanan_pokok).toPrecision(3) + "%"
          );
          $("td:eq(3)", row).html(
            parseFloat(data.lauk_hewani).toPrecision(3) + "%"
          );
          $("td:eq(4)", row).html(
            parseFloat(data.lauk_nabati).toPrecision(3) + "%"
          );
          $("td:eq(5)", row).html(parseFloat(data.sayur).toPrecision(3) + "%");
          $("td:eq(6)", row).html(parseFloat(data.buah).toPrecision(3) + "%");
          $("td:eq(7)", row).html(parseFloat(data.snack).toPrecision(3) + "%");
        },
      });
      $("#rataBangsal").DataTable({
        searching: false,
        paging: false,
        info: false,
        ajax: {
          url: `https://e-comstock.herokuapp.com/api/pasienAvgSisa/${route.params.id}`,
          type: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        },
        dom: "Bfrtip",
        buttons: ["excel", "print"],
        columns: [
          { data: "nama", name: "nama" },
          { data: "siklus", name: "siklus" },
          { data: "ratarata", name: "ratarata" },
        ],
        rowCallback: function(row, data) {
          $("td:eq(2)", row).html(
            parseFloat(data.ratarata).toPrecision(3) + "%"
          );
        },
      });
      $("#rataLengkapBangsal").DataTable({
        searching: false,
        paging: false,
        info: false,
        ajax: {
          url: `https://e-comstock.herokuapp.com/api/pasienAvgLengkap/${route.params.id}`,
          type: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        },
        dom: "Bfrtip",
        buttons: ["excel", "print"],
        columns: [
          { data: "nama_bangsal", name: "nama_bangsal" },
          { data: "siklus", name: "siklus" },
          { data: "nama", name: "nama" },
          { data: "no_rekam_medis", name: "no_rekam_medis" },
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
          $("td:eq(4)", row).html(
            parseFloat(data.makanan_pokok_pagi).toPrecision(3) + "%"
          );
          $("td:eq(5)", row).html(
            parseFloat(data.lauk_hewani_pagi).toPrecision(3) + "%"
          );
          $("td:eq(6)", row).html(
            parseFloat(data.lauk_nabati_pagi).toPrecision(3) + "%"
          );
          $("td:eq(7)", row).html(
            parseFloat(data.sayur_pagi).toPrecision(3) + "%"
          );
          $("td:eq(8)", row).html(
            parseFloat(data.buah_pagi).toPrecision(3) + "%"
          );
          $("td:eq(9)", row).html(
            parseFloat(data.snack_pagi).toPrecision(3) + "%"
          );
          $("td:eq(10)", row).html(
            parseFloat(data.makanan_pokok_siang).toPrecision(3) + "%"
          );
          $("td:eq(11)", row).html(
            parseFloat(data.lauk_hewani_siang).toPrecision(3) + "%"
          );
          $("td:eq(12)", row).html(
            parseFloat(data.lauk_nabati_siang).toPrecision(3) + "%"
          );
          $("td:eq(13)", row).html(
            parseFloat(data.sayur_siang).toPrecision(3) + "%"
          );
          $("td:eq(14)", row).html(
            parseFloat(data.buah_siang).toPrecision(3) + "%"
          );
          $("td:eq(15)", row).html(
            parseFloat(data.snack_siang).toPrecision(3) + "%"
          );
          $("td:eq(16)", row).html(
            parseFloat(data.makanan_pokok_malam).toPrecision(3) + "%"
          );
          $("td:eq(17)", row).html(
            parseFloat(data.lauk_hewani_malam).toPrecision(3) + "%"
          );
          $("td:eq(18)", row).html(
            parseFloat(data.lauk_nabati_malam).toPrecision(3) + "%"
          );
          $("td:eq(19)", row).html(
            parseFloat(data.sayur_malam).toPrecision(3) + "%"
          );
          $("td:eq(20)", row).html(
            parseFloat(data.buah_malam).toPrecision(3) + "%"
          );
          $("td:eq(21)", row).html(
            parseFloat(data.snack_malam).toPrecision(3) + "%"
          );
        },
      });
    });
    return {
      bangsal,
    };
  },
};
</script>
