import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  // 映射关系：path -> component
  routes: [
    {
      path: "/",
      redirect: "home"
    },
    {
      path: "/home",
      // 懒加载
      component: () => import("@/views/home/home.vue")
    },
    {
      path: "/mall",
      component: () => import("@/views/mall/mall.vue")
    },
    {
      path: "/task",
      component: () => import("@/views/task/task.vue")
    },
    {
      path: "/mine",
      component: () => import("@/views/mine/mine.vue")
    },

  ]
})

export default router