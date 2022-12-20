<template>
  <div class="atractivo">
    <v-card class="pa-10">
    <v-container>
    <v-card-title>
    <v-icon>mdi-bed</v-icon>
    <span class="ms-2">{{edicion}} Hospedaje</span>
    </v-card-title>
    <v-divider></v-divider>
    <v-row>
      <v-col cols="8">
        <v-card-title>Información Principal</v-card-title>
        <v-col cols="12 pa-0">
          <v-text-field
            v-model="hospedaje.nombre"
            :rules="nameRules"
            label="Nombre"
            required
            outlined
          ></v-text-field>
        </v-col>
        <v-row>
          <v-col cols="6" class="px-3 py-0">
            <v-text-field
              v-model="hospedaje.direccion"
              :rules="nameRules"
              label="Direccion"
              required
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="6" class="px-3 py-0">
                <v-text-field
              v-model="hospedaje.telefono"
              :rules="nameRules"
              label="Telefono"
              required
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" class="px-3 py-0">
             <v-select
            v-model="hospedaje.categoria"
            :items="categorias"
            label="Categoria"
            required
            outlined
        ></v-select>
          </v-col>
          <v-col cols="6" class="px-3 py-0">
            <v-select
              v-model="hospedaje.tipo"
              :items="tipos"
              label="Tipo"
              required
              outlined
            ></v-select>
          </v-col>
        </v-row>
         <v-row>
          <v-col cols="6" class="px-3 py-0">
            <v-text-field
              v-model="hospedaje.precio_minimo"
              :rules="nameRules"
              label="Precio Mínimo"
              required
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="6" class="px-3 py-0">
                <v-text-field
              v-model="hospedaje.precio_maximo"
              :rules="nameRules"
              label="Precio Máximo"
              required
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-col cols="12" class="py-0">
          <v-text-field
            v-model="hospedaje.responsable"
            :rules="nameRules"
            label="Responsable"
            required
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="px-0 py-0">
            <v-textarea
            name="informacion"
            label="Información Adicional"
            :value=hospedaje.informacion
            outlined
            height=200
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
          <v-card-title>
            Redes Sociales
          </v-card-title>
        <v-row>
                   <v-col cols="4" class="py-0">
          <v-text-field
            v-model="hospedaje.pagina"
            :rules="nameRules"
            label="Pagina Web"
            required
            outlined
          ></v-text-field>
        </v-col>
         <v-col cols="4" class="py-0">
          <v-text-field
            v-model="hospedaje.whatsapp"
            :rules="nameRules"
            label="Whatsapp"
            required
            outlined
          ></v-text-field>
        </v-col>
         <v-col cols="4" class="py-0">
          <v-text-field
            v-model="hospedaje.facebook"
            :rules="nameRules"
            label="Facebook"
            required
            outlined
          ></v-text-field>
        </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="mb-3">
    <v-card-title>
      <v-icon>mdi-bed</v-icon>
      <span class="ms-2">Tipos de Habitación</span>
    </v-card-title>

     <v-flex xs12 md12 class="greyBorder">
            <div class="mr-4 ml-4">
              <v-layout row wrap>
                    <v-flex v-for="(category,index) in tipos_habitacion" :key="tipos_habitacion[index].tipo_habitacion" xs4>
                      <v-checkbox light :label="category.tipo_habitacion" v-model="category.selected">
                      </v-checkbox>
                    </v-flex>
              </v-layout>
            </div>
      </v-flex>
      </v-row>
      <v-divider></v-divider>
    <v-row class="mb-3">
    <v-card-title>
      <v-icon>mdi-bed</v-icon>
      <span class="ms-2">Servicios de la Propiedad</span>
    </v-card-title>

     <v-flex xs12 md12 class="greyBorder">
            <div class="mr-4 ml-4">
              <v-layout row wrap>
                    <v-flex v-for="(category,index) in servicios_propiedad" :key="servicios_propiedad[index].servicio" xs4>
                      <v-checkbox light :label="category.servicio" v-model="category.selected">
                      </v-checkbox>
                    </v-flex>
              </v-layout>
            </div>
      </v-flex>
      </v-row>
      <v-divider></v-divider>
    <v-row class="mb-3">
    <v-card-title>
      <v-icon>mdi-bed</v-icon>
      <span class="ms-2">Servicios a la Habitación</span>
    </v-card-title>

     <v-flex xs12 md12 class="greyBorder">
            <div class="mr-4 ml-4">
              <v-layout row wrap>
                    <v-flex v-for="(category,index) in servicios_habitacion" :key="servicios_habitacion[index].servicio" xs4>
                      <v-checkbox light :label="category.servicio" v-model="category.selected">
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
  name: 'Hospedaje', 
  components: {
    VueUploadMultipleImage,
    ImgPrincipal
  }, 
  data(){
    return{
      search: '',
      edicion:'Nuevo',
      images:[],
      hospedaje:{
        nombre:'',
        informacion:'',
        ubicacion:'',
        como_llegar:'',
        comunidad:'',
        temporada_ideal:'',
        img_principal:''
      },
      tipos:ItemService.listTiposHotel(),
      categorias:ItemService.listCategoriasHotel(),
      tipos_habitacion:ItemService.listTiposHabitacion(),
      servicios_propiedad:[],
      servicios_habitacion:[],
      nameRules: [
        v => !!v || 'El nombre es requerido',
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

