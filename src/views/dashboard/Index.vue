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
    <div class="jumbotron bg-light border">
      <h1 class="display-5">Selamat Datang pada Aplikasi E-Comstock!</h1>
      <hr class="my-4" />

      <p>Panduan Penggunaan Aplikasi E-Comstock.</p>
      <p>Cara Mengisi Data :</p>
      <div class="card my-2">
        <div class="card-body">
          <h5><span class="badge badge-info">Tahap 1</span></h5>
          <p>
            Isi data kelompok pada menu ‘Buat File Baru’ (Jika data yang diisi
            merupakan data baru). Data kelompok meliputi nama bangsal/ruangan,
            siklus menu, dan tanggal penilaian. Setelah data terisi, simpan data
            dengan cara klik bar ‘submit’
          </p>
        </div>
      </div>
      <div class="card my-2">
        <div class="card-body">
          <h5><span class="badge badge-info">Tahap 2</span></h5>
          <p>
            Scroll atau tarik layar menuju bagian bawah untuk melihat data
            kelompok yang sudah diisi, klik bar ‘data pasien’ untuk mengisi data
            individu sesuai dengan kelompoknya. Data individu meliputi nama dan
            nomor rekam medis, simpan data tersebut dengan cara klik bar
            ‘submit’. Data tersebut akan tersimpan, kemudian data individu baru
            dapat diisi lagi dalam kelompok tersebut.
          </p>
        </div>
      </div>
      <div class="card my-2">
        <div class="card-body">
          <h5><span class="badge badge-info">Tahap 3</span></h5>
          <p>
            Untuk menilai sisa makanan pada individu klik bar ‘Sisa Makanan
            ……..’ sesuai waktu makan pada bagian kanan nama pasien, isi sesuai
            waktu makan.
          </p>
        </div>
      </div>
      <div class="card my-2">
        <div class="card-body">
          <h5><span class="badge badge-info">Tahap 4</span></h5>
          <p>
            Isi penilaian sisa makanan sesuai jenis makanan dengan ketentuan
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
        </div>
      </div>
      <div class="card my-2">
        <div class="card-body">
          <h5><span class="badge badge-info">Tahap 5</span></h5>
          <p>
            Untuk menilai kembali pada data kelompok dan individu yang sudah
            diisi, klik menu file tersimpan, kemudian klik data pasien sesuai
            kelompok dan nilai seperti langkah 3
          </p>
        </div>
      </div>
      <div class="card my-2">
        <div class="card-body">
          <h5><span class="badge badge-info">Tahap 6</span></h5>
          <p>
            Untuk melihat rata-rata hasil penilaian klik menu ‘Hasil Penilaian’
            kemudian klik bar ‘rata-rata sisa makanan…….’ bedasarkan kelompok
            data yang diinginkan
          </p>
        </div>
      </div>
      <div class="card my-2">
        <div class="card-body">
          <h5><span class="badge badge-info">Tahap 7</span></h5>
          <p>
            Untuk mendownload file rata-rata sisa makanan klik bar ‘excel’,
            tunggu hingga file tersimpan dalam Hp atau PC
          </p>
        </div>
      </div>
      <div class="card my-2">
        <div class="card-body">
          <h5><span class="badge badge-info">Tahap 8</span></h5>
          <p>
            Untuk mencetak file rata-rata sisa makanan klik bar ‘print’ kemudian
            lanjutkan proses cetak sesuai Hp atau PC masing-masing.
          </p>
        </div>
      </div>

      <router-link
        :to="{
          name: 'pengisian.bangsal',
        }"
        class="btn btn-info btn my-2"
      >
        Buat File Baru</router-link
      >
    </div>
  </div>
</template>
<script>
export default {};
</script>
