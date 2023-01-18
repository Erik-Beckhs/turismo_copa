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
		<v-container style="padding-top: 50px; padding-bottom: 0px;">
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
	<div class="curved-div">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
			<path fill="#0099ff" fill-opacity="1" d="M0,192L80,208C160,224,320,256,480,240C640,224,800,160,960,144C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
		</svg>
		<div style="background: #0099ff;">
			<span class="fs-5 font-cursive">¿Qué puedes hacer?</span>
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
			<v-row>
			    <v-container>
					<v-row>
						<v-col cols="12">
							<div class="carousel center-align">
								<div class="carousel-item">
									<p class="titulo">
										Gastronomía
									</p>
									<hr class="linea-card">
									<p class="subtitulo">Disfruta la Comida</p>
									<img src="@/assets/img/trucha.jpg" alt="">
								</div>
								<div class="carousel-item">
									<p class="titulo">
										Rutas
									</p>
									<hr class="linea-card">
									<p class="subtitulo">Nuevas Experiencias</p>
									<img src="@/assets/img/a33.jpg" alt="">
								</div>
								<div class="carousel-item">
									<p class="titulo">
										Cultura
									</p>
									<hr class="linea-card">
									<p class="subtitulo">Aprende mas sobre Copacabana</p>
									<img src="@/assets/img/koya.jpg" alt="">
								</div>
								<div class="carousel-item">
									<p class="titulo">
										Deporte y Aventura
									</p>
									<hr class="linea-card">
									<p class="subtitulo">Disfruta la adrenalina</p>
									<img src="@/assets/img/zipline.jpg" alt="">
								</div>
								<div class="carousel-item">
									<p class="titulo">
										Turismo Urbano
									</p>
									<hr class="linea-card">
									<p class="subtitulo">Lo que estabas buscando</p>
									<img src="@/assets/img/turismo.jpg" alt="">
								</div>
							</div>
						</v-col>
					</v-row>
				</v-container>
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
						<span class="fs-1 fw-600" style="color:#4fbab2;">VEN Y DISFRUTA</span><br>
						<span class="fs-2">Visita nuestros Atractivos Turísticos</span>
						<hr class="separador">
					</div>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12">

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

	
	<div id="eventos">
		<v-container style="padding-top: 40px;">
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
						    <div class="Carousel">
								<div class="slick-list" id="slick-list">
									<button class="slick-arrow slick-prev" id="button-prev" data-button="button-prev" onclick="app.processingButton(event)">
										<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
									</button>
									<div class="slick-track" id="track">
										<div class="slick">
											<div>
												<a href="/">
													<h4><small>24 de Enero</small>Alasitas</h4>
													<picture>
														<img src="@/assets/img/eventos/alasita.jpg" alt="Image">
													</picture>
												</a>
											</div>
										</div>
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
										<div class="slick">
											<div>
												<a href="/">
													<h4><small>Share Your Message</small>Watch</h4>
													<picture>
														<img src="@/assets/img/a4.jpg" alt="Image">
													</picture>
												</a>
											</div>
										</div>
										<div class="slick">
											<div>
												<a href="/">
													<h4><small>Share Your Message</small>Watch</h4>
													<picture>
														<img src="@/assets/img/a4.jpg" alt="Image">
													</picture>
												</a>
											</div>
										</div>
										<div class="slick">
											<div>
												<a href="/">
													<h4><small>Share Your Message</small>Watch</h4>
													<picture>
														<img src="@/assets/img/a4.jpg" alt="Image">
													</picture>
												</a>
											</div>
										</div>
										<div class="slick">
											<div>
												<a href="/">
													<h4><small>Share Your Message</small>Watch</h4>
													<picture>
														<img src="@/assets/img/a4.jpg" alt="Image">
													</picture>
												</a>
											</div>
										</div>
										<div class="slick">
											<div>
												<a href="/">
													<h4><small>Share Your Message</small>Watch</h4>
													<picture>
														<img src="@/assets/img/a4.jpg" alt="Image">
													</picture>
												</a>
											</div>
										</div>
										<div class="slick">
											<div>
												<a href="/">
													<h4><small>Share Your Message</small>Watch</h4>
													<picture>
														<img src="@/assets/img/a4.jpg" alt="Image">
													</picture>
												</a>
											</div>
										</div>
										<div class="slick">
											<div>
												<a href="/">
													<h4><small>Share Your Message</small>Watch</h4>
													<picture>
														<img src="@/assets/img/a4.jpg" alt="Image">
													</picture>
												</a>
											</div>
										</div>
									</div>
									<button class="slick-arrow slick-next" id="button-next" data-button="button-next" onclick="app.processingButton(event)">
										<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
									</button>
								</div>
							</div>

	</div>
	<div id="div_hospedajes" class="mt-10 py-15" style="background-color:#0099ff;">
		<v-container>
			<v-flex>
				<v-row>
					<v-col cols="9" md="9">
						<div class="text-left">
							<span class="fs-1 fw-600" style="color:#ffffff;">ESTADÍA</span><br>
							<span class="fs-2" style="color:#ffffff;">Establecimientos de Hospedaje</span>
							<hr class="separador" style="color:#ffffff;">
							<span class="fs-1" style="color:#ffffff;">Disfruta de tu estadía en el santuario, hospedandote en nuestros hoteles con gran variedad de servicios y costo variado</span><br>
						</div>
					</v-col>
				</v-row>
				<v-carousel height="420" hide-delimiters style="box-shadow: 0px 0px">
					<v-carousel-item v-for="i in 2" :key="i">
						<v-layout row>
							<v-flex sm6 md3 lg2 v-for="ho in list_hospedaje" :key="ho.id" pl-2 pr-2>
								<v-card class="mx-auto my-12"
									max-width="374"
									color="white"
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

	<div id="id_informacion_util" class="py-15" style="background: #F7F7F7;" >
		<v-container>
			<span class="fs-1 fw-600" style="color:#4fbab2;">PLANIFICA TU VIAJE</span><br>
			<span class="fs-2">Descubre más información de :</span>
			<hr class="separador">
			<v-flex class="my-15">
				<v-row>
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
		</v-container>
	</div>
	<div id="div_noticias">
		<v-container>
			<v-flex class="my-10">
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
		<v-container class="my-15">
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
		font-family: 'Covered By Your Grace', cursive;
		text-shadow: 3px 3px 1px rgba(0,0,0,0.5);
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
		background-color: #0099ff;
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

	.titulo{
		font-size: 4rem;
		font-family: 'Covered By Your Grace', cursive;
		text-shadow: 2px 2px 1px rgba(0,0,0,0.7);
	}
	.linea-card{
		width:50%;
		margin:0px auto;
		height:4px;
		border-radius:3px;
		background-color: #4fbab2;
	}
	.subtitulo{
		font-size:1.5rem;
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

.slick-list{
    position: relative;
    display: flex;
    align-items: center;
    height: 400px;
    padding: 0px;
    margin: 0px auto;
    max-width: 95vw;
    overflow: hidden;
}
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
    width: 275px;
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
    font-size: 2rem;
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
  }
}

document.addEventListener('DOMContentLoaded',() =>{
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration:150,
        dist:-80,
        shift:5,
        padding:5,
        numVisible:5,
        indicators:true,
        //noWrap:true
    })
})

/*carousel eventos*/
function App() {}

window.onload = function (event) {
    var app = new App();
    window.app = app;
};

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const slickList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const slick = track.querySelectorAll('.slick');

    const slickWidth = slick[0].offsetWidth;
    
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track)
}

let prevAction = (leftPosition,slickWidth,track) => {
    if(leftPosition > 0) {
        console.log("entro 2")
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}

let nextAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
    if(leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    }
}
</script>
