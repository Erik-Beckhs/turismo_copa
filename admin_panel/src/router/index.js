import Vue from 'vue';
import VueRouter from 'vue-router';
import Inicio from '@/views/Inicio.vue';
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
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
