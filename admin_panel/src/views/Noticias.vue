<template>
  <div class="noticias">
    <v-card class="pa-5">
    <v-container>
      <v-card-title>
      <v-icon>mdi-newspaper-variant-multiple</v-icon>
      <span class="ms-3">Noticias</span>
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
      @click="$router.push('noticia/0')"
      color="green" tile dark>
          <v-icon>mdi-plus</v-icon>
          <span>Nueva Noticia</span>
      </v-btn>
    </v-col>
    </v-row>
      
    <v-data-table
      :headers="headers"
      :items="noticias_list"
      :search="search"
      class="mt-7"
    >
    <template v-slot:[`item.informacion`]="{ index }">
      <span>{{index + 1}}</span>
    </template>
    <template v-slot:[`item.id`]="{ item }">
        <v-btn
        class="mx-1"
        fab
        dark
        small
        @click="editarNoticia(item.id)"
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
        @click="eliminarNoticia(item.id)"
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

import NoticiaService from '@/services/NoticiaService'

export default {
  name: 'Noticias',
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
          { text: 'Titulo', value: 'titulo' },
          { text: 'Fecha de Publicación', value: 'fecha_publicacion' },
          { text: 'Categoria', value: 'categoria' },
          { text: 'Creado por', value: 'id_user' },
          { text: 'Acciones', value: 'id' },
        ],
        noticias_list:[],
    }
  },
  mounted(){
    //console.log('carga');
      this.getNoticias();
  },
  methods:{
     getNoticias(){
      NoticiaService.getNoticias()
      .then(response => {
        this.noticias_list = response.data;
      })
      .catch(error => console.log(error))
      .finally(() => console.log('concluyó la petición'))
     },

     editarNoticia(id){
        this.$router.replace('noticia/'+id);
     },
     eliminarNoticia(id){
        this.$swal.fire({
        title: 'Eliminar registro',
        text: "Esta seguro que desea eliminar la noticia?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar'
      }).then((result) => {
        if (result.isConfirmed) {
          //this.eliminar(id)
          NoticiaService.eliminarNoticia(id).then((response)=>{
            if(response.data.count>0){
                  this.notification('Se eliminó la noticia de manera exitosa', 'success');
                  this.getNoticias();
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

