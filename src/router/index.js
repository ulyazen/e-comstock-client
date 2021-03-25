import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/dashboard",
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
        path: "/sisa/pagi",
        name: "sisa_pagi.index",
        component: () => import("../views/sisa_pagi/Index.vue"),
      },
      {
        path: "/sisa/pagi/edit/:id",
        name: "sisa_pagi.edit",
        component: () => import("../views/sisa_pagi/Edit.vue"),
      },
      {
        path: "/sisa/siang",
        name: "sisa_siang.index",
        component: () => import("../views/sisa_siang/Index.vue"),
      },
      {
        path: "/sisa/siang/edit/:id",
        name: "sisa_siang.edit",
        component: () => import("../views/sisa_siang/Edit.vue"),
      },
      {
        path: "/sisa/malam",
        name: "sisa_malam.index",
        component: () => import("../views/sisa_malam/Index.vue"),
      },
      {
        path: "/sisa/malam/edit/:id",
        name: "sisa_malam.edit",
        component: () => import("../views/sisa_malam/Edit.vue"),
      },
      {
        path: "/hasil/",
        name: "hasil.index",
        component: () => import("../views/hasil/Index.vue"),
      },
      {
        path: "/hasil/bangsal/:id",
        name: "hasil.bangsal",
        component: () => import("../views/hasil/Bangsal.vue"),
      },
    ],
  },
  {
    path: "/",
    redirect: "login",
    component: () => import("../layout/AuthLayout.vue"),
    children: [
      {
        path: "/login",
        name: "login",
        component: () => import("../views/auth/Login.vue"),
      },
      {
        path: "/register",
        name: "register",
        component: () => import("../views/auth/Register.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
