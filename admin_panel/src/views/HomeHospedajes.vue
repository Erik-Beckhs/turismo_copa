<template>
  <div id="div_hospedajes" style="background: #F7F7F7;">
    <v-row>
      <v-col cols="12">
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="1"></v-col>
      <v-col cols="12" md="10">
        <v-row>
          <v-col cols="12" md="3"> 
            <v-row>
              <v-col cols="12" class="pa-6">
                <v-card>
                  <v-card-title>
                    Filtros
                  </v-card-title>
                  <v-card-text class="pa-8">
                      <v-row dense>
                        <v-col cols="12">
                          <v-text-field
                            placeholder="Buscar por nombre"
                            outlined
                            rounded
                            v-model="form_filter.buscar"
                            dense
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <span class="text-subtitle-1 font-weight-medium" style="color:#021F3C">Precio por noche</span><br><br>
                          <div class="text-center">
                            <span class="text-subtitle-2 font-weight-medium" style="color:#021F3C">{{form_filter.rango_precio[0]}} $ - {{form_filter.rango_precio[1]}} $</span>
                          </div>
                          <v-range-slider
                            v-model="form_filter.rango_precio"
                            max="500"
                            min="0"
                          ></v-range-slider>
                        </v-col>
                        <v-col cols="12">
                          <span class="text-subtitle-1 font-weight-medium" style="color:#021F3C">Servicios que debe incluir</span><br>
                          <v-checkbox
                            v-model="form_filter.servicios"
                            label="Wifi"
                            value="Wi-Fi"
                            hide-details
                          ></v-checkbox>
                          <v-checkbox
                            v-model="form_filter.servicios"
                            label="Garaje"
                            value="Garaje"
                            hide-details
                          ></v-checkbox>
                          <v-checkbox
                            v-model="form_filter.servicios"
                            label="Restaurant"
                            value="Restaurant"
                            hide-details
                          ></v-checkbox>
                          <v-checkbox
                            v-model="form_filter.servicios"
                            label="Habitacion Familiar"
                            value="Habitacion Familiar"
                            hide-details
                          ></v-checkbox>
                        </v-col>
                        <v-col cols="12">
                          <br>
                          <span class="text-subtitle-1 font-weight-medium" style="color:#021F3C">Tipo de hospedaje</span><br>
                          <v-checkbox
                            v-model="form_filter.tipo"
                            label="Hotel"
                            value="Hotel"
                            hide-details
                          ></v-checkbox>
                          <v-checkbox
                            v-model="form_filter.tipo"
                            label="Hostal"
                            value="Hostal"
                            hide-details
                          ></v-checkbox>
                          <v-checkbox
                            v-model="form_filter.tipo"
                            label="Alojamiento"
                            value="Alojamiento"
                            hide-details
                          ></v-checkbox>
                          <v-checkbox
                            v-model="form_filter.tipo"
                            label="Residencial"
                            value="Residencial"
                            hide-details
                          ></v-checkbox>
                          <v-checkbox
                            v-model="form_filter.tipo"
                            label="Cabaña"
                            value="Cabaña"
                            hide-details
                          ></v-checkbox>
                          <v-checkbox
                            v-model="form_filter.tipo"
                            label="Casa Compartida"
                            value="Casa Compartida"
                            hide-details
                          ></v-checkbox>
                        </v-col>
                        <v-col cols="12">
                          <br>
                          <span class="text-subtitle-1 font-weight-medium" style="color:#021F3C">Categoria</span><br>
                          <v-checkbox
                            v-model="form_filter.categoria"
                            value="5"
                            hide-details
                          >
                            <template v-slot:label>
                              <v-rating
                              :value="5"
                              color="amber"
                              dense
                              half-increments
                              readonly
                              size="14"
                              ></v-rating>
                            </template>
                          </v-checkbox>
                          <v-checkbox
                            v-model="form_filter.categoria"
                            value="4"
                            hide-details
                          >
                            <template v-slot:label>
                              <v-rating
                              :value="4"
                              color="amber"
                              dense
                              half-increments
                              readonly
                              size="14"
                              ></v-rating>
                            </template>
                          </v-checkbox>
                          <v-checkbox
                            v-model="form_filter.categoria"
                            value="3"
                            hide-details
                          >
                            <template v-slot:label>
                              <v-rating
                              :value="3"
                              color="amber"
                              dense
                              half-increments
                              readonly
                              size="14"
                              ></v-rating>
                            </template>
                          </v-checkbox>
                          <v-checkbox
                            v-model="form_filter.categoria"
                            value="2"
                            hide-details
                          >
                            <template v-slot:label>
                              <v-rating
                              :value="2"
                              color="amber"
                              dense
                              half-increments
                              readonly
                              size="14"
                              ></v-rating>
                            </template>
                          </v-checkbox>
                          <v-checkbox
                            v-model="form_filter.categoria"
                            value="1"
                            hide-details
                          >
                            <template v-slot:label>
                              <v-rating
                              :value="1"
                              color="amber"
                              dense
                              half-increments
                              readonly
                              size="14"
                              ></v-rating>
                            </template>
                          </v-checkbox>
                        </v-col>
                      </v-row>
                  </v-card-text>
                </v-card>  
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="9">
            <v-container>
              <div class="text-left">
                <span class="title-box">Hospedajes</span><br>
                <hr class="separador-hr">
              </div>
              <v-row v-if="filter_list.length==0">
                <v-col cols="12">
                  <v-card class="card_transparent" color="transparent" :height="altura_ini_p">
                    <v-row
                      class="fill-height"
                      align="center"
                      justify="center"
                    >
                      <div class="grey--text text-h5">
                        No se encontró resultados
                      </div>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
              <v-row v-else v-for="ho in filter_list" :key="ho.id"> 
                <v-col cols="12">
                  <br>
                  <v-card>
                    <v-container>
                      <v-row>
                        <v-col cols="4" style="padding:0">
                          <v-img class="white--text align-end" aspect-ratio="1.7" :src="$Api_url_media+ho.img_principal">
                            <v-chip class="ma-2" color="blue" label small text-color="white">
                              {{ho.tipo}}
                            </v-chip>
                          </v-img>
                        </v-col>
                        <v-col cols="8" style="padding:0">
                          <v-card-title>
                            <span>{{ho.tipo}} {{ho.nombre}}</span>
                            <v-spacer></v-spacer>
                            <span class="font-weight-medium">Desde ${{ho.precio_min}}  </span>&nbsp;noche
                          </v-card-title>
                          <v-card-subtitle>
                            <v-rating
                            :value="ho.categoria"
                            color="amber"
                            dense
                            half-increments
                            readonly
                            size="14"
                            ></v-rating>
                          </v-card-subtitle>
                          <v-card-text>
                            <div class="my-2">
                              <span class="grey--text">Ubicación: </span><span>{{ho.direccion}}</span>
                            </div>
                            <div class="mb-2">
                              <span class="grey--text">Telefono: </span><span>{{ho.telefono}}</span> 
                            </div>
                          </v-card-text>
                          <v-card-actions class="pa-3">
                            <span class="grey--text" v-if="ho.servicios.some(el => el.servicio === 'Wi-Fi')"><v-icon left>mdi-wifi</v-icon> Wifi &nbsp;&nbsp;&nbsp;&nbsp;</span> 
                            <span class="grey--text" v-if="ho.servicios.some(el => el.servicio === 'Garaje')"><v-icon left>mdi-garage-variant</v-icon> Garaje &nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span class="grey--text" v-if="ho.servicios.some(el => el.servicio === 'Restaurant')"><v-icon left>mdi-silverware</v-icon> Restaurant</span>
                            <v-spacer></v-spacer>
                            <router-link class="underline-none" :to="'/SiteHospedaje/'+ho.id" v-slot="{ navigate }">
                              <v-btn color="orange" dark small @click="navigate">Ver mas</v-btn>
                            </router-link>
                          </v-card-actions>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>    
      </v-col>
      <v-col cols="12" md="1"></v-col>
    </v-row> 
  </div>
</template>
<style scoped>
  .card_transparent.v-sheet.v-card:not(.v-sheet--outlined) {
    box-shadow: none;
  }
</style>
<script>
// @ is an alias to /src
import WOW from '@/plugins/wow.min.js';
import SiteServices from '@/services/SiteServices';
// var wow = new WOW({ scrollContainer: "#scrolling-body"});
export default {
  name: 'HomeHospedajes',
  data(){
    return{
      form_filter:{
        buscar:'',
        rango_precio:[0,500],
        servicios:[],
        tipo:[],
        categoria:[]
      },
      list_hospedajes:[],
      bg:'transparent',
      altura_ini_p:500,
	    drawer:false,
    }
  },
  mounted(){	
		this.altura_ini_p=(window.innerHeight)-64;
    	window.onscroll = () => {
			this.changeColor();
		};
		setTimeout(() => (this.activa_inicio()), 1000);	
    this.scroll_ini();
    this.get_hospedajes();
  },
  computed:{
    filter_list(){
      let aux_list=[];
      aux_list= this.list_hospedajes.filter(elem => {
        	if (elem.nombre.toLowerCase().includes(this.form_filter.buscar.toLowerCase())) return true;
          else if(this.form_filter.buscar=='') return true;
    	});
      aux_list=aux_list.filter(elem => {
        	if (elem.precio_min >= this.form_filter.rango_precio[0] && elem.precio_min <= this.form_filter.rango_precio[1] ) return true;
    	});
      aux_list=aux_list.filter(elem => {
        if(this.form_filter.tipo.length==0) return true;
        for (let index = 0; index < this.form_filter.tipo.length; index++) {
          if(elem.tipo==this.form_filter.tipo[index]) return true;
        }
    	});
      aux_list=aux_list.filter(elem => {
        if(this.form_filter.categoria.length==0) return true;
        for (let index = 0; index < this.form_filter.categoria.length; index++) {
          if(elem.categoria==this.form_filter.categoria[index]) return true;
        }
    	});
      aux_list=aux_list.filter(elem => {
        if(this.form_filter.servicios.length==0) return true;
        let aux_cuenta=0;
        for (let index = 0; index < this.form_filter.servicios.length; index++) {
          if(elem.servicios.some(el => el.servicio === this.form_filter.servicios[index])) aux_cuenta++;
        }
        if(aux_cuenta==this.form_filter.servicios.length){
          return true;
        }
    	});
      return aux_list;
    }
  },
  methods:{
    get_hospedajes(){
      SiteServices.getAllHospedaje().then(response=>{
        this.list_hospedajes=response.data;
      })
    },
    scroll_ini(){
      document.querySelector('#scrolling-body').scrollTo(0,0);
    },
    activa_inicio(){
      var wow = new WOW({ scrollContainer: "#scrolling-body"});
      wow.init();
    },
    changeColor() {
      if (
          document.body.scrollTop > 100 ||
          document.documentElement.scrollTop > 100
      ) {
          this.bg = 'white';
      } else {
          this.bg = 'transparent';
      }
    },
  },
  components: {
  }
}
</script>
