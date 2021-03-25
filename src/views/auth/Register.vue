<template>
  <div class="container h-100  vertical-center">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-xl-7 col-lg-12 col-md-6 mx-auto ">
        <div class="card o-hidden border-0 shadow-sm">
          <div class="card-body p-0 shadow-sm border border-light rounded">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-12 ">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-info mb-4">Buat Akun</h1>
                  </div>

                  <form @submit.prevent="register()">
                    <div class="form-group">
                      <label for="nama">Nama Lengkap</label>
                      <input
                        type="text"
                        class="form-control form-control-user"
                        placeholder="Masukkan nama lengkap"
                        v-model="user.name"
                      />
                      <div v-if="validation.name" class="text-danger">
                        {{ validation.name[0] }}
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="email">Email</label>
                      <input
                        type="email"
                        class="form-control form-control-user"
                        placeholder="Masukkan email"
                        v-model="user.email"
                      />
                      <div v-if="validation.email" class="text-danger">
                        {{ validation.email[0] }}
                      </div>
                    </div>
                    <div class=" form-group ">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        class="form-control form-control-user"
                        placeholder="Masukkan password"
                        v-model="user.password"
                      />
                      <div v-if="validation.password" class="text-danger">
                        {{ validation.password[0] }}
                      </div>
                    </div>
                    <button
                      type="submit"
                      class="btn btn-info btn-user btn-block"
                    >
                      Daftar Akun
                    </button>
                  </form>
                  <hr />
                  <div class="text-center">
                    <router-link
                      :to="{
                        name: 'login',
                      }"
                      class="small text-info"
                    >
                      Sudah memiliki akun? Masuk!</router-link
                    >
                  </div>
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
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  data() {
    return {
      loggedIn: localStorage.getItem("loggedIn"),
    };
  },
  setup() {
    const user = reactive({
      name: "",
      email: "",
      password: "",
    });
    const validation = ref([]);
    const router = useRouter();
    function register() {
      axios.get("/sanctum/csrf-cookie").then(() => {
        axios
          .post("/api/register", user)
          .then(() => {
            router.push({
              name: "login",
            });
          })
          .catch((err) => {
            validation.value = err.response.data;
          });
      });
    }
    return {
      user,
      validation,
      router,
      register,
    };
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push({
        name: "dashboard.index",
      });
    }
  },
};
</script>
