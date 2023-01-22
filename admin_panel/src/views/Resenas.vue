<template>
  <div class="resenas px-15 pt-10">
    <v-card class="px-5 py-3" v-if="resenas_new.length>0">
    <v-container>
          <v-card-title>
          <v-icon>
          mdi-alert-circle-outline
          </v-icon>
          <span class="ms-2">Reseñas pendientes de Aprobación</span>
          </v-card-title>
          <v-alert
          outlined
          type="warning"
          prominent
          border="left"
        >
        Las reseñas presentes en la siguiente tabla, requieren de aprobación, sin la misma, no podrán ser visualizadas en la página principal
        </v-alert>
    <v-data-table
      :headers="headers"
      :items="resenas_new"
    >
     <template v-slot:[`item.id`]="{ index }">
      <span>{{index + 1}}</span>
    </template>
     <template v-slot:[`item.estado`]="{ item }">

    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        class="mx-1"
        fab
        dark
        small
         v-bind="attrs"
          v-on="on"
        @click="aprobarResena(item.id)"
        color="success"
        >
        <v-icon dark>
            mdi-check
        </v-icon>
        </v-btn>
      </template>
      <span>Aprobar Reseña</span>
    </v-tooltip>

      <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        class="mx-1"
        fab
        dark
        small
        @click="eliminarResena(item.id, 1)"
        color="red"
        v-bind="attrs"
          v-on="on"
        >
        <v-icon dark>
            mdi-delete
        </v-icon>
        </v-btn>
      </template>
      <span>Eliminar Reseña</span>
    </v-tooltip>
    
     </template>
    </v-data-table>
    </v-container>
  </v-card>

  <v-card class="pa-5 mt-5">
    <v-container>
    <v-card-title>
       <v-icon>
         mdi-playlist-check
       </v-icon>
       <span class="ms-2">Lista de Reseñas</span>
    </v-card-title>
    <hr class="line-blue"/>
    <v-col cols="6">
      <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Búsqueda"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    </v-col>
    <v-data-table
      :headers="headers"
      :items="resenas_old"
      :search="search"
    >
    <template v-slot:[`item.id`]="{ index }">
      <span>{{index + 1}}</span>
    </template>
        <template v-slot:[`item.estado`]="{ item }">

      <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        class="mx-1"
        fab
        dark
        small
        @click="eliminarResena(item.id, 2)"
        color="red"
        v-bind="attrs"
          v-on="on"
        >
        <v-icon dark>
            mdi-delete
        </v-icon>
        </v-btn>
      </template>
      <span>Eliminar Reseña</span>
    </v-tooltip>
     </template>
    </v-data-table>
    </v-container>

  </v-card>

<v-dialog v-model="card_resena" width="400">
    <v-card
    
  >

    <v-img
      height="250"
      :src="resena.image"
    ></v-img>

    <v-card-title>{{resena.titulo}}</v-card-title>

    <v-card-text>
      <div class="grey--text">
         {{resena.autor}}
        </div>
      <div class="text-subtitle-1">
        {{resena.fecha_publicacion}}
      </div>

      <div>{{resena.descripcion}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="card_resena = false"
      >
        Cerrar
      </v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>

  </div>
</template>
<script>
import ResenasService from '@/services/ResenasService';

export default {
  name: 'Resenas',
  components: {
  }, 
  data(){
    return{
      search: '',
      card_resena:false,
        headers: [
          {
            text: '#',
            align: 'start',
            value: 'id',
          },
          { text: 'Fecha de Publicación', value: 'fecha_publicacion' },
          { text: 'Autor', value: 'autor' },
          { text: 'Título', value: 'titulo' },
          { text: 'Contenido', value: 'descripcion' },
          { text: 'Acciones', value: 'estado' },
        ],
        resenas_list:[],
        resena:{
          titulo:'',
          fecha_publicacion:'',
          descripcion:'',
          autor:'',
          imagen:''
        }
    }
  },
  mounted(){
    //console.log('carga');
      this.getResenas();
  },
  computed:{
    resenas_new(){
        var resenas = this.resenas_list;
        return resenas.filter(element=>element.estado == 0);
    }, 
    resenas_old(){
        var resenas = this.resenas_list;
        return resenas.filter(element=>element.estado == 1);
    }
  },
  methods:{
     getResenas(){
      ResenasService.getResenas().then(response=>{
        this.resenas_list = response.data;
      })
     },
     eliminarResena(id, state){
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
          this.eliminar(id, state)
        }
      })
     },
     eliminar(id, state){
        ResenasService.deleteResena(id).then(()=>{
          this.notification('La reseña fue eliminada', 'info');
          state==1?location.reload():this.getResenas();
        })
     },
     aprobarResena(id){
          this.$swal.fire({
          title: 'Aprobar Reseña',
          text: "Esta seguro que desea aprobar la reseña?",
          icon: 'info',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, aprobar'
        }).then((result) => {
          if (result.isConfirmed) {
             this.aprobar(id);
          }
        })
     }, 
     aprobar(id){
       ResenasService.aprobarResena(id, {estado:1}).then(()=> {
              this.notification('La reseña fue aprobado con exito', 'success');
              location.reload();
              //this.getResenas(); 
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

