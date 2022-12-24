<template>
  <div class="home">
    <v-app-bar color="white" elevate-on-scroll absolute scroll-target="#scrolling-body" app>
		<v-toolbar-title class="font-weight-light">
			<v-img
				src="../assets/logo_copa.png"
				width="120"
			></v-img>
			<!--span>COPACABANA ES TU DESTINO</span-->
		</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-btn text>
			inicio
		</v-btn>
		<v-btn text href="#div_atractivos">
			atractivos turísticos
		</v-btn>
		<v-btn text href="#div_hospedajes">
			hospedajes
		</v-btn>
		<v-btn text>
			eventos programados
		</v-btn>
		<v-btn text href="#div_noticias">
			noticias
		</v-btn>
	</v-app-bar>
	<v-main>
		<v-sheet id="scrolling-body" class="overflow-y-auto" :max-height="altura_ini_p">
			<v-carousel cycle hide-delimiter-background show-arrows-on-hover :height="altura_ini_p">
				<v-carousel-item
				v-for="(item,i) in items"
				:key="i"
				:src="item.src"
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
								Lorem ipsum dolor sit amet consectetur adipisicing elit. At, nisi error maiores deserunt voluptate fuga consequatur qui magnam velit explicabo ea, nostrum sapiente temporibus, hic ad laudantium nobis voluptas doloremque.
								<br>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem modi porro facilis consectetur mollitia natus, odio quas deleniti. Quam, adipisci dicta! Consequuntur animi tempora architecto eaque aspernatur facilis laboriosam fugiat!
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
								<span class="text-h4 font-weight-black" style="color:#0099ff">Atractivos turísticos</span><br>
								<span class="text-subtitle-2 grey--text">Municipio turístico de Bolivia</span><br>
							</div>
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="6" sm="4" md="3">
							<div class="wow fadeInLeft grid">
								<figure class="effect-sadie">
									<img height="260" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/67/d7/35/aerial-view-of-cerro.jpg?w=1200&h=-1&s=1" alt="img02">
									<figcaption>
										<h2>Cerro Calvario
										<span></span>
										</h2>
										<p>En este lugar se mezcla la historia antigua 
										<br>con el mundo moderno.</p>
										<a href="#">View more</a>
									</figcaption> 
								</figure>
							</div>
						</v-col>
						<v-col cols="6" sm="4" md="3">
							<div class="wow fadeInLeft grid">
								<figure class="effect-sadie">
									<img height="260" src="https://live.staticflickr.com/6099/6284904269_ea2148a6c9_b.jpg" alt="img02">
									<figcaption>
										<h2>Basílica
										<span></span>
										</h2>
										<p>En este lugar se mezcla la historia antigua 
										<br>con el mundo moderno.</p>
										<a href="#">View more</a>
									</figcaption>
								</figure>
							</div>
						</v-col>
						<v-col cols="6" sm="4" md="3">
							<div class="wow fadeInLeft grid">
								<figure class="effect-sadie">
									<img height="260" src="https://i.ytimg.com/vi/jNHknd65uwA/maxresdefault.jpg" alt="img02">
									<figcaption>
										<h2>Playas
										<span></span>
										</h2>
										<p>En este lugar se mezcla la historia antigua 
										<br>con el mundo moderno.</p>
										<a href="#">View more</a>
									</figcaption>
								</figure>
							</div>
						</v-col>
						<v-col cols="6" sm="4" md="3">
							<div class="wow fadeInLeft grid">
								<figure class="effect-sadie">
									<img height="260" src="https://boliviaturistica.com/wp-content/uploads/2018/08/Isla-del-Sol-Bolivia-1024x535.jpg" alt="img02">
									<figcaption>
										<h2>Isla del sol
										<span></span>
										</h2>
										<p>En este lugar se mezcla la historia antigua 
										<br>con el mundo moderno.</p>
										<a href="#">View more</a>
									</figcaption>
								</figure>
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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci lorem, porttitor nec vulputate sit amet...
					</p>
					<v-row>
					<v-col cols="2" md="3">
							<v-card
							class="mx-auto wow fadeInLeft"
							color="#eb672e"
							dark
							max-width="400"
							>
							<v-card-title>
								<v-icon
								large
								left
								>
								mdi-train-car
								</v-icon>
								<span class="text-h6 font-weight-light">Caminata</span>
							</v-card-title>

							<v-card-text class="text-h5 font-weight-bold">
								te ofrece un paisaje pintoresco, ruinas arqueológicas y las fascinantes
							</v-card-text>
							</v-card>
						</v-col>
						<v-col cols="2" md="3">
							<v-card
							class="mx-auto wow fadeInLeft"
							color="#eb672e"
							dark
							max-width="400"
							>
							<v-card-title>
								<v-icon
								large
								left
								>
								mdi-train-car
								</v-icon>
								<span class="text-h6 font-weight-light">Caminata</span>
							</v-card-title>

							<v-card-text class="text-h5 font-weight-bold">
								te ofrece un paisaje pintoresco, ruinas arqueológicas y las fascinantes
							</v-card-text>
							</v-card>
						</v-col>
						<v-col cols="2" md="3">
							<v-card
							class="mx-auto wow fadeInRight"
							color="#eb672e"
							dark
							max-width="400"
							>
							<v-card-title>
								<v-icon
								large
								left
								>
								mdi-train-car
								</v-icon>
								<span class="text-h6 font-weight-light">Caminata</span>
							</v-card-title>

							<v-card-text class="text-h5 font-weight-bold">
								te ofrece un paisaje pintoresco, ruinas arqueológicas y las fascinantes
							</v-card-text>
							</v-card>
						</v-col>
						<v-col cols="2" md="3">
							<v-card
							class="mx-auto wow fadeInRight"
							color="#eb672e"
							dark
							max-width="400"
							>
							<v-card-title>
								<v-icon
								large
								left
								>
								mdi-train-car
								</v-icon>
								<span class="text-h6 font-weight-light">Caminata</span>
							</v-card-title>

							<v-card-text class="text-h5 font-weight-bold">
								te ofrece un paisaje pintoresco, ruinas arqueológicas y las fascinantes
							</v-card-text>
							</v-card>
						</v-col>
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
								<div class="text-right">
									<br>
									<v-btn large color="blue" outlined><v-icon left>mdi-arrow-right</v-icon>ver todos</v-btn>
								</div>
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
												<v-btn text color="blue">
													ver mas
												</v-btn>
											</v-col>
										</v-row>
									</v-card-text>
								</v-card>
							</v-flex>
							</v-layout>
						</v-carousel-item>
						</v-carousel>
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
								<div class="text-right">
									<br>
									<v-btn large color="blue" outlined><v-icon left>mdi-arrow-right</v-icon>ver todos</v-btn>
								</div>
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
					</v-flex>
				</v-container>
			</div>
			<div class="curved-div-footer">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path fill="#0099ff" fill-opacity="1" d="M0,192L80,208C160,224,320,256,480,240C640,224,800,160,960,144C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
				</svg>
			</div>
			<v-footer dark padless>
				<v-card flat tile class="white--text text-center" color="#0099ff">
				<v-card-text>
					<v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
						<v-icon size="24px">
							{{ icon }}
						</v-icon>
					</v-btn>
				</v-card-text>
				<v-card-text class="white--text pt-0">
					Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
				</v-card-text>
				<v-divider></v-divider>
				<v-card-text class="white--text">
					{{ new Date().getFullYear() }} — <strong>COPACABANA ES TU DESTINO</strong>
				</v-card-text>
				</v-card>
			</v-footer>	
		</v-sheet>	
	</v-main>
  </div>
</template>
<style>
  .v-application--wrap {
    background: #ffffff !important;
  }
  html{
    overflow: hidden !important;
  }
  .curved-div {
  background: #fff;
  color: #fff;
  text-align: center;
}
.curved-div-footer {
  background: #F7F7F7;
  color: #fff;
  text-align: center;
}
.curved-div h1 {
  font-size: 6rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.curved-div p {
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.curved-div svg {
  display: block;
}
.curved-div-footer svg {
  display: block;
}
</style>
<script>
// @ is an alias to /src
import WOW from '@/plugins/wow.min.js';
// var wow = new WOW({ scrollContainer: "#scrolling-body"});
export default {
  name: 'Home',
  data(){
    return{
      bg:'transparent',
      altura_ini_p:500,
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
  },
  methods:{
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
