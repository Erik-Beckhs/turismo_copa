<template>
	<div style="background: #F7F7F7;" id="div_noticias">
		<v-container>
			<v-flex>
				<v-row>
					<v-col cols="12" md="1"></v-col>
					<v-col cols="12" md="10">
						<v-row>
							<v-col cols="8" md="8">
								<div class="text-left">
									<span class="text-h4 font-weight-black" style="color:#0099ff">Noticias</span><br>
									<span class="text-subtitle-2 grey--text">Copacabana municipio turístico de Bolivia</span><br>
								</div>
							</v-col>
							<v-col cols="4" md="4">
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12" sm="6" md="3" v-for="not in data_noticias" :key="not.id">
								<v-card
									class="mx-auto"
									max-width="344"
								>
									<v-img
									src="https://cdn.bolivia.com/sdi/2021/06/06/fiscalia-garantiza-recursos-para-la-construccion-de-un-edificio-del-asiento-fiscal-de-copacabana-923872.jpg"
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
  name: 'HomeNoticias',
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
	  data_noticias:[]
    }
  },
  mounted(){	
		this.altura_ini_p=(window.innerHeight)-64;
    	window.onscroll = () => {
			this.changeColor();
		};
		setTimeout(() => (this.activa_inicio()), 1000);	
		this.scroll_ini();
		this.get_noticias();
  },
  methods:{
	get_noticias(){
		SiteServices.getDataAll('noticias').then(response=>{
			this.data_noticias=response.data;
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
