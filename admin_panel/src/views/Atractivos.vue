<template>
  <div class="atractivos mx-15 my-7">
    <v-card class="pa-5">
    <v-container>
      <v-card-title>
      <v-icon>mdi-bank</v-icon>
      <span class="ms-3">Atractivos Turísticos</span>
      </v-card-title>
    <v-row class="mx-3">
    <v-col cols="6">
    <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Búsqueda"
        single-line
        hide-details
      ></v-text-field>
    </v-col>
    <v-col cols="6" class="text-right">
      <router-link to="/atractivo/0" class="underline-none">
        <v-btn color="green" tile dark>
          <v-icon>mdi-plus</v-icon>
          <span>Nuevo Atractivo</span>
        </v-btn>
      </router-link>
    </v-col>
    </v-row>
      

    <v-data-table
      :headers="headers"
      :items="atractivos_list"
      :search="search"
      class="mt-7"
    >
    <template v-slot:[`item.subtipo`]="{ index }">
      <span>{{index + 1}}</span>
    </template>
    <template v-slot:[`item.id`]="{ item }">
        <v-btn
        class="mx-1"
        fab
        dark
        small
        @click="editarAtractivo(item.id)"
        color="primary"
        >
        <v-icon dark>
            mdi-pencil
        </v-icon>
        </v-btn>
        <v-btn
        class="mx-1"
        fab
        dark
        small
        @click="eliminarAtractivo(item.id)"
        color="red"
        >
        <v-icon dark>
            mdi-delete
        </v-icon>
        </v-btn>
     </template>
    </v-data-table>
    </v-container>
  </v-card>
  </div>
</template>
<script>
//import axios from 'axios';
import AtractivoService from '@/services/AtractivoService';

export default {
  name: 'Atractivos',
  components: {
  }, 
  data(){
    return{
      search: '',
        headers: [
          {
            text: '#',
            align: 'start',
            value: 'subtipo',
            width: '5%'
          },
          { text: 'Nombre', value: 'nombre', width: '15%' },
          { text: 'Descripcion', value: 'descripcion', width:'20%' },
          { text: 'Comunidad', value: 'comunidad', width: '15%' },
          { text: 'Categoria', value: 'categoria', width: '15%' },
          { text: 'Tipo', value: 'tipo', width: '15%' },
          { text: 'Acciones', value: 'id', width: '10%' },
        ],
        atractivos_list:[],
    }
  },
  mounted(){
    //console.log('carga');
      this.getAtractivos();
  },
  methods:{
     getAtractivos(){
      AtractivoService.getAtractivos().then(response=>{
        this.atractivos_list=response.data;
      })
     },
     editarAtractivo(id){
        this.$router.replace('atractivo/'+id);
     },
     eliminarAtractivo(id){
        this.$swal.fire({
        title: 'Eliminar registro',
        text: "Esta seguro que desea eliminar el registro?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.eliminar(id);
        }
      })
     },
     eliminar(id){
        AtractivoService.deleteAllAtractivosArticulo(id).then(()=>{
          AtractivoService.deleteAtractivo(id).then(()=>{
            this.notification('El atractivo fue eliminado', 'info');
            this.getAtractivos(); 
          })
        })
     },
      notification(title, icon){
          this.$swal.fire({
          position: 'top-end',
          icon,
          title,
          showConfirmButton: false,
          timer: 1500
        })
     }
  }
}
</script>

<style scoped>
.underline-none{
  text-decoration: none;
}
</style>