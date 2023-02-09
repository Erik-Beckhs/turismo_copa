<template>
	<div style="background: #F7F7F7;" id="div_atractivo">
		<v-img :height="altura_ini_p" class="white--text align-end" :src="$Api_url_media+data_atractivo.img_principal">
			<v-container style="padding: 10px 15px 30px 15px;">
				<v-row>
					<v-col cols="12" md="1"></v-col>
					<v-col cols="12" md="10">
						<span class="font-weight-black" style="font-size: 3rem; text-shadow: 0 2px 4px rgb(0 0 0 / 50%);">{{data_atractivo.nombre}}</span><br>
						<span v-if="data_atractivo.categoria=='Eventos Programados'" class="text-h6" style="text-shadow: 0 2px 4px rgb(0 0 0 / 50%);">{{formatdate(data_atractivo.fecha)}}</span>
						<span v-else-if="data_atractivo.categoria=='Actividades Que Hacer'" class="text-h6" style="text-shadow: 0 2px 4px rgb(0 0 0 / 50%);"></span>
						<span v-else class="text-h6" style="text-shadow: 0 2px 4px rgb(0 0 0 / 50%);">{{data_atractivo.comunidad}} - {{data_atractivo.ubicacion}}</span>
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
					<v-col cols="12" md="10">
						<div v-if="data_atractivo.como_llegar!=''">
							<v-icon left color="grey">mdi-map-marker-star</v-icon>
							<span class="font-weight-medium grey--text">Cómo llegar: </span><span class="grey--text">{{data_atractivo.como_llegar}}</span>
							<br><br>
						</div>
						<div>
							<span class="text-h5 font-weight-light">{{data_atractivo.descripcion}}</span>	
						</div>
					</v-col>
					<v-col cols="12" md="1"></v-col>
					<v-col cols="12" md="1"></v-col>
					<v-col cols="10">
						<div class="text-left">
							<br>
							<span class="title-box">Descripción</span><br>
							<hr class="separador-hr">
						</div>
					</v-col>
					<v-col cols="12" md="1"></v-col>
					<v-col cols="12" md="1"></v-col>
					<v-col cols="12" md="10">
						<div v-html="data_atractivo.informacion"></div>
						<div v-if="data_atractivo.como_llegar">
							<span class="text-h6">Como Llegar? </span>
							{{data_atractivo.como_llegar}}
						</div>
					</v-col>
					<v-col cols="12" md="1"></v-col>
				</v-row>
				<v-row v-if="multimedia_data.length!=0">
					<v-col cols="12">
						<div class="text-center">
							<br>
							<span class="subtitle-box">{{data_atractivo.nombre}}</span><br>
							<span class="title-box">Galeria de Imagenes</span><br>
						</div>
					</v-col>
					<v-col cols="12" md="1">
						
					</v-col>
					<v-col cols="12" md="10">
						<ViewGallery galleryID="gallery_atractivo" :images="multimedia_data" />
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
import SiteServices from '@/services/SiteServices';
import MultimediaService from '@/services/MultimediaService';
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
		this.get_atractivo();
		this.getMultimediaGaleria();
  },
  methods:{
	formatdate(fecha){
		var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
		var fecha  = new Date(fecha); 
		let dia = ('0'+(fecha.getDate()+1)).slice(-2);
		let mes = fecha.getMonth()+1;
		let mesLiteral = '';
		switch(mes){
			case 1:
				mesLiteral = 'Enero';
				break;
			case 2:
				mesLiteral = 'Febrero';
				break;
			case 3:
				mesLiteral = 'Marzo';
				break;
			case 4:
				mesLiteral = 'Abril';
				break;
			case 5:
				mesLiteral = 'Mayo';
				break;
			case 6:
				mesLiteral = 'Junio';
				break;
			case 7:
				mesLiteral = 'Julio';
				break;
			case 8:
				mesLiteral = 'Agosto';
				break;
			case 9:
				mesLiteral = 'Septiembre';
				break;
			case 10:
				mesLiteral = 'Octubre';
				break;
			case 11:
				mesLiteral = 'Noviembre';
				break;
			case 12:
				mesLiteral = 'Diciembre';
				break;
		}
		return `${dia} de ${mesLiteral}`;
	},
	get_atractivo(){
		SiteServices.getDataId('atractivos', this.$route.params.id).then(response=>{
			this.data_atractivo=response.data;
		})
	},
	getMultimediaGaleria(){
      MultimediaService.getMultimedia('atractivos', this.$route.params.id).then(response=>{
		let galeria=[];
        for (let index = 0; index < response.data.length; index++) {
          const element_aux = {
            largeURL: this.$Api_url_media + response.data[index].ruta,
			thumbnailURL:this.$Api_url_media + response.data[index].ruta,
			width: 1500,
			height: 1000
          };
          galeria.push(element_aux);
        }
		this.multimedia_data=galeria;
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
	ViewGallery,
  }
}
</script>
