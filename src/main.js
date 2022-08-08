import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue'
import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import ArticlePage from './pages/ArticlePage.vue';
import ArticlesByTagPage from './pages/ArticlesByTagPage.vue';
import ArticleCommentList from './pages/ArticlePage/ArticleCommentList.vue';
import ArticleAuthor from './pages/ArticlePage/ArticleAuthor.vue';
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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
