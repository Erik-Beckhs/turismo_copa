<template>
  <div class="hospedajes mx-15 my-7">
    <v-card class="pa-5">
    <v-container>
      <v-card-title class="text-h5">
      <v-icon>mdi-bed</v-icon>
      <span class="ms-3">Establecimientos de Hospedaje</span>
      </v-card-title>
      <hr class="line-blue" />
    <v-row class="mx-3">
    <v-col cols="12" md="6" lg="6">
    <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Búsqueda"
        single-line
        hide-details
      ></v-text-field>
    </v-col>
    <v-col cols="12" md="6" lg="6" class="text-right">
      <v-btn 
      @click="$router.push('hospedaje/0')"
      color="green" tile dark>
          <v-icon>mdi-plus</v-icon>
          <span>Nuevo Hospedaje</span>
      </v-btn>
    </v-col>
    </v-row>
      
    <v-data-table
      :headers="headers"
      :items="hospedajes_list"
      :search="search"
      class="mt-7"
    >
    <template v-slot:[`item.precio_min`]="{ index }">
      <span>{{index + 1}}</span>
    </template>
    <template v-slot:[`item.categoria`]="{ item }">
      <v-rating
        :value="item.categoria"
        color="orange"
        dense
        readonly
        size="14"
        ></v-rating>
    </template>
    <template v-slot:[`item.id`]="{ item }">
        <v-btn
        class="mx-1"
        fab
        dark
        small
        @click="editarHospedaje(item.id)"
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
        @click="eliminarHospedaje(item.id)"
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
import HospedajeService from '@/services/HospedajeService'

export default {
  name: 'Hospedajes',
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
            value: 'precio_min',
          },
          { text: 'Tipo', value: 'tipo' },
          { text: 'Nombre', value: 'nombre' },
          { text: 'Responsable', value: 'titular' },
          { text: 'Categoria', value: 'categoria' },
          { text: 'Dirección', value: 'direccion' },
          { text: 'Telefono', value: 'telefono' },
          { text: 'Acciones', value: 'id' },
        ],
        hospedajes_list:[],
    }
  },
  mounted(){
    //console.log('carga');
      this.getHospedajes();
  },
  methods:{
     getHospedajes(){
      HospedajeService.getHospedajes()
      .then(response => {
        this.hospedajes_list = response.data;
      })
      .catch(error => console.log(error))
      .finally(() => console.log('concluyó la petición'))
     },

     editarHospedaje(id){
        this.$router.replace('hospedaje/'+id);
     },
     eliminarHospedaje(id){
        this.$swal.fire({
        title: 'Eliminar registro',
        text: "Esta seguro que desea eliminar el hotel?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar'
      }).then((result) => {
        if (result.isConfirmed) {
          //this.eliminar(id)
          HospedajeService.eliminarHospedaje(id).then((response)=>{
            if(response.data.count>0){
                  this.notification('Se eliminó el hotel de manera exitosa', 'success');
                  this.getHospedajes();
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

