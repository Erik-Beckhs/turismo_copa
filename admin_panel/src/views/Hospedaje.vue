<template>
  <div class="atractivo">
    <v-card class="pa-10">
    <v-container>
    <v-card-title>
    <v-icon class="text-h4">mdi-bed</v-icon>
    <span class="ms-2 text-h5">{{edicion}} Hospedaje</span>
    </v-card-title>
    <v-card-subtitle class="grey--text text-subtitle-1">
      A continuación ingrese información general del hospedaje, además de los tipos de habitación y los servicios que ofrece.
    </v-card-subtitle>
    <v-divider></v-divider>
    <v-form
    ref="form"
    lazy-validation
    v-model="valid"
    >

    <v-row>
      <v-col cols="12" md="8" lg="8">
        <v-card-title class="text-subtitle-1">Datos del Hospedaje</v-card-title>
        <v-row>
          <v-col cols="12">
          <v-text-field
            v-model="hospedaje.nombre"
            :rules="camposRules"
            label="Nombre"
            outlined
            hide-details="true"
          ></v-text-field>
        </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="hospedaje.direccion"
              hide-details="true"
              label="Direccion"
              :rules="camposRules"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="6">
              <v-text-field
              v-model="hospedaje.telefono"
              label="Telefono"
              outlined
              hide-details="true"
              :rules="camposRules"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
             <v-select
              v-model="hospedaje.categoria"
              :items="categorias"
              label="Categoria"
              hide-details="true"
              outlined
        ></v-select>
          </v-col>
          <v-col cols="6">
            <v-select
              v-model="hospedaje.tipo"
              :items="tipos"
              label="Tipo"
              :rules="camposRules"
              hide-details="true"
              outlined
            ></v-select>
          </v-col>
        </v-row>
         <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="hospedaje.precio_min"
              label="Precio Mínimo"
              hide-details="true"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="6">
                <v-text-field
              v-model="hospedaje.precio_max"
              label="Precio Máximo"
              hide-details="true"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
          <v-text-field
            v-model="hospedaje.titular"
            label="Responsable"
            required
            outlined
          ></v-text-field>
        </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
              <span  class="text-subtitle-1">Información</span>
            <vue-editor v-model="hospedaje.informacion" />
        </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="pa-5" md="4" lg="4">
          <v-col cols="12">
            <v-card-title class="py-0 text-subtitle-1">
                Imagen Principal
            </v-card-title>
             <v-img v-if="view_image_hospedaje!=''" :src="view_image_hospedaje"/>
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
          </v-col>
          <v-divider></v-divider>
          <v-col cols="12" class="text-center">
            <v-card-title class="py-0 text-subtitle-1">
               Galería de Imagenes
            </v-card-title>
            <vue-upload-multiple-image
            @upload-success="uploadImageSuccess"
            @before-remove="beforeRemove"
            @edit-image="editImage"
            :data-images="images_multi"
            idUpload="myIdUpload"
            editUpload="myIdEdit"
            dragText="Arrastrar imágenes"
            browseText="Seleccionar"
            primaryText="Por defecto"
            popupText="Esta imagen se mostrará por defecto"
            markIsPrimaryText="Establecer por defecto"
            >
            </vue-upload-multiple-image>
          </v-col>
      </v-col>
      </v-row>
          <v-card-title class="text-subtitle-1">
            Redes Sociales
          </v-card-title>
        <v-row>
          <v-col cols="12" md="4" lg="4" class="py-0">
          <v-text-field
            v-model="hospedaje.pagina_web"
            label="Pagina Web"
            outlined
            prepend-inner-icon="mdi-web"
          ></v-text-field>
        </v-col>
         <v-col cols="12" md="4" lg="4" class="py-0">
          <v-text-field
            type='number'
            v-model="hospedaje.cel_whatsapp"
            label="Whatsapp"
            outlined
            prepend-inner-icon="mdi-whatsapp"
          ></v-text-field>
        </v-col>
         <v-col cols="12" md="4" lg="4" class="py-0">
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
      <span class="ms-2 text-subtitle-1">Tipos de Habitación</span>
    </v-card-title>

     <v-container class="ps-15">
        <v-flex xs12 md12 class="greyBorder">
            <div class="mx-4">
              <v-layout row wrap>
                    <v-flex v-for="(category,index) in tipos_habitacion" :key="tipos_habitacion[index].tipo_habitacion" xs12 sm6 md3 lg3>
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
      <span class="ms-2 text-subtitle-1">Servicios de la Propiedad</span>
    </v-card-title>

     <v-container class="ps-15">
      <v-flex xs12 md12 class="greyBorder">
            <div class="mr-4 ml-4">
              <v-layout row wrap>
                    <v-flex v-for="(category,index) in servicios_propiedad" :key="servicios_propiedad[index].servicio" xs12 sm6 md3 lg3>
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
      <span class="ms-2 text-subtitle-1">Servicios a la Habitación</span>
    </v-card-title>

     <v-container class="ps-15">
        <v-flex xs12 md12 class="greyBorder">
            <div class="mr-4 ml-4">
              <v-layout row wrap>
                    <v-flex v-for="(category,index) in servicios_habitacion" :key="servicios_habitacion[index].servicio" xs12 sm6 md4 lg4>
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
      <v-btn tile color="primary" class="mx-1 my-1" @click='guardar'>
        <v-icon>mdi-content-save</v-icon>
        <span>Guardar</span>
      </v-btn>
      
        <router-link class="underline-none" to="/hospedajes">   
          <v-btn tile color="secondary" class="mx-1 my-1">     
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
import MultimediaService from '@/services/MultimediaService';
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
      view_image_hospedaje:null,
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
      camposRules: [
        v => !!v || 'Campo obligatorio',
      ],
      files_multimedia:[],
      multimedia_data:[],
      images_multi:[],
      valid:true
    }
  },
  computed:{
 
  },
  mounted(){
    this.clasificarServicios();
    this.id_hospedaje=this.$route.params.id;
    if(this.id_hospedaje!=0){
      this.getHospedaje(this.id_hospedaje);
      this.edicion = 'Editar';
    }
  },
  methods:{
    getMultimediaGaleria(){
      MultimediaService.getMultimedia('hospedajes', this.id_hospedaje).then(response=>{
        this.multimedia_data=response.data;
        for (let index = 0; index < response.data.length; index++) {
          const element_aux = {
            default:index,
            highlight:index,
            name:'img_'+index,
            aux_id:response.data[index].id,
            path:this.$Api_url_media + response.data[index].ruta
          };
          this.images_multi.push(element_aux);
        }
      })
    },
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
        this.hospedaje.img_principal=(Math.random().toString(16).slice(2)) +'.'+ extFile;
        // para la visualizacion convertimos la imagen
        const file = event; 
        this.toBase64(file).then(base64 => {
          this.view_image_hospedaje=base64;
        });
      }else{
        this.view_image_hospedaje='';
      }
    },
    getHospedaje(id){
      HospedajeService.getHospedaje(id).then(response=>{
        this.hospedaje = response.data;
        this.getMultimediaGaleria();
        this.view_image_hospedaje=this.$Api_url_media+this.hospedaje.img_principal;
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
      if(this.$refs.form.validate()){
        var thabitacion_seleccionados = this.tipos_habitacion.filter(element=>element.selected==true);
        var spropiedad_seleccionados = this.servicios_propiedad.filter(element=>element.selected==true);
        var shabitacion_seleccionados = this.servicios_habitacion.filter(element=>element.selected==true);
        var servicios = spropiedad_seleccionados.concat(shabitacion_seleccionados);

        if(!this.view_image_hospedaje){
          this.notification(`La imagen del hospedaje es obligatoria`, 'warning');
          return;
        }

        if(thabitacion_seleccionados.length > 0){
            this.id_hospedaje == 0?this.guardaHospedaje(thabitacion_seleccionados, servicios):this.editaHospedaje(thabitacion_seleccionados, servicios);
        }
        else{
          this.notification("Debe elegir al menos un tipo de habitación", "warning");
        }
      }
      else{
        this.notification("Existen campos obligatorios","warning");
      }  
    },
    guardaMultimedia(id_hospedaje, nombre_hospedaje){
      for (const key in this.files_multimedia) {
          let dataimagen=this.files_multimedia[key];
          let multimedia={
            "id_padre": id_hospedaje,
            "nombre": nombre_hospedaje,
            "ruta": "",
            "tipo": "image",
            "pertenece_a": "hospedajes"
          };
          MultimediaService.saveMultimedia(multimedia).then(response=>{
            MultimediaService.saveImage(response.data.id, dataimagen).then(response=>{
              console.log(response.data);
            })
          })
      }
    },
    guardaImagenHospedaje(id_hospedaje, dataimagen){
      HospedajeService.saveImage(id_hospedaje, dataimagen).then(response=>{
        this.view_image_hospedaje='';
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
    editaHospedaje(list_hab, servicios){
      let dataimagen=this.FormDataImage('file_imagen_principal', this.hospedaje.img_principal);
      if(dataimagen!=null) this.hospedaje.img_principal="";
      HospedajeService.editHospedaje(this.hospedaje).then(response=>{
        if(dataimagen!=null) {this.guardaImagenHospedaje(this.id_hospedaje, dataimagen);}
        this.guardaMultimedia(this.id_hospedaje, response.data.nombre);
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
      let dataimagen=this.FormDataImage('file_imagen_principal', this.hospedaje.img_principal);
      //console.log(dataimagen);
      this.hospedaje.img_principal="";
      HospedajeService.guardaHospedaje(this.hospedaje).then(response=>{
        let id_hospedaje = response.data.id;
        this.guardaMultimedia(id_hospedaje, response.data.nombre);
        list_hab.forEach(element => {
          HospedajeService.saveTHabitacion(id_hospedaje, element);
        });
        list_servicios.forEach(element => {
          HospedajeService.saveServicios(id_hospedaje, element);
        });
        if(dataimagen!=null) {
          this.guardaImagenHospedaje(id_hospedaje, dataimagen);
          }
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
      this.files_multimedia.push(formData);
    },
    beforeRemove (index, done, fileList) {
      console.log('Eliminar', index, fileList)
      if (typeof fileList[index].aux_id != 'undefined') {
        MultimediaService.deleteMultimedia(fileList[index].aux_id).then(response=>{
          console.log(response.data);
          done()
        })
      }else{
        if(this.multimedia_data.length==0){
          this.files_multimedia.splice(index, 1);
          console.log('eliminados xs', this.files_multimedia);
        }
        done()
      }
    },
    editImage(formData, index, fileList) {
      console.log('edit data', formData, index, fileList);
      if(this.multimedia_data.length!=0){
        if (typeof fileList[index].aux_id != 'undefined') {
          MultimediaService.saveImage(fileList[index].aux_id, formData).then(response=>{
            console.log(response.data);
          })
        }
      }else{
        this.files_multimedia[index]=formData;
      }
    },
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

