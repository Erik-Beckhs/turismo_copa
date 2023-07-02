<template>
    <v-container>
        <v-flex>
            <div class="contenido">
            <v-card>
                <div class="grey lighten-3">
                    <v-row>
                        <v-col cols="12" class="pa-0 pl-3 " sm="4" md="4" lg="4">
                            <v-img height="160" aspect-ratio="1" :src="$Api_url_media+servicio.img">
                            </v-img>  
                        </v-col>
                        <v-col cols="12" sm="8" md="8" lg="8">
                            <v-card-title class="text-h4 font-weight-medium pb-0 pt-1 upper">
                                {{servicio.nombre}}
                            </v-card-title>
                            <p class="grey--text text-subtitle-1 pl-5 mt-0 mb-3 capitalize">{{servicio.referencia}}</p>
                            <p class="subtitle-1 my-1"><v-icon color="primary">mdi-map-marker</v-icon> {{servicio.direccion}} - <span>{{servicio.ubicacion}}</span></p>
                            <p class="subtitle-1 my-1"><v-icon color="primary">mdi-phone</v-icon> <span class="font-weight-medium">{{servicio.telefono}}</span></p>
                        </v-col>
                    </v-row>
                </div>
                <v-divider></v-divider>
                <v-card-text>
                    <v-row>
                        <v-col cols="12" md="8" lg="8">
                            <div>
                                 <v-carousel hide-delimiters>
                                    <v-carousel-item
                                    v-for="(item,i) in multimedia_data"
                                    :key="i"
                                    :src="item.thumbnailURL"
                                    ></v-carousel-item>
                                </v-carousel>
                            </div>
                            <div>
                                <v-card-title>Productos / Servicios</v-card-title>
                                <v-card-text>
                                    <div v-html="servicio.descripcion">
                                    </div>
                                </v-card-text>
                            </div>
                        </v-col>
                        <v-col cols="12" md="4" lg="4">
                            <v-card>
                                <v-card-title>
                                    Datos de Contacto
                                </v-card-title>
                                <v-divider></v-divider>
                                <v-card-text>
                                    <div v-if="estado_servicio" class="green lighten-5 rounded-lg pa-2 mb-3">
                                        <p class="text-center ma-0"><v-icon color="green">mdi-clock-time-eight-outline</v-icon> <span class="font-weight-medium">Hoy</span> <span class="font-weight-bold green--text">{{hora_atencion_hoy}}</span></p>
                                        <p class="text-center ma-0 font-weight-bold">
                                            <span class="green--text">
                                               ABIERTO AHORA
                                            </span>
                                        </p>
                                    </div>
                                    <div v-else class="red lighten-5 rounded-lg pa-2 mb-3">
                                        <p class="text-center ma-0"><v-icon color="red">mdi-clock-time-eight-outline</v-icon> <span class="font-weight-medium">Hoy</span> <span class="font-weight-bold red--text">{{hora_atencion_hoy}}</span></p>
                                        <p class="text-center ma-0 font-weight-bold">
                                            <span class="red--text">
                                                CERRADO AHORA
                                            </span>
                                        </p>
                                    </div>
                                    <div>
                                        <p><v-icon color="primary">mdi-map-marker</v-icon> {{servicio.direccion}}</p>
                                        <p><v-icon color="primary">mdi-phone</v-icon> {{servicio.telefono}}</p>
                                        <p><v-icon color="primary">mdi-cellphone</v-icon> {{servicio.whatsapp}}</p>
                                    </div>
                                    <v-divider></v-divider>
                                    <div>
                                        <p class="text-subtitle-1 text-center ma-0 font-weight-medium">Redes Sociales</p>
                                        <v-card-actions class="justify-center align-center">
                                            <v-tooltip top>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <a :href="servicio.facebook" class="mx-3" target="_blank">
                                                        <v-btn
                                                                color="primary"
                                                                fab
                                                                small
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
                                                    <a :href="servicio.whatsapp | enlace_whatsapp" class="mx-3" target="_blank">
                                                        <v-btn
                                                                color="green"
                                                                fab
                                                                small
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
                                                <v-tooltip top>
                                                    <template v-slot:activator="{ on, attrs }">
                                                    <a :href="servicio.pagina_web" class="mx-3" target="_blank">
                                                        <v-btn
                                                                color="dark"
                                                                fab
                                                                small
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
                                    </div>
                                    
                                </v-card-text>
                            </v-card>
                            <v-card class="mt-3">
                                <v-card-title>
                                    Horarios de Atención
                                </v-card-title>
                                <v-divider></v-divider>
                                <v-card-text>
                                 
                                    <v-list>
                                        <v-list-item :class="color_lunes">
                                            <v-col cols="5">
                                            Lunes
                                            </v-col>
                                            <v-col cols="7">
                                                <span v-if="servicio.horarios[0].estado_lunes">{{servicio.horarios[0].lunes_apertura.substr(0,5)}} - {{servicio.horarios[0].lunes_cierre.substr(0,5)}}</span>
                                                <span v-else class="red--text"> 
                                                    CERRADO
                                                </span>
                                            </v-col>
                                        </v-list-item>
                                        <v-divider></v-divider>
                                        <v-list-item :class="color_martes">
                                            <v-col cols="5">
                                            Martes
                                            </v-col>
                                            <v-col cols="7">
                                            <span v-if="servicio.horarios[0].estado_martes">{{servicio.horarios[0].martes_apertura.substr(0,5)}} - {{servicio.horarios[0].martes_cierre.substr(0,5)}}</span>
                                                <span v-else class="red--text"> 
                                                    CERRADO
                                                </span>
                                            </v-col>
                                        </v-list-item>
                                        <v-divider></v-divider>
                                        <v-list-item :class="color_miercoles">
                                            <v-col cols="5">
                                            Miercoles
                                            </v-col>
                                            <v-col cols="7">
                                                <span v-if="servicio.horarios[0].estado_miercoles">{{servicio.horarios[0].miercoles_apertura.substr(0,5)}} - {{servicio.horarios[0].miercoles_cierre.substr(0,5)}}</span>
                                                <span v-else class="red--text"> 
                                                    CERRADO
                                                </span>
                                            </v-col>
                                        </v-list-item>
                                        <v-divider></v-divider>
                                        <v-list-item :class="color_jueves">
                                            <v-col cols="5">
                                            Jueves
                                            </v-col>
                                            <v-col cols="7">
                                                <span v-if="servicio.horarios[0].estado_jueves">{{servicio.horarios[0].jueves_apertura.substr(0,5)}} - {{servicio.horarios[0].jueves_cierre.substr(0,5)}}</span>
                                                <span v-else class="red--text"> 
                                                    CERRADO
                                                </span>
                                            </v-col>
                                        </v-list-item>
                                        <v-divider></v-divider>
                                        <v-list-item :class="color_viernes">
                                            <v-col cols="5">
                                            Viernes
                                            </v-col>
                                            <v-col cols="7">
                                                <span v-if="servicio.horarios[0].estado_viernes">{{servicio.horarios[0].viernes_apertura.substr(0,5)}} - {{servicio.horarios[0].viernes_cierre.substr(0,5)}}</span>
                                                    <span v-else class="red--text"> 
                                                    CERRADO
                                                    </span>
                                            </v-col>
                                        </v-list-item>
                                        <v-divider></v-divider>
                                        <v-list-item :class="color_sabado">
                                            <v-col cols="5">
                                            Sabado
                                            </v-col>
                                            <v-col cols="7">
                                                <span v-if="servicio.horarios[0].estado_sabado">{{servicio.horarios[0].sabado_apertura.substr(0,5)}} - {{servicio.horarios[0].sabado_cierre.substr(0,5)}}</span>
                                                    <span v-else class="red--text"> 
                                                        CERRADO
                                                    </span>
                                            </v-col>
                                        </v-list-item>
                                        <v-divider></v-divider>
                                         <v-list-item :class="color_domingo">
                                            <v-col cols="5">
                                            Domingo
                                            </v-col>
                                            <v-col cols="7">
                                                <span v-if="servicio.horarios[0].estado_domingo">{{servicio.horarios[0].domingo_apertura.substr(0,5)}} - {{servicio.horarios[0].domingo_cierre.substr(0,5)}}</span>
                                                <span v-else class="red--text"> 
                                                    CERRADO
                                                </span>
                                            </v-col>
                                        </v-list-item>
                                    </v-list>
                                        
                                    
                                </v-card-text>
                            </v-card>

                            <v-card class="mt-3">
                                <v-card-title>
                                    Formas de Pago
                                </v-card-title>
                                <v-divider></v-divider>
                                <v-card-text>
                                     <v-row class="pa-2">
                                        <v-layout row wrap>
                                            <v-col cols="12" class="py-1" v-for="(value, index) in servicio.formas_pago" :key="index" xs2>
                                                <v-icon color="green">mdi-check</v-icon>
                                                <span class="ml-2">{{value.pago}}</span>
                                            </v-col>
                                        </v-layout>
                                     </v-row>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </div>
        </v-flex>
    </v-container>
</template>

<script>
import ServicioService from '@/services/ServicioService';
import MultimediaService from '@/services/MultimediaService';

export default {
    name: 'HomeService',

    data() {
        return {
            id:'',
            servicio:{},
            multimedia_data:[],
            estado_servicio:false,
            hora_atencion_hoy : '',
            color_lunes:'',
            color_martes:'',
            color_martes:'',
            color_miercoles:'',
            color_jueves:'',
            color_viernes:'',
            color_sabado:'',
            color_domingo:'',
        };
    },

    mounted() {
        this.id = this.$route.params.id;
        if(this.id > 0){
            this.getMultimediaGaleria(this.id);
            ServicioService.getFullServicio(this.id).then(response=>{
                if(response.data){
                    this.servicio = response.data;
                    this.verifica_abierto();
                }
                else{
                    this.notification('Ocurrió un error al procesar la petición', 'error');
                }
            })
        }
    },

    methods: {
        notification(title, icon){
          this.$swal.fire({
          position: 'top-end',
          icon,
          title,
          showConfirmButton: false,
          timer: 1500
        })  
        },
        getMultimediaGaleria(id){
            MultimediaService.getMultimedia('servicios', id).then(response=>{
                let galeria=[];
                for (let index = 0; index < response.data.length; index++) {
                const element_aux = {
                    largeURL: this.$Api_url_media + response.data[index].ruta,
                    thumbnailURL:this.$Api_url_media + response.data[index].ruta,
                    width: 1500,
                    height: 1000
                };
                galeria.push(element_aux);
                }
                this.multimedia_data=galeria;
                console.log(this.multimedia_data);
            })
        },
        verifica_abierto(){
            let dia_actual = new Date().getDay();
            let hora_actual = new Date().getHours();
            let minuto_actual = new Date().getMinutes();
            let horario = this.servicio.horarios[0];
            //console.log(horario);
            let horario_apertura_aux = [];
            let horario_cierre_aux = [];
            switch(dia_actual){
                case 1:
                    if(horario.estado_lunes == true){
                        horario_apertura_aux = horario.lunes_apertura.split(":");
                        horario_cierre_aux = horario.lunes_cierre.split(":");
                    }
                    this.hora_atencion_hoy = `${horario.lunes_apertura.substr(0,5)} - ${horario.lunes_cierre.substr(0,5)}`;
                    this.color_lunes = 'primary lighten-5'
                    break;
                case 2:
                    if(horario.estado_martes == true){
                        horario_apertura_aux = horario.martes_apertura.split(":");
                        horario_cierre_aux = horario.martes_cierre.split(":");
                    }
                    this.hora_atencion_hoy = `${horario.martes_apertura.substr(0,5)} - ${horario.martes_cierre.substr(0,5)}`;
                    this.color_martes = 'primary lighten-5'
                    break;
                case 3:
                    if(horario.estado_miercoles == true){
                        horario_apertura_aux = horario.miercoles_apertura.split(":");
                        horario_cierre_aux = horario.miercoles_cierre.split(":");
                    }
                    this.hora_atencion_hoy = `${horario.miercoles_apertura.substr(0,5)} - ${horario.miercoles_cierre.substr(0,5)}`;
                    this.color_miercoles = 'primary lighten-5'
                    break;
                case 4:
                    if(horario.estado_jueves == true){
                        horario_apertura_aux = horario.jueves_apertura.split(":");
                        horario_cierre_aux = horario.jueves_cierre.split(":");
                    }
                    this.hora_atencion_hoy = `${horario.jueves_apertura.substr(0,5)} - ${horario.jueves_cierre.substr(0,5)}`;
                    this.color_jueves = 'primary lighten-5'
                    break;
                case 5:
                    if(horario.estado_viernes == true){
                        horario_apertura_aux = horario.viernes_apertura.split(":");
                        horario_cierre_aux = horario.viernes_cierre.split(":");
                    }
                    this.hora_atencion_hoy = `${horario.viernes_apertura.substr(0,5)} - ${horario.viernes_cierre.substr(0,5)}`;
                    this.color_viernes = 'primary lighten-5'
                    break;
                case 6:
                    if(horario.estado_sabado == true){
                        horario_apertura_aux = horario.sabado_apertura.split(":");
                        horario_cierre_aux = horario.sabado_cierre.split(":");
                    }
                    this.hora_atencion_hoy = `${horario.sabado_apertura.substr(0,5)} - ${horario.sabado_cierre.substr(0,5)}`;
                    this.color_sabado = 'primary lighten-5'
                    break;
                case 7:
                    if(horario.estado_domingo == true){
                        horario_apertura_aux = horario.domingo_apertura.split(":");
                        horario_cierre_aux = horario.domingo_cierre.split(":");
                    }
                    this.hora_atencion_hoy = `${horario.domingo_apertura.substr(0,5)} - ${horario.domingo_cierre.substr(0,5)}`;
                    this.color_domingo = 'primary lighten-5'
                    break;
                default:
                   console.log('ocurrio un error');
            }
            let hora_apertura = horario_apertura_aux[0];
            let minuto_apertura = horario_apertura_aux[1];
            let hora_cierre = horario_cierre_aux[0];
            let minuto_cierre = horario_cierre_aux[1];

            if((parseInt(hora_actual) >= parseInt(hora_apertura) && parseInt(hora_actual) <= parseInt(hora_cierre)) && ((parseInt(minuto_actual) >= parseInt(minuto_apertura) && parseInt(minuto_actual) <= parseInt(minuto_cierre)))){
                this.estado_servicio = true;
            }   
            
            if(parseInt(hora_actual) >= parseInt(hora_apertura) && parseInt(hora_actual) < parseInt(hora_cierre)){
                if(parseInt(minuto_actual) >= parseInt(minuto_apertura)){
                    this.estado_servicio = true;
                }
            }
            else if(parseInt(hora_actual) == parseInt(hora_cierre)){
                if(parseInt(minuto_actual) <= parseInt(minuto_cierre)){
                   this.estado_servicio = true; 
                }
            }

            console.log(parseInt(minuto_actual))
            console.log(parseInt(minuto_cierre ))
            console.log(this.estado_servicio);
        },
    },
    filters:{
        enlace_whatsapp(value){
            return `https://wa.me/591${value}`;
        }
    },
};
</script>

<style scoped>
    .contenido{
        margin-left: 5%;
        margin-right: 5%;
    }
    .cursor{
        cursor: pointer;
    }
    .upper{
        text-transform: uppercase;
    }
    .capitalize{
        text-transform: capitalize;
    }
</style>