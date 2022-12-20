<template>
  <v-app-bar app elevate-on-scroll elevation="3" color="primary">
    <v-app-bar-nav-icon color="white" @click="$emit('drawerEvent')"></v-app-bar-nav-icon>
    <v-spacer />
    <!--<v-col lg="6" cols="12">
      <v-form>
        <v-text-field
          class="p-0 m-0 mt-6"
          full-width
          dense
          append-icon="mdi-magnify"
          outlined
          rounded
          placeholder="Búsqueda"
        />
      </v-form>
    </v-col>-->
    <v-spacer />
    <router-link to="/resenas">
        <span
          class="mx-5 mr-10"
          title="Reseñas sin aprobar"
        >

            <v-badge :content="resenas_sin_aprobar.length" color="red" offset-y="10" offset-x="10" v-if="resenas_sin_aprobar.length>0">
                  <v-icon   color="white">mdi-bell</v-icon>
            </v-badge>

            <v-icon color="white" v-else>mdi-bell</v-icon>


         
          
        </span>
      </router-link>
    <v-menu>
      <!--<template v-slot:activator="{ attrs, on }">-->
      
        
      <!--</template>-->
      <!--<v-list three-line width="250">
        <template v-for="(item, index) in resenas_sin_aprobar">
          <v-subheader
            v-if="item.header"
            :key="item.header"
            v-text="item.header"
          ></v-subheader>

          <v-divider
            v-else-if="item.divider"
            :key="index"
            :inset="item.inset"
          ></v-divider>

          <v-list-item v-else :key="item.title">
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle
                v-html="item.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>-->
    </v-menu>
    <v-menu offset-y>
      <template v-slot:activator="{ attrs, on }">
        <span style="cursor: pointer" v-bind="attrs" v-on="on">
          <v-chip link>
            <v-badge dot bottom color="green" offset-y="10" offset-x="10">
              <v-avatar size="40">
                <v-img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Cristiano_Ronaldo_2013-06-10.jpg/198px-Cristiano_Ronaldo_2013-06-10.jpg" />
              </v-avatar>
            </v-badge>
            <span class="ml-3">Erik Maquera</span>
          </v-chip>
        </span>
      </template>
      <v-list width="250" class="py-0">
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Cristiano_Ronaldo_2013-06-10.jpg/198px-Cristiano_Ronaldo_2013-06-10.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Erik Maquera</v-list-item-title>
            <v-list-item-subtitle>En Linea</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item link v-for="(menu, i) in menus" :key="i">
          <v-list-item-icon>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ menu.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import ResenasService from '@/services/ResenasService';

export default {
  name: "Topbar",
  data() {
    return {
      menus: [
        { title: "Perfil", icon: "mdi-account" },
        { title: "Cambiar Contraseña", icon: "mdi-key" },
        { title: "Configuraciones", icon: "mdi-cog" },
        { title: "Salir", icon: "mdi-logout" },
      ],
      // items: [
      //   {
      //     avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
      //     title: "Brunch this weekend?",
      //     subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      //   },
      //   { divider: true, inset: true },
      //   {
      //     avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
      //     title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
      //     subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
      //   },
      //   { divider: true, inset: true },
      //   {
      //     avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      //     title: "Oui oui",
      //     subtitle:
      //       '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
      //   },
      //   { divider: true, inset: true },
      //   {
      //     avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
      //     title: "Birthday gift",
      //     subtitle:
      //       '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
      //   },
      //   { divider: true, inset: true },
      //   {
      //     avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
      //     title: "Recipe to try",
      //     subtitle:
      //       '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
      //   },
      // ],
      resenas_list:[],
      resenas_sin_aprobar:[],
    };
  },
  mounted(){
    this.getResenas();
  },
  computed:{
    
  },
  methods:{
    getResenas(){
      ResenasService.getResenas().then(response=>{
        this.resenas_list = response.data;
        this.resenasSinAprobar();
      })
    },
    resenasSinAprobar(){
      this.resenas_sin_aprobar = this.resenas_list.filter(element=>(element.estado == 0));
    }
  }
};
</script>

<style scoped></style>
