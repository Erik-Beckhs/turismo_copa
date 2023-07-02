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
                <v-row>
                    <v-tabs v-model="tab_guias" color="blue" background-color="transparent">
                            <v-tab class="text-caption font-weight-medium" href="#tab_guia" @click="filtro_tab=''">
                               Listado de Guías
                            </v-tab>
                            <v-tab class="text-caption font-weight-medium" href="#tab_guia_nacional" @click="filtro_tab='guia_nacional'">
                                Guías Nacionales
                            </v-tab>
                            <v-tab  class="text-caption font-weight-medium" href="#tab_guia_comunitario" @click="filtro_tab='guia_comunitario'"> 
                                Guías Comunitarios o Locales
                            </v-tab>
                            <v-tab  class="text-caption font-weight-medium" href="#tab_guia_fijo" @click="filtro_tab='guia_fijo'">
                                Guías Fijos o de Sitio
                            </v-tab>
                            <v-tab class="text-caption font-weight-medium" href="#tab_guia_departamental" @click="filtro_tab='guia_departamental'">
                                Guías Departamentales
                            </v-tab>
                            <v-tab  class="text-caption font-weight-medium" href="#tab_guia_montana" @click="filtro_tab='guia_montana'">
                                Guías de Montaña
                            </v-tab>
                            <v-tab class="text-caption font-weight-medium" href="#tab_guia_trekking" @click="filtro_tab='guia_trekking'">
                                Guías de Trekking
                            </v-tab>
                            <v-tab  class="text-caption font-weight-medium" href="#tab_guia_naturaleza" @click="filtro_tab='guia_naturaleza'">
                               Guías de Naturaleza
                            </v-tab>
                            <v-tab  class="text-caption font-weight-medium" href="#tab_guia_deporte" @click="filtro_tab='guia_deporte'">
                                Guías de Deportes Extremos
                            </v-tab>
                            <v-tab  class="text-caption font-weight-medium" href="#tab_guia_cultural" @click="filtro_tab='guia_cultural'">
                                Guías Culturales
                            </v-tab>
                        </v-tabs>
                </v-row>
					<v-col cols="12" md="1"></v-col>
					<v-col cols="10">
                        <v-tabs-items v-model="tab_guias">
                            <v-tab-item value="tab_guia">
                            </v-tab-item>
                            <v-tab-item value="tab_guia_nacional">
                            </v-tab-item>
                            <v-tab-item value="tab_guia_comunitario">
                            </v-tab-item>
                            <v-tab-item value="tab_guia_fijo">
                            </v-tab-item>
                             <v-tab-item value="tab_guia_departamental">
                            </v-tab-item>
                            <v-tab-item value="tab_guia_montana">
                            </v-tab-item>
                            <v-tab-item value="tab_guia_trekking">
                            </v-tab-item>
                             <v-tab-item value="tab_guia_naturaleza">
                            </v-tab-item>
                            <v-tab-item value="tab_guia_deporte">
                            </v-tab-item>
                            <v-tab-item value="tab_guia_cultural">
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
                                <v-row class="pt-5 justify-center align-center" v-if="guias.length>0">
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
                                <v-row v-else class="justify-center align-center">
                                    <p class="mt-10 grey--text"><v-icon>mdi-emoticon-sad-outline</v-icon> No se encontraron registros</p>
                                </v-row>
                            </v-col>
                        </v-row>
					</v-col>
                    <v-col cols="12" md="1"></v-col>
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
            if (this.filtro_tab=='guia_nacional') return 'Guías Nacionales';
            else if(this.filtro_tab=='guia_comunitario') return 'Guías Comunitarios o Locales';
            else if(this.filtro_tab=='guia_fijo') return 'Guía Fijo o de Sitios';
            if (this.filtro_tab=='guia_departamental') return 'Guías Departamentales';
            else if(this.filtro_tab=='guia_montana') return 'Guías de Montaña';
            else if(this.filtro_tab=='guia_trekking') return 'Guías de Trekking';
            if (this.filtro_tab=='guia_naturaleza') return 'Guías de Naturaleza';
            else if(this.filtro_tab=='guia_deporte') return 'Guías de Deportes Extremos';
            else if(this.filtro_tab=='guia_cultural') return 'Guías Culturales';
            else return 'Listado de Guías';
        },
        guias(){
            if (this.filtro_tab=='guia_nacional'){
                const guias_auxi = [];
                this.guias_list.forEach(element => {
                    if(element.tipos.length > 0) {
                        let result_array = [];
                        result_array = element.tipos.find(tipo => (tipo.tipo=='Guía Nacional'));
                        if (result_array != undefined){
                            guias_auxi.push(element)
                        }
                    }
                });
                return guias_auxi;
            }
            if (this.filtro_tab=='guia_comunitario'){
                const guias_auxi = [];
                this.guias_list.forEach(element => {
                    if(element.tipos.length > 0) {
                        let result_array = [];
                        result_array = element.tipos.find(tipo => (tipo.tipo=='Guía Comunitario o Local'));
                        if (result_array != undefined){
                            guias_auxi.push(element)
                        }
                    }
                });
                return guias_auxi;
            }
            if (this.filtro_tab=='guia_fijo'){
                const guias_auxi = [];
                this.guias_list.forEach(element => {
                    if(element.tipos.length > 0) {
                        let result_array = [];
                        result_array = element.tipos.find(tipo => (tipo.tipo=='Guía Fijo o de Sitio'));
                        if (result_array != undefined){
                            guias_auxi.push(element)
                        }
                    }
                });
                return guias_auxi;
            }
              if (this.filtro_tab=='guia_departamental'){
                const guias_auxi = [];
                this.guias_list.forEach(element => {
                    if(element.tipos.length > 0) {
                        let result_array = [];
                        result_array = element.tipos.find(tipo => (tipo.tipo=='Guía Departamental'));
                        if (result_array != undefined){
                            guias_auxi.push(element)
                        }
                    }
                });
                return guias_auxi;
            }
            if (this.filtro_tab=='guia_montana'){
                const guias_auxi = [];
                this.guias_list.forEach(element => {
                    if(element.tipos.length > 0) {
                        let result_array = [];
                        result_array = element.tipos.find(tipo => (tipo.tipo=='Guía de Montaña'));
                        if (result_array != undefined){
                            guias_auxi.push(element)
                        }
                    }
                });
                return guias_auxi;
            }
            if (this.filtro_tab=='guia_trekking'){
                const guias_auxi = [];
                this.guias_list.forEach(element => {
                    if(element.tipos.length > 0) {
                        let result_array = [];
                        result_array = element.tipos.find(tipo => (tipo.tipo=='Guía de Trekking'));
                        if (result_array != undefined){
                            guias_auxi.push(element)
                        }
                    }
                });
                return guias_auxi;
            }
              if (this.filtro_tab=='guia_naturaleza'){
                const guias_auxi = [];
                this.guias_list.forEach(element => {
                    if(element.tipos.length > 0) {
                        let result_array = [];
                        result_array = element.tipos.find(tipo => (tipo.tipo=='Guía de Naturaleza'));
                        if (result_array != undefined){
                            guias_auxi.push(element)
                        }
                    }
                });
                return guias_auxi;
            }
            if (this.filtro_tab=='guia_deporte'){
                const guias_auxi = [];
                this.guias_list.forEach(element => {
                    if(element.tipos.length > 0) {
                        let result_array = [];
                        result_array = element.tipos.find(tipo => (tipo.tipo=='Guía de Deportes Extremos'));
                        if (result_array != undefined){
                            guias_auxi.push(element)
                        }
                    }
                });
                return guias_auxi;
            }
            if (this.filtro_tab=='guia_cultural'){
                const guias_auxi = [];
                this.guias_list.forEach(element => {
                    if(element.tipos.length > 0) {
                        let result_array = [];
                        result_array = element.tipos.find(tipo => (tipo.tipo=='Guía Cultural'));
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