<template>
  <div class="atractivo">
    <v-card class="pa-10">
    <v-container>
    <v-card-title class="text-h5">
      <v-icon>mdi-newspaper-variant-multiple</v-icon>
      <span class="ms-2">{{estado_noticia}} Noticia</span>
    </v-card-title>
    <v-card-subtitle class="grey--text">
      A continuación ingrese información de la noticia, su imagen principal y la categoría a la que pertenece.
    </v-card-subtitle>
    <v-divider></v-divider>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    >
      <v-row>
        <v-col cols="8">
          <v-card-title class="text-subtitle-1">Información</v-card-title>
          <v-col cols="12" class="pa-0">
            <v-text-field
              v-model="noticia.titulo"
              :rules="nameRules"
              label="Titulo"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="pa-0">
            <v-text-field
              v-model="noticia.entrada"
              :rules="nameRules"
              label="Entrada"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="pa-0">
            <v-text-field
              v-model="noticia.autor"
              :rules="nameRules"
              label="Autor"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="px-0 pt-0 pb-5">
              <v-card-title class="text-subtitle-1">Contenido</v-card-title>
              <vue-editor v-model="noticia.contenido" />
          </v-col>

        </v-col>
        <v-col cols="4" class="pa-5">
            <v-card-title class="text-subtitle-1">
              Imagen
            </v-card-title>
            <v-col cols="12">
              <v-img v-if="view_image_noticia!=''" :src="view_image_noticia"/>
              <v-file-input
                  id="file_imagen_principal"
                  label="Cargar Imagen"
                  prepend-icon="mdi-paperclip"
                  @change="updateFile"
                >
                  <template v-slot:selection="{ text }">
                    <v-chip
                      small
                      label
                      color="primary"
                    >
                      {{ text }}
                    </v-chip>
                  </template>
                </v-file-input>

              <!--<v-img v-show="estado_img==0 && noticia.img==''" src="@/assets/not_found.png" />
              <v-img v-if="estado_img==0" :src="noticia.img"/>
              <ImgPrincipal @estado="estado_img=$event" @imagen="noticia.img=$event"/>-->
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
                :rules="nameRules"
                label="Categoría"
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
    </v-form>
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
      view_image_noticia:null,
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
      valid:true
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
      console.log(this.noticia.fecha_publicacion);
  },
  methods:{
    toBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    },
    updateFile(event) {
      if(event!=null){
        // generamos un nuevo nombre de imagen
        var fileName = event.name;
        var extFile = fileName.split('.').pop();
        this.noticia.img=(Math.random().toString(16).slice(2)) +'.'+ extFile;
        // para la visualizacion convertimos la imagen
        const file = event; 
        this.toBase64(file).then(base64 => {
          this.view_image_noticia=base64;
        });
      }else{
        this.view_image_noticia='';
      }
    },
    getNoticia(){
      NoticiaService.getNoticia(this.id_noticia).then(response=>{
        this.noticia = response.data;
        this.view_image_noticia=this.$Api_url_media+this.noticia.img;
        this.noticia.fecha_publicacion = this.convierteFecha(this.noticia.fecha_publicacion);
      })
    },
    convierteFecha(fecha){
       let date = new Date(fecha);
       let dia = ('0'+date.getDate()).slice(-2);
       let mes = ('0'+date.getMonth() + 1).slice(-2);
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
    guardar(){
      if(this.$refs.form.validate()){
        if(!this.view_image_noticia){
          this.notification("Debe cargar la imagen de la noticia","warning")
          return;
        }
        if(this.noticia.contenido){
          this.id_noticia!=0?this.editaNoticia():this.guardaNoticia();
        }
        else{
          this.notification("El contenido de la noticia no puede estar vacio","warning")
        }
      }
      else{
        this.notification("Existen campos obligatorios", "warning");
      }
    },
    editaNoticia(){
      let dataimagen=this.FormDataImage('file_imagen_principal', this.noticia.img);
      if(dataimagen!=null) this.noticia.img="";
      NoticiaService.editaNoticia(this.noticia).then(response=>{
        if(dataimagen!=null) {this.guardaImagenNoticia(this.id_noticia, dataimagen);}
        this.notification("La Noticia fue editada de manera exitosa", "success");
        this.$router.replace('/noticias');
      })
    },
    guardaNoticia(){
      let dataimagen=this.FormDataImage('file_imagen_principal', this.noticia.img);
      this.noticia.img="";
      NoticiaService.saveNoticia(this.noticia).then(response=>{
        var id_noticia = response.data.id;
        if(dataimagen!=null) {this.guardaImagenNoticia(id_noticia, dataimagen);}
        this.notification("La noticia fue creada de manera exitosa", 'success');
        this.$router.replace('/noticias');
      })
    },
    FormDataImage(id_element, nombre_archivo){
      const fileinput= document.getElementById(id_element);
      if(fileinput.files.length!=0){
        const formData = new FormData();
        formData.append('file', fileinput.files[0], nombre_archivo);
        return formData;
      }else{
        return null;
      }
    },
    guardaImagenNoticia(id_noticia, dataimagen){
      NoticiaService.saveImage(id_noticia, dataimagen).then(response=>{
        //console.log(response.data);
        this.view_image_noticia='';
      })
    },
    Today(){
      const fecha = new Date();
      let dia = ('0'+fecha.getDate()).slice(-2);
      let mes = ('0'+(fecha.getMonth()+1)).slice(-2);
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

