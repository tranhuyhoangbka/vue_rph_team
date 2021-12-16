// Define routes to components
import Home from './components/Home.vue'
import PostList from './components/PostList.vue'

const PostDetail = () => import(/* webpackChunkName: "postdetail" */ './components/PostDetail.vue')
const PostAuthor = () => import(/* webpackChunkName: "postdetail" */ './components/PostAuthor.vue')
const PostComments = () => import(/* webpackChunkName: "postdetail" */ './components/PostComments.vue')
const PostStart = () => import(/* webpackChunkName: "postdetail" */ './components/PostStart.vue')

import TopestHeader from './components/Shared/TopestHeader.vue'
import Error from './components/404NotFound.vue'


export const routes = [
  {path: '/', name: 'homepage',
    components: {
      default: Home,
      'top-header': TopestHeader
    }
  },
  {path: '/postlist/:type', name: 'postlist', component: PostList},
  {path: '/postdetail/:id', name: 'postdetail', component: PostDetail, children: [
    {path: '', name: 'poststart', component: PostStart},
    {path: 'author', name: 'postauthor', component: PostAuthor, beforeEnter: (to, from, next) => {
      console.log('Per-Route Guard');
      next();
    }},
    {path: 'comments', name: 'comments', component: PostComments},
  ]},
  {path: '/auth-redirect', redirect: {name: 'homepage'}},
  {path: '/404', name:'errorpage', component: Error},
  {path: '*', redirect: '/404'}
]
