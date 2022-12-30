import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import HomeNoticias from '@/views/HomeNoticias.vue';
import HomeHospedajes from '@/views/HomeHospedajes.vue';
import About from '@/views/About.vue';
import Inicio from '@/views/Inicio.vue';
import Login from '@/views/Login.vue';
import Atractivos from '@/views/Atractivos.vue';
import Atractivo from '@/views/Atractivo.vue';
import Resenas from '@/views/Resenas.vue';
import Pruebas from '@/views/Pruebas.vue';
import Hospedajes from '@/views/Hospedajes.vue';
import Hospedaje from '@/views/Hospedaje.vue';
import Eventos from '@/views/Eventos.vue';
import Evento from '@/views/Evento.vue';
import Noticias from '@/views/Noticias.vue';
import Noticia from '@/views/Noticia.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/SiteNoticias',
    name: 'homeNoticias',
    component: HomeNoticias
  },
  {
    path: '/SiteHospedajes',
    name: 'homeHospedajes',
    component: HomeHospedajes
  },
  {
    path: '/admin',
    name: 'login',
    component: Login
  },
  {
    path: '/main',
    name: 'about',
    component: About,
    children: [
      { path: "/", name: "inicio", component: Inicio },
      { path: "/atractivos", name: "atractivos", component: Atractivos },
      { path: "/atractivo/:id", name: "atractivo", component: Atractivo },
      { path: "/resenas", name: "resenas", component: Resenas },
      { path: "/hospedajes", name: "hospedajes", component: Hospedajes },
      { path: "/hospedaje/:id", name: "hospedaje", component: Hospedaje },
      { path: "/eventos", name: "eventos", component: Eventos },
      { path: "/evento/:id", name: "evento", component: Evento },
      { path: "/noticias", name: "noticias", component: Noticias },
      { path: "/noticia/:id", name: "noticia", component: Noticia },
    ]
  },
  /*{
    path: '/admin',
    name: 'inicio',
    component: Inicio
  },
  {
    path: '/atractivos',
    name: 'atractivos',
    component: Atractivos
  },
  {
    path: '/atractivo/:id',
    name: 'atractivo',
    component: Atractivo
  },
  {
    path: '/resenas',
    name: 'resenas',
    component: Resenas
  },
  {
    path: '/hospedajes',
    name: 'hospedajes',
    component: Hospedajes
  },

  {
    path: '/hospedaje/:id',
    name: 'hospedaje',
    component: Hospedaje
  },
  {
    path: '/eventos',
    name: 'eventos',
    component: Eventos
  },

  {
    path: '/evento/:id',
    name: 'evento',
    component: Evento
  },
  {
    path: '/noticias',
    name: 'noticias',
    component: Noticias
  },

  {
    path: '/noticia/:id',
    name: 'noticia',
    component: Noticia
  },
  {
    path: '/pruebas',
    name: 'Pruebas',
    component: Pruebas
  },*/ 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
