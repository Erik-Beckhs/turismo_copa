<template>
  <div class="site">
    <div>
      <v-app-bar color="white" elevate-on-scroll absolute scroll-target="#scrolling-body" app v-if="show_menu">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-flex d-md-none"></v-app-bar-nav-icon>
        <v-toolbar-title class="font-weight-light">
          <v-img
            src="../assets/copa_logo.png"
            width="100"
          ></v-img>
          <!--span>COPACABANA ES TU DESTINO</span-->
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="d-none d-sm-none d-md-flex">
            <router-link class="underline-none" to="/" v-slot="{ navigate }">
              <v-btn text @click="navigate" value="home">
                inicio
              </v-btn>
            </router-link>
            <router-link class="underline-none" to="/HomeAtractivos" v-slot="{ navigate }">
              <v-btn text @click="navigate" value="HomeAtractivos">
                atractivos turísticos
              </v-btn>
            </router-link>
            <router-link class="underline-none" to="/SiteHospedajes" v-slot="{ navigate }">
              <v-btn text @click="navigate" value="SiteHospedajes">
                hospedajes
              </v-btn>
            </router-link>
            <router-link class="underline-none" to="/SiteNoticias" v-slot="{ navigate }">
              <v-btn text @click="navigate" value="SiteNoticias">
                noticias
              </v-btn>
            </router-link>
        </v-toolbar-items>
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
              <v-list-item @click="navigate">
                <v-list-item-title>INICIO</v-list-item-title>
              </v-list-item>
            </router-link>
            <router-link class="underline-none" to="/HomeAtractivos" v-slot="{ navigate }">
              <v-list-item @click="navigate">
                <v-list-item-title>ATRACTIVOS TURÍSTICOS</v-list-item-title>
              </v-list-item>
            </router-link>
            <router-link class="underline-none" to="/SiteHospedajes" v-slot="{ navigate }">
              <v-list-item @click="navigate">
                <v-list-item-title>HOSPEDAJES</v-list-item-title>
              </v-list-item>
            </router-link>
            <router-link class="underline-none" to="/SiteNoticias" v-slot="{ navigate }">
              <v-list-item @click="navigate">
                <v-list-item-title>NOTICIAS</v-list-item-title>
              </v-list-item>
            </router-link>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>   
    <v-main>
      <v-sheet id="scrolling-body" class="overflow-y-auto overflow-x-hidden" :max-height="altura_ini_p">
        <router-view v-scroll:#scrolling-body="onScrollBody" :key="$route.fullPath"></router-view>
              <div class="curved-div-footer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                      <path fill="#0099ff" fill-opacity="1" d="M0,192L80,208C160,224,320,256,480,240C640,224,800,160,960,144C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                  </svg>
              </div>
              <v-footer padless>

                <v-card flat tile class="white--text text-center" color="#0099ff" style="width:100%;">
                  <v-card-text>
                      <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
                          <v-icon size="24px">
                              {{ icon }}
                          </v-icon>
                      </v-btn>
                  </v-card-text>
                  <v-card-text class="white--text pt-0">
                      Página web elaborada en colaboración del Gobierno Autónomo Municipal de Copacabana  - COPACABANA ES TU DESTINO
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-text class="white--text">
                      {{ new Date().getFullYear() }} — <strong>Todos los derechos reservados</strong>
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
  /*font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;*/
}
.curved-div p {
  font-size: 1rem;
  /*font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;*/
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
      active_rute:'home',
      show_menu:false,
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
    this.active_rute=this.$route.name;
    if(this.active_rute=='home'){
      this.show_menu=false;
      this.altura_ini_p=(window.innerHeight);
    }else{
      this.show_menu=true;
      this.altura_ini_p=(window.innerHeight)-64;
    }
    window.onscroll = () => {
      this.changeColor();
    };
		setTimeout(() => (this.activa_inicio()), 1000);	
  },
  methods:{
    onScrollBody(e){
      this.offsetTop = e.target.scrollTop;
      if(this.offsetTop==0 && this.active_rute=='home'){
        this.show_menu=false;
        this.altura_ini_p=(window.innerHeight);
      }else if(this.offsetTop>80 && this.active_rute=='home'){
        this.show_menu=true;
        this.altura_ini_p=(window.innerHeight)-64;
      }
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
  watch:{
    $route (to, from){
      console.log(to.name);
      this.active_rute=to.name;
      if(to.name=='home'){
        this.show_menu=false;
        this.altura_ini_p=(window.innerHeight);
      }else{
        this.show_menu=true;
        this.altura_ini_p=(window.innerHeight)-64;
      }
    },
  },
  components: {
  }
}
</script>
