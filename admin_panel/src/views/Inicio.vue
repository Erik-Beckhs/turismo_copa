<template>
  <div class="inicio">
    <h2>Inicio</h2>
    <v-row class="pt-3">
                    <v-col lg="6" cols="12" v-for="(item,index) in itemsInicio" :key="index">
                        <v-card elevation="2" class="rounded-lg pa-3">
                            <v-card-text class="d-flex justify-space-between align-center">
                                <div>
                                    <v-card-title style="font-size:2rem;">{{item.cantidad}}</v-card-title>
                                    <strong class="ps-5 grey--text" style="font-size:1.2rem;">{{ item.title }}</strong>
                                </div>
                                <img width="100" :src="'../assets/flaticon/'+item.image"/>
                            </v-card-text>
                            <v-card-actions class="d-flex justify-end">
                                <router-link class="underline-none" :to="item.route">
                                    <v-btn small rounded color="primary" dark>
                                    Ver Información
                                </v-btn>
                                </router-link>
                            </v-card-actions>
                        </v-card>
                    </v-col>
    </v-row>
    </div>
</template>
<script>
    export default {
        name: 'Inicio',
        data(){
            return{
                itemsInicio:[
                    {
                    title:'Usuarios',
                    color:'green',
                    cantidad:10,
                    image:'programador.png',
                    route:'#'
                    },
                    {
                    title:'Hoteles',
                    color:'green',
                    cantidad:52,
                    image:'hotel.png',
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
                    cantidad:7,
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
                ]
            }
        }
    }
</script>