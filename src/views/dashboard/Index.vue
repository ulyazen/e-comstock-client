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
    <div class="jumbotron">
      <h1 class="display-5">Selamat Datang pada Aplikasi E-Comstock!</h1>
      <hr class="my-4" />
      <p>Panuan Penggunaan Aplikasi E-Comstock.</p>
      <p>Cara Mengisi Data</p>
      <p>
        1. Isi data kelompok pada menu ‘Buat File Baru’ (Jika data yang diisi
        merupakan data baru). Data kelompok meliputi nama bangsal/ruangan,
        siklus menu, dan tanggal penilaian. Setelah data terisi, simpan data
        dengan cara klik bar ‘submit’
      </p>
      <p>
        2. Scroll atau tarik layar menuju bagian bawah untuk melihat data
        kelompok yang sudah diisi, klik bar ‘data pasien’ untuk mengisi data
        individu sesuai dengan kelompoknya. Data individu meliputi nama dan
        nomor rekam medis, simpan data tersebut dengan cara klik bar ‘submit’.
        Data tersebut akan tersimpan, kemudian data individu baru dapat diisi
        lagi dalam kelompok tersebut.
      </p>
      <p>
        3. Untuk menilai sisa makanan pada individu klik bar ‘Sisa Makanan ……..’
        sesuai waktu makan pada bagian kanan nama pasien, isi sesuai waktu
        makan.
      </p>
      <p>
        4. Isi penilaian sisa makanan sesuai jenis makanan dengan ketentuan
        skala sebagai berikut :
      </p>
      <ul>
        <li>
          0% : Makanan habis
        </li>
        <li>
          25% : Dimakan
        </li>
        <li>
          50% : Dimakan 50%
        </li>
        <li>
          75% : Dimakan 25%
        </li>
        <li>
          100% : Makanan utuh
        </li>
      </ul>
      <p>
        Simpan hasil penilaian dengan cara klik bar ‘Submit’, tekan tombol
        kembali untuk menilai sisa makanan waktu yang lain atau pasien yang
        lain. Untuk melihat hasil penilaian sisa makanan klik bar ‘tampilkan
        data’.
      </p>
      <p>
        5. Untuk menilai kembali pada data kelompok dan individu yang sudah
        diisi, klik menu file tersimpan, kemudian klik data pasien sesuai
        kelompok dan nilai seperti langkah 3
      </p>
      <p>
        6. Untuk melihat rata-rata hasil penilaian klik menu ‘Hasil Penilaian’
        kemudian klik bar ‘rata-rata sisa makanan…….’ bedasarkan kelompok data
        yang diinginkan
      </p>
      <p>
        7. Untuk mendownload file rata-rata sisa makanan klik bar ‘excel’,
        tunggu hingga file tersimpan dalam Hp atau PC
      </p>
      <p>
        8. Untuk mencetak file rata-rata sisa makanan klik bar ‘print’ kemudian
        lanjutkan proses cetak sesuai Hp atau PC masing-masing.
      </p>
      <router-link
        :to="{
          name: 'pengisian.bangsal',
        }"
        class="btn btn-primary btn"
      >
        Buat File Baru</router-link
      >
    </div>
    <div class="row row-cols-1 row-cols-md-3">
      <div class="col mb-4">
        <div class="card border-info">
          <div class="row no-gutters">
            <div class="col-md-4 my-5" align="center">
              <i class="fas fa-hospital fa-5x text-info"></i>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Jumlah Bangsal yang Sudah Tercatat</h5>
                <p class="card-text">550</p>
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
                <p class="card-text">100</p>
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
                <p class="card-text">100</p>
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
