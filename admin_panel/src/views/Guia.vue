<template>
  <div class="guia">
    <v-card class="pa-10">
    <v-container>
    <v-card-title class="text-h5">
      <v-icon>mdi-account</v-icon>
      <span class="ms-2 ">{{estado_guia}} Guía de Turismo</span>
    </v-card-title>
    <v-card-subtitle class="grey--text">
      A continuación ingrese información del guía de turismo, su imagen principal, el o los tipos a los cuales pertenece y los idiomas que habla
    </v-card-subtitle>
    <v-divider class="my-2"></v-divider>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    >
    <v-row>
      <v-col cols="8">
        <v-card-title class="text-subtitle-1">Información</v-card-title>
        <v-row>
            <v-col cols="6">
            <v-text-field
                v-model="guia.nombre"
                :rules="nameRules"
                label="Nombre"
                required
                outlined
            ></v-text-field>
            </v-col>
            <v-col cols="6">
            <v-text-field
                v-model="guia.apellidos"
                label="Apellidos"
                required
                outlined
                :rules="nameRules"
            ></v-text-field>
            </v-col>
        </v-row>
         <v-col cols="12" class="pa-0">
          <v-text-field
            v-model="guia.direccion"
            label="Dirección"
            required
            outlined
            :rules="nameRules"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="pa-0">
          <v-text-field
            type="email"
            v-model="guia.correo"
            label="Correo Electrónico"
            required
            outlined
          ></v-text-field>
        </v-col>
          <v-row>
            <v-col cols="6">
            <v-text-field
                v-model="guia.facebook"
                label="Facebook"
                required
                outlined
            ></v-text-field>
            </v-col>
            <v-col cols="6">
            <v-text-field
                type="number"
                v-model="guia.whatsapp"
                label="WhatsApp"
                required
                outlined
                :rules="nameRules"
            ></v-text-field>
            </v-col>
        </v-row>
      </v-col>
      <v-col cols="4" class="pa-5">
          <v-card-title class="text-subtitle-1 py-0">
            Imagen
          </v-card-title>
          <v-col cols="12">
            <v-img v-if="view_image_guia!=''" :src="view_image_guia"/>
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
      </v-col>
      <v-col cols="12" class="px-0 pt-0 pb-5">
            <v-card-title class="text-subtitle-1">Acerca del guia</v-card-title>
            <vue-editor v-model="guia.sobre_mi" />
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-card-title class="text-subtitle-1">Tipos al que corresponde</v-card-title>
    <v-container class="ps-15">
        <v-flex xs12 md12 class="greyBorder">
            <div class="mx-4">
              <v-layout row wrap>
                    <v-flex v-for="(category,index) in tipos" :key="tipos[index].tipo" xs4>
                      <v-checkbox light :label="category.tipo" v-model="category.selected" class="mt-0">
                      </v-checkbox>
                    </v-flex>
              </v-layout>
            </div>
      </v-flex>
     </v-container>
     <v-divider></v-divider>
     <v-card-title class="text-subtitle-1">Idiomas del guía</v-card-title>
        <v-container class="ps-15">
            <v-flex xs12 md12 class="greyBorder">
                <div class="mx-4">
                <v-layout row wrap>
                        <v-flex v-for="(category,index) in idiomas" :key="idiomas[index].idioma" xs4>
                        <v-checkbox light :label="category.idioma" v-model="category.selected" class="mt-0">
                        </v-checkbox>
                        </v-flex>
                </v-layout>
                </div>
        </v-flex>
        </v-container>

    <v-col cols="12" class="text-right">
      <v-btn tile color="primary" class="mx-1" @click="guardar">
        <v-icon>mdi-content-save</v-icon>
        <span>Guardar</span>
      </v-btn>
      <router-link to="/guias" class="underline-none">
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
import GuiaService from '@/services/GuiaService';
import { VueEditor } from "vue2-editor";

import ImgPrincipal from '@/components/ImgPrincipal.vue'

export default {
  name: 'Guia', 
  components: {
    ImgPrincipal,
    VueEditor
  }, 
  data(){
    return{
      search: '',
      estado_img:0,
      estado_guia:'Nuevo',
      id_guia:0,
      view_image_guia:null,
      guia:{
        nombre:'',
        apellidos:'',
        correo:'',
        direccion:'',
        img:'',
        facebook:'',
        whatsapp:'',
        sobre_mi:''
      },
      idiomas:ItemService.listIdiomas(),
      tipos:ItemService.listTipoGuias(),
      nameRules: [
        v => !!v || 'Campo requerido',
      ],
      valid:true
    }
  },
  mounted(){
    this.id_guia = this.$route.params.id;
      if(this.id_guia != 0){
        this.estado_guia = 'Editar';
        this.getGuia(this.id_guia);
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
        this.guia.img=(Math.random().toString(16).slice(2)) +'.'+ extFile;
        // para la visualizacion convertimos la imagen
        const file = event; 
        this.toBase64(file).then(base64 => {
          this.view_image_guia=base64;
        });
      }else{
        this.view_image_guia='';
      }
    },
    getGuia(id){
      GuiaService.getGuia(id).then(response=>{
        this.guia = response.data;
        this.view_image_guia=this.$Api_url_media+this.guia.img;
        this.getIdiomas(id);
        this.getTipos(id);
      })
    },
    getIdiomas(id){
      console.log('saludo');
        GuiaService.getIdiomas(id).then(response=>{
          let idiomas_seleccionados=response.data;
          console.log(response.data);
          this.idiomas.forEach(element=>{
            idiomas_seleccionados.forEach(idiomax=>{
              if(idiomax.idioma == element.idioma){
                element.selected = true;
              }
            })
          })
        })
    },
    getTipos(id){
        GuiaService.getTipos(id).then(response=>{
          let tipos_seleccionados=response.data;
          this.tipos.forEach(element=>{
            tipos_seleccionados.forEach(tipo=>{
              if(tipo.tipo == element.tipo){
                element.selected = true;
              }
            })
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
    guardar(){
      if(this.$refs.form.validate()){
        var idiomas_seleccionados = this.idiomas.filter(element=>element.selected==true);
        var tipos_seleccionados = this.tipos.filter(element=>element.selected==true);
        if(!this.guia.sobre_mi){
          this.notification(`El campo "Acerca del Guía" no puede ir vacio`, 'warning');
          return;
        }
        if(!this.view_image_guia){
          this.notification(`La imagen del Guía es obligatoria`, 'warning');
          return;
        }
        if(tipos_seleccionados.length > 0){
          if(idiomas_seleccionados.length > 0){
            this.id_guia!=0?this.editaGuia(idiomas_seleccionados, tipos_seleccionados):this.guardaGuia(idiomas_seleccionados, tipos_seleccionados);
          }
          else{
            this.notification('Debe seleccionar al menos un idioma', 'warning');
          }
        }
        else{
          this.notification('Debe seleccionar al menos un tipo de guía', 'warning');
        }
      }
      else{
        this.notification('Existen campos obligatorios', 'warning');
      }
      //TODO: validacion de campos obligatorios
      
    },
    editaGuia(idiomas, tipos){
      let dataimagen=this.FormDataImage('file_imagen_principal', this.guia.img);
      if(dataimagen!=null) this.guia.img="";
      GuiaService.editaGuia(this.guia).then(response=>{
        if(dataimagen!=null) {this.guardaImagenGuia(this.id_guia, dataimagen);}
        GuiaService.deleteAllTipos(this.id_guia).then(()=>{
          tipos.forEach(element => {
            GuiaService.saveTipos(this.id_guia, element)
          });
        })
        GuiaService.deleteAllIdiomas(this.id_guia).then(()=>{
          idiomas.forEach(element => {
            GuiaService.saveIdiomas(this.id_guia, element);
          });
        })
        this.notification("La informacion del guía fue editada de manera exitosa", "success");
        this.$router.replace('/guias');
      })
    },
    guardaGuia(idiomas, tipos){
      // console.log(this.guia);
      // console.log(idiomas);
      // console.log(tipos);
      // return;
      let dataimagen=this.FormDataImage('file_imagen_principal', this.guia.img);
      this.guia.img="";
      GuiaService.saveGuia(this.guia).then(response=>{
        var id_guia = response.data.id;
        if(dataimagen!=null) {this.guardaImagenGuia(id_guia, dataimagen);}
        tipos.forEach(element => {
          GuiaService.saveTipos(id_guia, element);
        });
        idiomas.forEach(element => {
          GuiaService.saveIdiomas(id_guia, element);
        });
        this.notification("La información del guía turistico fue creada de manera exitosa", 'success');
        this.$router.replace('/guias');
      })
    },
    FormDataImage(id_element, nombre_archivo){
      const fileinput= document.getElementById(id_element);
      if(fileinput.files.length!=0){
        const formData = new FormData();
        formData.append('file', fileinput.files[0], nombre_archivo);
        return formData;
      }
      else{
        return null;
      }
    },
    guardaImagenGuia(id_guia, dataimagen){
      GuiaService.saveImage(id_guia, dataimagen).then(()=>{
        this.view_image_guia='';
      })
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

