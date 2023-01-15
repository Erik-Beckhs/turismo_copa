<template>
  <v-app id="inspire">
      <router-view></router-view>
  </v-app>
</template>
<script>
export default {
  name: "App",
  data: () => ({
    
  }),
  methods: {},
};
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap');

  #inspire{
    font-family: 'Poppins', sans-serif !important;
  }
</style>
