<template>
  <div class="atractivo">
    <v-card class="pa-10">
    <v-container>
    <v-card-title>
    <v-icon>mdi-bank</v-icon>
      <span class="ms-2 text-h5">{{edicion}} Atractivo</span>
    </v-card-title>
    <v-card-subtitle class="grey--text">
      A continuación ingrese información general del atractivo, la información a solicitar cambiará según la categoría elegida
    </v-card-subtitle>
    <v-divider></v-divider>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    >
    <v-row>
      <v-col cols="8">
        <v-card-title class="text-subtitle-1">Datos del Atractivo</v-card-title>
        <v-row>
          <v-col cols="12" class="px-3">
            <v-select
            v-model="atractivo.categoria"
            :items="categorias"
            label="Categoria"
            :rules="camposRules"
            hide-details="true"
            outlined
        >
        </v-select>
        </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="px-3">
          <v-text-field
            v-model="atractivo.nombre"
            :rules="camposRules"
            hide-details="true"
            outlined
            label='Nombre'
          >
          </v-text-field>
        </v-col>
        </v-row>
       <v-row>
         <v-col cols="12" class="px-3">
          <v-text-field
            v-model="atractivo.descripcion"
            label="Descripción"
            hide-details="true"
            outlined
          ></v-text-field>
        </v-col>
       </v-row>
        <v-row>
          <v-col cols="6" class="px-3">
            <v-text-field
              v-model="atractivo.ubicacion"
              :rules="camposRules"
              hide-details="true"
              outlined
              label="Ubicación"
            >
            </v-text-field>
          </v-col>
          <v-col cols="6" class="px-3">
            <v-select
              v-model="atractivo.comunidad"
              :items="comunidades"
              :rules="camposRules"
              hide-details="true"
              outlined
              label="Comunidad"
            >
            </v-select>
          </v-col>
        </v-row>
        <v-row v-if="atractivo.categoria != 'Actividades Que Hacer' && atractivo.categoria != 'Eventos Programados'">
          <v-col cols="12" class="px-3">
            <v-text-field
              v-model="atractivo.como_llegar"
              label="Cómo Llegar"
              outlined
              hide-details="true"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row v-if="atractivo.categoria != 'Actividades Que Hacer' && atractivo.categoria != 'Eventos Programados'">
          <v-col cols="12" class="px-3">
               <v-select
                v-model="atractivo.jerarquia"
                :items="jerarquias"
                label="Jerarquía"
                hide-details="true"
                outlined
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="px-3">
            <v-text-field
              v-model="atractivo.fecha"
              :rules="camposRules"
              hide-details="true"
              outlined
              type="date"
              label="Fecha de Evento Programado"
              v-if="atractivo.categoria == 'Eventos Programados'"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row v-if="atractivo.categoria != 'Actividades Que Hacer' && atractivo.categoria != 'Eventos Programados'">
         <v-col cols="6" class="px-3">
           <v-select
              v-model="atractivo.tipo"
              :items="tipos_atractivo"
              :rules="camposRules"
              label="Tipo"
              hide-details="true"
              outlined
          >
          </v-select>
        </v-col>
          <v-col cols="6" class="px-3">
            <v-select
              v-model="atractivo.subtipo"
              :items="subtipos_atractivo"
              label="Sub Tipo"
              hide-details="true"
              outlined
          ></v-select>
          </v-col>
        </v-row>
        <v-col cols="12" class="text-subtitle-1">
            <v-card-title class="text-subtitle-1">Información</v-card-title>
            <vue-editor v-model="atractivo.informacion" />
        </v-col>
      </v-col>
      <v-col cols="4" class="pa-5" style="border-left:1px solid #efefef;">
          <v-col cols="12">
            <v-card-title class="py-0 text-subtitle-1">
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
            multiple
            :rename="rename_file"
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
    </v-form>
    </v-container>
  </v-card>
  </div>
</template>
<script>
/* eslint-disable vue/no-unused-components */

//import axios from 'axios';
import ItemService from '@/services/ItemService';
import MultimediaService from '@/services/MultimediaService';
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
      images_multi:[],
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
        img_principal:'',
        tipo:'',
        subtipo:'',
        descripcion:''
      },
      files_multimedia:[],
      multimedia_data:[],
      comunidades:ItemService.listComunidades(),
      categorias:ItemService.listCategoriasAtractivos(),
      articulos:ItemService.listArticulos(),
      jerarquias:['I', 'II', 'III', 'IV', 'V'],
      tipos_atractivo:ItemService.listTipoAtractivos(),
      subtipos_atractivo:ItemService.listSubTipoAtractivos(),
      camposRules: [
        v => !!v || 'El campo es obligatorio',
      ],
      valid: true,
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
          this.getMultimediaGaleria();
          this.atractivo = response.data;
          if(this.atractivo.fecha){
            this.atractivo.fecha = this.ordenaFecha(this.atractivo.fecha);
          }
          this.view_image_atractivo=this.$Api_url_media+this.atractivo.img_principal;
          AtractivoService.getArticulosAtractivo(id).then(response=>{
            if(response.data.length > 0){
              this.load_articulos(response.data);
              
            }
          }).catch(error=>console.log(error));
        })
    },
    ordenaFecha(fecha_atractivo){
      let fecha = new Date(fecha_atractivo);
      let dia = ('0'+(fecha.getDate()+1)).slice(-2);
      let mes = ('0'+(fecha.getMonth()+1)).slice(-2);
      let anio = fecha.getFullYear();
      return `${anio}-${mes}-${dia}`;
     },
    getMultimediaGaleria(){
      MultimediaService.getMultimedia('atractivos', this.id_atractivo).then(response=>{
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
     rename_file (file) {
      return file.name + '-' + Date.now()
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
    guardaMultimedia(id_atractivo, nombre_atractivo){
      for (const key in this.files_multimedia) {
          let dataimagen=this.files_multimedia[key];
          let multimedia={
            "id_padre": id_atractivo,
            "nombre": nombre_atractivo,
            "ruta": "",
            "tipo": "image",
            "pertenece_a": "atractivos"
          };
          MultimediaService.saveMultimedia(multimedia).then(response=>{
            MultimediaService.saveImage(response.data.id, dataimagen).then(response=>{
              console.log(response.data);
            })
          })
      }
    },
    guardar(){
      if(this.$refs.form.validate()){
        if(this.view_image_atractivo){
          if(this.atractivo.informacion){
            var articulos_seleccionados = this.articulos.filter(element=>element.selected==true);
            this.id_atractivo == 0?this.guardaAtractivo(articulos_seleccionados):this.editaAtractivo(articulos_seleccionados);
          }
          else{
            this.notification("La información del atractivo es obligatoria", "warning");
          }
        }
        else{
          this.notification("Debe elegir la imagen principal del atractivo", "warning");
        }
      }
      else{
        this.notification('Existen campos obligatorios', 'warning');
      }
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
    guardaAtractivo(articulos){
      console.log(this.atractivo);
      let dataimagen=this.FormDataImage('file_imagen_principal', this.atractivo.img_principal);
      // console.log(dataimagen);
      // return;
      this.atractivo.img_principal="";
      console.log('formadata', dataimagen);
      AtractivoService.saveAtractivo(this.atractivo).then(response=>{
        var id_atractivo = response.data.id;
        if(dataimagen!=null) {this.guardaImagenAtractivo(id_atractivo, dataimagen);}
        this.guardaMultimedia(id_atractivo, response.data.nombre);
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
      if(dataimagen!=null) this.atractivo.img_principal="";
      AtractivoService.editAtractivo(this.id_atractivo, this.atractivo).then((response)=>{
        if(response){
          if(dataimagen!=null) {this.guardaImagenAtractivo(this.id_atractivo, dataimagen);}
          this.guardaMultimedia(this.id_atractivo, response.data.nombre);
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

