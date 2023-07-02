<template>
  <div class="servicio">
    <v-card class="pa-10">
    <v-container>
    <v-card-title>
    <v-icon>mdi-star</v-icon>
    <span class="ms-2 text-h5">{{edicion}} Servicio</span>
    </v-card-title>
    <v-card-subtitle class="grey--text">
      A continuación ingrese información general del servicio, además de los horarios de atención y las formas de pago.
    </v-card-subtitle>
    <v-divider></v-divider>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    >
    <v-row>
      <v-col cols="12" md="8" lg="8">
        <v-card-title class="text-subtitle-1">Datos del Servicio</v-card-title>
        <v-row>
          <v-col cols="12">
            <v-text-field
                v-model="servicio.nombre"
                :rules="camposRules"
                label="Nombre"
                outlined
                hide-details="true"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
                v-model="servicio.referencia"
                label="Referencia"
                outlined
                hide-details="true"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" lg="6">
            <v-select
              v-model="servicio.tipo"
              :items="tipos"
              label="Tipo de Servicio"
              :rules="camposRules"
              hide-details="true"
              outlined
            ></v-select>
          </v-col>
          <v-col cols="12" md="6" lg="6">
            <v-select
              v-model="servicio.ubicacion"
              :items="comunidades"
              label="Ubicación"
              :rules="camposRules"
              hide-details="true"
              outlined
            ></v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6" lg="6">
            <v-text-field
              v-model="servicio.direccion"
              hide-details="true"
              label="Direccion"
              :rules="camposRules"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6" lg="6">
              <v-text-field
              v-model="servicio.telefono"
              label="Telefono"
              :rules="camposRules"
              outlined
              hide-details="true"
            ></v-text-field>
          </v-col>
            <v-col cols="12">
              <v-card-title class="text-subtitle-1">Descripcion de Producto o Servicio</v-card-title>
              <vue-editor v-model="servicio.descripcion" />
            </v-col>

        </v-row>
      </v-col>
      <v-col cols="12" md="4" lg="4" class="pa-5">
          <v-col cols="12">
            <v-card-title class="py-0 text-subtitle-1">
                Imagen Principal
            </v-card-title>
             <v-img v-if="view_image_servicio!=''" :src="view_image_servicio"/>
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
            v-model="servicio.pagina_web"
            label="Pagina Web"
            outlined
            prepend-inner-icon="mdi-web"
          ></v-text-field>
        </v-col>
         <v-col cols="12" md="4" lg="4" class="py-0">
          <v-text-field
            v-model="servicio.whatsapp"
            label="Whatsapp"
            outlined
            prepend-inner-icon="mdi-whatsapp"
          ></v-text-field>
        </v-col>
         <v-col cols="12" md="4" lg="4" class="py-0">
          <v-text-field
            v-model="servicio.facebook"
            label="Facebook"
            outlined
            prepend-inner-icon="mdi-facebook"
          ></v-text-field>
        </v-col>
    </v-row>
    
    <v-divider></v-divider>
    <v-row class="my-2">
    <v-card-title class="mb-4">
      <v-icon>mdi-cash-multiple</v-icon>
      <span class="ms-2 text-subtitle-1">Formas de Pago</span>
    </v-card-title>

     <v-container class="ps-15">
        <v-flex xs12 md12 class="greyBorder">
            <div class="mx-4">
              <v-layout row wrap>
                    <v-flex v-for="(category,index) in formas_pago" :key="formas_pago[index].pago" xs12 sm6 md3 lg3>
                      <v-checkbox light :label="category.pago" v-model="category.selected" class="mt-0">
                      </v-checkbox>
                    </v-flex>
              </v-layout>
            </div>
      </v-flex>
     </v-container>
      </v-row>
      <v-divider></v-divider>

    <div class="my-2">
      <v-row>
        <v-card-title class="mb-4">
        <v-icon>mdi-clock-time-six-outline</v-icon>
        <span class="ms-2 text-subtitle-1">Horarios de Atención</span>
        </v-card-title>
      </v-row>
      <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Día
            </th>
            <th class="text-left">
              Abierto
            </th>
            <th class="text-left">
              Hora de Apertura
            </th>
            <th class="text-left">
              Hora de Cierre
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
          >
            <td>Lunes</td>
            <td>
            <v-checkbox
              class="ma-0 pa-0"
              v-model="horarios.estado_lunes"
              color="success"
              hide-details
            ></v-checkbox>
            </td>
            <td>
              <v-menu
              ref="menu"
              v-model="menu_lunes_apertura"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="horarios.lunes_apertura"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="horarios.lunes_apertura"
                  label="Hora"
                  prepend-icon="mdi-clock-time-four-outline"
                  outlined
                  dense
                  :disabled="!horarios.estado_lunes"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  class="mt-5"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="menu_lunes_apertura"
                v-model="horarios.lunes_apertura"
                full-width
                @click:minute="$refs.menu.save(horarios.lunes_apertura)"
              ></v-time-picker>
            </v-menu>
            </td>

            <td>
              <v-menu
              ref="menu2"
              v-model="menu_lunes_cierre"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="horarios.lunes_cierre"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs:attrs }">
                <v-text-field
                  v-model="horarios.lunes_cierre"
                  class="mt-5"
                  label="Hora"
                  prepend-icon="mdi-clock-time-four-outline"
                  outlined
                  dense
                  :disabled="!horarios.estado_lunes"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="menu_lunes_cierre"
                v-model="horarios.lunes_cierre"
                full-width
                @click:minute="$refs.menu2.save(horarios.lunes_cierre)"
              ></v-time-picker>
            </v-menu>
            </td>
          </tr>
          <tr
          >
            <td>Martes</td>
            <td>
              <v-checkbox
                class="ma-0 pa-0"
                v-model="horarios.estado_martes"
                color="success"
                hide-details
              ></v-checkbox>
            </td>
            <td>
              <v-menu
              ref="menu3"
              v-model="menu_martes_apertura"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="horarios.martes_apertura"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs:attrs }">
                <v-text-field
                  v-model="horarios.martes_apertura"
                  class="mt-5"
                  label="Hora"
                  prepend-icon="mdi-clock-time-four-outline"
                  outlined
                  dense
                  :disabled="!horarios.estado_martes"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="menu_martes_apertura"
                v-model="horarios.martes_apertura"
                full-width
                @click:minute="$refs.menu3.save(horarios.martes_apertura)"
              ></v-time-picker>
            </v-menu>
            </td>
            <td>
            <v-menu
              ref="menu4"
              v-model="menu_martes_cierre"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="horarios.martes_cierre"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs:attrs }">
                <v-text-field
                  v-model="horarios.martes_cierre"
                  class="mt-5"
                  label="Hora"
                  prepend-icon="mdi-clock-time-four-outline"
                  outlined
                  dense
                  :disabled="!horarios.estado_martes"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="menu_martes_cierre"
                v-model="horarios.martes_cierre"
                full-width
                @click:minute="$refs.menu4.save(horarios.martes_cierre)"
              ></v-time-picker>
            </v-menu>
            </td>
          </tr>

          <tr
          >
            <td>Miercoles</td>
            <td>
              <v-checkbox
                class="ma-0 pa-0"
                v-model="horarios.estado_miercoles"
                color="success"
                hide-details
              ></v-checkbox>
            </td>
            <td>
              <v-menu
              ref="menu5"
              v-model="menu_miercoles_apertura"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="horarios.miercoles_apertura"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs:attrs }">
                <v-text-field
                  v-model="horarios.miercoles_apertura"
                  class="mt-5"
                  label="Hora"
                  prepend-icon="mdi-clock-time-four-outline"
                  outlined
                  dense
                  :disabled="!horarios.estado_miercoles"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="menu_miercoles_apertura"
                v-model="horarios.miercoles_apertura"
                full-width
                @click:minute="$refs.menu5.save(horarios.miercoles_apertura)"
              ></v-time-picker>
            </v-menu>
            </td>
            <td>
            <v-menu
              ref="menu6"
              v-model="menu_miercoles_cierre"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="horarios.miercoles_cierre"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs:attrs }">
                <v-text-field
                  v-model="horarios.miercoles_cierre"
                  class="mt-5"
                  label="Hora"
                  prepend-icon="mdi-clock-time-four-outline"
                  outlined
                  dense
                  :disabled="!horarios.estado_miercoles"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="menu_miercoles_cierre"
                v-model="horarios.miercoles_cierre"
                full-width
                @click:minute="$refs.menu6.save(horarios.miercoles_cierre)"
              ></v-time-picker>
            </v-menu>
            </td>
          </tr>
          <tr
          >
            <td>Jueves</td>
            <td>
              <v-checkbox
                class="ma-0 pa-0"
                v-model="horarios.estado_jueves"
                color="success"
                hide-details
              ></v-checkbox>
            </td>
            <td>
              <v-menu
              ref="menu7"
              v-model="menu_jueves_apertura"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="horarios.jueves_apertura"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs:attrs }">
                <v-text-field
                  v-model="horarios.jueves_apertura"
                  class="mt-5"
                  label="Hora"
                  prepend-icon="mdi-clock-time-four-outline"
                  outlined
                  dense
                  :disabled="!horarios.estado_jueves"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="menu_jueves_apertura"
                v-model="horarios.jueves_apertura"
                full-width
                @click:minute="$refs.menu7.save(horarios.jueves_apertura)"
              ></v-time-picker>
            </v-menu>
            </td>
            <td>
            <v-menu
              ref="menu8"
              v-model="menu_jueves_cierre"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="horarios.jueves_cierre"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs:attrs }">
                <v-text-field
                  v-model="horarios.jueves_cierre"
                  class="mt-5"
                  label="Hora"
                  prepend-icon="mdi-clock-time-four-outline"
                  outlined
                  dense
                  :disabled="!horarios.estado_jueves"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="menu_jueves_cierre"
                v-model="horarios.jueves_cierre"
                full-width
                @click:minute="$refs.menu8.save(horarios.jueves_cierre)"
              ></v-time-picker>
            </v-menu>
            </td>
          </tr>
          <tr
          >
            <td>Viernes</td>
            <td>
              <v-checkbox
                class="ma-0 pa-0"
                v-model="horarios.estado_viernes"
                color="success"
                hide-details
              ></v-checkbox>
            </td>
            <td>
              <v-menu
              ref="menu9"
              v-model="menu_viernes_apertura"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="horarios.viernes_apertura"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs:attrs }">
                <v-text-field
                  v-model="horarios.viernes_apertura"
                  class="mt-5"
                  label="Hora"
                  prepend-icon="mdi-clock-time-four-outline"
                  outlined
                  dense
                  :disabled="!horarios.estado_viernes"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="menu_viernes_apertura"
                v-model="horarios.viernes_apertura"
                full-width
                @click:minute="$refs.menu9.save(horarios.viernes_apertura)"
              ></v-time-picker>
            </v-menu>
            </td>
            <td>
            <v-menu
              ref="menu10"
              v-model="menu_viernes_cierre"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="horarios.viernes_cierre"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs:attrs }">
                <v-text-field
                  v-model="horarios.viernes_cierre"
                  class="mt-5"
                  label="Hora"
                  prepend-icon="mdi-clock-time-four-outline"
                  outlined
                  dense
                  :disabled="!horarios.estado_viernes"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="menu_viernes_cierre"
                v-model="horarios.viernes_cierre"
                full-width
                @click:minute="$refs.menu10.save(horarios.viernes_cierre)"
              ></v-time-picker>
            </v-menu>
            </td>
          </tr>
          <tr
          >
            <td>Sabado</td>
            <td>
              <v-checkbox
                class="ma-0 pa-0"
                v-model="horarios.estado_sabado"
                color="success"
                hide-details
              ></v-checkbox>
            </td>
            <td>
              <v-menu
              ref="menu11"
              v-model="menu_sabado_apertura"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="horarios.sabado_apertura"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs:attrs }">
                <v-text-field
                  v-model="horarios.sabado_apertura"
                  class="mt-5"
                  label="Hora"
                  prepend-icon="mdi-clock-time-four-outline"
                  outlined
                  dense
                  :disabled="!horarios.estado_sabado"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="menu_sabado_apertura"
                v-model="horarios.sabado_apertura"
                full-width
                @click:minute="$refs.menu11.save(horarios.sabado_apertura)"
              ></v-time-picker>
            </v-menu>
            </td>
            <td>
            <v-menu
              ref="menu12"
              v-model="menu_sabado_cierre"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="horarios.sabado_cierre"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs:attrs }">
                <v-text-field
                  v-model="horarios.sabado_cierre"
                  class="mt-5"
                  label="Hora"
                  prepend-icon="mdi-clock-time-four-outline"
                  outlined
                  dense
                  :disabled="!horarios.estado_sabado"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="menu_sabado_cierre"
                v-model="horarios.sabado_cierre"
                full-width
                @click:minute="$refs.menu12.save(horarios.sabado_cierre)"
              ></v-time-picker>
            </v-menu>
            </td>
          </tr>
          <tr
          >
            <td>Domingo</td>
            <td>
              <v-checkbox
                class="ma-0 pa-0"
                v-model="horarios.estado_domingo"
                color="success"
                hide-details
              ></v-checkbox>
            </td>
            <td>
              <v-menu
              ref="menu13"
              v-model="menu_domingo_apertura"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="horarios.domingo_apertura"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs:attrs }">
                <v-text-field
                  v-model="horarios.domingo_apertura"
                  class="mt-5"
                  label="Hora"
                  prepend-icon="mdi-clock-time-four-outline"
                  outlined
                  dense
                  :disabled="!horarios.estado_domingo"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="menu_domingo_apertura"
                v-model="horarios.domingo_apertura"
                full-width
                @click:minute="$refs.menu13.save(horarios.domingo_apertura)"
              ></v-time-picker>
            </v-menu>
            </td>
            <td>
            <v-menu
              ref="menu14"
              v-model="menu_domingo_cierre"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="horarios.domingo_cierre"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs:attrs }">
                <v-text-field
                  v-model="horarios.domingo_cierre"
                  class="mt-5"
                  label="Hora"
                  prepend-icon="mdi-clock-time-four-outline"
                  outlined
                  dense
                  :disabled="!horarios.estado_domingo"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="menu_domingo_cierre"
                v-model="horarios.domingo_cierre"
                full-width
                @click:minute="$refs.menu14.save(horarios.domingo_cierre)"
              ></v-time-picker>
            </v-menu>
            </td>
          </tr>

        </tbody>
      </template>
    </v-simple-table>
      </div>
      <v-divider></v-divider>
    <v-divider></v-divider>
    <v-col cols="12" class="text-right mt-5">
      <v-btn tile color="primary" class="mx-1 my-1" @click='guardar'>
        <v-icon>mdi-content-save</v-icon>
        <span>Guardar</span>
      </v-btn>
      
        <router-link class="underline-none" to="/servicios">   
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
import ServicioService from '@/services/ServicioService';
import VueUploadMultipleImage from 'vue-upload-multiple-image';
import { VueEditor } from "vue2-editor";

import ImgPrincipal from '@/components/ImgPrincipal.vue'

export default {
  name: 'Servicio', 
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
      id_servicio:0,
      view_image_servicio:null,
      servicio:{
        nombre: "",
        referencia: "",
        ubicacion: "",
        tipo: "",
        direccion: "",
        pagina_web: "",
        telefono: "",
        facebook: "",
        whatsapp: "",
        descripcion: "",
        img: ""
      },
      horarios:{
        estado_lunes:true,
        lunes_apertura:'',
        lunes_cierre:'',
        estado_martes:true,
        martes_apertura:'',
        martes_cierre:'',
        estado_miercoles:true,
        miercoles_apertura:'',
        miercoles_cierre:'',
        estado_jueves:true,
        jueves_apertura:'',
        jueves_cierre:'',
        estado_viernes:true,
        viernes_apertura:'',
        viernes_cierre:'',
        estado_sabado:true,
        sabado_apertura:'',
        sabado_cierre:'',
        estado_domingo:true,
        domingo_apertura:'',
        domingo_cierre:''
      },
      tipos:ItemService.listTipoServicios(), 
      comunidades:ItemService.listComunidades(),
      camposRules: [
        v => !!v || 'Campo obligatorio',
      ],
      files_multimedia:[],
      multimedia_data:[],
      images_multi:[],
      formas_pago:ItemService.listFormasPago(),
      menu_lunes_apertura:false,
      menu_lunes_cierre:false,
      menu_martes_apertura:false,
      menu_martes_cierre:false,
      menu_miercoles_apertura:false,
      menu_miercoles_cierre:false,
      menu_jueves_apertura:false,
      menu_jueves_cierre:false,
      menu_viernes_apertura:false,
      menu_viernes_cierre:false,
      menu_sabado_apertura:false,
      menu_sabado_cierre:false,
      menu_domingo_apertura:false,
      menu_domingo_cierre:false,
    }
  },
  computed:{
 
  },
  mounted(){
    //this.clasificarServicios();
    this.id_servicio=this.$route.params.id;
    if(this.id_servicio != 0){
      this.getServicio(this.id_servicio);
      this.edicion = 'Editar';
    }
  },
  methods:{
    getMultimediaGaleria(){
      MultimediaService.getMultimedia('servicios', this.id_servicio).then(response=>{
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
        this.servicio.img=(Math.random().toString(16).slice(2)) +'.'+ extFile;
        // para la visualizacion convertimos la imagen
        const file = event; 
        this.toBase64(file).then(base64 => {
          this.view_image_servicio=base64;
        });
      }else{
        this.view_image_servicio='';
      }
    },
    getServicio(id){
      ServicioService.getServicio(id).then(response=>{
        this.servicio = response.data;
        this.getMultimediaGaleria();
        this.view_image_servicio=this.$Api_url_media+this.servicio.img;
        this.getFormasPago(id);
        this.getHorarios(id);
      })
    },
    getFormasPago(id){
      ServicioService.getFormasPago(id).then(response=>{
          let pagos_seleccionados=response.data;
          this.formas_pago.forEach(element=>{
            pagos_seleccionados.forEach(element2=>{
              if(element2.pago == element.pago){
                element.selected = true;
              }
            })
          })
        })
    },
    getHorarios(id){
       ServicioService.getHorarios(id).then(response=>{
          if(response.data.length > 0){
            this.horarios = response.data[0];
            console.log(this.horarios);
          }
        })
    },

    guardar(){
      var pagos_seleccionados = this.formas_pago.filter(element=>element.selected==true);
      if(this.$refs.form.validate()){
        if(!this.view_image_servicio){
          this.notification("Debe seleccionar una imagen para el servicio","warning")
          return;
        }
        if(this.servicio.descripcion){
          if(pagos_seleccionados.length > 0){
            if(this.horarios.estado_lunes == true 
            || this.horarios.estado_martes == true
            || this.horarios.estado_miercoles == true
            || this.horarios.estado_jueves == true
            || this.horarios.estado_viernes == true
            || this.horarios.estado_sabado == true
            || this.horarios.estado_domingo == true
            ){
              this.id_servicio == 0?this.guardaServicio(pagos_seleccionados):this.editaServicio(pagos_seleccionados);
            }
            else{
              this.notification("Debe existir al menos un dia de atención hábil","warning");
            }
          }
          else{
            this.notification("Debe elegir al menos una forma de pago","warning");
          }
        }
        else{
          this.notification(`El campo "Descripción de Producto o Servicio" es obligatorio`, "warning");
        }
      }
      else{
        this.notification("Existen campos obligatorios","warning");
      }
      
    },
    guardaMultimedia(id_servicio, nombre_servicio){
      for (const key in this.files_multimedia) {
          let dataimagen=this.files_multimedia[key];
          let multimedia={
            "id_padre": id_servicio,
            "nombre": nombre_servicio,
            "ruta": "",
            "tipo": "image",
            "pertenece_a": "servicios"
          };
          MultimediaService.saveMultimedia(multimedia).then(response=>{
            MultimediaService.saveImage(response.data.id, dataimagen).then(response=>{
              console.log(response.data);
            })
          })
      }
    },
    guardaImagenServicio(id_servicio, dataimagen){
      ServicioService.saveImage(id_servicio, dataimagen).then(response=>{
        this.view_image_servicio='';
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
    editaServicio(list_pagos){
      let dataimagen=this.FormDataImage('file_imagen_principal', this.servicio.img);
      if(dataimagen!=null) this.servicio.img="";
      ServicioService.editServicio(this.servicio).then(response=>{
        if(dataimagen!=null) {this.guardaImagenServicio(this.id_servicio, dataimagen);}
        this.guardaMultimedia(this.id_servicio, response.data.nombre);
        ServicioService.deleteAllFormasPago(this.id_servicio).then(()=>{
          list_pagos.forEach(element => {
            ServicioService.savePagos(this.id_servicio, element)
          });
        })
        //ServicioService.deleteAllHorarios(this.id_servicio);
        this.horarios.id?ServicioService.editHorarios(this.horarios):ServicioService.saveHorarios(this.id_servicio, this.horarios);
        
        this.notification('El servicio ha sido modificado de manera correcta', 'success');
        this.$router.replace('/servicios');
      })
    },
    guardaServicio(list_pagos){
      let dataimagen=this.FormDataImage('file_imagen_principal', this.servicio.img);
      console.log(dataimagen);

      this.servicio.img="";
      ServicioService.guardaServicio(this.servicio).then(response=>{
        let id_servicio = response.data.id;
        this.guardaMultimedia(id_servicio, response.data.nombre);
        list_pagos.forEach(element => {
          ServicioService.savePagos(id_servicio, element);
        });
        ServicioService.saveHorarios(id_servicio, this.horarios);
        if(dataimagen!=null) {
          this.guardaImagenServicio(id_servicio, dataimagen);
        }
        this.notification('El servicio ha sido registrado de manera correcta', 'success');
        this.$router.replace('/servicios');
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

  table td{
    width:25%;
  }
</style>

