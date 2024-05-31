import { createRouter, createWebHistory } from 'vue-router';
// @는 /src를 나타내는 별칭임. 쓸지 여부는 선택사항
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Members from '@/views/Members.vue';
import Videos from '@/views/Videos.vue';
// 주로 편집하는 곳은 router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

export default router;
