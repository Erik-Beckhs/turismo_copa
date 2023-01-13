<template>
  <div class="home">
	<v-carousel cycle hide-delimiter-background show-arrows-on-hover :height="altura_ini_p">
		<v-carousel-item
		src="https://www.incaworldbolivia.com/fotos/0915201694507-Isla-del-sol-Bolivia.jpg"
		gradient="to top right, rgba(100,115,201,.33), rgba(28,28,28,.7)"
		reverse-transition="fade-transition"
		>
		
			<v-row class="fill-height" align="center" justify="center" style="top: -50px;">
				<div class="text-center white--text">
					<span class="font-weight-black" style="font-size: 4rem;">Un lugar mágico</span><br>
					<span class="text-subtitle-1">Descubre Copacabana, uno de los destinos turísticos mas importantes de Bolivia, lleno de magia y encanto</span>
				</div>
			</v-row>
		</v-carousel-item>
		<v-carousel-item
		src="../assets/img/a33.jpg"
		gradient="to top right, rgba(100,115,201,.33), rgba(28,28,28,.7)"
		reverse-transition="fade-transition"
		>
		
			<v-row class="fill-height" align="center" justify="center" style="top: -50px;">
				<div class="text-center white--text">
					<span class="font-weight-black" style="font-size: 4rem;">Un lugar mágico</span><br>
					<span class="text-subtitle-1">Descubre Copacabana, uno de los destinos turísticos mas importantes de Bolivia, lleno de magia y encanto</span>
				</div>
			</v-row>
		</v-carousel-item>
	</v-carousel>
	<div>
		<v-container style="padding-top: 40px; padding-bottom: 40px;">
			<v-row align="center" justify="center">
				<v-col cols="12" md="1" sm="12" lg="1" xl="1"></v-col>
				<v-col cols="12" md="5" sm="6" lg="5" xl="5">
					<div class="wow fadeInLeft">
						<div class="text-center">
						<span class="text-subtitle-2 grey--text">Municipio turístico de Bolivia</span><br>
						<span class="text-h4 font-weight-black" style="color:#0099ff">Copacabana</span>
						</div>
						<br><br>
						<p class="text-">
							Copacabana, en la actualidad, es considerada como uno de los más importantes destinos turísticos de Bolivia, por su exuberante belleza natural, sus atractivos  de  tipo  arqueológico,  cultural  y  por  el  estilo  de  vida  de  su  población,  que mantiene  aún  costumbres  auténticas  no  afectadas  por  el  consumismo  y  por  los  nuevos hábitos del mundo occidental.
						</p>
					</div>
				</v-col>
				<v-col cols="12" md="5" sm="6" lg="5" xl="5">
					<v-img class="wow fadeInRight" src="../assets/copaini.png"></v-img>
				</v-col>
				<v-col cols="12" md="1" sm="12" lg="1" xl="1"></v-col>
			</v-row>
		</v-container>
	</div>
	<div id="div_atractivos">
		<v-container style="padding-top: 40px; padding-bottom: 40px;">
			<v-row>
				<v-col cols="12">
					<div class="text-center">
						<br>
						<span class="text-h4 font-weight-black" style="color:#0099ff">Atractivos y eventos turísticos</span><br>
						<span class="text-subtitle-2 grey--text">Municipio turístico de Bolivia</span><br>
					</div>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12">
					<v-tabs v-model="tab_atractivos" centered color="blue">
						<v-tab href="#tab_atractivo">
							Atractivos
						</v-tab>
						<v-tab href="#tab_eventos">
							Eventos Programados
						</v-tab>
					</v-tabs>
					<v-tabs-items v-model="tab_atractivos">
						<v-tab-item value="tab_atractivo">
							<v-row>
								<v-col cols="12" sm="4" md="3" v-for="atr in list_atractivos" :key="atr.id">
									<div class="wow fadeInLeft grid">
										<figure class="effect-sadie">
											<img height="260" :src="$Api_url_media+atr.img_principal" :alt="atr.nombre">
											<figcaption>
												<h2>{{atr.nombre}}
												<span></span>
												</h2>
												<p>{{atr.descripcion}}</p>
												<router-link class="underline-none" :to="'/HomeAtractivo/'+atr.id" v-slot="{ navigate }">
													<a @click="navigate">View more</a>
												</router-link>
											</figcaption> 
										</figure>
									</div>
								</v-col>
							</v-row>
						</v-tab-item>
						<v-tab-item value="tab_eventos">
							<v-row>
								<v-col cols="12" sm="4" md="3" v-for="ev in list_eventos" :key="ev.id">
									<div class="wow fadeInLeft grid">
										<figure class="effect-sadie">
											<img height="260" :src="$Api_url_media+ev.img_principal" :alt="ev.nombre">
											<figcaption>
												<h2>{{ev.nombre}}
												<span></span>
												</h2>
												<p>{{ev.descripcion}}</p>
												<router-link class="underline-none" :to="'/HomeAtractivo/'+ev.id" v-slot="{ navigate }">
													<a @click="navigate">View more</a>
												</router-link>
											</figcaption> 
										</figure>
									</div>
								</v-col>
							</v-row>
						</v-tab-item>
					</v-tabs-items>	
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12">
					<div class="text-center">
						<router-link class="underline-none" to="/HomeAtractivos" v-slot="{ navigate }">
							<v-btn @click="navigate" rounded large color="blue" outlined><v-icon left>mdi-arrow-right</v-icon>ver todos</v-btn>
						</router-link>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</div>
	<div class="curved-div">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
			<path fill="#0099ff" fill-opacity="1" d="M0,192L80,208C160,224,320,256,480,240C640,224,800,160,960,144C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
		</svg>
		<div style="background: #0099ff;">
			<h1>Que puedes hacer</h1>
			<p>
				<span>
					Planes para todos los gustos	
				</span>
			</p>
			<v-row>
				<v-col cols="12" md="1"></v-col>
				<v-col cols="12" md="10">
					<v-row>
						<v-col cols="12" md="3" sm="6" v-for="act in list_actividades" :key="act.id">
							<router-link class="underline-none" :to="'/HomeAtractivo/'+act.id" v-slot="{ navigate }">
								<v-hover v-slot="{ hover }" open-delay="100">
									<v-card
									:elevation="hover ? 12 : 2"
									:class="{ 'on-hover': hover }"
									@click="navigate"
									>
										<v-img aspect-ratio="1"
											height="200"
											class="grey lighten-2 white--text align-end"
											:src="$Api_url_media+act.img_principal"
										>
											<v-container style="padding: 10px 15px 30px 15px;">
												<v-row>
													<v-col cols="12" md="12">
														<span class="font-weight-black" style="font-size: 1.5rem; text-shadow: 0 2px 4px rgb(0 0 0 / 50%);">{{act.nombre}}</span>
													</v-col>
												</v-row>
											</v-container>
										</v-img>
									</v-card>
								</v-hover>
							</router-link>    
						</v-col>
						<!-- <v-col cols="12" md="3" sm="6">
							<router-link class="underline-none" to="/HomeAtractivo" v-slot="{ navigate }">
								<v-hover v-slot="{ hover }" open-delay="100">
									<v-card
									:elevation="hover ? 12 : 2"
									:class="{ 'on-hover': hover }"
									@click="navigate"
									>
										<v-img aspect-ratio="1"
											height="200"
											class="grey lighten-2 white--text align-end"
											src="https://defbol.com/uploads/adm_paquetes/pak_1527272469_1540752375.jpg"
										>
											<v-container style="padding: 10px 15px 30px 15px;">
												<v-row>
													<v-col cols="12" md="12">
														<span class="font-weight-black" style="font-size: 1.5rem; text-shadow: 0 2px 4px rgb(0 0 0 / 50%);">Turs culturales</span>
													</v-col>
												</v-row>
											</v-container>
										</v-img>
									</v-card>
								</v-hover>
							</router-link>    
						</v-col>
						<v-col cols="12" md="3" sm="6">
							<router-link class="underline-none" to="/HomeAtractivo" v-slot="{ navigate }">
								<v-hover v-slot="{ hover }" open-delay="100">
									<v-card
									:elevation="hover ? 12 : 2"
									:class="{ 'on-hover': hover }"
									@click="navigate"
									>
										<v-img aspect-ratio="1"
											height="200"
											class="grey lighten-2 white--text align-end"
											src="https://www.kuodatravel.com/wp-content/uploads/2022/05/copacabana-Bolivia.jpg"
										>
											<v-container style="padding: 10px 15px 30px 15px;">
												<v-row>
													<v-col cols="12" md="12">
														<span class="font-weight-black" style="font-size: 1.5rem; text-shadow: 0 2px 4px rgb(0 0 0 / 50%);">Actividades en playa</span>
													</v-col>
												</v-row>
											</v-container>
										</v-img>
									</v-card>
								</v-hover>
							</router-link>    
						</v-col>
						<v-col cols="12" md="3" sm="6">
							<router-link class="underline-none" to="/HomeAtractivo" v-slot="{ navigate }">
								<v-hover v-slot="{ hover }" open-delay="100">
									<v-card
									:elevation="hover ? 12 : 2"
									:class="{ 'on-hover': hover }"
									@click="navigate"
									>
										<v-img aspect-ratio="1"
											height="200"
											class="grey lighten-2 white--text align-end"
											src="https://rcbolivia.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-23-at-20.18.09-1.jpeg"
										>
											<v-container style="padding: 10px 15px 30px 15px;">
												<v-row>
													<v-col cols="12" md="12">
														<span class="font-weight-black" style="font-size: 1.5rem; text-shadow: 0 2px 4px rgb(0 0 0 / 50%);">Excursiones</span>
													</v-col>
												</v-row>
											</v-container>
										</v-img>
									</v-card>
								</v-hover>
							</router-link>    
						</v-col>
						<v-col cols="12" md="3" sm="6">
							<router-link class="underline-none" to="/HomeAtractivo" v-slot="{ navigate }">
								<v-hover v-slot="{ hover }" open-delay="100">
									<v-card
									:elevation="hover ? 12 : 2"
									:class="{ 'on-hover': hover }"
									@click="navigate"
									>
										<v-img aspect-ratio="1"
											height="200"
											class="grey lighten-2 white--text align-end"
											src="https://etheriamagazine.com/wp-content/uploads/2019/12/comida-lago-titicaca-bolivia-900x569.jpg"
										>
											<v-container style="padding: 10px 15px 30px 15px;">
												<v-row>
													<v-col cols="12" md="12">
														<span class="font-weight-black" style="font-size: 1.5rem; text-shadow: 0 2px 4px rgb(0 0 0 / 50%);">Gastronomía</span>
													</v-col>
												</v-row>
											</v-container>
										</v-img>
									</v-card>
								</v-hover>
							</router-link>    
						</v-col>	 -->
					</v-row>
				</v-col>
				<v-col cols="12" md="1"></v-col>
			</v-row>
		</div>           
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
			<path fill="#0099ff" fill-opacity="1" d="M0,0L48,10.7C96,21,192,43,288,90.7C384,139,480,213,576,234.7C672,256,768,224,864,186.7C960,149,1056,107,1152,117.3C1248,128,1344,192,1392,224L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
		</svg>  
	</div>
	<div id="div_hospedajes">
		<v-container>
			<v-flex>
				<v-row>
					<v-col cols="8" md="8">
						<div class="text-left">
							<span class="text-h4 font-weight-black" style="color:#0099ff">Hospedajes</span><br>
							<span class="text-subtitle-2 grey--text">Municipio turístico de Bolivia</span><br>
						</div>
					</v-col>
					<v-col cols="4" md="4">
						
					</v-col>
				</v-row>
				<v-carousel height="580" hide-delimiters style="box-shadow: 0px 0px">
				<v-carousel-item v-for="i in 2" :key="i">
					<v-layout row>
					<v-flex sm3 v-for="j in 6" :key="j" pl-2 pr-2>
						<v-card class="mx-auto my-12"
							max-width="374"
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
							src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/117502498.jpg?k=cf7b2bfb872933a7d05a9adbacfa3a90d538993be44fdd3f20a1040545fc6d37&o=&hp=1"
							></v-img>

							<v-card-title>Hostal Las Olas</v-card-title>

							<v-card-text>
							<v-row
								align="center"
								class="mx-0"
							>
								<v-rating
								:value="4.5"
								color="amber"
								dense
								half-increments
								readonly
								size="14"
								></v-rating>
							</v-row>

							<div class="my-4 text-subtitle-1">
								<v-icon left small>mdi-wifi</v-icon> WiFi gratis <v-icon left small>mdi-dog</v-icon>Admite mascotas
							</div>

							<div><v-icon left small>mdi-map-marker</v-icon> Calle Michel Perez Nº1-3 Calle Jauregui, 4132 Copacabana</div>
							</v-card-text>

							<v-divider class="mx-4"></v-divider>
							<v-card-text>
								<v-row>
									<v-col cols="12" md="8">
										<div class="text-left">
											<span class="grey--text">Precios desde:</span>&nbsp; <span class="text-h5 font-weight-black">$56</span>
										</div>
									</v-col>
									<v-col cols="12" md="4">
										<router-link class="underline-none" to="/SiteHospedaje" v-slot="{ navigate }">
											<v-btn x-small outlined @click="navigate" color="blue"><v-icon left>mdi-arrow-right</v-icon>ver mas</v-btn>
										</router-link>
									</v-col>
								</v-row>
							</v-card-text>
						</v-card>
					</v-flex>
					</v-layout>
				</v-carousel-item>
				</v-carousel>
				<v-row>
					<v-col cols="12">
						<div class="text-center">
							<router-link class="underline-none" to="/SiteHospedajes" v-slot="{ navigate }">
								<v-btn @click="navigate" rounded large color="blue" outlined><v-icon left>mdi-arrow-right</v-icon>ver todos</v-btn>
							</router-link>
						</div>
					</v-col>
				</v-row>
			</v-flex>	
		</v-container>
	</div>
	<div style="background: #F7F7F7;" id="div_noticias">
		<v-container>
			<v-flex>
				<v-row>
					<v-col cols="8" md="8">
						<div class="text-left">
							<span class="text-h4 font-weight-black" style="color:#0099ff">Noticias</span><br>
							<span class="text-subtitle-2 grey--text">Municipio turístico de Bolivia</span><br>
						</div>
					</v-col>
					<v-col cols="4" md="4">
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="6" md="3">
						<v-card
							class="mx-auto"
							max-width="344"
						>
							<v-img
							src="https://cdn.bolivia.com/sdi/2021/06/06/fiscalia-garantiza-recursos-para-la-construccion-de-un-edificio-del-asiento-fiscal-de-copacabana-923872.jpg"
							height="200px"
							></v-img>

							<v-card-title>
							Recursos para copacabana
							</v-card-title>

							<v-card-subtitle>
							William Alave Laura, informó que estas actividades fueron iniciadas por la Fiscalía paceña con el propósito de brindar una mejor atención a los municipios.
							</v-card-subtitle>

							<v-card-actions>
								<router-link class="underline-none" to="/SiteNoticia" v-slot="{ navigate }">
									<v-btn @click="navigate" color="orange lighten-2" text><v-icon left>mdi-arrow-right</v-icon>Ver nota</v-btn>
								</router-link>
							<v-spacer></v-spacer>
							</v-card-actions>
						</v-card>
					</v-col>
					<v-col cols="6" md="3">
						<v-card
							class="mx-auto"
							max-width="344"
						>
							<v-img
							src="https://infusedexposures.files.wordpress.com/2014/03/img_8173.jpg"
							height="200px"
							></v-img>

							<v-card-title>
							Recursos para copacabana
							</v-card-title>

							<v-card-subtitle>
							William Alave Laura, informó que estas actividades fueron iniciadas por la Fiscalía paceña con el propósito de brindar una mejor atención a los municipios.
							</v-card-subtitle>

							<v-card-actions>
							<v-btn
								color="orange lighten-2"
								text
							>
								Ver nota
							</v-btn>

							<v-spacer></v-spacer>
							</v-card-actions>
						</v-card>
					</v-col>
					<v-col cols="6" md="3">
						<v-card
							class="mx-auto"
							max-width="344"
						>
							<v-img
							src="https://4.bp.blogspot.com/-PQmOD6ACISE/Vrz8XfhDV5I/AAAAAAAACas/8inJzafL4q4/s1600/virgen_copacabana.jpg"
							height="200px"
							></v-img>

							<v-card-title>
							Recursos para copacabana
							</v-card-title>

							<v-card-subtitle>
							William Alave Laura, informó que estas actividades fueron iniciadas por la Fiscalía paceña con el propósito de brindar una mejor atención a los municipios.
							</v-card-subtitle>

							<v-card-actions>
							<v-btn
								color="orange lighten-2"
								text
							>
								Ver nota
							</v-btn>

							<v-spacer></v-spacer>
							</v-card-actions>
						</v-card>
					</v-col>
					<v-col cols="6" md="3">
						<v-card
							class="mx-auto"
							max-width="344"
						>
							<v-img
							src="https://cdn.bolivia.com/sdi/2021/06/06/fiscalia-garantiza-recursos-para-la-construccion-de-un-edificio-del-asiento-fiscal-de-copacabana-923872.jpg"
							height="200px"
							></v-img>

							<v-card-title>
							Recursos para copacabana
							</v-card-title>

							<v-card-subtitle>
							William Alave Laura, informó que estas actividades fueron iniciadas por la Fiscalía paceña con el propósito de brindar una mejor atención a los municipios.
							</v-card-subtitle>

							<v-card-actions>
							<v-btn
								color="orange lighten-2"
								text
							>
								Ver nota
							</v-btn>
							<v-spacer></v-spacer>
							</v-card-actions>
						</v-card>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12">
						<div class="text-center">
							<router-link class="underline-none" to="/SiteNoticias" v-slot="{ navigate }">
								<v-btn @click="navigate" rounded large color="blue" outlined><v-icon left>mdi-arrow-right</v-icon>ver todos</v-btn>
							</router-link>
						</div>
					</v-col>
				</v-row>
			</v-flex>
		</v-container>
	</div>
  </div>
</template>
<style scoped>
	.card-simplex{
		background-color: transparent !important;
    	border-color: #fff !important;
	}
	figure.effect-sadie h2 {
    	color: #ffffff;
		text-shadow: 0 2px 4px rgb(0 0 0 / 50%);
	}
	.curved-div .v-card {
		transition: opacity .4s ease-in-out;
	}

	.curved-div .v-card:not(.on-hover) {
		opacity: 0.7;
	}

	.show-btns {
		color: rgba(255, 255, 255, 1) !important;
	}
</style>
<script>
// @ is an alias to /src
import WOW from '@/plugins/wow.min.js';
import SiteServices from '@/services/SiteServices';
// var wow = new WOW({ scrollContainer: "#scrolling-body"});
export default {
  name: 'Home',
  data(){
    return{
		tab_atractivos:null,
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
				src: '../assets/copaini.png',
			},
		],
		list_atractivos:[],
		list_eventos:[],
		list_actividades:[],
    }
  },
  mounted(){	
		this.altura_ini_p=(window.innerHeight)-64;
    	window.onscroll = () => {
			this.changeColor();
		};
		setTimeout(() => (this.activa_inicio()), 1000);
		this.get_atractivos();
		this.get_eventos();
		this.get_actividades();
  },
  methods:{
	get_actividades(){
		SiteServices.getActividadLimit(4).then(response=>{
			this.list_actividades=response.data;
		})
	},
	get_eventos(){
		SiteServices.getEventosLimit(8).then(response=>{
			this.list_eventos=response.data;
		})
	},
	get_atractivos(){
		SiteServices.getAtractivoLimit(8).then(response=>{
			this.list_atractivos=response.data;
		})
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
