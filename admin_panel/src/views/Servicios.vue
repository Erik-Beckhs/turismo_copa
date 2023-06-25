<template>
  <div class="hospedajes mx-15 my-7">
    <v-card class="pa-5">
    <v-container>
      <v-card-title class="text-h5">
        <v-icon>mdi-star</v-icon>
        <span class="ms-3">Servicios</span>
      </v-card-title>
      <hr class="line-blue">
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
      <v-btn 
      @click="$router.push('servicio/0')"
      color="green" tile dark>
          <v-icon>mdi-plus</v-icon>
          <span>Nuevo Servicio</span>
      </v-btn>
    </v-col>
    </v-row>
      
    <v-data-table
      :headers="headers"
      :items="servicios_list"
      :search="search"
      class="mt-7"
    >
    <template v-slot:[`item.descripcion`]="{ index }">
      <span>{{index + 1}}</span>
    </template>
    <template v-slot:[`item.id`]="{ item }">
        <v-btn
        class="mx-1"
        fab
        dark
        small
        @click="editarServicio(item.id)"
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
        @click="eliminarServicio(item.id)"
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
import ServicioService from '@/services/ServicioService';
import ItemService from '@/services/ItemService';

export default {
  name: 'Servicios',
  components: {
    //HospedajeService
  }, 
  data(){
    return{
      search: '',
        headers: [
          {
            text: '#',
            align: 'start',
            value: 'descripcion',
          },
          { text: 'Tipo', value: 'tipo_literal' },
          { text: 'Nombre', value: 'nombre' },
          { text: 'Ubicación', value: 'ubicacion' },
          { text: 'Direccion', value: 'direccion' },
          { text: 'Telefono', value: 'telefono' },
          { text: 'WhatsApp', value: 'whatsapp' },
          { text: 'Acciones', value: 'id' },
        ],
        servicios_list:[],
        tipo_servicios:ItemService.listTipoServicios()
    }
  },
  mounted(){
      this.getServicios();
  },
  methods:{
     getServicios(){
      ServicioService.getServicios()
      .then(response => {
        this.servicios_list = response.data;
        this.servicios_list.forEach(element => {
            this.tipo_servicios.forEach(el=>{
              if(element.tipo==el.value){
                element.tipo_literal = el.text;
              }
            })
        });
      })
      .catch(error => console.log(error))
      .finally(() => console.log('concluyó la petición'))
     },

     editarServicio(id){
        this.$router.replace('servicio/'+id);
     },
     eliminarServicio(id){
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
          //this.eliminar(id)
          ServicioService.eliminarServicio(id).then((response)=>{
            if(response.data.count>0){
                  this.notification('Se eliminó el registro de manera exitosa', 'success');
                  this.getServicios();
            }
            else{
                this.notification('No existe el registro', 'info');
            }
          })
        }
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

