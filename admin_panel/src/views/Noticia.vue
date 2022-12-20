<template>
  <div class="atractivo">
    <v-card class="pa-10">
    <v-container>
    <v-card-title>
    <v-icon>mdi-bank</v-icon>
    <span class="ms-2">{{edicion}} Atractivo</span>
    </v-card-title>
    <v-divider></v-divider>
    <v-row>
      <v-col cols="8">
        <v-card-title>Datos Principales</v-card-title>
        <v-col cols="12 pa-0">
          <v-text-field
            v-model="atractivo.nombre"
            :rules="nameRules"
            label="Nombre"
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
        <v-col cols="12" class="py-0">
          <v-text-field
            v-model="atractivo.como_llegar"
            :rules="nameRules"
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
            <v-text-field
              v-model="atractivo.temporada_ideal"
              :rules="nameRules"
              label="Temporada Ideal"
              required
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-col cols="12" class="px-0 py-0">
            <v-textarea
            name="informacion"
            label="Información del Atractivo"
            :value=atractivo.informacion
            outlined
            height=310
          ></v-textarea>
        </v-col>
      </v-col>
      <v-col cols="4" class="pa-5">
          <v-card-title class="py-0">
            Imagenes
          </v-card-title>
          <v-col cols="12">
            <v-card-title class="py-0">
                Imagen Principal
            </v-card-title>
            <ImgPrincipal/>
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
    <v-row class="mb-7">
    <v-card-title>
      <v-icon>mdi-umbrella-beach-outline</v-icon>
      <span class="ms-2">Artículos a llevar</span>
    </v-card-title>

     <v-flex xs12 md12 class="greyBorder">
            <div class="mr-4 ml-4">
              <v-layout row wrap>
                    <v-flex v-for="(category,index) in articulos" :key="articulos[index].text" xs4>
                      <v-checkbox light :label="category.text" v-model="category.selected">
                      </v-checkbox>
                    </v-flex>
              </v-layout>
            </div>
      </v-flex>
    </v-row>
    <v-divider></v-divider>
    <v-col cols="12" class="text-right">
      <v-btn tile color="primary" class="mx-1">
        <v-icon>mdi-content-save</v-icon>
        <span>Guardar</span>
      </v-btn>
      <v-btn tile color="secondary" class="mx-1">
        <v-icon>mdi-arrow-left-circle</v-icon>
        <span>Cancelar</span>
      </v-btn>
    </v-col>
    </v-container>
  </v-card>
  </div>
</template>
<script>
//import axios from 'axios';
import ItemService from '@/services/ItemService';
import VueUploadMultipleImage from 'vue-upload-multiple-image';

import ImgPrincipal from '@/components/ImgPrincipal.vue'

export default {
  name: 'Atractivo', 
  components: {
    VueUploadMultipleImage,
    ImgPrincipal
  }, 
  data(){
    return{
      search: '',
      edicion:'Nuevo',
      images:[],
      atractivo:{
        nombre:'',
        informacion:'',
        ubicacion:'',
        como_llegar:'',
        comunidad:'',
        temporada_ideal:'',
        img_principal:''
      },
      comunidades:[
        'Copacabana',
        'Isla del Sol',
        'Kasani',
        'Locka'
      ],
      categorias:[
        {val:1, text:'Atractivos Históricos'},
        {val:2, text:'Atractivos Contemporáneos'},
        {val:3, text:'Biogeograficos'},
        {val:4, text:'Geomorfológicos'}
      ],
      articulos:ItemService.listArticulos(),
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
    }
  },
  mounted(){
    
  },
  methods:{
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
    }
    //  getArticulos(){
    //   ArticuloService.getArticulos().
    //   then(response=>this.articulos=response.data)
    //   .catch(error=> console.log(error))
    //  }
  }
}
</script>
<style scoped>
  v-col{
    padding:0;
  }
</style>

