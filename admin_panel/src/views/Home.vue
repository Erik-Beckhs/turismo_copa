<template>
  <div class="home">
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
				<li>
					<router-link class="underline-none" to="/SiteNoticias" v-slot="{ navigate }">
						<a @click="navigate">
							noticias
						</a>
					</router-link>
				</li>
			</ul>
		</nav>
		<div class="content">
			<h1>Copacabana</h1>
			<h3>¡Te invitamos a descubrir la belleza de Copacabana!</h3>
			<a href="#div_ini"><v-icon left dark large>mdi-chevron-down</v-icon>	Explorar</a>
		</div>
	</div>
	<div id="div_ini">
		<v-container style="padding-top: 50px; padding-bottom: 0px;">
			<v-row align="center" justify="center">
				<v-col cols="12" md="6" sm="6" lg="5" xl="5">
					<div class="wow fadeInLeft">
						<div class="text-left">
							<span class="subtitle-box">Municipio turístico de Bolivia</span><br>
							<span class="title-box">Copacabana</span><br>
							<hr class="separador-hr">
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
	<div class="curved-div">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
			<path fill="#0099ff" fill-opacity="1" d="M0,192L80,208C160,224,320,256,480,240C640,224,800,160,960,144C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
		</svg>
		<div style="background: #0099ff;">
			<v-row>
				<v-col cols="12">
					<span class="fs-5 font-weight-bold">¿Qué puedes hacer?</span>
					<p>
						<span class="fs-1-2">
							Planes para todos los gustos
						</span>
					</p>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12">
					<carousel-3d autoplay :autoplayTimeout="3000" :perspective="0" :space="400" :display="5" :height="400" class="carousel center-align">
						<slide :index="0">
							<div class="carousel-item">
								<p class="titulo">
									Gastronomía
								</p>
								<hr class="linea-card">
								<p class="subtitulo">Disfruta la Comida</p>
								<img src="@/assets/img/trucha.jpg" alt="">
							</div>
						</slide>
						<slide :index="1">
							<div class="carousel-item">
								<p class="titulo">
									Rutas
								</p>
								<hr class="linea-card">
								<p class="subtitulo">Nuevas Experiencias</p>
								<img src="@/assets/img/a33.jpg" alt="">
							</div>
						</slide>
						<slide :index="2">
							<div class="carousel-item">
								<p class="titulo">
									Cultura
								</p>
								<hr class="linea-card">
								<p class="subtitulo">Aprende mas sobre Copacabana</p>
								<img src="@/assets/img/koya.jpg" alt="">
							</div>
						</slide>
						<slide :index="3">
							<div class="carousel-item">
								<p class="titulo">
									Deporte y Aventura
								</p>
								<hr class="linea-card">
								<p class="subtitulo">Disfruta la adrenalina</p>
								<img src="@/assets/img/zipline.jpg" alt="">
							</div>
						</slide>
						<slide :index="4">
							<div class="carousel-item">
								<p class="titulo">
									Turismo Urbano
								</p>
								<hr class="linea-card">
								<p class="subtitulo">Lo que estabas buscando</p>
								<img src="@/assets/img/turismo.jpg" alt="">
							</div>
						</slide>
					</carousel-3d>
				</v-col>
			</v-row>
		</div>           
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
			<path fill="#0099ff" fill-opacity="1" d="M0,0L48,10.7C96,21,192,43,288,90.7C384,139,480,213,576,234.7C672,256,768,224,864,186.7C960,149,1056,107,1152,117.3C1248,128,1344,192,1392,224L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
		</svg>  
	</div>
	<div id="div_atractivos">
		<v-container style="padding-top: 40px; padding-bottom: 40px;">
			<v-row>
				<v-col cols="12">
					<div class="text-left">
						<span class="subtitle-box">VEN Y DISFRUTA</span><br>
						<span class="fs-2">Visita nuestros Atractivos Turísticos</span>
						<hr class="separador-hr">
					</div>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12">
					<v-row>
						<v-col cols="12" sm="4" md="3" v-for="atr in list_atractivos" :key="atr.id">
							<div class="wow fadeInLeft grid">
								<figure class="effect-sadie">
									<v-img aspect-ratio="1"
										class="grey lighten-2"
										:src="$Api_url_media+atr.img_principal"
									></v-img>
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
	<div id="eventos" style="background: #F7F7F7;">
		<v-container style="padding-top: 60px;">
			<v-row>
				<v-col cols="12">
					<div class="text-left">
						<span class="subtitle-box">CULTURA</span><br>
						<span class="fs-2">Disfruta nuestros Eventos Programados</span>
						<hr class="separador-hr">
						<span class="fs-1 grey--text">Fiestas patronales, ferias, ceremonias, entre otras actividades</span><br>
					</div>
				</v-col>
			</v-row>
		</v-container>
		<v-container style="padding-bottom: 60px;">
			<v-row>
				<v-col cols="12">
					<carousel-3d :controls-visible="true" :controls-prev-html="'&#10092; '" :controls-next-html="'&#10093;'" 
               :controls-width="30" :controls-height="60" :clickable="false" :disable3d="true" :height="400" :space="380" :border="0">
						<slide :index="0">
							<div class="slick">
								<div>
									<a href="/">
										<div>
											<h4><small>24 de Enero</small>Alasitas</h4>
										</div>
										<picture>
											<img src="@/assets/img/eventos/alasita.jpg" alt="Image">
										</picture>
									</a>
								</div>
							</div>
						</slide>
						<slide :index="1">
							<div class="slick">
								<div>
									<a href="/">
										<h4><small>2 de Febrero</small>Entronización de la Virgen de la Candelaria</h4>
										<picture>
											<img src="@/assets/img/eventos/virgen.jpg" alt="Image">
										</picture>
									</a>
								</div>
							</div>
						</slide>
						<slide :index="2">
							<div class="slick">
								<div>
									<a href="/">
										<h4><small>20 de Abril</small>Semana Santa</h4>
										<picture>
											<img src="@/assets/img/eventos/semana.jpg" alt="Image">
										</picture>
									</a>
								</div>
							</div>
						</slide>
						<slide :index="3">
							<div class="slick">
								<div>
									<a href="/">
										<h4><small>3 de Mayo</small>Fiesta del Señor de Kolquepata</h4>
										<picture>
											<img src="@/assets/img/eventos/mayo.jpg" alt="Image">
										</picture>
									</a>
								</div>
							</div>
						</slide>
						<slide :index="4">
							<div class="slick">
								<div>
									<a href="/">
										<h4><small>6 de Junio</small>Aniversario de la Provincia Manco Kapac</h4>
										<picture>
											<img src="@/assets/img/eventos/desfileee.jpg" alt="Image">
										</picture>
									</a>
								</div>
							</div>
						</slide>
						<slide :index="5">
							<div class="slick">
								<div>
									<a href="/">
										<h4><small>21 de Junio</small>Año Nuevo Aymara</h4>
										<picture>
											<img src="@/assets/img/eventos/nuevo.jpg" alt="Image">
										</picture>
									</a>
								</div>
							</div>
						</slide>
						<slide :index="6">
							<div class="slick">
								<div>
									<a href="/">
										<h4><small>6 de Agosto</small>Fiesta Internacional Bolivia Perú</h4>
										<picture>
											<img src="@/assets/img/eventos/agosto.jpg" alt="Image">
										</picture>
									</a>
								</div>
							</div>
						</slide>
						<slide :index="7">
							<div class="slick">
							<div>
								<a href="/">
									<h4><small>2 de Noviembre</small>Fiesta de Todos los Santos</h4>
									<picture>
										<img src="@/assets/img/a4.jpg" alt="Image">
									</picture>
								</a>
							</div>
						</div>
						</slide>
					</carousel-3d>
				</v-col>
			</v-row>
		</v-container>
	</div>
	<div id="div_hospedajes">
		<v-container style="padding-top: 60px; padding-bottom: 40px;">
			<v-flex>
				<v-row>
					<v-col cols="9" md="9">
						<div class="text-left">
							<span class="subtitle-box">ESTADÍA</span><br>
							<span class="fs-2">Establecimientos de Hospedaje</span>
							<hr class="separador-hr">
							<span class="fs-1">Disfruta de tu estadía en el santuario, hospedandote en nuestros hoteles con gran variedad de servicios y costo variado</span><br>
						</div>
					</v-col>
				</v-row>
				<v-carousel height="420" hide-delimiters style="box-shadow: 0px 0px">
					<v-carousel-item v-for="i in 2" :key="i">
						<v-layout row>
							<v-flex sm6 md3 lg2 v-for="ho in list_hospedaje" :key="ho.id" pl-2 pr-2>
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
				<v-row>
					<v-col cols="12">
						<div class="text-center pa-6">
							<router-link class="underline-none" to="/SiteHospedajes" v-slot="{ navigate }">
								<v-btn @click="navigate" rounded large color="blue" outlined><v-icon left>mdi-arrow-right</v-icon>ver todos</v-btn>
							</router-link>
						</div>
					</v-col>
				</v-row>
			</v-flex>	
		</v-container>
	</div>
	<div id="id_informacion_util" class="banner-rotated">
		<v-img height="600" aspect-ratio="1.7" src="@/assets/img/a66.jpg">
			<v-row>
				<v-col cols="12" class="text-center">
					<h2 class="titulo-portada custom-title container-fluid white--text">Planifica tu viaje</h2>
					<span class="text-h6 white--text">Descubre más información de :</span>
				</v-col>
				<v-col cols="12">
					<v-container>
						<v-row>
							<v-col cols="1"></v-col>
							<v-col cols="10">
								<div style="background: rgba(247,247,247,0.9);" class="pa-4">
									<v-flex class="my-5">
										<v-row dense>
											<v-col cols="3">
												<div class="text-center">
													<v-avatar size="128" tile>
													<img
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
													<v-avatar size="128" tile>
													<img
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
													<v-avatar size="128" tile>
													<img
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
													<v-avatar size="128" tile>
													<img
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
								</div>
							</v-col>
							<v-col cols="1"></v-col>
						</v-row>
					</v-container>
				</v-col>
			</v-row>
		</v-img>
	</div>
	<div id="div_noticias">
		<v-container style="padding-top: 60px;">
			<v-flex class="my-10">
				<v-row>
					<v-col cols="9" md="9">
						<div class="text-left">
							<span class="subtitle-box">MANTENTE INFORMADO</span><br>
							<span class="fs-2">Noticias Relevantes del Municipio</span>
							<hr class="separador-hr">
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
							:src="$Api_url_media+not.img"
							height="200px"
							>
							</v-img>
							<v-card-text>
								<div>
									<v-chip color="green" label x-small text-color="white">
										Cultura
									</v-chip><br>
									<span class="text-subtitle-1 font-weight-bold">{{not.titulo}}</span>	
								</div>
								<div class="row">
									<div class="col-12">
										<div class="grey--text font-weight-light text-truncate">
											{{not.entrada}}
										</div>
									</div>	
								</div>
							</v-card-text>
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
	<div id="div_nosotros" style="background: #F7F7F7;">
		<v-container style="padding-top: 60px;">
			<v-flex class="mx-15">
				<v-row>
					<v-col cols="12" md="6">
						<span class="fs-2-5">
							Escribenos
						</span><br>
						<span class="fs-1 grey--text">
							Para nosotros es importante comunicarnos con nuestros visitantes
						</span>
						<v-row>
							<v-col cols="4">
								<v-img  class="mx-auto" src="@/assets/img/escudo.png" width="300">
								</v-img>
							</v-col>
							<v-col cols="8">
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
						</v-row>				
					</v-col>
					<v-col cols="12" md="6">
						<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7028.137552529651!2d-69.08804086311453!3d-16.16281986022165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sbo!4v1673794327002!5m2!1ses!2sbo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
					</v-col>
				</v-row>
			</v-flex>
		</v-container>
	</div>
  </div>
</template>
<style scoped>
	@import url('https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&display=swap');
	.carousel-3d-slide {
		background-color: transparent;
	}
	.banner-rotated .custom-title {
		font-size: 120px;
		font-weight: 500;
		font-family: 'Mega-Fresh';
    	transform: rotate(-3deg);
	}
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
		background:none !important;
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
		padding:0 !important;
		display:inherit;
		line-height:1;
	}
	nav ul li a:hover{
		background-color: #fff;
		color: black;
		border-radius:3px;
		padding:5px 10px !important;
		transition: all .5s ease;
	}

	.z-depth-1, nav, .card-panel, .card, .toast, .btn, .btn-large, .btn-small, .btn-floating, .dropdown-content, .collapsible, .sidenav {
		box-shadow: none;
	}

	.content{
		text-align: center;	
	}
	.content h1{
		font-size:250px;
		color:#fff;
		font-weight:500;
		position:relative;
		font-family: 'Mega-Fresh', cursive;
		text-shadow: 3px 3px 1px rgba(0,0,0,0.5);
	}
	.content h3{
		color:#fff;
		position:relative;
		font-weight:500;
		font-size: 1.5rem;
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

	.titulo{
		font-size: 4rem;
		text-align: center;
		font-family: 'Mega-Fresh', cursive;
		text-shadow: 2px 2px 1px rgba(0,0,0,0.7);
	}
	.subtitulo{
		font-size:1.3rem;
		text-align: center;
		text-shadow: 2px 2px 1px rgba(0,0,0,0.7);
	}

/*estilos de materialize*/
.carousel .carousel-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;
    width: 350px;
    height: 350px;
}

.carousel{
    min-height: 350px;
}

.carousel .carousel-item img{
    width:100%;
    height:100%;
    object-fit: cover;
    position:absolute;
    top:0;
    left:0;
    z-index:-1;
    border-radius:15px;
}

.carousel .indicators .indicator-item{
    border-radius: 0;
    transform:rotate(45deg);
    margin:0 15px;
    background: #36221c;
}

/*Carousel 2*/
h4, h2,small,a{
    margin: 0;
    padding: 0;
}
a{
    text-decoration: none;
}
.Carousel{
    width: 100%;
    margin: 15px auto;
}

/* images */
.slick-track{
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    transition: .5s ease-in-out;
}
.slick{
    position: relative;
    width: 100%;
    padding: 0 10px;
    float: left;
    box-sizing: border-box;
    display: flex;
    height: 100%;
	overflow:hidden;
}
.slick h4{
    position: absolute;
    z-index: 1;
    font-size: 1.5rem;
    line-height: 2rem;
    color: #fff;
    padding: 15px;
	text-shadow: 2px 2px 1px rgba(0,0,0,0.7);
}
.slick h4 small{
    font-size: 1rem;
    display: block;
	text-shadow: 2px 2px 1px rgba(0,0,0,0.7);
}
.slick a img{
    object-fit: cover;
    height: 400px;
    width: 100%;
    border-radius: 4px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.5);
    transition: .3s ease-in-out;
}

.slick:hover img {
	-webkit-transform:scale(1.1);
	transform:scale(1.1);
	}

/* buttons */

.slick-arrow{
    border-radius: 30px;
    background-color: #fff;
    position: absolute;
    z-index: 4;
    width: 48px;
    height: 48px;
    text-align: center;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.15);
    border: 0;
    cursor: pointer;
}
.slick-arrow:focus{
    outline: 0;
}
.slick-arrow svg{
    width: 12px;
    height: 100%;
    color: rgba(0,0,0,.7);
}
.slick-prev{
    left: 0px;
}
.slick-next{
    right: 0px;
}
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
import SiteServices from '@/services/SiteServices';
import { Carousel3d, Slide } from 'vue-carousel-3d';
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
		list_hospedaje:[]
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
		this.get_hospedajes();
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
	get_hospedajes(){
		SiteServices.getDataLimit('hospedajes', 8).then(response=>{
			this.list_hospedaje=response.data;
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
	'carousel-3d': Carousel3d,
    'slide':Slide
  }
}
</script>
