<template>
     
   <div style="background: #F7F7F7;" id="div_atractivos">

   <v-dialog
      v-model="dialog_guia"
      max-width="900"
          > 
        <v-card class="horizontal-card pa-2 rounded-lg">
            <v-row no-gutters>
            <v-row class="justify-end pa-2">
                <v-icon @click="dialog_guia = false">mdi-close</v-icon>
            </v-row>
            <v-row class="mt-0">
            <v-col cols="12" md="4" lg="4" class="mt-0">
                <v-img :src="$Api_url_media+guia.img" rounded-md :max-width="widthSize" class="mx-auto" height="300"></v-img>
            </v-col>
            <v-col cols="12" md="8" lg="8" class="mt-0">
                <v-card-text>
                <v-card-title class="text-h5 justify-center align-center pt-0">{{guia.nombre}} {{guia.apellidos}}</v-card-title>
                <div class="my-2">
                    <v-col cols="12" class="py-0" v-if="guia.whatsapp">
                        <a class="underline-none" target="_blank" :href="guia.whatsapp | enlace_whatsapp">
                            <v-btn fab dark x-small color="green" class="my-1">
                                <v-icon>mdi-whatsapp</v-icon>
                            </v-btn>
                          <span class="ps-2">{{guia.whatsapp}}</span>
                        </a>
                    </v-col>
                    <v-col cols="12" class="py-0" v-if="guia.correo">
                        <a v-if="guia.correo" class="underline-none" target="_blank" :href="guia.correo | enlace_correo">
                            <v-btn fab color="red" dark x-small class="my-1">
                                <v-icon>mdi-email-outline</v-icon>
                            </v-btn>
                          <span class="ps-2">{{guia.correo}}</span>
                        </a>
                    </v-col>
                    <v-col cols="12" class="py-0" v-if="guia.direccion          ">
                        <a href="#" v-if="guia.direccion" class="underline-none">
                            <v-btn fab color="dark" dark x-small class="my-1">
                                <v-icon>mdi-map-marker-outline</v-icon>
                            </v-btn>
                          <span class="ps-2">{{guia.direccion}}</span>
                        </a>
                    </v-col>
                    <v-col cols="12" class="py-0" v-if="guia.facebook">
                        <a v-if="guia.facebook" :href="guia.facebook" target="_blank" class="underline-none">
                            <v-btn fab color="blue" dark x-small class="my-1">
                                <v-icon>mdi-facebook</v-icon>
                            </v-btn>
                          <span class="ps-2 dark--text">Facebook</span>
                        </a>
                    </v-col>
                </div>
                <v-divider></v-divider>
                <div class="text-subtitle-1 mt-2">Sobre Mi</div>
                    <div class="pa-1" v-html="guia.sobre_mi">
                </div>
                <v-divider></v-divider>
                <v-row>
                    <v-col cols="12" md="6" lg="6" class="pb-0">
                        <v-card-content dense>
                            <v-subheader class="text-subtitle-1">IDIOMAS</v-subheader>
                                <v-list-item
                                v-for="(item, i) in guia.idiomas"
                                :key="i"
                                dense
                                >
                                    <v-list-item-icon>
                                        <v-icon color="green">mdi-check</v-icon>
                                    </v-list-item-icon > 
                                    <v-list-item-content class="py-1">
                                        <v-list-item-title>{{item.idioma}}</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                        </v-card-content>
                    </v-col>
                    <v-col cols="12" md="6" lg="6" class="pb-0">
                         <v-card-content dense>
                            <v-subheader class="text-subtitle-1">TIPO DE GUÍA</v-subheader>
                                <v-list-item
                                dense
                                v-for="(item, i) in guia.tipos"
                                :key="i"
                                >
                                    <v-list-item-icon>
                                        <v-icon color="green">mdi-check</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content class="py-1">
                                        <v-list-item-title>{{item.tipo}}</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                        </v-card-content>
                    </v-col>
                </v-row>
                </v-card-text>
            </v-col>
            </v-row>
            </v-row>
        </v-card>
    </v-dialog> 

		<v-container>
			<v-flex>
				<v-row>
					<v-col cols="12" md="1"></v-col>
					<v-col cols="10">
                        <v-tabs v-model="tab_guias" color="blue" background-color="transparent">
                            <v-tab href="#tab_guia" @click="filtro_tab=''">
                                Listado de Guías
                            </v-tab>
                            <v-tab href="#tab_guia_traslado" @click="filtro_tab='guia_traslado'">
                                Guías de Traslado
                            </v-tab>
                            <v-tab href="#tab_guia_tours" @click="filtro_tab='guia_tours'">
                                Guías de Tours
                            </v-tab>
                            <v-tab href="#tab_guia_coordinación" @click="filtro_tab='guia_coordinacion'">
                                Guías de coordinación
                            </v-tab>
                        </v-tabs>
                        <v-tabs-items v-model="tab_guias">
                            <v-tab-item value="tab_guia">
                            </v-tab-item>
                            <v-tab-item value="tab_guia_traslado">
                            </v-tab-item>
                            <v-tab-item value="tab_guia_tours">
                            </v-tab-item>
                            <v-tab-item value="tab_guia_coordinación">
                            </v-tab-item>
                        </v-tabs-items>
                        <v-row>
                            <v-col cols="12">
                                <div class="text-left">
                                    <p class="title-box text-h4 mt-4" style="color:#021F3C">{{title_guia}}</p>
                                    <p>Nuestros guías son capaces de orientar al grupo de turistas, mostrando los lugares mas destacados del municipio turistico. Ademas estos trabajan de la mano con agencias de turismo y poseen conocimiento para dar respuesta a cualquier interrogante que pueda surgir en el grupo.</p>
                                </div>        
                            </v-col>
                            <v-col cols="12">
                                <v-row class="pt-5 justify-center align-center">
                                    <v-col v-for="item in guias" :key="item.id" cols="auto" class="mx-2 cursor">
                                        <div class="justify-center align-center">
                                            <v-avatar size="150" @click="open_dialog(item)">
                                                <img :src="$Api_url_media+item.img" alt="Avatar">
                                            </v-avatar>
                                            <div class="text-center">
                                                <p class="mb-0 text-subtitle-1" @click="open_dialog(item)">
                                                    {{item.nombre}} {{item.apellidos}}
                                                </p>
                                                <p class="grey--text mb-0" @click="open_dialog(item)"> {{item.correo}}</p>   
                                                <a :href="item.whatsapp | enlace_whatsapp" target="_blank" class="underline-none font-weight-medium" color="green"><v-icon color="green">mdi-whatsapp</v-icon> 
                                                <span class="green--text ps-2">{{item.whatsapp}}</span>
                                                </a>   
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
					</v-col>
				</v-row>
                
			</v-flex>
		</v-container>
    </div>
</template>

<script>
import GuiaService from '@/services/GuiaService';

export default {
    name: 'HomeGuides',

    data() {
        return {
            guias_list:[],
            filtro_tab:'',
            tab_guias : true,
            dialog_guia:false,
            guia:{}
        };
    },

    mounted() {
        this.get_guias();
    },

    computed:{
        title_guia(){
            if (this.filtro_tab=='guia_traslado') return 'Guías de Traslado';
            else if(this.filtro_tab=='guia_tours') return 'Guías de Tours';
            else if(this.filtro_tab=='guia_coordinacion') return 'Guías de Coordinación';
            else return 'Listado de Guías';
        },
        guias(){
            if (this.filtro_tab=='guia_traslado'){
                const guias_auxi = [];
                this.guias_list.forEach(element => {
                    if(element.tipos.length > 0) {
                        let result_array = [];
                        result_array = element.tipos.find(tipo => (tipo.tipo=='Guía de Traslado'));
                        if (result_array != undefined){
                            guias_auxi.push(element)
                        }
                    }
                });
                return guias_auxi;
            }
            if (this.filtro_tab=='guia_tours'){
                const guias_auxi = [];
                this.guias_list.forEach(element => {
                    if(element.tipos.length > 0) {
                        let result_array = [];
                        result_array = element.tipos.find(tipo => (tipo.tipo=='Guía de Tours'));
                        if (result_array != undefined){
                            guias_auxi.push(element)
                        }
                    }
                });
                return guias_auxi;
            }
            if (this.filtro_tab=='guia_coordinacion'){
                const guias_auxi = [];
                this.guias_list.forEach(element => {
                    if(element.tipos.length > 0) {
                        let result_array = [];
                        result_array = element.tipos.find(tipo => (tipo.tipo=='Guía coordinador'));
                        if (result_array != undefined){
                            guias_auxi.push(element)
                        }
                    }
                });
                return guias_auxi;
            }
            else{
                return this.guias_list;
            }
        },
        widthSize(){
            if(window.innerWidth < 559){
                return (window.innerWidth - 120).toString();
            }
            return '500';
        },        
    },
    methods: {
        get_guias(){
            GuiaService.getFullGuias()
            .then(response => {
                this.guias_list = response.data;
            })
            .catch(error => console.log(error))
            .finally(() => console.log('concluyó la petición'))
         },
         open_dialog(guide){
            this.dialog_guia = true;
            this.guia = guide;
         }
    },
    filters:{
        enlace_whatsapp(value){
            return `https://wa.me/591${value}`;
        },
        enlace_correo(value){
            return `mailto:${value}`;
        }
    },
};
</script>

<style scoped>
    .horizontal-card {
    max-width: 900px;
    margin: 0 auto;
    }
    .cursor{
        cursor: pointer;
    }
    .underline-none{
        text-decoration: none;
        color:black;
    }
</style>