<template>
	<div id="div_Hospedaje">
		<v-container>
			<v-flex>
				<v-row>
					<v-col cols="12"><br></v-col>
				</v-row>
				<v-row>
					<v-col cols="12" md="1"></v-col>
					<v-col cols="12" md="10">
            <v-row>
              <v-col cols="12" md="6">
                <v-card class="rounded-xl" @click="dialog_img=true">
                  <v-img height="500" aspect-ratio="1" :src="$Api_url_media+hospedaje.img_principal">
                  </v-img>  
                </v-card>
              </v-col>
              <v-col cols="12" md="6">
                <v-row dense>
                  <v-col cols="12" md="6">
                    <v-card class="rounded-tl-xl" @click="dialog_img=true">
                      <v-img height="250" aspect-ratio="1" :src="multimedia_data[1].largeURL">
                      </v-img>  
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-card class="rounded-tr-xl" @click="dialog_img=true">
                      <v-img height="250" aspect-ratio="1" :src="multimedia_data[2].largeURL">
                      </v-img>  
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-card class="rounded-bl-xl" @click="dialog_img=true">
                      <v-img height="250" aspect-ratio="1" :src="multimedia_data[3].largeURL">
                      </v-img>  
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-card class="rounded-br-xl" @click="dialog_img=true">
                      <v-img height="250" class="white--text align-end text-right" aspect-ratio="1" :src="multimedia_data[4].largeURL">
                        <v-chip class="ma-4 px-6" color="white" large outlined>
                          <v-icon left>mdi-image-multiple</v-icon><span class="text-subtitle-1 font-weight-bold">{{multimedia_data.length - 5}} +</span>
                        </v-chip>
                      </v-img>  
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row dense>
              <v-col cols="12" md="8">
                <div>
                  <span class="text-h4">{{hospedaje.nombre}}</span>
                </div>
                <div class="d-flex grey--text font-weight-light">
									<span>{{hospedaje.direccion}}</span>&nbsp;&nbsp;
                  <v-rating
                  :value="hospedaje.categoria"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                  ></v-rating>
								</div>
              </v-col>
              <v-col cols="12" md="4">
                <div style="height:75px; padding-right: 10px;">
                  <v-row
                    class="fill-height"
                    align="center"
                    justify="end"
                  >
                    <div>
                      <span class="font-weight-bold text-h5">Desde ${{hospedaje.precio_min}}  </span>&nbsp;noche
                    </div>
                  </v-row>  
                </div>
              </v-col>
              <v-col cols="12">
                <span class="text-sutitle-1 grey--text">Tipos de Habitación: </span>
                <v-chip
                  class="ma-2"
                  color="pink"
                  outlined
                  small
                  v-for="hb in hospedaje.tipos_habitacion"
                  :key="hb.id"
                >
                  {{hb.tipo_habitacion}}
                </v-chip>
              </v-col>
            </v-row>
            <v-row dense>
              <v-col cols="12">
                <v-divider></v-divider>
              </v-col>
            </v-row>
            <v-row dense>
              <v-col cols="12">
                <br>
                <v-row>
                  <v-col cols="6" md="3" v-if="hospedaje.telefono!='' && hospedaje.telefono!=null">
                    <v-list-item>
                      <v-list-item-avatar>
                        <v-icon
                          class="grey lighten-1"
                          dark
                        >
                          mdi-phone
                        </v-icon>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-subtitle>Telefono</v-list-item-subtitle>
                        <v-list-item-title>{{hospedaje.telefono}}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>    
                  </v-col>
                  <v-col cols="6" md="3" v-if="hospedaje.cel_whatsapp!='' && hospedaje.cel_whatsapp!=null">
                    <v-list-item>
                      <v-list-item-avatar>
                        <v-icon
                          class="grey lighten-1"
                          dark
                        >
                          mdi-whatsapp
                        </v-icon>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-subtitle>WhatsApp</v-list-item-subtitle>
                        <v-list-item-title>{{hospedaje.cel_whatsapp}}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>    
                  </v-col>
                  <v-col cols="6" md="3" v-if="hospedaje.pagina_web!='' && hospedaje.pagina_web!=null">
                    <v-list-item :href="hospedaje.pagina_web" link target="_blank">
                      <v-list-item-avatar>
                        <v-icon
                          class="grey lighten-1"
                          dark
                        >
                          mdi-web
                        </v-icon>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-subtitle>Pagina Web</v-list-item-subtitle>
                        <v-list-item-title style="color: #2196F3 !important">{{hospedaje.pagina_web}}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>    
                  </v-col>
                  <v-col cols="6" md="3" v-if="hospedaje.facebook!='' && hospedaje.facebook!=null">
                    <v-list-item :href="hospedaje.facebook" link target="_blank">
                      <v-list-item-avatar>
                        <v-icon
                          class="grey lighten-1"
                          dark
                        >
                          mdi-facebook
                        </v-icon>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-subtitle>Facebook</v-list-item-subtitle>
                        <v-list-item-title style="color: #2196F3 !important">{{hospedaje.facebook}}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>    
                  </v-col>
                </v-row>
                <br>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <span class="text-h5">Descripción</span><br><br>
                <div v-html="hospedaje.informacion">
                </div>
                <br>
              </v-col>
            </v-row>
						<v-row>
              <v-col cols="12 pa-5">
                <v-divider></v-divider>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <br>
                <span class="text-h5">Lo que este lugar ofrece</span><br><br>
              </v-col>
            </v-row>
            <v-row dense>
              <v-col cols="12">
                <v-row>
                  <v-col cols="6" md="3" v-for="hs in hospedaje.servicios" :key="hs.id">
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon large>
                          {{hs.icono}}
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>{{hs.servicio}}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>    
                  </v-col>
                </v-row>
                <v-row>
                  <br><br>
                </v-row>
              </v-col>
            </v-row>
					</v-col>
				</v-row>
			</v-flex>
		</v-container>
    <div style="background: #F7F7F7;" id="div_hospedajes">
      <v-container>
        <v-flex>
          <v-row>
            <v-col cols="12" md="1"></v-col>
            <v-col cols="12" md="10">
              <v-row>
                <v-col cols="12" md="8">
                  <div>
                    <span class="text-h5">Te pueden gustar estos hospedajes similares</span>
                  </div>
                </v-col>
                <v-col cols="12" md="4">
                </v-col>
              </v-row>
              <v-row>
                <v-carousel height="420" hide-delimiters style="box-shadow: 0px 0px">
                  <v-carousel-item v-for="i in 2" :key="i">
                    <v-layout row>
                      <v-flex sm6 md3 lg3 v-for="ho in list_hospedaje" :key="ho.id" pl-2 pr-2>
                        <router-link class="underline-none" :to="'/SiteHospedaje/'+ho.id" v-slot="{ navigate }">
                          <v-card class="mx-auto my-12"
                            max-width="374"
                            color="transparent"
                            @click="navigate"
                          >
                            <template slot="progress">
                            <v-progress-linear
                              color="deep-purple"
                              height="10"
                              indeterminate
                            ></v-progress-linear>
                            </template>
                            <v-img
                            height="250"
                            class="white--text align-start text-right"
                            :src="$Api_url_media+ho.img_principal"
                            >
                              <v-chip class="ma-2" color="blue" label small text-color="white">
                                {{ho.tipo}}
                              </v-chip>
                            </v-img>
                            <v-card-text>
                              <div>
                                <span class="text-subtitle-1 font-weight-bold">{{ho.nombre}}</span>	
                              </div>
                              <div class="row">
                                <div class="col-12">
                                  <div class="grey--text font-weight-light text-truncate">
                                    {{ho.direccion}}
                                  </div>
                                </div>	
                              </div>
                              <div class="row">
                                <div class="col-5" style="padding-top:0; padding-bottom:0;">
                                  <v-rating
                                  :value="ho.categoria"
                                  color="amber"
                                  dense
                                  half-increments
                                  readonly
                                  size="14"
                                  ></v-rating>
                                </div>
                                <div class="col-7" style="padding-top:0; padding-bottom:0;">
                                  <div class="text-right">
                                    <span class="font-weight-bold">Desde ${{ho.precio_min}} </span>noche
                                  </div>
                                </div>
                              </div>
                            </v-card-text>
                          </v-card>
                        </router-link>
                      </v-flex>
                    </v-layout>
                  </v-carousel-item>
                </v-carousel>
              </v-row>
            </v-col>
            <v-col cols="12" md="1"></v-col>
          </v-row>
        </v-flex>
      </v-container>
    </div>
    <v-dialog
      v-model="dialog_img"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-card-text>
          <div class="text-right">
            <v-btn
              icon
              x-large
              @click="dialog_img = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
          <v-row>
            <v-col cols="12" md="1"></v-col>
            <v-col cols="12" md="10">
              <v-row>
                <v-col cols="12">
                  <div class="text-center">
                    <br>
                    <span class="text-h4 font-weight-black" style="color:#0099ff">Galeria de Imagenes</span><br>
                    <span class="text-subtitle-1 font-weight-black">{{hospedaje.nombre}}</span><br><br>
                  </div>
                </v-col>
              </v-row>
              <ViewGallery galleryID="gallery_hospedaje" :images="multimedia_data" />
            </v-col>
            <v-col cols="12" md="1"></v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
	</div>
</template>
<style scoped>
  #div_hospedajes .v-sheet.v-card:not(.v-sheet--outlined) {
      box-shadow: none;
  }
  #div_hospedajes .v-card > *:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){
      border-radius: 20px;
  }
</style>
<script>
// @ is an alias to /src
import WOW from '@/plugins/wow.min.js';
import ViewGallery from '@/components/ViewGallery.vue';
import SiteServices from '@/services/SiteServices';
import MultimediaService from '@/services/MultimediaService';
// var wow = new WOW({ scrollContainer: "#scrolling-body"});
export default {
  name: 'HomeHospedaje',
  data(){
    return{
      bg:'transparent',
      altura_ini_p:500,
      dialog_img:false,
      list_hospedaje:[],
      hospedaje:{},
      multimedia_data:[],
	  drawer:false,
	  imagenes: [
        {
          largeURL:
            'https://www.hostallasolas.com/media/images/content/las-olas/las-olas-10.jpg',
          thumbnailURL:
            'https://www.hostallasolas.com/media/images/content/las-olas/las-olas-10.jpg',
          width: 1500,
          height: 1500,
        },
        {
          largeURL:
            'https://www.hostallasolas.com/data/content/f911b04f41478a646be03c51db29ce3a.jpeg',
          thumbnailURL:
            'https://www.hostallasolas.com/data/content/f911b04f41478a646be03c51db29ce3a.jpeg',
          width: 1669,
          height: 1669,
        },
        {
          largeURL:
            'https://www.hostallasolas.com/data/content/e388574b0d048161192dc61faee05b34.jpeg',
          thumbnailURL:
            'https://www.hostallasolas.com/data/content/e388574b0d048161192dc61faee05b34.jpeg',
          width: 2500,
          height: 1666,
        },
      ],
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
    this.get_hospedajeId();
    this.get_hospedajes();
    this.getMultimediaGaleria();
  },
  methods:{
    getMultimediaGaleria(){
      MultimediaService.getMultimedia('hospedajes', this.$route.params.id).then(response=>{
        let galeria=[];
        const element_aux = {
          largeURL: this.$Api_url_media + this.hospedaje.img_principal,
          thumbnailURL:this.$Api_url_media + this.hospedaje.img_principal,
          width: 1500,
          height: 1000
        };
        galeria.push(element_aux);
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
      })
    }, 
    get_hospedajeId(){
      SiteServices.getHospedajeId(this.$route.params.id).then(response=>{
        this.hospedaje=response.data;
      })
    },
    get_hospedajes(){
      SiteServices.getDataDiffLimit('hospedajes', 8, this.$route.params.id).then(response=>{
        this.list_hospedaje=response.data;
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
	ViewGallery,
  }
}
</script>
