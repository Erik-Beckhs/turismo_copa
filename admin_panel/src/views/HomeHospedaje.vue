<template>
	<div style="background: #F7F7F7;" id="div_Hospedaje">
		<v-img :height="altura_ini_p" class="white--text align-end" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/117502498.jpg?k=cf7b2bfb872933a7d05a9adbacfa3a90d538993be44fdd3f20a1040545fc6d37&o=&hp=1">
			<v-container style="padding: 10px 15px 30px 15px;">
				<v-row>
					<v-col cols="12" md="1"></v-col>
					<v-col cols="12" md="10">
						<span class="font-weight-black" style="font-size: 3rem; text-shadow: 0 2px 4px rgb(0 0 0 / 50%);">Hostal Las Olas</span><br>
                        <v-rating
                            :value="4.5"
                            color="amber"
                            dense
                            half-increments
                            readonly
                            size="14"
                            ></v-rating>
						<span class="text-h6" style="text-shadow: 0 2px 4px rgb(0 0 0 / 50%);">Calle Michel Perez (Final), Copacabana - Bolivia</span>
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
						<span class="text-h5 font-weight-light">“Las Olas” está ubicado al pie del cerro calvario con excelente vista al lago Titicaca. Desde todas nuestras cabañas, usted tiene una vista maravillosa sobre la bahía y el lago. Contará con un jardín con hamacas, sillas playeras y mesas de donde también tiene una vista panorámica. Todas nuestras suites fueron diseñadas individualmente y proveen el mayor confort.</span>
						<br><br>
					</v-col>
					<v-col cols="12" md="1"></v-col>
					<v-col cols="12" md="1"></v-col>
					<v-col cols="10">
						<div class="text-left">
							<br>
							<span class="text-h4 font-weight-black" style="color:#0099ff">Servicios de hospedaje</span><br>
							<span class="text-subtitle-2 grey--text">Hostal Las Olas</span><br>
						</div>
					</v-col>
					<v-col cols="12" md="1"></v-col>
					<v-col cols="12" md="1"></v-col>
					<v-col cols="12" md="10">
						<br>
                            <span class="text-subtitle-2"><v-icon left>mdi-wifi</v-icon> Wifi</span><br>
                            <span class="text-subtitle-2"><v-icon left>mdi-shower</v-icon> Baño independiente</span><br>
                            <span class="text-subtitle-2"><v-icon left>mdi-human-male-female-child</v-icon> Areas verdes</span><br>
					</v-col>
					<v-col cols="12" md="1"></v-col>
				</v-row>
				<v-row>
					<v-col cols="12">
						<div class="text-center">
							<br>
							<span class="text-h4 font-weight-black" style="color:#0099ff">Galeria de Imagenes</span><br>
							<span class="text-subtitle-2 grey--text">Hostal Las Olas</span><br>
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
  name: 'HomeHospedaje',
  data(){
    return{
      bg:'transparent',
      altura_ini_p:500,
	  drawer:false,
	  imagenes: [
        {
          largeURL:
            'https://www.hostallasolas.com/media/images/content/las-olas/las-olas-10.jpg',
          thumbnailURL:
            'https://www.hostallasolas.com/media/images/content/las-olas/las-olas-10.jpg',
          width: 1500,
          height: 1500,
        },
        {
          largeURL:
            'https://www.hostallasolas.com/data/content/f911b04f41478a646be03c51db29ce3a.jpeg',
          thumbnailURL:
            'https://www.hostallasolas.com/data/content/f911b04f41478a646be03c51db29ce3a.jpeg',
          width: 1669,
          height: 1669,
        },
        {
          largeURL:
            'https://www.hostallasolas.com/data/content/e388574b0d048161192dc61faee05b34.jpeg',
          thumbnailURL:
            'https://www.hostallasolas.com/data/content/e388574b0d048161192dc61faee05b34.jpeg',
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
