<template>
  <div class="container h-100 vertical-center">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-xl-7 col-lg-12 col-md-6 mx-auto">
        <div class="card o-hidden border-0 shadow-sm">
          <div class="card-body p-0 shadow-sm border border-light rounded">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-12 ">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-info mb-4">
                      Login Aplikasi E-Comstock
                    </h1>
                  </div>

                  <form @submit.prevent="login()">
                    <div class="form-group">
                      <label for="email">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        v-model="user.email"
                        placeholder="Masukkan email"
                      />
                    </div>

                    <div class="form-group">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        v-model="user.password"
                        placeholder="Masukkan password"
                      />
                    </div>

                    <div v-if="validation.error" class="text-danger">
                      {{ validation.error[0] }}
                    </div>
                    <br />
                    <button
                      type="submit"
                      class="btn btn-info btn-user btn-block"
                    >
                      Login
                    </button>
                  </form>
                  <hr />
                  <div class="text-center">
                    <router-link
                      :to="{
                        name: 'register',
                      }"
                      class="small text-info"
                    >
                      Belum memiliki akun? Daftar!</router-link
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
import { reactive } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  data() {
    return {
      loggedIn: localStorage.getItem("loggedIn"),
      token: localStorage.getItem("token"),
      loginFailed: null,
    };
  },
  setup() {
    const user = reactive({
      email: "",
      password: "",
    });
    const validation = reactive({
      error: "",
    });

    const router = useRouter();
    function login() {
      if (user.email.length > 0 && user.password.length > 0) {
        axios.get("/sanctum/csrf-cookie").then(() => {
          axios.post("/api/login", user).then((response) => {
            if (response.data.success) {
              localStorage.setItem("loggedIn", "true");

              //set localStorage Token
              localStorage.setItem("token", response.data.content.access_token);

              //change state
              this.loggedIn = true;
              router.push({
                name: "dashboard.index",
              });
            } else if (!response.data.success) {
              this.loginFailed = true;
              validation.error = response.data.message;
            }
          });
        });
      }
    }
    return {
      user,
      validation,
      router,
      login,
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
