<template>
  <div class="inicio">
    <v-container class="grey lighten-5 px-15 mt-12">
        <span class="text-h5">Inicio</span>
        <hr class="line-blue" />
            <v-row class="pt-3">
                            <v-col lg="4" cols="4">
                                <v-card elevation="2" class="rounded-lg pa-3">
                                    <v-card-text class="d-flex justify-space-between align-center">
                                        <div>
                                            <v-card-title class="text-h2">{{cantidadResenasSinAprobar}}</v-card-title>
                                            <strong class="ps-5 grey--text text-h5">Reseñas sin Aprobar</strong>
                                        </div>
                                        <img width="100" src="@/assets/flaticon/mala-resena.png"/>
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
                            <v-col lg="4" cols="4">
                                <v-card elevation="2" class="rounded-lg pa-3">
                                    <v-card-text class="d-flex justify-space-between align-center">
                                        <div>
                                            <v-card-title class="text-h2">{{cantidadResenasAprobadas}}</v-card-title>
                                            <strong class="ps-5 grey--text text-h5">Reseñas Aprobadas</strong>
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
                            <v-col lg="4" cols="4" class="pt-10">
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
                                            <v-card-title class="text-h2">{{cantidadEventos}}</v-card-title>
                                            <strong class="ps-5 grey--text text-h5">Eventos Programados</strong>
                                        </div>
                                        <img width="100" src="@/assets/flaticon/calendario.png"/>
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
                cantidadHospedajes:0,
                cantidadAtractivos:0,
                cantidadResenasAprobadas:0,
                 cantidadResenasSinAprobar:0,
                cantidadNoticias:0,
                cantidadEventos:0,
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
                this.getCantidadEventos();
            },
            getCantidadHospedajes(){
                HospedajeService.countHospedajes().then(response => this.cantidadHospedajes=('0'+response.data.count).slice(-2));
            },
            getCantidadAtractivos(){
                AtractivoService.countAtractivos().then(response => {
                    this.cantidadAtractivos=('0'+response.data.count).slice(-2);
                });
            },
            getCantidadResenas(){
                ResenaService.countResenas(1).then(response => this.cantidadResenasAprobadas=('0'+response.data.count).slice(-2));
                ResenaService.countResenas(0).then(response => this.cantidadResenasSinAprobar=('0'+response.data.count).slice(-2));
            },
            getCantidadNoticias(){
                NoticiaService.countNoticias().then(response => this.cantidadNoticias=('0'+response.data.count).slice(-2));
            },
            getCantidadEventos(){
                AtractivoService.countEventos().then(response=>{
                    this.cantidadEventos = ('0'+response.data.count).slice(-2);
                })
            }

        }
    }
</script>
<style scoped>
    
</style>