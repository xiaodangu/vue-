import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const routes = [
  {
    path: '/',
    name: "index",
    component: () => import('@/views/index'),
    meta:{title:'首页'}
  }
];

const router = new Router({
  mode: 'history',
  routes
});

export default router;
