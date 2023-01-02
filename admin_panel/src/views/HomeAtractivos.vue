<template>
	<div style="background: #F7F7F7;" id="div_atractivos">
		<v-container>
			<v-flex>
				<v-row>
					<v-col cols="12" md="1"></v-col>
					<v-col cols="10">
                        <v-row>
                            <v-col cols="12" md="4" sm="6">
                                <div class="text-left">
                                    <br>
                                    <span class="text-h3 font-weight-black" style="color:#021F3C">Atractivos</span><br>
                                    <span class="text-subtitle-2 grey--text">Copacabana</span><br>
                                </div>        
                            </v-col>
                            <v-col cols="12" md="4" sm="6">
                                <router-link class="underline-none" to="/HomeAtractivo" v-slot="{ navigate }">
                                    <v-hover v-slot="{ hover }" open-delay="100">
                                        <v-card
                                        :elevation="hover ? 12 : 2"
                                        :class="{ 'on-hover': hover }"
                                        @click="navigate"
                                        >
                                            <v-img aspect-ratio="1"
                                                height="450"
                                                class="grey lighten-2 white--text align-end"
                                                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/67/d7/35/aerial-view-of-cerro.jpg?w=1200&h=-1&s=1"
                                            >
                                                <v-container style="padding: 10px 15px 30px 15px;">
                                                    <v-row>
                                                        <v-col cols="12" md="10">
                                                            <span class="font-weight-black" style="font-size: 2rem; text-shadow: 0 2px 4px rgb(0 0 0 / 50%);">Cerro Calvario</span><br>
                                                            <span class="text-subtitle-1" style="text-shadow: 0 2px 4px rgb(0 0 0 / 50%);">Copacabana - Calvario</span>
                                                        </v-col>
                                                        <v-col cols="12" md="2"></v-col>
                                                    </v-row>
                                                </v-container>
                                            </v-img>
                                        </v-card>
                                    </v-hover>
						        </router-link>    
                            </v-col>
                            <v-col cols="12" md="4" sm="6">
                                <v-hover
                                    v-slot="{ hover }"
                                    open-delay="100"
                                >
                                    <v-card
                                    :elevation="hover ? 12 : 2"
                                    :class="{ 'on-hover': hover }"
                                    >
                                        <v-img aspect-ratio="1"
                                            height="450"
                                            class="grey lighten-2 white--text align-end"
                                            src="https://compassesandquests.com/wp-content/uploads/2019/09/0809-2019-01070182194409208622-1-1024x768.jpeg"
                                        >
                                            <v-container style="padding: 10px 15px 30px 15px;">
                                                <v-row>
                                                    <v-col cols="12" md="10">
                                                        <span class="font-weight-black" style="font-size: 2rem; text-shadow: 0 2px 4px rgb(0 0 0 / 50%);">Cerro Calvario</span><br>
                                                        <span class="text-subtitle-1" style="text-shadow: 0 2px 4px rgb(0 0 0 / 50%);">Copacabana - Calvario</span>
                                                    </v-col>
                                                    <v-col cols="12" md="2"></v-col>
                                                </v-row>
                                            </v-container>
                                        </v-img>
                                    </v-card>
                                </v-hover>
                            </v-col>
                            <v-col cols="12" md="8" sm="6">
                                <v-hover
                                    v-slot="{ hover }"
                                    open-delay="100"
                                >
                                    <v-card
                                    :elevation="hover ? 12 : 2"
                                    :class="{ 'on-hover': hover }"
                                    >
                                        <v-img aspect-ratio="1"
                                            height="450"
                                            class="grey lighten-2 white--text align-end"
                                            src="https://mediaim.expedia.com/destination/2/389c7083e722eac862ef317a66149abc.jpg"
                                        >
                                            <v-container style="padding: 10px 15px 30px 15px;">
                                                <v-row>
                                                    <v-col cols="12" md="10">
                                                        <span class="font-weight-black" style="font-size: 2rem; text-shadow: 0 2px 4px rgb(0 0 0 / 50%);">Cerro Calvario</span><br>
                                                        <span class="text-subtitle-1" style="text-shadow: 0 2px 4px rgb(0 0 0 / 50%);">Copacabana - Calvario</span>
                                                    </v-col>
                                                    <v-col cols="12" md="2"></v-col>
                                                </v-row>
                                            </v-container>
                                        </v-img>
                                    </v-card>
                                </v-hover>
                            </v-col>
                            <v-col cols="12" md="4" sm="6">
                                <v-hover
                                    v-slot="{ hover }"
                                    open-delay="100"
                                >
                                    <v-card
                                    :elevation="hover ? 12 : 2"
                                    :class="{ 'on-hover': hover }"
                                    >
                                        <v-img aspect-ratio="1"
                                            height="450"
                                            class="grey lighten-2 white--text align-end"
                                            src="https://1.bp.blogspot.com/-EjPqQbVCCyo/XeKOwek-mMI/AAAAAAAAwjA/_3XVs6DarYktEYKIF8do4sRywaZo_kj2ACLcBGAsYHQ/s1600/20190606_154846%2528cortada%2529.jpg"
                                        >
                                            <v-container style="padding: 10px 15px 30px 15px;">
                                                <v-row>
                                                    <v-col cols="12" md="10">
                                                        <span class="font-weight-black" style="font-size: 2rem; text-shadow: 0 2px 4px rgb(0 0 0 / 50%);">Cerro Calvario</span><br>
                                                        <span class="text-subtitle-1" style="text-shadow: 0 2px 4px rgb(0 0 0 / 50%);">Copacabana - Calvario</span>
                                                    </v-col>
                                                    <v-col cols="12" md="2"></v-col>
                                                </v-row>
                                            </v-container>
                                        </v-img>
                                    </v-card>
                                </v-hover>
                            </v-col>
                            <v-col cols="12" md="4" sm="6">
                                <v-hover
                                    v-slot="{ hover }"
                                    open-delay="100"
                                >
                                    <v-card
                                    :elevation="hover ? 12 : 2"
                                    :class="{ 'on-hover': hover }"
                                    >
                                        <v-img aspect-ratio="1"
                                            height="450"
                                            class="grey lighten-2 white--text align-end"
                                            src="https://mediaim.expedia.com/destination/2/389c7083e722eac862ef317a66149abc.jpg"
                                        >
                                            <v-container style="padding: 10px 15px 30px 15px;">
                                                <v-row>
                                                    <v-col cols="12" md="10">
                                                        <span class="font-weight-black" style="font-size: 2rem; text-shadow: 0 2px 4px rgb(0 0 0 / 50%);">Cerro Calvario</span><br>
                                                        <span class="text-subtitle-1" style="text-shadow: 0 2px 4px rgb(0 0 0 / 50%);">Copacabana - Calvario</span>
                                                    </v-col>
                                                    <v-col cols="12" md="2"></v-col>
                                                </v-row>
                                            </v-container>
                                        </v-img>
                                    </v-card>
                                </v-hover>
                            </v-col>
                            <v-col cols="12" md="8" sm="6">
                                <v-hover
                                    v-slot="{ hover }"
                                    open-delay="100"
                                >
                                    <v-card
                                    :elevation="hover ? 12 : 2"
                                    :class="{ 'on-hover': hover }"
                                    >
                                        <v-img aspect-ratio="1"
                                            height="450"
                                            class="grey lighten-2 white--text align-end"
                                            src="https://1.bp.blogspot.com/-EjPqQbVCCyo/XeKOwek-mMI/AAAAAAAAwjA/_3XVs6DarYktEYKIF8do4sRywaZo_kj2ACLcBGAsYHQ/s1600/20190606_154846%2528cortada%2529.jpg"
                                        >
                                            <v-container style="padding: 10px 15px 30px 15px;">
                                                <v-row>
                                                    <v-col cols="12" md="10">
                                                        <span class="font-weight-black" style="font-size: 2rem; text-shadow: 0 2px 4px rgb(0 0 0 / 50%);">Cerro Calvario</span><br>
                                                        <span class="text-subtitle-1" style="text-shadow: 0 2px 4px rgb(0 0 0 / 50%);">Copacabana - Calvario</span>
                                                    </v-col>
                                                    <v-col cols="12" md="2"></v-col>
                                                </v-row>
                                            </v-container>
                                        </v-img>
                                    </v-card>
                                </v-hover>
                            </v-col>
                        </v-row>
					</v-col>
					<v-col cols="12" md="1"></v-col>
				</v-row>
			</v-flex>
		</v-container>
	</div>
</template>
<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.7;
 }

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
<script>
// @ is an alias to /src
import WOW from '@/plugins/wow.min.js';
import ViewGallery from '@/components/ViewGallery.vue';
// var wow = new WOW({ scrollContainer: "#scrolling-body"});
export default {
  name: 'HomeAtractivos',
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
