<template>
    <div style="background: #F7F7F7;" id="div_servicios">
        <v-container>
			<v-flex>
				<v-row>
                    <v-col cols="12" md="12">
                        <v-row class="mt-3 justify-center align-center">
                            <span class="title-box px-4" style="color:#021F3C">
                            {{titulo}}
                            </span>
                        </v-row>
                        
                        <div class="contenido">
                            <v-row>
                            <p class="my-4">{{descripcion}}</p>
                            <v-text-field
                            placeholder="Búsqueda por Nombre"
                            outlined
                            rounded
                            v-model="busqueda"
                            dense
                            append-icon="mdi-magnify"
                             ></v-text-field>
                        </v-row>
                        
                        <v-row v-if="filter_list.length>0">
                            <v-col v-for="item in filter_list" :key="item.id" cols="12" sm="6" md="4" lg="3">
                                  <v-card
                                    class="mx-auto"
                                    max-width="600"
                                    >
                                    <router-link class="underline-none" :to="'/HomeService/'+item.id" v-slot="{ navigate }">
                                        <div @click="navigate" class="cursor">
                                            <v-img
                                            class="white--text align-end"
                                            height="200px"
                                            :src="$Api_url_media+item.img"
                                            >
                                            <v-card-title style="text-shadow: black 0.1em 0.1em 0.2em;">{{item.nombre}}</v-card-title>
                                            </v-img>

                                            <v-card-subtitle class="pb-0">
                                            {{item.referencia}}
                                            </v-card-subtitle>

                                            <v-card-text class="text--primary">

                                            <div class="grey--text">{{item.ubicacion}}</div>
                                            <div>
                                                <v-icon>mdi-map-marker</v-icon>
                                                {{item.direccion}}
                                            </div>
                                            </v-card-text>
                                        </div>
                                    </router-link>

                                    
                                    <v-divider></v-divider>
                                    <v-card-actions class="justify-center align-center">
                                        <v-tooltip top>
                                        <template v-slot:activator="{ on, attrs }">
                                        <a :href="item.facebook" class="mx-2" target="_blank">
                                            <v-btn
                                                    color="primary"
                                                    fab
                                                    x-small
                                                    dark
                                                    v-bind="attrs"
                                                    v-on="on"
                                                    >
                                                    <v-icon>mdi-facebook</v-icon>
                                            </v-btn>
                                        </a>
                                        </template>
                                        <span>Facebook</span>
                                        </v-tooltip>
                                        <v-tooltip top>
                                        <template v-slot:activator="{ on, attrs }">
                                        <a :href="item.whatsapp | enlace_whatsapp" class="mx-2" target="_blank">
                                            <v-btn
                                                    color="green"
                                                    fab
                                                    x-small
                                                    dark
                                                    v-bind="attrs"
                                                    v-on="on"
                                                    >
                                                    <v-icon>mdi-whatsapp</v-icon>
                                            </v-btn>
                                        </a>
                                        </template>
                                        <span>WhatsApp</span>
                                        </v-tooltip>
                                        <v-tooltip top v-if="item.pagina_web">
                                            <template v-slot:activator="{ on, attrs }">
                                            <a :href="item.pagina_web" class="mx-2" target="_blank">
                                                <v-btn
                                                        color="dark"
                                                        fab
                                                        x-small
                                                        dark
                                                        v-bind="attrs"
                                                        v-on="on"
                                                        >
                                                        <v-icon>mdi-web</v-icon>
                                                </v-btn>
                                            </a>
                                            </template>
                                            <span>Página Web</span>
                                        </v-tooltip>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                        <v-row class="justify-center align-center mt-4" v-else>
                            <p class="text-subtitle-1 grey--text"><v-icon>mdi-emoticon-sad-outline</v-icon> No se encontraron registros</p>
                        </v-row>
                        </div>
                    </v-col>
                </v-row>
            </v-flex>
        </v-container>
    </div>
</template>

<script>
import ServicioServices from '@/services/ServicioService';

export default {
    name: 'HomeServices',


    data() {
        return {
            titulo:'',
            descripcion:'',
            servicios:[],
            busqueda:''
        };
    },

    mounted() {
        if(!!this.$route.params.id){
            if(this.$route.params.id == 1){
                this.titulo = 'Servicios de Transporte';
                this.descripcion = 'Descubre la comodidad y la eficiencia de nuestro servicio de transporte en Copacabana. Ya sea para explorar nuestros lugares turisticos o simplemente para moverse de manera rapida y segura, estamos aqui para atender todas sus necesidades de transporte';
            }
            else if(this.$route.params.id == 2){
                this.titulo = 'Restaurantes';
                this.descripcion = 'Disfruta la comida variada que ofrece la población, te ofrecemos restaurantes con menú variado y a tu gusto. Por que tu estadía inolvidable en el municipio es lo mas importante para nosotros';
            }
            else{
                this.titulo = 'Agencias de Viaje y Turismo';
                this.descripcion = 'Tu seguridad y diversión son lo mas importante para nosotros, es por ello que te ofrecemos una variedad de agencias de viajes y turismo para que tu viaje a Copacabana sea inolvidable';
            }
            //llamada a servicio
            ServicioServices.getServiciosType(this.$route.params.id).then(response=>{
                this.servicios = response.data;
            })
        }
    },

    methods: {
        
    },
    filters:{
        enlace_whatsapp(value){
            return `https://wa.me/591${value}`;
        }
    },
    computed:{
        filter_list(){
            return this.servicios.filter(element => element.nombre.toLowerCase().includes(this.busqueda.toLowerCase()));
            //return this.servicios;
        }
    }
};
</script>

<style scoped>
    .contenido{
        margin-left:10%;
        margin-right:10%;
    }

    .cursor{
        cursor: pointer;
    }

</style>