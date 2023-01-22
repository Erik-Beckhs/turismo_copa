<template>
  <v-navigation-drawer v-model="drawer" app color="blue lighten-1">
    <v-img
      width="120"
      class="pa-4"
      src="@/assets/img/escudo_trazo.png"
      style="margin:15px auto !important;"
    />
    <p class="text-center font-weight-bold white--text" style="line-height:20px;">
        Dirección de Turismo Copacabana
    </p>

    <v-divider class="grey lighten-1"></v-divider>
    <v-list>
      <v-list-item v-for="[icon, text, ruta] in links" :key="icon" link class="ms-3">
        <router-link class="underline-none" :to="ruta">
          <v-row style="width:300%">
            <v-list-item-icon>
          <v-icon color="white">{{ icon }}</v-icon>
         </v-list-item-icon>
         <v-list-item-content>
          <v-list-item-title>
                {{ text }}
          </v-list-item-title>
        </v-list-item-content>
          </v-row>
        </router-link>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",
  props: ["drawer"],
  data() {
    return {
      links: [
        ["mdi-home", "Inicio", '/main'],
        ["mdi-book-open", "Reseñas", '/resenas'],
        ["mdi-bank", "Atractivos Turísticos", '/atractivos'],
        ["mdi-bed", "Hospedaje", '/hospedajes'],
        //["mdi-calendar-blank-multiple", "Eventos Programados", '/eventos'],
        ["mdi-newspaper-variant-multiple", "Noticias", '/noticias'],
      ],
    };
  },
};
</script>

<style scoped>
.underline-none{
    text-decoration: none;
    color:#fff;
}
</style>
