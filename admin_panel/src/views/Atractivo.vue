<template>
  <div class="atractivo">
    <v-card class="pa-10">
    <v-container>
    <v-card-title>
    <v-icon>mdi-bank</v-icon>
      <span class="ms-2">{{edicion}} Atractivo</span>
    </v-card-title>
    <v-card-subtitle class="grey--text">
      A continuación ingrese información general del atractivo, además de los artículos recomendados a llevar por el turista.
    </v-card-subtitle>
    <v-divider></v-divider>
    <v-row>
      <v-col cols="8">
        <v-card-title>Datos del Atractivo</v-card-title>
        <v-col cols="12 pa-0">
          <v-text-field
            v-model="atractivo.nombre"
            :rules="nameRules"
            label="Nombre"
            required
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12 pa-0">
          <v-text-field
            v-model="atractivo.descripcion"
            label="Descripción"
            required
            outlined
          ></v-text-field>
        </v-col>
        <v-row>
          <v-col cols="6" class="px-3 py-0">
            <v-text-field
              v-model="atractivo.ubicacion"
              :rules="nameRules"
              label="Ubicación"
              required
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="6" class="px-3 py-0">
            <v-select
              v-model="atractivo.comunidad"
              :items="comunidades"
              label="Comunidad"
              required
              outlined
            ></v-select>
          </v-col>
        </v-row>
        <v-col cols="12 pa-0">
          <v-text-field
            v-model="atractivo.como_llegar"
            label="Cómo Llegar"
            required
            outlined
          ></v-text-field>
        </v-col>
        <v-row>
          <v-col cols="6" class="py-0 px-3">
            <v-select
            v-model="atractivo.categoria"
            :items="categorias"
            label="Categoria"
            required
            outlined
        ></v-select>
        </v-col>
          <v-col cols="6" class="py-0 px-3">
               <v-select
                v-model="atractivo.jerarquia"
                :items="jerarquias"
                label="Jerarquía"
                required
                outlined
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" class="py-0 px-3">
           <v-select
              v-model="atractivo.tipo"
              :items="tipos_atractivo"
              label="Tipo"
              required
              outlined
          ></v-select>
        </v-col>
          <v-col cols="6" class="py-0 px-3">
            <v-select
              v-model="atractivo.subtipo"
              :items="subtipos_atractivo"
              label="Sub Tipo"
              required
              outlined
          ></v-select>
          </v-col>
        </v-row>
        <v-col cols="12" class="px-0 py-0">
            <v-card-title>Información</v-card-title>
            <vue-editor v-model="atractivo.informacion" />
        </v-col>
      </v-col>
      <v-col cols="4" class="pa-5" style="border-left:1px solid #efefef;">
          <v-card-title class="py-0">
            Imagenes
          </v-card-title>
          <v-col cols="12">
            <v-card-title class="py-0">
                Imagen Principal
            </v-card-title>
            <v-img v-if="view_image_atractivo!=''" :src="view_image_atractivo"/>
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
            <!-- <input type="file" ref="img_principal" @input="updateFile"/> -->
            
            <!-- <ImgPrincipal @estado="estado_img=$event" @imagen="atractivo.img_principal=$event" /> -->
          </v-col>
          <v-divider></v-divider>
          <v-col cols="12" class="text-center">
            <v-card-title class="py-0">
               Galería de Imagenes
            </v-card-title>
            <vue-upload-multiple-image
            @upload-success="uploadImageSuccess"
            @before-remove="beforeRemove"
            @edit-image="editImage"
            :data-images="images"
            idUpload="myIdUpload"
            editUpload="myIdEdit"
            >
            </vue-upload-multiple-image>
          </v-col>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="mb-7 mt-5">
      <v-card-title>
        <v-icon>mdi-bag-personal</v-icon>
        <span class="ms-2">Artículos a llevar</span>
      </v-card-title>

     <v-container class="pl-15">
      <v-flex xs12 md12 class="greyBorder">
            <div class="mx-4">
              <v-layout row wrap>
                    <v-flex v-for="(category,index) in articulos" :key="articulos[index].value" xs3>
                      <v-checkbox light :label="category.articulo" v-model="category.selected" class="mt-0">
                      </v-checkbox>
                    </v-flex>
              </v-layout>
            </div>
      </v-flex>
     </v-container>
    </v-row>
    <v-divider></v-divider>
    <v-col cols="12" class="text-right">
      <v-btn tile color="primary" class="mx-1" @click="guardar">
        <v-icon>mdi-content-save</v-icon>
        <span>Guardar</span>
      </v-btn>
      <router-link to="/atractivos">
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
/* eslint-disable vue/no-unused-components */

//import axios from 'axios';
import ItemService from '@/services/ItemService';
import AtractivoService from '@/services/AtractivoService'
import VueUploadMultipleImage from 'vue-upload-multiple-image';
import { VueEditor } from "vue2-editor";

import ImgPrincipal from '@/components/ImgPrincipal.vue'

export default {
  name: 'Atractivo', 
  components: {
    VueUploadMultipleImage,
    ImgPrincipal,
    VueEditor
  }, 
  data(){
    return{
      search: '',
      estado_img:0,
      edicion:'Nuevo',
      images:[],
      id_atractivo:'',
      view_image_atractivo:null,
      atractivo:{
        nombre:'',
        informacion:'',
        ubicacion:'',
        como_llegar:'',
        comunidad:'',
        jerarquia:'',
        img_principal:'',
        tipo:'',
        subtipo:'',
        descripcion:''
      },
      comunidades:ItemService.listComunidades(),
      categorias:ItemService.listCategoriasAtractivos(),
      articulos:ItemService.listArticulos(),
      jerarquias:['I', 'II', 'III', 'IV', 'V'],
      tipos_atractivo:ItemService.listTipoAtractivos(),
      subtipos_atractivo:ItemService.listSubTipoAtractivos(),
      nameRules: [
        v => !!v || 'Name is required',
      ],
    }
  },
  mounted(){
    this.id_atractivo = this.$route.params.id;
      if(this.id_atractivo != 0){
      this.edicion = 'Editar';
      this.getAtractivo(this.id_atractivo);
    }
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
        this.atractivo.img_principal=(Math.random().toString(16).slice(2)) +'.'+ extFile;
        // para la visualizacion convertimos la imagen
        const file = event; 
        this.toBase64(file).then(base64 => {
          this.view_image_atractivo=base64;
        });
      }else{
        this.view_image_atractivo='';
      }
    },
    getAtractivo(id){
        AtractivoService.getAtractivo(id).then(response=>{
        this.atractivo = response.data;
        this.view_image_atractivo=this.$Api_url_media+this.atractivo.img_principal;
        AtractivoService.getArticulosAtractivo(id).then(response=>{
          if(response.data.length > 0){
            //var articulos_response = response.data;
            this.load_articulos(response.data);
          }
        }).catch(error=>console.log(error));
      })
    },
    load_articulos(articulos){
      this.articulos.forEach(element=>{
              articulos.forEach(res=>{
                if(res.articulo == element.articulo){
                  element.selected = true;
                }
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
     },
      uploadImageSuccess(formData, index, fileList) {
        console.log('data', formData, index, fileList);
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
      var articulos_seleccionados = this.articulos.filter(element=>element.selected==true);
      //console.log(this.id_atractivo);

      if(this.id_atractivo != 0){
        this.editaAtractivo(articulos_seleccionados);
      }
      else{
        this.guardaAtractivo(articulos_seleccionados);
      }
    },
    FormDataImage(id_element, nombre_archivo){
      const fileinput= document.getElementById(id_element);
      const formData = new FormData();
      formData.append('file', fileinput.files[0], nombre_archivo);
      return formData;
    },
    guardaAtractivo(articulos){
      console.log(this.atractivo);
      let dataimagen=this.FormDataImage('file_imagen_principal', this.atractivo.img_principal);
      // console.log(dataimagen);
      // return;
      this.atractivo.img_principal="";
      AtractivoService.saveAtractivo(this.atractivo).then(response=>{
        var id_atractivo = response.data.id;
        this.guardaImagenAtractivo(id_atractivo, dataimagen);
        this.guardaArticulos(articulos, id_atractivo)
        this.notification('El atractivo ha sido registrado de manera correcta', 'success');
        this.$router.replace('/atractivos');
      })
    },
    guardaImagenAtractivo(id_atractivo, dataimagen){
      AtractivoService.saveImage(id_atractivo, dataimagen).then(response=>{
        console.log(response.data);
        this.view_image_atractivo='';
      })
    },
    editaAtractivo(articulos){
      let dataimagen=this.FormDataImage('file_imagen_principal', this.atractivo.img_principal);
      this.atractivo.img_principal="";
      AtractivoService.editAtractivo(this.id_atractivo, this.atractivo).then((response)=>{
        if(response){
          this.guardaImagenAtractivo(this.id_atractivo, dataimagen);
          AtractivoService.deleteAllAtractivosArticulo(this.id_atractivo).then(()=>{
            this.guardaArticulos(articulos, this.id_atractivo)
            this.notification('El atractivo ha sido modificado de manera correcta', 'success');
            this.$router.replace('/atractivos');
          })
        }
      })
    },
    guardaArticulos(articulos, id){
      articulos.forEach(element => {
            AtractivoService.saveArticulo(id, element);
      });
    }
  }
}
</script>
<style scoped>
  v-col{
    padding:0;
  }

</style>

