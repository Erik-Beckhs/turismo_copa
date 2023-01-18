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
              <v-col cols="12">
                <v-card>
                  <v-card-title>
                    Filtros
                  </v-card-title>
                  <v-card-text>
                      <v-row dense>
                        <v-col cols="12">
                          <v-text-field
                            placeholder="Buscar"
                            outlined
                            rounded
                            dense
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <span class="text-subtitle-1 font-weight-black" style="color:#021F3C">Precio</span>
                          <div class="text-center">
                            <span class="text-subtitle-2 font-weight-black" style="color:#021F3C">{{form_filter.rango_precio[0]}} BOB - {{form_filter.rango_precio[1]}} BOB</span>
                          </div>
                          <v-range-slider
                            v-model="form_filter.rango_precio"
                            max="500"
                            min="0"
                          ></v-range-slider>
                        </v-col>
                        <v-col cols="12">
                          <span class="text-subtitle-1 font-weight-black" style="color:#021F3C">Servicios que debe incluir</span><br>
                          <v-checkbox
                            v-model="form_filter.servicios"
                            label="Desayuno incluido"
                            value="Desayuno"
                            hide-details
                          ></v-checkbox>
                          <v-checkbox
                            v-model="form_filter.servicios"
                            label="Wifi"
                            value="Wifi"
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
                            label="Vista a la Playa"
                            value="Vista a la Playa"
                            hide-details
                          ></v-checkbox>
                        </v-col>
                        <v-col cols="12">
                          <br>
                          <span class="text-subtitle-1 font-weight-black" style="color:#021F3C">Tipo de hospedaje</span><br>
                          <v-checkbox
                            v-model="form_filter.tipo"
                            label="Hotel"
                            value="hotel"
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
                        </v-col>
                        <v-col cols="12">
                          <br>
                          <span class="text-subtitle-1 font-weight-black" style="color:#021F3C">Categoria</span><br>
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
                        <v-col cols="12">
                          <br>
                          <v-btn color="blue" block dark> Aplicar Filtro</v-btn>
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
                <span class="text-h4 font-weight-black" style="color:#0099ff">Hospedajes</span><br>
                <span class="text-subtitle-2 grey--text">Copacabana municipio turístico de Bolivia</span><br><br>
              </div>
              <v-row>
                <v-col cols="12">
                  <v-card>
                    <v-flex>
                      <v-row>
                        <v-col cols="12" md="4" style="padding:0;">
                          <v-avatar tile height="240" width="350">
                            <v-img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/117502498.jpg?k=cf7b2bfb872933a7d05a9adbacfa3a90d538993be44fdd3f20a1040545fc6d37&o=&hp=1"></v-img>
                          </v-avatar>
                        </v-col>
                        <v-col cols="12" md="8">
                          <div class="text-center">
                            <span class="text-h6 font-weight-black" style="color:#021F3C">Hostal Las Olas</span><br>
                            <v-rating
                            :value="4.5"
                            color="amber"
                            dense
                            half-increments
                            readonly
                            size="14"
                            ></v-rating>
                            <span class="text-caption font-weight-black">50 - 200$</span>
                          </div>
                          <div class="text-left">
                            <br>
                            <span class="text-subtitle-2"><v-icon left>mdi-phone</v-icon> +591 72508668</span><br>
                            <span class="text-subtitle-2"><v-icon left>mdi-map-marker</v-icon> Calle Michel Perez (Final), Copacabana - Bolivia</span><br>
                            <span class="text-subtitle-2"><v-icon left>mdi-web</v-icon> <a href="https://www.hostallasolas.com/">www.hostallasolas.com</a></span><br>
                          </div>
                          <div class="text-center">
                            <router-link class="underline-none" to="/SiteHospedaje" v-slot="{ navigate }">
                              <v-btn small outlined @click="navigate" color="blue"><v-icon left>mdi-arrow-right</v-icon>ver mas</v-btn>
                            </router-link>
                          </div>
                        </v-col>
                      </v-row>
                    </v-flex>
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
<script>
// @ is an alias to /src
import WOW from '@/plugins/wow.min.js';
// var wow = new WOW({ scrollContainer: "#scrolling-body"});
export default {
  name: 'HomeHospedajes',
  data(){
    return{
      form_filter:{
        rango_precio:[0,500],
        servicios:[],
        tipo:[],
        categoria:[]
      },
      bg:'transparent',
      altura_ini_p:500,
	    drawer:false,
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
        ],
      items: [
          {
            src: 'https://www.incaworldbolivia.com/fotos/0915201694507-Isla-del-sol-Bolivia.jpg',
          },
          {
            src: 'https://boliviaturistica.com/wp-content/uploads/2018/08/Copacabana-Bolivia.jpg',
          },
      ],
    }
  },
  mounted(){	
		this.altura_ini_p=(window.innerHeight)-64;
    	window.onscroll = () => {
			this.changeColor();
		};
		setTimeout(() => (this.activa_inicio()), 1000);	
    this.scroll_ini();
  },
  methods:{
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
