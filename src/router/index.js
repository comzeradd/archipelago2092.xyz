import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';
import Network from '@/components/Network';
import Ipfs from '@/components/Ipfs';
import Narrative from '@/components/Narrative';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/network',
      name: 'network',
      component: Network
    },
    {
      path: '/ipfs',
      name: 'ipfs',
      component: Ipfs
    },
    {
      path: '/narrative',
      name: 'narrative',
      component: Narrative
    }
  ]
});
