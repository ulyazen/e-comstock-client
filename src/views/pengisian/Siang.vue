<template>
  <div class="my-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link
            :to="{
              name: 'pengisian.index',
            }"
            class="breadcrumb-item"
          >
            Pengisian</router-link
          >
        </li>
        <li class="breadcrumb-item">
          <router-link
            :to="{
              name: 'pengisian.pasien',
              params: { id: pengisian.id_bangsal },
            }"
            class="breadcrumb-item"
          >
            Data Pasien</router-link
          >
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Sisa Makanan Siang
        </li>
      </ol>
    </nav>
    <div class="card">
      <div class="card-header">Buat File Baru Bangsal</div>
      <div class="card-body">
        <form @submit.prevent="store()">
          <ul class="list-group">
            <li class="list-group-item">
              <div class="mb-3">
                <div class="form-group row">
                  <div class="col">
                    <label>Makanan Pokok</label>
                  </div>
                  <div class="col">
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.makanan_pokok"
                        value="0"
                      />
                      <span class="form-radio-sign mx-1">0%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.makanan_pokok"
                        value="25"
                      />
                      <span class="form-radio-sign mx-1">25%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.makanan_pokok"
                        value="50"
                      />
                      <span class="form-radio-sign mx-1">50%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.makanan_pokok"
                        value="75"
                      />
                      <span class="form-radio-sign mx-1">75%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.makanan_pokok"
                        value="95"
                      />
                      <span class="form-radio-sign mx-1">95%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.makanan_pokok"
                        value="100"
                      />
                      <span class="form-radio-sign mx-1">100%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        :checked="isChecked"
                        value=""
                        v-model="pengisian.makanan_pokok"
                      />
                      <span class="form-radio-sign mx-1">Tidak tersedia</span>
                    </label>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="mb-3">
                <div class="form-group row">
                  <div class="col">
                    <label>Lauk Hewani</label>
                  </div>
                  <div class="col">
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.lauk_hewani"
                        value="0"
                      />
                      <span class="form-radio-sign mx-1">0%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.lauk_hewani"
                        value="25"
                      />
                      <span class="form-radio-sign mx-1">25%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.lauk_hewani"
                        value="50"
                      />
                      <span class="form-radio-sign mx-1">50%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.lauk_hewani"
                        value="75"
                      />
                      <span class="form-radio-sign mx-1">75%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.lauk_hewani"
                        value="95"
                      />
                      <span class="form-radio-sign mx-1">95%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.lauk_hewani"
                        value="100"
                      />
                      <span class="form-radio-sign mx-1">100%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        :checked="isChecked"
                        value=""
                        v-model="pengisian.lauk_hewani"
                      />
                      <span class="form-radio-sign mx-1">Tidak Tersedia</span>
                    </label>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="mb-3">
                <div class="form-group row">
                  <div class="col">
                    <label>Lauk Nabati</label>
                  </div>
                  <div class="col">
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.lauk_nabati"
                        value="0"
                      />
                      <span class="form-radio-sign mx-1">0%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.lauk_nabati"
                        value="25"
                      />
                      <span class="form-radio-sign mx-1">25%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.lauk_nabati"
                        value="50"
                      />
                      <span class="form-radio-sign mx-1">50%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.lauk_nabati"
                        value="75"
                      />
                      <span class="form-radio-sign mx-1">75%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.lauk_nabati"
                        value="95"
                      />
                      <span class="form-radio-sign mx-1">95%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.lauk_nabati"
                        value="100"
                      />
                      <span class="form-radio-sign mx-1">100%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        :checked="isChecked"
                        value=""
                        v-model="pengisian.lauk_nabati"
                      />
                      <span class="form-radio-sign mx-1">Tidak Tersedia</span>
                    </label>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="mb-3">
                <div class="form-group row">
                  <div class="col">
                    <label>Sayur</label>
                  </div>
                  <div class="col">
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.sayur"
                        value="0"
                      />
                      <span class="form-radio-sign mx-1">0%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.sayur"
                        value="25"
                      />
                      <span class="form-radio-sign mx-1">25%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.sayur"
                        value="50"
                      />
                      <span class="form-radio-sign mx-1">50%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.sayur"
                        value="75"
                      />
                      <span class="form-radio-sign mx-1">75%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.sayur"
                        value="95"
                      />
                      <span class="form-radio-sign mx-1">95%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.sayur"
                        value="100"
                      />
                      <span class="form-radio-sign mx-1">100%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        :checked="isChecked"
                        value=""
                        v-model="pengisian.sayur"
                      />
                      <span class="form-radio-sign mx-1">Tidak Tersedia</span>
                    </label>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="mb-3">
                <div class="form-group row">
                  <div class="col">
                    <label>Buah</label>
                  </div>
                  <div class="col">
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.buah"
                        value="0"
                      />
                      <span class="form-radio-sign mx-1">0%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.buah"
                        value="25"
                      />
                      <span class="form-radio-sign mx-1">25%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.buah"
                        value="50"
                      />
                      <span class="form-radio-sign mx-1">50%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.buah"
                        value="75"
                      />
                      <span class="form-radio-sign mx-1">75%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.buah"
                        value="95"
                      />
                      <span class="form-radio-sign mx-1">95%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.buah"
                        value="100"
                      />
                      <span class="form-radio-sign mx-1">100%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        :checked="isChecked"
                        value=""
                        v-model="pengisian.buah"
                      />
                      <span class="form-radio-sign mx-1">Tidak Tersedia</span>
                    </label>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="mb-3">
                <div class="form-group row">
                  <div class="col">
                    <label>Snack</label>
                  </div>
                  <div class="col">
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.snack"
                        value="0"
                      />
                      <span class="form-radio-sign mx-1">0%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.snack"
                        value="25"
                      />
                      <span class="form-radio-sign mx-1">25%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.snack"
                        value="50"
                      />
                      <span class="form-radio-sign mx-1">50%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.snack"
                        value="75"
                      />
                      <span class="form-radio-sign mx-1">75%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.snack"
                        value="95"
                      />
                      <span class="form-radio-sign mx-1">95%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        v-model="pengisian.snack"
                        value="100"
                      />
                      <span class="form-radio-sign mx-1">100%</span>
                    </label>
                    <label class="form-radio-label mx-4 my-1">
                      <input
                        class="form-radio-input"
                        type="radio"
                        :checked="isChecked"
                        value=""
                        v-model="pengisian.snack"
                      />
                      <span class="form-radio-sign mx-1">Tidak Tersedia</span>
                    </label>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div v-if="validation.id_pasien" class="text-danger">
            {{ validation.id_pasien[0] }}
          </div>
          <button class="btn btn-info my-3">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
export default {
  data: function() {
    return {
      isChecked: false,
    };
  },
  setup() {
    let token = localStorage.getItem("token");
    const pengisian = reactive({
      id_bangsal: "",
      id_pasien: "",
      makanan_pokok: "",
      lauk_hewani: "",
      lauk_nabati: "",
      sayur: "",
      buah: "",
      snack: "",
    });

    const validation = ref([]);
    const router = useRouter();
    const route = useRoute();
    pengisian.id_bangsal = route.params.id_bangsal;
    pengisian.id_pasien = route.params.id;
    function store() {
      axios.get("/sanctum/csrf-cookie").then(() => {
        axios
          .post("/api/sisa/siang", pengisian, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then(() => {
            router.push({
              name: "pengisian.detail",
            });
          })
          .catch((err) => {
            validation.value = err.response.data;
          });
      });
    }
    return {
      pengisian,
      validation,
      router,
      store,
    };
  },
};
</script>
