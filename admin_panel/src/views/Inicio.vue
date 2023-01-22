<template>
  <div class="inicio">
    <v-container class="grey lighten-5 px-15">
        <div class="text-h4">Inicio</div>
        <hr class="line-blue" />
            <v-row class="pt-3">
                            <!--<v-col lg="6" cols="12" v-for="(item,index) in itemsInicio" :key="index">
                                <v-card elevation="2" class="rounded-lg pa-3">
                                    <v-card-text class="d-flex justify-space-between align-center">
                                        <div>
                                            <v-card-title style="font-size:2rem;">{{item.cantidad}}</v-card-title>
                                            <strong class="ps-5 grey--text" style="font-size:1.2rem;">{{ item.title }}</strong>
                                        </div>
                                        <img width="100" src="@/assets/flaticon/programador.png"/>
                                    </v-card-text>
                                    <v-card-actions class="d-flex justify-end">
                                        <router-link class="underline-none" :to="item.route">
                                            <v-btn small rounded color="primary" dark>
                                            Ver Información
                                        </v-btn>
                                        </router-link>
                                    </v-card-actions>
                                </v-card>
                            </v-col>-->
                            <v-col lg="4" cols="4">
                                <v-card elevation="2" class="rounded-lg pa-3">
                                    <v-card-text class="d-flex justify-space-between align-center">
                                        <div>
                                            <v-card-title class="text-h2">50</v-card-title>
                                            <strong class="ps-5 grey--text text-h5">Usuarios</strong>
                                        </div>
                                        <img width="100" src="@/assets/flaticon/programador.png"/>
                                    </v-card-text>
                                    <v-card-actions class="d-flex justify-end">
                                        <router-link class="underline-none" to="#">
                                            <v-btn small rounded color="primary" dark>
                                            Ver Información
                                        </v-btn>
                                        </router-link>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                            <v-col lg="4" cols="4">
                                 <v-card elevation="2" class="rounded-lg pa-3">
                                    <v-card-text class="d-flex justify-space-between align-center">
                                        <div>
                                            <v-card-title class="text-h2">{{cantidadHospedajes}}</v-card-title>
                                            <strong class="ps-5 grey--text text-h5">Hoteles</strong>
                                        </div>
                                        <img width="100" src="@/assets/flaticon/hotel.png"/>
                                    </v-card-text>
                                    <v-card-actions class="d-flex justify-end">
                                        <router-link class="underline-none" to="/hospedajes">
                                            <v-btn small rounded color="primary" dark>
                                            Ver Información
                                        </v-btn>
                                        </router-link>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                            <v-col lg="4" cols="4">
                                <v-card elevation="2" class="rounded-lg pa-3">
                                    <v-card-text class="d-flex justify-space-between align-center">
                                        <div>
                                            <v-card-title class="text-h2">{{cantidadAtractivos}}</v-card-title>
                                            <strong class="ps-5 grey--text text-h5">Atractivos</strong>
                                        </div>
                                        <img width="100" src="@/assets/flaticon/turismo.png"/>
                                    </v-card-text>
                            
                                    <v-card-actions class="d-flex justify-end">
                                        <router-link class="underline-none" to="/atractivos">
                                        <v-btn small rounded color="primary" dark>
                                            Ver Información
                                        </v-btn>
                                        </router-link>
                                    </v-card-actions>
                                    </v-card>
                            </v-col>
                            <v-col lg="4" cols="4" class="pt-10">
                                <v-card elevation="2" class="rounded-lg pa-3">
                                    <v-card-text class="d-flex justify-space-between align-center">
                                        <div>
                                            <v-card-title class="text-h2">{{cantidadNoticias}}</v-card-title>
                                            <strong class="ps-5 grey--text text-h5">Noticias</strong>
                                        </div>
                                        <img width="100" src="@/assets/flaticon/periodico.png"/>
                                    </v-card-text>
                            
                                    <v-card-actions class="d-flex justify-end">
                                        <router-link class="underline-none" to="/noticias">
                                        <v-btn small rounded color="primary" dark>
                                            Ver Información
                                        </v-btn>
                                        </router-link>
                                    </v-card-actions>
                                    </v-card>
                            </v-col>
                            <v-col lg="4" cols="4" class="pt-10">
                                <v-card elevation="2" class="rounded-lg pa-3">
                                    <v-card-text class="d-flex justify-space-between align-center">
                                        <div>
                                            <v-card-title class="text-h2">{{cantidadResenas}}</v-card-title>
                                            <strong class="ps-5 grey--text text-h5">Reseñas</strong>
                                        </div>
                                        <img width="100" src="@/assets/flaticon/buena-resena.png"/>
                                    </v-card-text>
                            
                                    <v-card-actions class="d-flex justify-end">
                                        <router-link class="underline-none" to="/resenas">
                                        <v-btn small rounded color="primary" dark>
                                            Ver Información
                                        </v-btn>
                                        </router-link>
                                    </v-card-actions>
                                    </v-card>
                            </v-col>
                            <v-col lg="4" cols="4" class="pt-10">
                                <v-card elevation="2" class="rounded-lg pa-3">
                                    <v-card-text class="d-flex justify-space-between align-center">
                                        <div>
                                            <v-card-title class="text-h2">58</v-card-title>
                                            <strong class="ps-5 grey--text text-h5">Fotos en Galería</strong>
                                        </div>
                                        <img width="100" src="@/assets/flaticon/galeria.png"/>
                                    </v-card-text>
                            
                                    <v-card-actions class="d-flex justify-end">
                                        <router-link class="underline-none" to="#">
                                        <v-btn small rounded color="primary" dark>
                                            Ver Información
                                        </v-btn>
                                        </router-link>
                                    </v-card-actions>
                                    </v-card>
                            </v-col>
            </v-row>
    </v-container>
    </div>
</template>
<script>
import HospedajeService from '@/services/HospedajeService';
import AtractivoService from '@/services/AtractivoService';
import NoticiaService from '@/services/NoticiaService';
import ResenaService from '@/services/ResenasService';

    export default {
        name: 'Inicio',
        data(){
            return{
                itemsInicio:[
                    {
                    title:'Usuarios',
                    color:'green',
                    cantidad:10,
                    image:'@/assets/flaticon/programador.png',
                    route:'#'
                    },
                    {
                    title:'Hoteles',
                    color:'green',
                    cantidad:52,
                    image:'../assets/flaticon/hotel.png',
                    route:'/hospedajes'
                    },
                    {
                    title:'Atractivos',
                    color:'green',
                    cantidad:33,
                    image:'turismo.png',
                    route:'/atractivos'
                    },
                    {
                    title:'Eventos Programados',
                    color:'green',
                    cantidad:0,
                    image:'calendario-de-escritorio.png',
                    route:'/eventos'
                    },
                    {
                    title:'Reseñas',
                    color:'green',
                    cantidad:52,
                    image:'buena-resena.png',
                    route:'resenas'
                    },
                    {
                    title:'Fotos en Galeria',
                    color:'green',
                    cantidad:213,
                    image:'galeria.png',
                    route:'#'
                    }
                ],
                cantidadHospedajes:0,
                cantidadAtractivos:0,
                cantidadResenas:0,
                cantidadNoticias:0
            }
        }, 
        mounted(){
            this.cargaCantidades();
        },
        methods:{
            cargaCantidades(){
                this.getCantidadHospedajes();
                this.getCantidadAtractivos();
                this.getCantidadNoticias();
                this.getCantidadResenas();
            },
            getCantidadHospedajes(){
                HospedajeService.countHospedajes().then(response => this.cantidadHospedajes=('0'+response.data.count).slice(-2));
            },
            getCantidadAtractivos(){
                AtractivoService.countAtractivos().then(response => this.cantidadAtractivos=('0'+response.data.count).slice(-2));
            },
            getCantidadResenas(){
                ResenaService.countResenas().then(response => this.cantidadResenas=('0'+response.data.count).slice(-2));
            },
            getCantidadNoticias(){
                NoticiaService.countNoticias().then(response => this.cantidadNoticias=('0'+response.data.count).slice(-2));
            }

        }
    }
</script>
<style scoped>
    
</style>