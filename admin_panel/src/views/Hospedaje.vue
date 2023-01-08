<template>
  <div class="atractivo">
    <v-card class="pa-10">
    <v-container>
    <v-card-title>
    <v-icon>mdi-bed</v-icon>
    <span class="ms-2">{{edicion}} Hospedaje</span>
    </v-card-title>
    <v-card-subtitle class="grey--text">
      A continuación ingrese información general del hospedaje, además de los tipos de habitación y los servicios que ofrece.
    </v-card-subtitle>
    <v-divider></v-divider>
    <v-row>
      <v-col cols="8">
        <v-card-title>Datos del Hospedaje</v-card-title>
        <v-col cols="12" class="pa-0">
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
              label="Telefono"
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
              v-model="hospedaje.precio_min"
              label="Precio Mínimo"
              required
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="6" class="px-3 py-0">
                <v-text-field
              v-model="hospedaje.precio_max"
              label="Precio Máximo"
              required
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-col cols="12" class="pa-0">
          <v-text-field
            v-model="hospedaje.titular"
            label="Responsable"
            required
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="px-0 py-0">
              <v-card-title>Información</v-card-title>
            <vue-editor v-model="hospedaje.informacion" />
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
            <v-img v-show="estado_img==0 && hospedaje.img_principal==''" src="@/assets/not_found.png" />
             <v-img v-if="estado_img==0" :src="hospedaje.img_principal"/>
            <ImgPrincipal @estado="estado_img=$event" @imagen="hospedaje.img_principal=$event" />
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
            v-model="hospedaje.pagina_web"
            label="Pagina Web"
            outlined
            prepend-inner-icon="mdi-web"
          ></v-text-field>
        </v-col>
         <v-col cols="4" class="py-0">
          <v-text-field
            v-model="hospedaje.cel_whatsapp"
            label="Whatsapp"
            outlined
            prepend-inner-icon="mdi-whatsapp"
          ></v-text-field>
        </v-col>
         <v-col cols="4" class="py-0">
          <v-text-field
            v-model="hospedaje.facebook"
            label="Facebook"
            outlined
            prepend-inner-icon="mdi-facebook"
          ></v-text-field>
        </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="my-2">
    <v-card-title class="mb-4">
      <v-icon>mdi-bed</v-icon>
      <span class="ms-2">Tipos de Habitación</span>
    </v-card-title>

     <v-container class="ps-15">
        <v-flex xs12 md12 class="greyBorder">
            <div class="mx-4">
              <v-layout row wrap>
                    <v-flex v-for="(category,index) in tipos_habitacion" :key="tipos_habitacion[index].tipo_habitacion" xs3>
                      <v-checkbox light :label="category.tipo_habitacion" v-model="category.selected" class="mt-0">
                      </v-checkbox>
                    </v-flex>
              </v-layout>
            </div>
      </v-flex>
     </v-container>
      </v-row>
      <v-divider></v-divider>
    <v-row class="my-2">
    <v-card-title class="mb-4">
      <v-icon>mdi-coffee</v-icon>
      <span class="ms-2">Servicios de la Propiedad</span>
    </v-card-title>

     <v-container class="ps-15">
      <v-flex xs12 md12 class="greyBorder">
            <div class="mr-4 ml-4">
              <v-layout row wrap>
                    <v-flex v-for="(category,index) in servicios_propiedad" :key="servicios_propiedad[index].servicio" xs3>
                      <v-checkbox light :label="category.servicio" v-model="category.selected" class="mt-0">
                      </v-checkbox>
                    </v-flex>
              </v-layout>
            </div>
      </v-flex>
     </v-container>
      </v-row>
      <v-divider></v-divider>
    <v-row class="my-2">
    <v-card-title class="mb-4">
      <v-icon>mdi-book-music</v-icon>
      <span class="ms-2">Servicios a la Habitación</span>
    </v-card-title>

     <v-container class="ps-15">
        <v-flex xs12 md12 class="greyBorder">
            <div class="mr-4 ml-4">
              <v-layout row wrap>
                    <v-flex v-for="(category,index) in servicios_habitacion" :key="servicios_habitacion[index].servicio" xs4>
                      <v-checkbox light :label="category.servicio" v-model="category.selected" class="mt-0">
                      </v-checkbox>
                    </v-flex>
              </v-layout>
            </div>
      </v-flex>
     </v-container>
    </v-row>
    <v-divider></v-divider>
    <v-col cols="12" class="text-right mt-5">
      <v-btn tile color="primary" class="mx-1" @click='guardar'>
        <v-icon>mdi-content-save</v-icon>
        <span>Guardar</span>
      </v-btn>
      
        <router-link class="underline-none" to="/hospedajes">   
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
import HospedajeService from '@/services/HospedajeService';
import VueUploadMultipleImage from 'vue-upload-multiple-image';
import { VueEditor } from "vue2-editor";

import ImgPrincipal from '@/components/ImgPrincipal.vue'

export default {
  name: 'Hospedaje', 
  components: {
    VueUploadMultipleImage,
    ImgPrincipal,
    VueEditor
  }, 
  data(){
    return{
      search: '',
      edicion:'Nuevo',
      estado_img:0,
      images:[],
      id_hospedaje:0,
      hospedaje:{
        nombre: "",
        precio_max: 0,
        precio_min: 0,
        categoria: "",
        direccion: "",
        pagina_web: "",
        telefono: "",
        facebook: "",
        cel_whatsapp: "",
        informacion: "",
        img_principal: "",
        titular: "",
        tipo: ""
      },
      tipos:ItemService.listTiposHotel(),
      categorias:ItemService.listCategoriasHotel(),
      tipos_habitacion:ItemService.listTiposHabitacion(),
      servicios:ItemService.listServiciosHospedaje(),
      servicios_propiedad:[],
      servicios_habitacion:[],
      nameRules: [
        v => !!v || 'El nombre es requerido',
      ],
    }
  },
  computed:{
 
  },
  mounted(){
    this.clasificarServicios();
    this.id_hospedaje=this.$route.params.id;
    if(this.id_hospedaje!=0){
      this.getHospedaje(this.id_hospedaje);
    }
  },
  methods:{
    getHospedaje(id){
      HospedajeService.getHospedaje(id).then(response=>{
        this.hospedaje = response.data;
        this.getTiposHabitacion(id);
        this.getServicios(id);
      })
    },
    getTiposHabitacion(id){
      HospedajeService.getTiposHabitacion(id).then(response=>{
          let tipos_seleccionados=response.data;
          this.tipos_habitacion.forEach(element=>{
            tipos_seleccionados.forEach(tipo=>{
              if(tipo.tipo_habitacion == element.tipo_habitacion){
                element.selected = true;
              }
            })
          })
        })
    },
    getServicios(id){
       HospedajeService.getServicios(id).then(response=>{
          let servicios_seleccionados=response.data;

          this.servicios.forEach(element=>{
            servicios_seleccionados.forEach(servicio=>{
              if(servicio.servicio == element.servicio){
                element.selected = true;
              }
            })
          })

          this.clasificarServicios();

        })
    },
    guardar(){
      var thabitacion_seleccionados = this.tipos_habitacion.filter(element=>element.selected==true);
      var spropiedad_seleccionados = this.servicios_propiedad.filter(element=>element.selected==true);
      var shabitacion_seleccionados = this.servicios_habitacion.filter(element=>element.selected==true);
      var servicios = spropiedad_seleccionados.concat(shabitacion_seleccionados);

      if(this.id_hospedaje != 0){
        this.editaHospedaje(thabitacion_seleccionados, servicios);
      }
      else{
        this.guardaHospedaje(thabitacion_seleccionados, servicios);
      }
    },
    editaHospedaje(list_hab, servicios){
      HospedajeService.editHospedaje(this.hospedaje).then(()=>{
        HospedajeService.deleteAllTiposHabitacion(this.id_hospedaje).then(()=>{
          list_hab.forEach(element => {
            HospedajeService.saveTHabitacion(this.id_hospedaje, element)
          });
        })
        HospedajeService.deleteAllServices(this.id_hospedaje).then(()=>{
          servicios.forEach(element => {
            HospedajeService.saveServicios(this.id_hospedaje, element);
          });
        })
        this.notification('El establecimiento de hospedaje ha sido modificado de manera correcta', 'success');
        this.$router.replace('/hospedajes');
      })
    },
    guardaHospedaje(list_hab, list_servicios){
      HospedajeService.guardaHospedaje(this.hospedaje).then(response=>{
        let id_hospedaje = response.data.id;
        list_hab.forEach(element => {
          HospedajeService.saveTHabitacion(id_hospedaje, element);
        });
        list_servicios.forEach(element => {
          HospedajeService.saveServicios(id_hospedaje, element);
        });
        this.notification('El establecimiento de hospedaje ha sido registrado de manera correcta', 'success');
        this.$router.replace('/hospedajes');
        })
    },
    clasificarServicios(){
        this.servicios_propiedad = this.servicios.filter(element=>(element.tipo_servicio == 'propiedad'));
        this.servicios_habitacion = this.servicios.filter(element=>(element.tipo_servicio == 'habitacion'));
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
  .underline-none{
    text-decoration: none;
  }
</style>

