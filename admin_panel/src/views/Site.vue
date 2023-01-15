<template>
  <div class="home">
    <v-app-bar color="white" elevate-on-scroll absolute scroll-target="#scrolling-body" app>
		<v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-flex d-md-none"></v-app-bar-nav-icon>
		<v-toolbar-title class="font-weight-light">
			<v-img
				src="../assets/logo_copa.png"
				width="120"
			></v-img>
			<!--span>COPACABANA ES TU DESTINO</span-->
		</v-toolbar-title>
		<v-spacer></v-spacer>
		<div class="d-none d-sm-none d-md-flex">
      <v-btn-toggle
        v-model="option_active"
        color="blue"
        group
      >
        <router-link class="underline-none" to="/" v-slot="{ navigate }">
          <v-btn @click="navigate" value="inicio">
            inicio
          </v-btn>
        </router-link>
        <router-link class="underline-none" to="/HomeAtractivos" v-slot="{ navigate }">
          <v-btn @click="navigate" value="atractivos turísticos">
            atractivos turísticos
          </v-btn>
        </router-link>
        <router-link class="underline-none" to="/SiteHospedajes" v-slot="{ navigate }">
          <v-btn @click="navigate" value="hospedajes">
            hospedajes
          </v-btn>
        </router-link>
        <router-link class="underline-none" to="/SiteNoticias" v-slot="{ navigate }">
          <v-btn @click="navigate" value="noticias">
            noticias
          </v-btn>
        </router-link>
      </v-btn-toggle>
		</div>
	</v-app-bar>
	<v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group 
          active-class="deep-blue--text text--accent-4"
        >
          <router-link class="underline-none" to="/" v-slot="{ navigate }">
            <v-list-item @click="navigate" >
              <v-list-item-title>INICIO</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link class="underline-none" to="/HomeAtractivos" v-slot="{ navigate }">
            <v-list-item @click="navigate" >
              <v-list-item-title>ATRACTIVOS TURÍSTICOS</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link class="underline-none" to="/SiteHospedajes" v-slot="{ navigate }">
            <v-list-item @click="navigate" >
              <v-list-item-title>HOSPEDAJES</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link class="underline-none" to="/SiteNoticias" v-slot="{ navigate }">
            <v-list-item @click="navigate" >
              <v-list-item-title>NOTICIAS</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
	<v-main>
		<v-sheet id="scrolling-body" class="overflow-y-auto" :max-height="altura_ini_p">
			<router-view></router-view>
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
  name: 'Site',
  data(){
    return{
      option_active:'',
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
