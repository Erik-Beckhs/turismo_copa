<template>
	<div style="background: #F7F7F7;" id="div_atractivo">
		<v-img :height="altura_ini_p" class="white--text align-end" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/67/d7/35/aerial-view-of-cerro.jpg?w=1200&h=-1&s=1">
			<v-container style="padding: 10px 15px 30px 15px;">
				<v-row>
					<v-col cols="12" md="1"></v-col>
					<v-col cols="12" md="10">
						<span class="font-weight-black" style="font-size: 3rem; text-shadow: 0 2px 4px rgb(0 0 0 / 50%);">Calvario</span><br>
						<span class="text-h6" style="text-shadow: 0 2px 4px rgb(0 0 0 / 50%);">Copacabana - Calvario</span>
					</v-col>
					<v-col cols="12" md="1"></v-col>
				</v-row>
			</v-container>
		</v-img>
		<v-container>
			<v-flex>
				<v-row>
					<v-col cols="12"><br></v-col>
				</v-row>
				<v-row>
					<v-col cols="12" md="1"></v-col>
					<v-col cols="12" md="10">
						<span class="text-h5 font-weight-light">Ubicado al norte del pueblo de Copacabana, detrás de la  Iglesia Colquepata, se encuentra  el  cerro  Calvario,  que  es  uno  de  los  más  visitados,  sobre todo  por peregrinos nacionales. En las faldas del cerro esperan sacerdotes nativos que celebran ceremonias con un sincretismo de fe católica y creencias ancestrales.</span>
						<br><br>
					</v-col>
					<v-col cols="12" md="1"></v-col>
					<v-col cols="12" md="1"></v-col>
					<v-col cols="10">
						<div class="text-left">
							<br>
							<span class="text-h4 font-weight-black" style="color:#0099ff">Descripción</span><br>
							<span class="text-subtitle-2 grey--text">Cerro Calvario</span><br>
						</div>
					</v-col>
					<v-col cols="12" md="1"></v-col>
					<v-col cols="12" md="1"></v-col>
					<v-col cols="12" md="10">
						<p>
							En épocas precolombinas y hasta la República, la cima del cerro era “huaca” (lugar sagrado), donde se ofrecían rituales y ceremonias a las deidades, realizadas por “Yatiris” (sacerdotes andinos), pidiendo bendiciones para las familias. Actualmente se mantiene el sincretismo religioso con gran esencia espiritual, conviviendo junto a la religiosidad católica.
En 1946 el Fr. Leonardo Claure mandó a construir el Vía Crucis con la 12 estaciones que recorrió nuestro  señor  Jesucristo  y  los  12  dolores  de  la  virgen  María,  el propósito fue acabar con la religiosidad andina, que llevaba miles de feligreses a la cima en busca de yatiris, a los que la Iglesia Católica calificó como brujos.
Actualmente,  los   devotos   suben   el   Calvario,   unos   llevando   piedrecillas   que depositan en cada estación para, al final, encender velas en la cima, haciendo memoria  del  vía  crucis  que  sufrió  nuestro  señor  Jesucristo.  Otros, lo  hacen  en busca de Yatiris para recibir sus bendiciones y , en algunos casos, para admirar el increíble panorama del Lago y sus alrededores des de la cima de la montaña.

						</p>
					</v-col>
					<v-col cols="12" md="1"></v-col>
				</v-row>
				<v-row>
					<v-col cols="12">
						<div class="text-center">
							<br>
							<span class="text-h4 font-weight-black" style="color:#0099ff">Galeria de Imagenes</span><br>
							<span class="text-subtitle-2 grey--text">Cerro Calvario</span><br>
						</div>
					</v-col>
					<v-col cols="12" md="1">
						
					</v-col>
					<v-col cols="12" md="10">
						<ViewGallery galleryID="gallery_atractivo" :images="imagenes" />
					</v-col>
					<v-col cols="12" md="1">
						
					</v-col>
				</v-row>
			</v-flex>
		</v-container>
	</div>
</template>
<script>
// @ is an alias to /src
import WOW from '@/plugins/wow.min.js';
import ViewGallery from '@/components/ViewGallery.vue';
// var wow = new WOW({ scrollContainer: "#scrolling-body"});
export default {
  name: 'HomeAtractivo',
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
    }
  },
  mounted(){	
		this.altura_ini_p=(window.innerHeight)-64;
    	window.onscroll = () => {
			this.changeColor();
		};
		setTimeout(() => (this.activa_inicio()), 1000);	
		this.scroll_ini();
  },
  methods:{
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
