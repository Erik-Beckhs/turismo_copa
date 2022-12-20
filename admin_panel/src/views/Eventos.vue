<template>
  <div class="eventos">
    <v-card class="pa-5">
    <v-container>
      <v-card-title>
      <v-icon>mdi-calendar-range</v-icon>
      <span class="ms-3">Eventos Programados</span>
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
      <v-btn 
      @click="$router.push('evento/0')"
      color="green" tile dark>
          <v-icon>mdi-plus</v-icon>
          <span>Nuevo Evento</span>
      </v-btn>
    </v-col>
    </v-row>
      
    <v-data-table
      :headers="headers"
      :items="eventos_list"
      :search="search"
      class="mt-7"
    >
    <template v-slot:[`item.precio_min`]="{ index }">
      <span>{{index + 1}}</span>
    </template>
    <template v-slot:[`item.id`]="{ item }">
        <v-btn
        class="mx-1"
        fab
        dark
        small
        @click="editarEvento(item.id)"
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
        @click="eliminarEvento(item.id)"
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

import EventoService from '@/services/EventoService'

export default {
  name: 'Eventos',
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
            value: 'informacion',
          },
          { text: 'Nombre', value: 'titulo' },
          { text: 'Fecha de Inicio', value: 'fecha_inicio' },
          { text: 'Fecha Fin', value: 'fecha_fin' },
          { text: 'Tipo', value: 'tipo' },
          { text: 'Lugar', value: 'ubicacion' },
          { text: 'Acciones', value: 'id' },
        ],
        eventos_list:[],
    }
  },
  mounted(){
    //console.log('carga');
      this.getEventos();
  },
  methods:{
     getEventos(){
      EventoService.getEventos()
      .then(response => {
        this.eventos_list = response.data;
      })
      .catch(error => console.log(error))
      .finally(() => console.log('concluyó la petición'))
     },

     editarEvento(id){
        this.$router.replace('evento/'+id);
     },
     eliminarEvento(id){
        this.$swal.fire({
        title: 'Eliminar registro',
        text: "Esta seguro que desea eliminar el evento programado?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar'
      }).then((result) => {
        if (result.isConfirmed) {
          //this.eliminar(id)
          EventoService.eliminarEvento(id).then((response)=>{
            if(response.data.count>0){
                  this.notification('Se eliminó el evento programado de manera exitosa', 'success');
                  this.getEventos();
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

