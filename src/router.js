import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Characters from './components/Characters.vue';
import Character from './components/Character.vue';
import Location from './components/Location.vue';
import Error404 from './components/Error404.vue';

Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [
     { path: '/', component: Home ,name: 'home',},
    { path: '/location/:id',abstract: true,  component: Location, alias: '/' },
    { path: '/characters', component: Characters, alias: '/',name: 'characters', },
    { path: '/character/:id', component: Character, alias: '/' },
    { path: '*', component: Error404, alias: '/' },
    
  ]
});
