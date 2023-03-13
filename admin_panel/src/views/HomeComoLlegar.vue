<template>
	<div style="background: #F7F7F7;" id="div_atractivo">
		<!--<v-img :height="altura_ini_p" class="white--text align-end" :src="$Api_url_media+data_atractivo.img_principal">-->
        <v-img :height="altura_ini_p" class="white--text align-end" src="@/assets/iglesia.jpg">
			<v-container style="padding: 10px 15px 30px 15px;">
				<v-row>
					<v-col cols="12" md="1"></v-col>
					<v-col cols="12" md="10">
						<span class="font-weight-black" style="font-size: 3rem; text-shadow: 0 2px 4px rgb(0 0 0 / 50%);">Cómo Llegar a Copacabana?</span><br>
						<span class="text-h6" style="text-shadow: 0 2px 4px rgb(0 0 0 / 50%);">Descubre diferentes formas de llegar</span>
					</v-col>
					<v-col cols="12" md="1"></v-col>
				</v-row>
			</v-container>
		</v-img>
		<v-container>
			<v-flex>
				<v-row>
					<v-col cols="12"></v-col>
				</v-row>
				<v-row>
					<v-col cols="12" md="1"></v-col>

					<v-col cols="10">
						<div class="text-left">
							<br>
							<span class="title-box">Rutas de Ingreso al Municipio</span><br>
							<hr class="separador-hr">
						</div>
					</v-col>
					<v-col cols="12" md="1"></v-col>
					<v-col cols="12" md="1"></v-col>
					<v-col cols="12" md="10">
						<div>
                            <p>
                                Para ingresar al Municipio de Copacabana y realizar el recorrido integral y más cómodo hacia los diferentes atractivos turísticos, se debe recorrer en principio 116 Km. partiendo desde la ciudad de La Paz, hasta el “Estrecho de Tiquina”, en la población de San Pablo de Tiquina. Desde este punto, se continúa el viaje atravesando parte del Lago Titicaca por medio de botes o lanchas cruzando el estrecho, el mismo que tiene una longitud aproximada de 1 km. hasta la población de San Pedro de Tiquina. Posteriormente, se continúa el viaje hasta llegar a Copacabana, totalizando un recorrido de 152 Km. desde la ciudad de La Paz.
                            </p>
                            <p>
                                En la ruta circulan vehículos de bajo y mediano tonelaje. Este tramo se ve muchas veces interrumpido por los eventuales bloqueos que se presentan por los conflictos sociales, fundamentalmente en el tramo La Paz - Copacabana. Es importante aclarar, que el costo de pasaje directo, en esta ruta, varía en función del medio de transporte utilizado, ya sea este buses o minibuses.
                            </p>
                            <p>
                                Las distancias generales y características del tramo carretero hacia Copacabana se muestran a continuación:
                            </p>

                            <div class="my-5">
                                <v-row>
                                    <v-col cols="4">
                                        <v-card
                                            class="mx-auto"
                                            max-width="400"
                                        >
                                            <v-img
                                            class="white--text align-end"
                                            height="200px"
                                            src="@/assets/img/bus_copa.jpeg"
                                            >
                                            <v-card-title class="text-h6">La Paz - San Pablo de Tiquina</v-card-title>
                                            </v-img>

                                            <v-card-subtitle class="pb-0  text--primary">
                                            <span class="font-weight-bold">
                                            <v-icon class="me-1">mdi-map-marker</v-icon>
                                            Distancia Terrestre:</span> 113 Kilómetros
                                            </v-card-subtitle>

                                            <v-card-text class="text--primary">
                                            <div>
                                            <span class="font-weight-bold">
                                            <v-icon class="me-1">mdi-clock-outline</v-icon>
                                            Tiempo de viaje: </span> 2 horas</div>

                                            <div><span class="font-weight-bold"> 
                                            <v-icon class="me-1">mdi-currency-usd</v-icon>
                                            Costo:</span> 10 Bs</div>
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                    <v-col cols="4">
                                         <v-card
                                            class="mx-auto"
                                            max-width="400"
                                        >
                                            <v-img
                                            class="white--text align-end"
                                            height="200px"
                                            src="@/assets/img/lancha.jpg"
                                            >
                                            <v-card-title class="text-h6">San Pablo de Tiquina - <br>
                                             San Pedro de Tiquina</v-card-title>
                                            </v-img>

                                            <v-card-subtitle class="pb-0  text--primary">
                                            <span class="font-weight-bold">
                                            <v-icon class="me-1">mdi-map-marker</v-icon>
                                            Distancia Fluvial:</span> 1 Kilometro
                                            </v-card-subtitle>

                                            <v-card-text class="text--primary">
                                            <div>
                                            <span class="font-weight-bold">
                                            <v-icon class="me-1">mdi-clock-outline</v-icon>
                                            Tiempo de viaje: </span> 20 minutos</div>

                                            <div><span class="font-weight-bold"> 
                                            <v-icon class="me-1">mdi-currency-usd</v-icon>
                                            Costo:</span> 2 Bs</div>
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                    <v-col cols="4">
                                         <v-card
                                            class="mx-auto"
                                            max-width="400"
                                        >
                                            <v-img
                                            class="white--text align-end"
                                            height="200px"
                                            src="@/assets/img/bus_copa_2.png"
                                            >
                                            <v-card-title>San Pedro de Tiquina - <br>
                                            Copacabana
                                            </v-card-title>
                                            </v-img>

                                            <v-card-subtitle class="pb-0  text--primary">
                                            <span class="font-weight-bold">
                                            <v-icon class="me-1">mdi-map-marker</v-icon>
                                            Distancia Terrestre:</span>38 Kilómetros
                                            </v-card-subtitle>

                                            <v-card-text class="text--primary">
                                            <div>
                                            <span class="font-weight-bold">
                                            <v-icon class="me-1">mdi-clock-outline</v-icon>
                                            Tiempo de viaje: </span>40 minutos</div>

                                            <div><span class="font-weight-bold"> 
                                            <v-icon class="me-1">mdi-currency-usd</v-icon>
                                            Costo:</span> 10 Bs</div>
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </div>
                            <p>
                                También es posible arribar a Copacabana desde la localidad de Yunguyo en el Perú, pasando por la población de Kasani en la frontera. El tiempo de viaje es de 20 minutos aproximadamente.
                            </p>
                            <p>
                                La frecuencia de viajes, desde la ciudad de La Paz a Copacabana, es normal durante todo el año. Existen servicios regulares de transporte de pasajeros, con líneas de buses y minibuses. Los botes en el estrecho se encuentran disponibles todos los días de la semana y a toda hora durante el día; por las noches el servicio de transporte no está disponible.
                            </p>
                        </div>
					</v-col>
					<v-col cols="12" md="1"></v-col>
				</v-row>
			</v-flex>
		</v-container>
	</div>
</template>
<script>
// @ is an alias to /src
//import WOW from '@/plugins/wow.min.js';
//import MultimediaService from '@/services/MultimediaService';
// var wow = new WOW({ scrollContainer: "#scrolling-body"});
export default {
  name: 'HomeComoLlegar',
  data(){
    return{
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
	  data_atractivo:{},
	  multimedia_data:[]
    }
  },
  mounted(){	
		this.altura_ini_p=(window.innerHeight)-64;
    	window.onscroll = () => {
			this.changeColor();
		};
		setTimeout(() => (this.activa_inicio()), 1000);	
		this.scroll_ini();
		// this.get_atractivo();
		// this.getMultimediaGaleria();
  },
  methods:{

 
	scroll_ini(){
		document.querySelector('#scrolling-body').scrollTo(0,0);
	},
    // activa_inicio(){
    //   var wow = new WOW({ scrollContainer: "#scrolling-body"});
    //   wow.init();
    // },
    // changeColor() {
    //   if (
    //       document.body.scrollTop > 100 ||
    //       document.documentElement.scrollTop > 100
    //   ) {
    //       this.bg = 'white';
    //   } else {
    //       this.bg = 'transparent';
    //   }
    // },
  }
}
</script>
