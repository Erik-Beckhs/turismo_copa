<template>
  <div class="guias">
    <v-card class="pa-5 mx-15 my-7">
    <v-container>
      <v-card-title class="text-h5">
        <v-icon>mdi-account</v-icon>
        <span class="ms-3">Guías</span>
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
      @click="$router.push('guia/0')"
      color="green" tile dark>
          <v-icon>mdi-plus</v-icon>
          <span>Nuevo Guía</span>
      </v-btn>
    </v-col>
    </v-row>
      
    <v-data-table
      :headers="headers"
      :items="guias_list"
      :search="search"
      class="mt-7"
    >
    <template v-slot:[`item.sobre_mi`]="{ index }">
      <span>{{index + 1}}</span>
    </template>
    
    <template v-slot:[`item.id`]="{ item }">
        <v-btn
        class="mx-1"
        fab
        dark
        small
        @click="editarGuia(item.id)"
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
        @click="eliminarGuia(item.id)"
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

import GuiaService from '@/services/GuiaService'

export default {
  name: 'Guias',
  components: {
  }, 
  data(){
    return{
      search: '',
        headers: [
          {
            text: '#',
            align: 'start',
            value: 'sobre_mi',
          },
          { text: 'Nombre', value: 'nombre' },
          { text: 'Apellidos', value: 'apellidos' },
          { text: 'Dirección', value: 'direccion' },
          { text: 'Correo', value: 'correo' },
          { text: 'Nro. de Celular', value: 'whatsapp' },
           { text: 'Acciones', value: 'id' },
        ],
        guias_list:[],
    }
  },
  mounted(){
    //console.log('carga');
      this.getGuias();
  },
  methods:{
     getGuias(){
      GuiaService.getGuias()
      .then(response => {
        this.guias_list = response.data;
      })
      .catch(error => console.log(error))
      .finally(() => console.log('concluyó la petición'))
     },
     editarGuia(id){
        this.$router.replace('guia/'+id);
     },
     eliminarGuia(id){
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
          GuiaService.eliminarGuia(id).then((response)=>{
            if(response.data.count>0){
                  this.notification('Se eliminó el registro de manera exitosa', 'success');
                  this.getGuias();
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

