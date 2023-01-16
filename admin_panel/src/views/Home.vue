<template>
  <div class="home">
	<!--<v-carousel cycle hide-delimiter-background show-arrows-on-hover :height="altura_ini_p">
		<v-carousel-item
		src="../assets/img/a100.jpg"
		gradient="to top right, rgba(100,115,201,.33), rgba(28,28,28,.7)"
		reverse-transition="fade-transition"
		>
		
			<v-row class="fill-height" align="center" justify="center" style="top: -50px;">
				<div class="text-center white--text">
					<span class="fs-2">DESCUBRE...</span><br>
					<span class="font-weight-black fs-4">Un lugar mágico</span><br>
					<span class="fs-1-2">Descubre Copacabana, uno de los destinos turísticos más importantes de Bolivia, lleno de magia y encanto</span>
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
					<span class="fs-2">COMPARTE...</span><br>
					<span class="font-weight-black fs-4">Una Maravillosa Experiencia</span><br>
					<span class="fs-1-2">Comparte maravillosas experiencias con los servicios, atractivos y eventos que le brinda el destino turístico número uno de La Paz</span>
				</div>
			</v-row>
		</v-carousel-item>
		<v-carousel-item
		src="../assets/img/a4.jpg"
		gradient="to top right, rgba(100,115,201,.33), rgba(28,28,28,.7)"
		reverse-transition="fade-transition"
		>
		
			<v-row class="fill-height" align="center" justify="center" style="top: -50px;">
				<div class="text-center white--text">
					<span class="fs-2">VISITA...</span><br>
					<span class="font-weight-black fs-4">Nuestro Santuario</span><br>
					<span class="fs-1-2">Visita el Santuario de Copacabana y la Virgencita de la Candelaria, patrona de Bolivia</span>
				</div>
			</v-row>
		</v-carousel-item>
	</v-carousel>-->
	<div class="hero">
		<video autoplay loop muted plays-inline class="back-video">
			<source src="@/assets/video/principal.mp4" type="video/mp4">
		</video>
		<nav class="d-none d-sm-none d-md-flex">
			<img src="@/assets/logo_copa.png" class="logo">
			<ul>
				<li>
					<router-link class="underline-none" to="/" v-slot="{ navigate }">
						<a @click="navigate">INICIO</a>
					</router-link>
				</li>
				<li>
					<router-link class="underline-none" to="/HomeAtractivos" v-slot="{ navigate }">
						<a @click="navigate">
							atractivos turísticos
						</a>
					</router-link>
				</li>
				<li>
					<router-link class="underline-none" to="/SiteHospedajes" v-slot="{ navigate }">
						<a @click="navigate">
							hospedajes
						</a>
					</router-link>
				</li>
				<!-- <li><a href="#">EVENTOS PROGRAMADOS</a></li> -->
				<li>
					<router-link class="underline-none" to="/SiteNoticias" v-slot="{ navigate }">
						<a @click="navigate">
							noticias
						</a>
					</router-link>
				</li>
				<!-- <li><a href="#">NOSOTROS</a></li> -->
			</ul>
		</nav>
		<div class="content">
			<h1>Copacabana</h1>
			<a href="#">Explorar</a>
		</div>
	</div>
	<div>
		<v-container style="padding-top: 50px; padding-bottom: 50px;">
			<v-row align="center" justify="center">
				<v-col cols="12" md="6" sm="6" lg="5" xl="5">
					<div class="wow fadeInLeft">
						<div class="text-left">
							<span class="fs-2 font-weight-black">Copacabana</span><br>
							<span class="fs-1-2 grey--text">Municipio turístico de Bolivia</span><br>
							<hr class="separador">
						</div>
						<br>
						<p class="color-content">
							Copacabana, en la actualidad, es considerada como uno de los más importantes destinos turísticos de Bolivia, por su exuberante belleza natural, sus atractivos  de  tipo  arqueológico,  cultural  y  por  el  estilo  de  vida  de  su  población,  que mantiene  aún  costumbres  auténticas  no  afectadas  por  el  consumismo  y  por  los  nuevos hábitos del mundo occidental.
						</p>
						<p class="color-content">
							Esta ubicada a 150 Km de la Ciudad de La Paz, las empresas de transporte hacen sus salidas diarias desde el Cementerio General de la Ciudad de La Paz o la terminal interprovincial de la ciudad de El Alto, el tiempo de viaje tiene una duración de de 3 horas y media. También existen algunas agencias de viajes que organizan el traslado particular a Copacabana.
						</p>
					</div>
				</v-col>
				<v-col cols="12" md="6" sm="6" lg="5" xl="5" class="pt-10 ms-10">
					<v-img width="600" class="wow fadeInRight img-sepia" src="../assets/copaini.png"></v-img>
				</v-col>
			</v-row>
		</v-container>
	</div>
	<div id="div_atractivos">
		<v-container style="padding-top: 40px; padding-bottom: 40px;">
			<v-row>
				<v-col cols="12">
					<div class="text-left">
						<span class="fs-1 fw-600" style="color:#4fbab2;">VEN Y DISFRUTA</span><br>
						<span class="fs-2">Visita nuestros Atractivos Turísticos</span>
						<hr class="separador">
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
			<span class="fs-4 font-weight-bold">¿Qué puedes hacer?</span>
			<p>
				<span class="fs-1-5">
					No te lo puedes perder	
				</span><br>
				<span class="fs-1-2">
					Elige el plan que más te guste para hacer que tu estancia en Copacabana sea inolvidable
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
														<span class="font-weight-black" style="font-size: 1.5rem; text-shadow: 0 2px 4px rgb(0 0 0 / 50%);">Tours culturales</span>
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
	<div id="eventos">
		<v-container style="padding-top: 40px; padding-bottom: 40px;">
			<v-row>
				<v-col cols="12">
					<div class="text-left">
						<span class="fs-1 fw-600" style="color:#4fbab2;">CULTURA</span><br>
						<span class="fs-2">Disfruta nuestros Eventos Programados</span>
						<hr class="separador">
						<span class="fs-1 grey--text">Fiestas patronales, ferias, ceremonias, entre otras actividades</span><br>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</div>
	<div id="div_hospedajes">
		<v-container>
			<v-flex>
				<v-row>
					<v-col cols="9" md="9">
						<div class="text-left">
							<span class="fs-1 fw-600" style="color:#4fbab2;">ESTADÍA</span><br>
							<span class="fs-2">Establecimientos de Hospedaje</span>
							<hr class="separador">
							<span class="fs-1 grey--text">Disfruta de tu estadía en el santuario, hospedandote en nuestros hoteles con gran variedad de servicios y costo variado</span><br>
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
	<div id="id_informacion_util">
		<v-container>
			<span class="fs-1 fw-600" style="color:#4fbab2;">PLANIFICA TU VIAJE</span><br>
			<span class="fs-2">Descubre más información de :</span>
			<hr class="separador">
			<v-flex class="my-15">
				<v-row>
					<v-col cols="3">
						<div class="text-center">
							<v-avatar size="128">
							<img class="img-opacity"
								src="@/assets/flaticon/escuela-de-autobuses.png"
								alt="como llegar"
							>
							</v-avatar><br>
							<span class="fs-1 mt-3">Como llegar a <br>
							Copacabana</span><br>
							<span class="fs-0-9 grey--text">Diferentes formas de llegar</span>
						</div>
					</v-col>
					<v-col cols="3">
						<div class="text-center">
							<v-avatar size="128">
							<img class="img-opacity"
								src="@/assets/flaticon/lancha-rapida.png"
								alt="como moverse"
							>
							</v-avatar><br>
							<span class="fs-1 mt-3">Como viajar por <br>
							Copacabana</span><br>
							<span class="fs-0-9 grey--text">Destinos perfectamente comunicados</span>
						</div>
					</v-col>
					<v-col cols="3">
						<div class="text-center">
							<v-avatar size="128">
							<img class="img-opacity"
								src="@/assets/flaticon/mapa.png"
								alt="John"
							>
							</v-avatar><br>
							<span class="fs-1 mt-3">Mapa</span><br>
							<span class="fs-0-9 grey--text">Localiza lo que te interesa</span>
						</div>
					</v-col>
					<v-col cols="3">
						<div class="text-center">
							<v-avatar size="128">
							<img class="img-opacity"
								src="@/assets/flaticon/buena-resena.png"
								alt="John"
							>
							</v-avatar><br>
							<span class="fs-1 mt-3">Mi Viaje</span><br>
							<span class="fs-0-9 grey--text">Escribe reseñas de tu visita</span>
						</div>
					</v-col>
					
				</v-row>
			</v-flex>
		</v-container>
	</div>
	<div style="background: #F7F7F7;" id="div_noticias" >
		<v-container>
			<v-flex class="my-15">
				<v-row>
					<v-col cols="9" md="9">
						<div class="text-left">
							<span class="fs-1 fw-600" style="color:#4fbab2;">MANTENTE INFORMADO</span><br>
							<span class="fs-2">Noticias Relevantes del Municipio</span>
							<hr class="separador">
							<span class="fs-1 grey--text">Aquí encontraras información relevante acerca de las actividades mancomunadas que lleva adelante el Gobierno Autonómo Municipal de Copacabana juntamente a la Dirección de Turismo Copacabana y la población en general</span>
						</div>
					</v-col>
					<v-col cols="4" md="4">
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12" sm="6" md="3" v-for="not in list_noticias" :key="not.id">
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
	<div id="div_nosotros">
		<v-container class="my-15">
			<v-flex class="mx-15">
				<v-row>
					<v-col cols="6">
						<span class="fs-2-5">
							Escribenos
						</span><br>
						<span class="fs-1 grey--text">
							Para nosotros es importante comunicarnos con nuestros visitantes
						</span>
						<v-container class="ms-16 mt-5">
							<span class="fs-2">
								Dirección de Turismo <br>
								Copacabana
							</span><br><br>
							<p>
								<v-icon color="blue lighten-2">mdi-map-marker</v-icon>&nbsp;
								Plaza 2 de Febrero, Copacabana Bolivia
							</p>
							<p>
								<v-icon color="blue lighten-2">mdi-email</v-icon>&nbsp;
								copacabanasomostudestino@gmail.com
							</p>
							<p>
								<v-icon color="blue lighten-2">mdi-phone</v-icon>&nbsp;
								61216696
							</p>
						</v-container>
						<v-container class="ms-16">
							<div class="fs-1-5 justify-center">
								Encuentranos también en:
							</div>
							<v-row class="justify-center mt-3">
								<v-list-item-avatar>
									<v-img src="@/assets/img/social/facebook.png"></v-img>
								</v-list-item-avatar>
								<v-list-item-avatar>
									<v-img src="@/assets/img/social/instagram.png"></v-img>
								</v-list-item-avatar>
								<v-list-item-avatar>
									<v-img src="@/assets/img/social/whatsapp.jpg"></v-img>
								</v-list-item-avatar>
							</v-row>
						</v-container>
					</v-col>
					<v-col cols="6 text-center">
						<v-img  class="mx-auto" src="@/assets/img/escudo.png" width="300">
						</v-img>
					</v-col>
				</v-row>
			</v-flex>
		</v-container>
	</div>
	<div class="pa-2">
		<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7028.137552529651!2d-69.08804086311453!3d-16.16281986022165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sbo!4v1673794327002!5m2!1ses!2sbo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

	.map{
		width:100%;
		height:500px;
	}

	/*hero*/
	.hero{
		width:100%;
		height:100vh;
		background-image:linear-gradient(rgba(12,3,51,0.3), rgba(12,3,51,0.3));
		position:relative;
		padding:0 5%;
		display:flex;
		align-items: center;
		justify-content: center;
	}

	nav{
		width:100%;
		position:absolute;
		top:0;
		left:0;
		padding:20px 8%;
		display:flex;
		align-items:center;
		justify-content:space-between;
	}

	nav .logo{
		width:100px;
	}
	nav ul li{
		list-style:none;
		display:inline-block;
		margin-left:40px;
	}
	nav ul li a{
		text-decoration: none;
		text-transform: uppercase;
		color:#fff;
		font-size:17px;
		font-weight:600;
	}
	nav ul li a:hover{
		background-color: #fff;
		color: black;
		border-radius:3px;
		padding:5px 10px;
		transition: all .5s ease;
	}
	.content{
		text-align: center;	
	}
	.content h1{
		font-size:160px;
		color:#fff;
		font-weight:600;
		text-shadow: 0 2px 4px rgb(0 0 0 / 50%);
		position:relative;
	}
	.content a{
		text-decoration: none;
		display: inline-block;
		color:#fff;
		font-size:24px;
		border:2px solid #fff;
		padding:14px 70px;
		border-radius:50px;
		margin-top:20px;
		position:relative;
	}

	.content a:hover{
		background-color: #fff;
		color:black;
	}

	.back-video{
		position:absolute;
		right:0;
		bottom:0;
	}

	@media (min-aspect-ratio: 16/9){
		.back-video{
			width:100%;
			height:auto;
		}
	}

	@media (max-aspect-ratio: 16/9){
		.back-video{
			width:auto;
			height:100%;
		}
	}

	.separador{
		width: 70px;
		background-color: #4fbab2;
		height: 4px;
		margin-top: 10px;
		margin-bottom:10px;
	}

	/*animaciones*/
	.img-sepia:hover {
		filter: sepia(60%);
		transition:all .5s ease-in-out;
		}

	.img-opacity:hover
	{
		filter: opacity(.5);
		transition:all .3s ease-in-out;
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
		list_noticias:[],
		offsetTop:0,
    }
  },
  mounted(){	
		// this.altura_ini_p=(window.innerHeight)-64;
		this.altura_ini_p=(window.innerHeight);
    	window.onscroll = () => {
			this.changeColor();
		};
		setTimeout(() => (this.activa_inicio()), 1000);
		this.scroll_ini();
		this.get_atractivos();
		this.get_eventos();
		this.get_actividades();
		this.get_noticias();
  },
  methods:{
	scroll_ini(){
		document.querySelector('#scrolling-body').scrollTo(0,0);
	},
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
	get_noticias(){
		SiteServices.getDataLimit('noticias', 4).then(response=>{
			this.list_noticias=response.data;
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
