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
     
      <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          fab
          small
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>
            mdi-dots-vertical
          </v-icon>
        </v-btn>
      </template>
        <v-list>
        <v-list-item
        @click="verResena(item)"
        >
          <v-list-item-title>
          <v-icon>mdi-eye-outline</v-icon>
          Ver Reseña
          </v-list-item-title>
        </v-list-item>
          <v-divider></v-divider>
         <v-list-item
          @click="aprobarResena(item.id)"
        >
          <v-list-item-title>
          <v-icon>mdi-check</v-icon>
          Aprobar
          <v-divider></v-divider>
          </v-list-item-title>
        </v-list-item>
          <v-divider></v-divider>
        <v-list-item
        @click="eliminarResena(item.id, 1)"
        >
          <v-list-item-title>
          <v-icon>mdi-delete</v-icon>
          Eliminar
          <v-divider></v-divider>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    
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

            <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          fab
          small
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>
            mdi-dots-vertical
          </v-icon>
        </v-btn>
      </template>
        <v-list>
        <v-list-item
        @click="verResena(item)"
        >
          <v-list-item-title>
          <v-icon>mdi-eye-outline</v-icon>
          Ver Reseña
          </v-list-item-title>
        </v-list-item>
          <v-divider></v-divider>
        <v-list-item
        @click="eliminarResena(item.id, 1)"
        >
          <v-list-item-title>
          <v-icon>mdi-delete</v-icon>
          Eliminar
          <v-divider></v-divider>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
     </template>
    </v-data-table>
    </v-container>

  </v-card>

<v-dialog v-model="card_resena" width="600" max-height="400">

  <v-card
    :loading="loading"
    
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src="$Api_url_media+resena.img_user"
    ></v-img>

    <v-card-title>{{resena.autor}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="resena.rating"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          {{resena.rating}}
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        {{resena.fecha_publicacion}}
      </div>

     <v-card-title class="ps-0">{{resena.titulo}}</v-card-title>
      <div>{{resena.contenido}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
     <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="card_resena = false"
          >
            Cerrar
          </v-btn>

          <v-btn
          v-if="resena.estado == 0"
            color="green darken-1"
            text
            @click="aprobarResena(resena.id)"
          >
            Aprobar
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
      loading:false,
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
          { text: 'Contenido', value: 'contenido' },
          { text: 'Acciones', value: 'estado' },
        ],
        resenas_list:[],
        resena:{
          titulo:'',
          fecha_publicacion:'',
          contenido:'',
          autor:'',
          img_user:'', 
          rating:0
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
        this.resenas_list.forEach(element=>{
          var fecha = new Date(element.fecha_publicacion);
          element.fecha_publicacion = this.ordenaFecha(fecha);
        })
      })
     },
     ordenaFecha(fecha){
      let dia = ('0'+fecha.getDate()).slice(-2);
      let mes = ('0'+(fecha.getMonth()+1)).slice(-2);
      let anio = fecha.getFullYear();
      return `${dia}-${mes}-${anio}`;
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
             this.card_resena = false;
             this.aprobar(id);
          }
        })
     }, 
     aprobar(id){
       ResenasService.aprobarResena(id, {estado:1}).then(()=> {
              this.notification('La reseña fue aprobada con exito', 'success');
              location.reload();
              //this.getResenas(); 
            })
     },
     verResena(item){
        this.resena = item;
        this.card_resena = true;
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

