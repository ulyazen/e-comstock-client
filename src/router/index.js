import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    component: () => import("../layout/DashboardLayout.vue"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard.index",
        component: () => import("../views/dashboard/Index.vue"),
      },
      {
        path: "/pengisian",
        name: "pengisian.index",
        component: () => import("../views/pengisian/Index.vue"),
      },
      {
        path: "/pengisian/bangsal/",
        name: "pengisian.bangsal",
        component: () => import("../views/pengisian/Bangsal.vue"),
      },
      {
        path: "/pengisian/pasien/:id",
        name: "pengisian.pasien",
        component: () => import("../views/pengisian/Pasien.vue"),
      },
      {
        path: "/pengisian/sisa/pagi/:id_bangsal/:id",
        name: "pengisian.pagi",
        component: () => import("../views/pengisian/Pagi.vue"),
      },
      {
        path: "/pengisian/sisa/siang/:id_bangsal/:id",
        name: "pengisian.siang",
        component: () => import("../views/pengisian/Siang.vue"),
      },
      {
        path: "/pengisian/sisa/malam/:id_bangsal/:id",
        name: "pengisian.malam",
        component: () => import("../views/pengisian/Malam.vue"),
      },
      {
        path: "/pengisian/detail/:id_bangsal/:id",
        name: "pengisian.detail",
        component: () => import("../views/pengisian/Detail.vue"),
      },
      {
        path: "/bangsal",
        name: "bangsal.index",
        component: () => import("../views/bangsal/Index.vue"),
      },
      {
        path: "/bangsal/create",
        name: "bangsal.create",
        component: () => import("../views/bangsal/Create.vue"),
      },
      {
        path: "/bangsal/edit/:id",
        name: "bangsal.edit",
        component: () => import("../views/bangsal/Edit.vue"),
      },
      {
        path: "/pasien",
        name: "pasien.index",
        component: () => import("../views/pasien/Index.vue"),
      },
      {
        path: "/pasien/create",
        name: "pasien.create",
        component: () => import("../views/pasien/Create.vue"),
      },
      {
        path: "/pasien/edit/:id",
        name: "pasien.edit",
        component: () => import("../views/pasien/Edit.vue"),
      },
      {
        path: "/hasil/",
        name: "hasil.index",
        component: () => import("../views/hasil/Index.vue"),
      },
    ],
  },
  // {
  //   path: "/",
  //   redirect: "login",
  //   component: AuthLayout,
  //   children: [
  //     {
  //       path: "/login",
  //       name: "login.index",
  //       component: () => import("../views/login/Index.vue"),
  //     },
  //     {
  //       path: "/register",
  //       name: "register.index",
  //       component: () => import("../views/register/Index.vue"),
  //     },
  //   ],
  // },
  // {
  //   path: '*',
  //   name: "notFound.index",
  //   component: () => import("../views/notFound/Index.vue"),
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
