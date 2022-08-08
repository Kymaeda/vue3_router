import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue'
import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import ArticlePage from './pages/ArticlePage.vue';
import ArticlesByTagPage from './pages/ArticlesByTagPage.vue';
import ArticleCommentList from './pages/ArticlePage/ArticleCommentList.vue';
import ArticleAuthor from './pages/ArticlePage/ArticleAuthor.vue';
import Logging from './pages/LoggingPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'home',
    alias: ['/home', '/top'],
  },
  {
    path: '/about',
    component: AboutPage,
    name: 'about',
  },
  {
    path: '/articles/:id(\\d+)',
    component: ArticlePage,
    name: 'articles',
    props: true,
    children: [
      {
        path: '',
        component: ArticleCommentList,
        name: 'articles.comments',
        props: true,
      },
      {
        path: 'author',
        component: ArticleAuthor,
        name: 'articles.author',
      },
    ],
  },
  {
    path: '/tags/:tags+',
    name: 'tag',
    component: ArticlesByTagPage,
    props: true,
  },
  {
    path: '/:url(.+)?',
    component: NotFoundPage,
    name: 'Not Found',
  },
  {
    path: '/logging',
    component: Logging,
    name: 'logging',
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


router.beforeEach((to, from) => {
  console.log(`global beforeEach: from ${from.name} to ${to.name}`);
  // avoid redirecting to the page if beforeEach method returns false
  // return false;
  // beforeEach method could return `true`, `undefined` or no return values , or alternative path( or router definition)
  if (['logging', 'home', 'about'].includes(to.name)) {
    return true
  }
  return { name: 'logging', query: { redirect: to.fullPath } }
})

const app = createApp(App)
app.use(router)
app.mount('#app')
