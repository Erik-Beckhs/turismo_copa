<template>
	<div style="background: #F7F7F7;" id="div_noticia">
		<v-container>
			<v-flex>
				<v-row>
					<v-col cols="12" md="1"></v-col>
					<v-col cols="12" md="10">
						<v-row>
							<v-col cols="8" md="8">
								<div class="text-left">
									<br>
								</div>
							</v-col>
							<v-col cols="4" md="4">
                                <br>
							</v-col>
						</v-row>
                        <v-row>
                            <v-col cols="12">
                                <span class="font-weight-black" style="font-size: 3rem;">{{data_noticia.titulo}}</span><br>
                            </v-col>
                        </v-row>
						<v-row>
							<v-col cols="12">
                                <v-img
                                :src="$Api_url_media+data_noticia.img"
                                ></v-img>
							</v-col>
						</v-row>
                        <v-row>
                            <v-col cols="12">
                                <span class="text-h5 font-weight-light">{{data_noticia.entrada}}</span>
						        <br><br>
                            </v-col>
                            <v-col cols="12">
                                <span class="text-caption font-weight-light">Fecha Publicación • {{formatdate(data_noticia.fecha_publicacion)}}</span>
                            </v-col>
                        </v-row>
                        <v-row>
							<v-col cols="12">
								<div v-html="data_noticia.contenido"></div>
							</v-col>	
						</v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-divider></v-divider>
                                <v-subheader>ARTÍCULOS RELACIONADOS</v-subheader>
                            </v-col>
                            <v-col cols="12">
                                <v-row>
                                    <v-col cols="12" sm="6" md="3" v-for="not in otras_noticias" :key="not.id">
										<v-card
											class="mx-auto"
											max-width="344"
										>
											<v-img
											:src="$Api_url_media+not.img"
											height="200px"
											></v-img>

											<v-card-title>
											{{not.titulo}}
											</v-card-title>

											<v-card-subtitle>
											{{not.entrada}}
											</v-card-subtitle>

											<v-card-actions>
												<router-link class="underline-none" :to="'/SiteNoticia/'+not.id" v-slot="{ navigate }">
													<v-btn @click="navigate" color="orange lighten-2" text><v-icon left>mdi-arrow-right</v-icon>Ver nota</v-btn>
												</router-link>
											<v-spacer></v-spacer>
											</v-card-actions>
										</v-card>
									</v-col>
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
// @ is an alias to /src
import WOW from '@/plugins/wow.min.js';
import SiteServices from '@/services/SiteServices';
// var wow = new WOW({ scrollContainer: "#scrolling-body"});
export default {
  name: 'HomeNoticia',
  data(){
    return{
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
	  data_noticia:{},
	  multimedia_data:[],
	  otras_noticias:[]
    }
  },
  mounted(){	
		this.altura_ini_p=(window.innerHeight)-64;
    	window.onscroll = () => {
			this.changeColor();
		};
		setTimeout(() => (this.activa_inicio()), 1000);	
		this.scroll_ini();
		this.get_noticia();
		this.get_otrasnoticias();
  },
  methods:{
	formatdate(fecha){
		var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
		var today  = new Date(fecha); 
		return (today.toLocaleDateString("es-ES", options));
	},
	get_noticia(){
		SiteServices.getDataId('noticias', this.$route.params.id).then(response=>{
			this.data_noticia=response.data;
		})
	},
	get_otrasnoticias(){
		SiteServices.getDataDiffLimit('noticias', 4, this.$route.params.id).then(response=>{
			this.otras_noticias=response.data;
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
