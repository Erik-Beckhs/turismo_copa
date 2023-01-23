<template>
	<div style="background: #F7F7F7;" id="div_atractivos">
		<v-container>
			<v-flex>
				<v-row>
					<v-col cols="12" md="1"></v-col>
					<v-col cols="10">
                        <v-tabs v-model="tab_atractivos" color="blue" background-color="transparent">
                            <v-tab href="#tab_atractivo" @click="filtro_tab=''">
                                Atractivos
                            </v-tab>
                            <v-tab href="#tab_eventos" @click="filtro_tab='Eventos Programados'">
                                Eventos Programados
                            </v-tab>
                            <v-tab href="#tab_actividades" @click="filtro_tab='Actividades Que Hacer'">
                                Que Hacer
                            </v-tab>
                        </v-tabs>
                        <v-tabs-items v-model="tab_atractivos">
                            <v-tab-item value="tab_atractivo">
                            </v-tab-item>
                            <v-tab-item value="tab_eventos">
                            </v-tab-item>
                            <v-tab-item value="tab_actividades">
                            </v-tab-item>
                        </v-tabs-items>
                        <v-row>
                            <v-col cols="12"><br></v-col>
                            <v-col cols="12" md="4" sm="6">
                                <div class="text-left">
                                    <br>
                                    <span class="title-box" style="color:#021F3C">{{title_atractivo}}</span><br>
                                    <span class="subtitle-box">Municipio de Copacabana</span><br>
                                </div>        
                            </v-col>
                            <v-col v-for="(item, index) in filterAtractivos" cols="12" :md="calcule_col(index)" sm="6" :key="item.id">
                                <router-link class="underline-none" :to="'/HomeAtractivo/'+item.id" v-slot="{ navigate }">
                                    <v-hover v-slot="{ hover }" open-delay="100">
                                        <v-card
                                        :elevation="hover ? 12 : 2"
                                        :class="{ 'on-hover': hover }"
                                        @click="navigate"
                                        >
                                            <v-img aspect-ratio="1"
                                                height="450"
                                                class="grey lighten-2 white--text align-end"
                                                :src="$Api_url_media+item.img_principal"
                                            >
                                                <v-container style="padding: 10px 15px 30px 15px;">
                                                    <v-row>
                                                        <v-col cols="12" md="10">
                                                            <span class="font-weight-black" style="font-size: 2rem; text-shadow: 0 2px 4px rgb(0 0 0 / 50%);">{{item.nombre}}</span><br>
						                                    <span class="text-subtitle-1" style="text-shadow: 0 2px 4px rgb(0 0 0 / 50%);">{{item.descripcion}}</span>
                                                        </v-col>
                                                        <v-col cols="12" md="2"></v-col>
                                                    </v-row>
                                                </v-container>
                                            </v-img>
                                        </v-card>
                                    </v-hover>
						        </router-link>    
                            </v-col>
                        </v-row>
					</v-col>
					<v-col cols="12" md="1"></v-col>
				</v-row>
			</v-flex>
		</v-container>
	</div>
</template>
<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.7;
 }

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
<script>
// @ is an alias to /src
import WOW from '@/plugins/wow.min.js';
import ViewGallery from '@/components/ViewGallery.vue';
import SiteServices from '@/services/SiteServices';
// var wow = new WOW({ scrollContainer: "#scrolling-body"});
var index_mod3=0;
var index_mod2=0;
export default {
  name: 'HomeAtractivos',
  data(){
    return{
        tab_atractivos:null,
      bg:'transparent',
      altura_ini_p:500,
	  drawer:false,
	  imagenes: [
        {
          largeURL:
            'https://live.staticflickr.com/6099/6284904269_ea2148a6c9_b.jpg',
          thumbnailURL:
            'https://live.staticflickr.com/6099/6284904269_ea2148a6c9_b.jpg',
          width: 1500,
          height: 1500,
        },
        {
          largeURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
          thumbnailURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg',
          width: 1669,
          height: 2500,
        },
        {
          largeURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
          thumbnailURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
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
      list_atractivos:[],
      filtro_tab:'',
    }
  },
  mounted(){	
    index_mod3=0;
    index_mod2=0;
		this.altura_ini_p=(window.innerHeight)-64;
    	window.onscroll = () => {
			this.changeColor();
		};
		setTimeout(() => (this.activa_inicio()), 1000);	
		this.scroll_ini();
    this.get_atractivos();
  },
  methods:{
    calcule_col(index){
        let num_col='4'
        if(index==0 || index==1){
            num_col= '4';
        }else{
            if(((index+1) % 2) ==0){
                if(index_mod2==0){
                    num_col='4';
                    index_mod2=1;
                }else{
                    num_col='8';
                    index_mod2=0;
                }
            } else{
                if(index_mod3==0){
                    num_col='8';
                    index_mod3=1;
                }else{
                    num_col='4';
                    index_mod3=0;
                }
            }
        }
        return num_col;
    },
    get_atractivos(){
      SiteServices.getDataAll('atractivos').then(response=>{
        this.list_atractivos=response.data;
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
  computed:{
    filterAtractivos(){
        return this.list_atractivos.filter(elem => {
        	if (elem.categoria == this.filtro_tab) return true;
            else if(this.filtro_tab=='') return true;
    	});
    },
    title_atractivo(){
        if (this.filtro_tab=='Eventos Programados') return 'Eventos Programados';
        else if(this.filtro_tab=='Actividades Que Hacer') return 'Que Hacer';
        else return 'Atractivos';
    }
  },
  components: {
	ViewGallery,
  }
}
</script>
