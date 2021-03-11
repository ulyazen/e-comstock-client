<template>
  <div class="my-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active">
          <router-link
            :to="{
              name: 'dashboard.index',
            }"
            class="breadcrumb-item"
          >
            Dashboard</router-link
          >
        </li>
      </ol>
    </nav>
    <div class="row row-cols-1 row-cols-md-3">
      <div class="col mb-4">
        <div class="card border-info">
          <div class="row no-gutters">
            <div class="col-md-4 my-5" align="center">
              <i class="fas fa-hospital fa-5x text-info"></i>
            </div>
            <div class="col-md-8 ">
              <div class="card-body">
                <h5 class="card-title">Jumlah Bangsal yang Sudah Tercatat</h5>
                <p class="card-text">
                  550
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col mb-4">
        <div class="card border-info">
          <div class="row no-gutters">
            <div class="col-md-4 my-5" align="center">
              <i class="fas fa-hospital-user fa-5x text-info"></i>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Jumlah Pasien yang Sudah Tercatat</h5>
                <p class="card-text">
                  100
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col mb-4">
        <div class="card border-info">
          <div class="row no-gutters">
            <div class="col-md-4 my-5" align="center">
              <i class="fas fa-user-nurse fa-5x text-info"></i>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Jumlah Pengguna Aplikasi E-Comstock</h5>
                <p class="card-text">
                  100
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col mb-4">
        <div class="card border-info w-100">
          <div class="card-header border-info">
            Rata-rata Grafik Sisa Makanan
          </div>
          <div class="card-body border-info">
            <apexchart :options="chartOptions" :series="series"></apexchart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueApexCharts from "vue3-apexcharts";
export default {
  data: function() {
    return {
      chartOptions: {
        chart: {
          width: "100%",
          height: 380,
          type: "bar",
          id: "vuechart-example",
        },
        xaxis: {
          categories: [
            "Makanan Pokok",
            "Lauk Hewani",
            "Lauk Nabati",
            "Sayur",
            "Buah",
            "Snack",
          ],
        },
        yaxis: {
          labels: {
            formatter: function(value) {
              return value + "%";
            },
          },
        },
      },
      series: [
        {
          name: "Rata-rata Sisa Makanan",
          data: [30, 40, 35, 50, 49],
        },
      ],
      responsive: [
        {
          breakpoint: 1000,
          options: {
            plotOptions: {
              bar: {
                horizontal: false,
              },
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };
  },
  components: {
    apexchart: VueApexCharts,
  },
};
</script>
