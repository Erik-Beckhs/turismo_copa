<template>
  <div id="div_hospedajes" style="background: #F7F7F7;">
    <v-dialog
      v-model="dialog_resena"
      max-width="900"
    >
      <v-card class="pa-3">
	  <v-form 
	  ref="form"
      v-model="valid"
      lazy-validation
	  >
        <v-card-title class="text-h5 pb-0">
          Nueva Reseña
        </v-card-title>
		<v-card-subtitle class="mt-1 fs-1 pb-0">
			Para nosotros y los visitantes es importante conocer la experiencia que tuviste visitando nuestro Santuario
		</v-card-subtitle>
		<p class="ms-6 text-subtitle-1 grey--text">
			<v-icon>mdi-calendar</v-icon>&nbsp;
			Fecha: {{resena.fecha_publicacion | fecha_literal}}
		</p>
		<v-divider></v-divider>
        <v-card-text>
			<v-card outlined class="pa-1">
			<v-row>
					<v-col cols="4">
						<v-img class="mx-auto" v-if="image_user!=''" width="190" :src="image_user"/>
						<v-img class="mx-auto" v-else width="190" src="@/assets/user2.png"/>
						<v-col cols="12" class="pt-3">
							<v-file-input
							id="file_imagen_principal"
							label="Cambiar Foto"
							prepend-icon="mdi-camera"
							@change="updateFile"
							outlined
							dense
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
					<v-col cols="8">
						<v-col cols="12">
							<v-text-field dense :rules="camposRules" hide-details="true" outlined label="Autor" v-model="resena.autor" />
						</v-col>
						<v-col cols="12" class="py-3">
							<v-text-field dense :rules="camposRules" hide-details="true" outlined label="Titulo" v-model="resena.titulo" />
						</v-col>
						<v-col cols="12">
							<v-textarea
							label="Contenido"
							outlined
							counter
							v-model="resena.contenido"
							:rows="4"
							:rules="contenidoRules"
							></v-textarea>
						</v-col>
					</v-col>
			</v-row>
		  <v-divider></v-divider>
		  <v-card-subtitle class="fs-1 text-center">Califique su experiencia de visita en el Santuario de Copacabana</v-card-subtitle>
		  <v-row>
		  	<v-rating
			v-model="resena.rating"
			background-color="orange lighten-3"
			color="orange"
			large
			class="mx-auto"
			></v-rating>
		  </v-row>
			</v-card>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog_resena = false"
          >
            Cancelar
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="validateResena"
          >
            Guardar
          </v-btn>
        </v-card-actions>
		</v-form>
      </v-card>
    </v-dialog>

    <v-container>
      <v-row>
      <v-col cols="12">
      </v-col>
    </v-row>
    <v-row>
        <v-col cols="7">
          <v-card class="py-5 px-8">
                <v-row class="my-5">
                  <span class="text-h5">
                  Listado de Reseñas
                </span>
                <v-spacer></v-spacer>
                <v-btn color="primary" dark @click="dialog_resena = true">
                  <v-icon>mdi-pencil</v-icon>
                  <span>Escribir Reseña</span>
                </v-btn>
                </v-row>
                <v-list four-line v-if="resenas.length>0">
                  <template class="d-flex">
                    <v-list-item v-for="item in resenas" :key="item.id">

                      <v-list-item-avatar class="align-self-start" size="60" v-if="item.img_user!=''">
                        <v-img :src="$Api_url_media+item.img_user"></v-img>
                      </v-list-item-avatar>

                      <v-list-item-avatar class="align-self-start" size="60" v-else>
                        <v-img src="@/assets/user2.png"></v-img>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title v-html="item.autor"></v-list-item-title>
                        <v-list-item-subtitle>{{item.fecha_publicacion | fecha_literal}}</v-list-item-subtitle>
                          <v-rating
                          v-model="item.rating"
                          background-color="orange lighten-3"
                          color="orange"
                          small
                          dense
                          readonly
                        ></v-rating>
                        <v-card-title class="text-h6 ps-0 py-1">{{item.titulo}}</v-card-title>
                        <span class="fs-0-9" style="line-height:1.3rem;">{{item.contenido}}</span>
                        <v-divider class="mt-2"></v-divider>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-list>
                <v-row class="text-h5 my-10" v-else>
                    <span class="mx-auto grey--text">Todavía no existen reseñas aprobadas</span> 
                </v-row>
          </v-card>
        </v-col>
    </v-row>
    </v-container>
  </div>
</template>
<style scoped>
  .card_transparent.v-sheet.v-card:not(.v-sheet--outlined) {
    box-shadow: none;
  }
</style>
<script>
import ResenaService from '@/services/ResenasService'

export default {
  name: 'HomeResenas',
  data(){
    return{
      resenas:[],
      resena:{
			autor:'',
			titulo:'',
			contenido:'',
			fecha_publicacion:new Date().toISOString(),
			rating:0, 
			estado:0, 
			img_user:''
		},
      contenidoRules: [v => v.length <= 600 || 'Max. 600 caracteres'],
      dialog_resena:false,
      valid:true,
      image_user:'',
      camposRules: [
        v => !!v || 'El campo es requerido'
      ],
      dialog_resena:false
    }
  },
  mounted(){	
    this.get_resenas();
  },
  computed:{

  },
  filters:{
	    fecha_literal:function(value){
		let fecha_literal ='';
		if (value){
		let fecha = new Date(value);
		let dia = ('0'+(fecha.getDate())).slice(-2);
    	let anio = fecha.getFullYear();
		let mes = fecha.getMonth()+1;
		let mesLiteral = '';
		switch(mes){
			case 1:
				mesLiteral = 'Enero';
				break;
			case 2:
				mesLiteral = 'Febrero';
				break;
			case 3:
				mesLiteral = 'Marzo';
				break;
			case 4:
				mesLiteral = 'Abril';
				break;
			case 5:
				mesLiteral = 'Mayo';
				break;
			case 6:
				mesLiteral = 'Junio';
				break;
			case 7:
				mesLiteral = 'Julio';
				break;
			case 8:
				mesLiteral = 'Agosto';
				break;
			case 9:
				mesLiteral = 'Septiembre';
				break;
			case 10:
				mesLiteral = 'Octubre';
				break;
			case 11:
				mesLiteral = 'Noviembre';
				break;
			case 12:
				mesLiteral = 'Diciembre';
				break;
			} 
			fecha_literal = `${dia} de ${mesLiteral} de ${anio}`;
		}
		return fecha_literal;
	},
  },
  methods:{
    get_resenas(){
      ResenaService.getResenas().then(response=>{
        this.resenas = response.data;
        //ordenar por fecha de manera descendente
        this.resenas.sort((x, y) => y.fecha_publicacion.localeCompare(x.fecha_publicacion));
        // this.resenas.forEach(element=>{
        //   element.fecha_publicacion = this.fecha_literal(element.fecha_publicacion)
        // })
      })
    },
  	limpiarResena(){
		this.resena = {
			autor:'',
			titulo:'',
			contenido:'',
			fecha_publicacion:new Date().toISOString(),
			rating:5, 
			estado:0, 
			img_user:''
		};
		this.image_user='';
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
        this.resena.img_user=(Math.random().toString(16).slice(2)) +'.'+ extFile;
        // para la visualizacion convertimos la imagen
        const file = event; 
        this.toBase64(file).then(base64 => {
          this.image_user=base64;
        });
      }else{
        this.image_user='';
      }
    },
	validateResena(){
		if(this.$refs.form.validate()){
			this.guardaResena()
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
	guardaResena(){
		var dataimagen=this.FormDataImage('file_imagen_principal', this.resena.img_user);
      	//this.resena.img_user="";

		//this.resena.fecha_publicacion = new Date().toISOString();
		ResenaService.saveResena(this.resena)
		.then(response=>{
			let id_resena = response.data.id;
			if(dataimagen!=null) {
				this.guardaImagenUser(id_resena, dataimagen);
				}
			this.$swal.fire(
			'Buen trabajo!',
			'Tu reseña ha sido registrada y esta a la espera de su aprobación, agradecemos tu gentil colaboración',
			'success'
			);
			this.limpiarResena();
			this.dialog_resena = false;
		})
	},
	guardaImagenUser(id_resena, dataimagen){
      ResenaService.saveImage(id_resena, dataimagen).then(response=>{
        console.log(response.data);
        this.image_user='';
      })
    },
  }
}
</script>
