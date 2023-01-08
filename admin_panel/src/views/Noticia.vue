<template>
  <div class="atractivo">
    <v-card class="pa-10">
    <v-container>
    <v-card-title>
    <v-icon>mdi-newspaper-variant-multiple</v-icon>
    <span class="ms-2">{{estado_noticia}} Noticia</span>
    </v-card-title>
    <v-card-subtitle class="grey--text">
      A continuación ingrese información de la noticia, su imagen principal y la categoría a la que pertenece.
    </v-card-subtitle>
    <v-divider></v-divider>
    <v-row>
      <v-col cols="8">
        <v-card-title>Información</v-card-title>
        <v-col cols="12" class="pa-0">
          <v-text-field
            v-model="noticia.titulo"
            :rules="nameRules"
            label="Titulo"
            required
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="pa-0">
          <v-text-field
            v-model="noticia.entrada"
            label="Entrada"
            required
            outlined
          ></v-text-field>
        </v-col>
         <v-col cols="12" class="pa-0">
          <v-text-field
            v-model="noticia.autor"
            label="Autor"
            required
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="px-0 pt-0 pb-5">
            <v-card-title>Contenido</v-card-title>
            <vue-editor v-model="noticia.contenido" />
        </v-col>

      </v-col>
      <v-col cols="4" class="pa-5">
          <v-card-title class="py-0">
            Imagen
          </v-card-title>
          <v-col cols="12">
            <v-img v-show="estado_img==0 && noticia.img==''" src="@/assets/not_found.png" />
            <v-img v-if="estado_img==0" :src="noticia.img"/>
            <ImgPrincipal @estado="estado_img=$event" @imagen="noticia.img=$event"/>
          </v-col>
           <v-col cols="12" class="px-3 pt-5 pb-0">
            <v-text-field
              v-model="noticia.fecha_publicacion"
              :rules="nameRules"
              label="Fecha de Publicación"
              required
              type="date"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="px-3 py-0">
            <v-select
              v-model="noticia.categoria"
              :items="categorias"
              label="Categoria"
              required
              outlined
            ></v-select>
          </v-col>
          <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-col cols="12" class="text-right">
      <v-btn tile color="primary" class="mx-1" @click="guardar">
        <v-icon>mdi-content-save</v-icon>
        <span>Guardar</span>
      </v-btn>
      <router-link to="/noticias" class="underline-none">
        <v-btn tile color="secondary" class="mx-1">
        <v-icon>mdi-arrow-left-circle</v-icon>
          <span>Cancelar</span>
        </v-btn>
      </router-link>
    </v-col>
    </v-container>
  </v-card>
  </div>
</template>
<script>
//import axios from 'axios';
import ItemService from '@/services/ItemService';
import NoticiaService from '@/services/NoticiaService';
import VueUploadMultipleImage from 'vue-upload-multiple-image';
import { VueEditor } from "vue2-editor";

import ImgPrincipal from '@/components/ImgPrincipal.vue'

export default {
  name: 'Noticia', 
  components: {
    VueUploadMultipleImage,
    ImgPrincipal,
    VueEditor
  }, 
  data(){
    return{
      search: '',
      estado_img:0,
      estado_noticia:'Nueva',
      id_noticia:0,
      noticia:{
        autor:'',
        entrada:'',
        titulo:'',
        contenido:'',
        img:'',
        fecha_publicacion:'',
        categoria:'',
      },
      categorias:ItemService.listCategoriasNoticia(),
      nameRules: [
        v => !!v || 'Campo requerido',
      ],
    }
  },
  mounted(){
    this.id_noticia = this.$route.params.id;
      if(this.id_noticia != 0){
        this.estado_noticia = 'Editar';
        this.getNoticia();
      }
      else{
        this.noticia.fecha_publicacion = this.Today();
      }
  },
  methods:{
    getNoticia(){
      NoticiaService.getNoticia(this.id_noticia).then(response=>{
        this.noticia = response.data;
        this.noticia.fecha_publicacion = this.convierteFecha(this.noticia.fecha_publicacion);
      })
    },
    convierteFecha(fecha){
       let date = new Date(fecha);
       let dia = date.getDate();
       let mes = date.getMonth() + 1;
       let anio = date.getFullYear();
       return `${anio}-${mes}-${dia}`;
    },
      notification(title, icon){
          this.$swal.fire({
          position: 'top-end',
          icon,
          title,
          showConfirmButton: false,
          timer: 1500
        })
     },
    uploadImageSuccess(formData, index, fileList) {
      console.log('data', formData, index, fileList)
      //console.log(formData);
      // Upload image api
      // axios.post('http://your-url-upload', formData).then(response => {
      //   console.log(response)
      // })
    },
    beforeRemove (index, done, fileList) {
      console.log('index', index, fileList)
      var r = confirm("remove image")
      if (r == true) {
        done()
      }
    },
    editImage (formData, index, fileList) {
      console.log('edit data', formData, index, fileList)
    },
    guardar(){
      //console.log(this.noticia);
      this.id_noticia!=0?this.editaNoticia():this.guardaNoticia();
    },
    editaNoticia(){
      NoticiaService.editaNoticia(this.noticia).then(()=>{
        this.notification("La Noticia fue editada de manera exitosa", "success");
        this.$router.replace('/noticias');
      })
    },
    guardaNoticia(){
      NoticiaService.saveNoticia(this.noticia).then(()=>{
        this.notification("La noticia fue creada de manera exitosa", 'success');
        this.$router.replace('/noticias');
      })
    },
    Today(){
      const fecha = new Date();
      let dia = ('0'+fecha.getDate()).slice(-2);
      let mes = ('0'+fecha.getMonth()+1).slice(-2);
      let anio = fecha.getFullYear();
      return `${anio}-${mes}-${dia}`;
    }
  }
}
</script>
<style scoped>
  v-col{
    padding:0;
  }
  .underline-none{
    text-decoration: none;
  }

</style>

