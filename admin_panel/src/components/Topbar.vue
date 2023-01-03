<template>
  <v-app-bar app elevate-on-scroll elevation="3" color="primary">
    <v-app-bar-nav-icon color="white" @click="$emit('drawerEvent')"></v-app-bar-nav-icon>
    <v-spacer />
    <!--<v-col lg="6" cols="12">
      <v-form>
        <v-text-field
          class="p-0 m-0 mt-6"
          full-width
          dense
          append-icon="mdi-magnify"
          outlined
          rounded
          placeholder="Búsqueda"
        />
      </v-form>
    </v-col>-->
    <v-spacer />

    <!--<router-link to="/resenas">
        <span
          class="mx-5 mr-10"
          title="Reseñas sin aprobar"
        >

            <v-badge :content="resenas_sin_aprobar.length" color="red" offset-y="10" offset-x="10" v-if="resenas_sin_aprobar.length>0">
                  <v-icon   color="white">mdi-bell</v-icon>
            </v-badge>

            <v-icon color="white" v-else>mdi-bell</v-icon> 
        </span>
      </router-link>-->

    <v-menu offset-y>
      <template v-slot:activator="{ attrs, on }">
        <span
          class="mx-5 mr-10"
          style="cursor: pointer"
          v-bind="attrs"
          v-on="on" title="Nuevas Reseñas"
        >
          <v-badge v-if="resenas_sin_aprobar.length>0" :content="resenas_sin_aprobar.length" color="red" offset-y="10" offset-x="10">
            <v-icon color="white">mdi-bell</v-icon>
          </v-badge>
          <v-icon color="white" v-else>mdi-bell</v-icon>
        </span>
      </template>
      <v-list three-line width="250" v-if="resenas_sin_aprobar.length > 0">
        <template v-for="(item, index) in resenas_top">
          <v-subheader
            v-if="item.header"
            :key="item.header"
            v-text="item.header"
          ></v-subheader>

          <v-divider
            v-else-if="item.divider"
            :key="index"
            :inset="item.inset"
          ></v-divider>

          <v-list-item link v-else :key="item.titulo" @click="$router.replace('/resenas')">
            <v-list-item-avatar>
              <v-img :src="item.imagen"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>
              {{item.autor}} <br>
              <span class="text-caption">
                {{item.fecha_publicacion}}
              </span>
              </v-list-item-title>
              <v-list-item-subtitle
              ><span class="font-weight-bold">{{item.titulo}}</span> {{item.descripcion}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>

      <v-list width="250" v-else>
          <v-list-item>
           <span class="text-caption">No existen reseñas sin aprobar</span>
          </v-list-item>
      </v-list> 
    </v-menu>

    <!--<v-menu>
      <template v-slot:activator="{ attrs, on }">
        <span
          class="mx-5 mr-10"
          title="Reseñas sin aprobar"
        >
            <v-badge :content="resenas_sin_aprobar.length" color="red" offset-y="10" offset-x="10" v-if="resenas_sin_aprobar.length>0">
                  <v-icon   color="white">mdi-bell</v-icon>
            </v-badge>

            <v-icon color="white" v-else>mdi-bell</v-icon> 
        </span>
      </template>
      <v-list three-line width="250">
        <template v-for="(item, index) in resenas_sin_aprobar">
          <v-subheader
            v-if="item.header"
            :key="item.header"
            v-text="item.header"
          ></v-subheader>

          <v-divider
            v-else-if="item.divider"
            :key="index"
            :inset="item.inset"
          ></v-divider>

          <v-list-item v-else :key="item.title">
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle
                v-html="item.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-menu>-->
    <v-menu offset-y>
      <template v-slot:activator="{ attrs, on }">
        <span style="cursor: pointer" v-bind="attrs" v-on="on">
          <v-chip link>
            <v-badge dot bottom color="green" offset-y="10" offset-x="10">
              <v-avatar size="40">
                <v-img src="@/assets/img/escudo.jpg" />
              </v-avatar>
            </v-badge>
            <span class="ml-3">{{user.username}}</span>
          </v-chip>
        </span>
      </template>
      <v-list width="250" class="py-0">
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="@/assets/img/escudo.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{user.username}}</v-list-item-title>
            <v-list-item-subtitle>En Linea</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <!--<v-list-item link v-for="(menu, i) in menus" :key="i">
          <v-list-item-icon>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ menu.title }}
          </v-list-item-title>
        </v-list-item>-->
        <v-list-item link @click="dialog_perfil=true">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            Perfil
          </v-list-item-title>
        </v-list-item>
        <v-list-item link @click="dialog_password=true">
            <v-list-item-icon>
            <v-icon>mdi-key</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Cambiar Contraseña
          </v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            Configuraciones
          </v-list-item-title>
        </v-list-item>
        <v-list-item link @click="salir">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            Salir
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-dialog
      v-model="dialog_password"
      max-width="550"
    >
      <v-card class="pa-5">
                        <v-form ref="form"
                        v-model="valid"
                        lazy-validation>
                            <v-card-title>
                                Cambiar Contraseña
                            </v-card-title>
                            <v-card-text>
                                <v-col cols="12">
                                    <v-text-field
                                        v-model="oldPassword"
                                        :rules="passwordRules"
                                        :type="passwordShow1?'text':'password'"
                                        label="Contraseña Actual"
                                        prepend-inner-icon="mdi-lock"
                                        :append-icon="passwordShow1 ? 'mdi-eye':'mdi-eye-off'"
                                        @click:append="passwordShow1 = !passwordShow1"
                                        required
                                    />
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                        v-model="newPassword1"
                                        :rules="passwordRules"
                                        :type="passwordShow2?'text':'password'"
                                        label="Nueva Contraseña"
                                        prepend-inner-icon="mdi-lock-plus"
                                        :append-icon="passwordShow2 ? 'mdi-eye':'mdi-eye-off'"
                                        @click:append="passwordShow2 = !passwordShow2"
                                        required
                                    />
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                        v-model="newPassword2"
                                        :rules="passwordRules"
                                        :type="passwordShow3?'text':'password'"
                                        label="Confirme Contraseña"
                                        prepend-inner-icon="mdi-lock-plus"
                                        :append-icon="passwordShow3 ? 'mdi-eye':'mdi-eye-off'"
                                        @click:append="passwordShow3 = !passwordShow3"
                                        required
                                    />
                                </v-col>
                            </v-card-text>
                            <v-card-actions>
                            <v-spacer></v-spacer>
                              <v-btn
                                color="green darken-1"
                                text
                                @click="dialog_password = false"
                              >
                                Cancelar
                              </v-btn>

                              <v-btn
                                color="green darken-1"
                                text
                                @click="validate"
                              >
                                Modificar
                              </v-btn>
                            </v-card-actions>
                        </v-form>
      </v-card>
    </v-dialog>

      <v-dialog
      v-model="dialog_perfil"
      max-width="550"
    >
      <v-card class="pa-5">
        <v-form ref="form2"
                v-model="valid2"
                        lazy-validation>
                            <v-card-title>
                                Mi Perfil
                            </v-card-title>
                            <v-card-text>
                                <v-col cols="12">
                                    <v-text-field
                                        v-model="user.username"
                                        label="Usuario"
                                        :rules="nameRules"
                                        prepend-inner-icon="mdi-account"
                                        required
                                    />
                                </v-col>
                                <v-col cols="12">
                                     <v-text-field
                                        v-model="user.email"
                                        :rules="emailRules"
                                        type="email"
                                        label="Email"
                                        prepend-inner-icon="mdi-at"
                                        required
                                    />
                                </v-col>
                            </v-card-text>
                            <v-card-actions>
                            <v-spacer></v-spacer>
                             <v-btn
                              color="green darken-1"
                              text
                              @click="dialog_perfil = false"
                            >
                              Cancelar
                            </v-btn>

                            <v-btn
                              color="green darken-1"
                              text
                              @click="validate_perfil"
                            >
                              Modificar
                            </v-btn>
                            </v-card-actions>
                        </v-form>
      </v-card>
    </v-dialog>

  </v-app-bar>
</template>

<script>
import ResenasService from '@/services/ResenasService';
import AuthService from '@/services/AuthService';

export default {
  name: "Topbar",
  data() {
    return {
      menus: [
        { title: "Perfil", icon: "mdi-account" },
        { title: "Cambiar Contraseña", icon: "mdi-key" },
        { title: "Configuraciones", icon: "mdi-cog" },
        { title: "Salir", icon: "mdi-logout", },
      ],
       user:{
                username:'',
                email:''
            },
      dialog_password:false,
      dialog_perfil:false,
      passwordShow1:false,
      passwordShow2:false,
      passwordShow3:false,
      valid:true,
      valid2:true,
      oldPassword:'',
      newPassword1:'',
      newPassword2:'',
      cantidad_resenas:0,
      resenas_top:[],
      passwordRules: [
      v => !!v || 'El campo es requerido',
      v => (v && v.length >= 6) || 'campo debería tener al menos 6 caracteres',
      ],
      emailRules: [
        v => !!v || 'E-mail es requerido',
        v => /.+@.+\..+/.test(v) || 'E-mail no valido',
       ],
      nameRules: [
          v => !!v || 'Campo requerido',
          v => (v && v.length >= 5) || 'El campo debería tener al menos 5 caracteres',
      ],
      // items: [
      //   {
      //     avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
      //     title: "Brunch this weekend?",
      //     subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      //   },
      //   { divider: true, inset: true },
      //   {
      //     avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
      //     title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
      //     subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
      //   },
      //   { divider: true, inset: true },
      //   {
      //     avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      //     title: "Oui oui",
      //     subtitle:
      //       '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
      //   },
      //   { divider: true, inset: true },
      //   {
      //     avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
      //     title: "Birthday gift",
      //     subtitle:
      //       '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
      //   },
      //   { divider: true, inset: true },
      //   {
      //     avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
      //     title: "Recipe to try",
      //     subtitle:
      //       '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
      //   },
      // ],
      resenas_list:[],
      resenas_sin_aprobar:[],
      current_user:{}
    };
  },
  mounted(){
    this.getResenas();
    this.getCurrentUser();
  },
  computed:{
    
  },
  methods:{
    getResenas(){
      ResenasService.getResenas().then(response=>{
        this.resenas_list = response.data;
        this.resenasSinAprobar();
      })
    },
    resenasSinAprobar(){
      this.resenas_sin_aprobar = this.resenas_list.filter(element=>(element.estado == 0));
      let divider = { divider: true, inset: true };
      this.resenas_sin_aprobar.forEach(element=>{
        if(this.cantidad_resenas<=5){
          this.resenas_top.push(element);
          this.resenas_top.push(divider);
          this.cantidad_resenas++;
        }
      })
      console.log(this.resenas_top);
    },
      validate () {
        if(this.$refs.form.validate()){
            if(this.newPassword1 === this.newPassword2){
                    let data = {
                        oldPassword:this.oldPassword,
                        newPassword:this.newPassword1
                    }

                    AuthService.changePassword(this.getToken(), data). then(()=>{
                        this.notification('La contraseña se modificó de manera satisfactoria, Inicie Sesión', 'success');
                        this.dialog_password = false;
                        setTimeout(() => {
                            localStorage.removeItem('token');
                            localStorage.removeItem('current_user');
                            location.reload();
                        }, 3000);
                    })
                    .catch(error=>{
                        this.notification('Ocurrió un error al cambiar la contraseña', 'error');
                    })
                }
                else{
                    this.notification('Las contraseñas no coinciden', 'error');
                }
            }
        },
        validate_perfil () {
            if(this.$refs.form2.validate()){
                let id_user = this.current_user.userId;
                AuthService.updateUser(this.getToken(), this.user, id_user). then(()=>{
                        this.dialog_perfil = false;
                        this.notification('La información se modificó de manera satisfactoria', 'success');
                        this.current_user.user.username = this.user.username;
                        this.current_user.user.email = this.user.email;
                        localStorage.setItem('current_user', JSON.stringify(this.current_user));
                        // let email_local = localStorage.getItem('email');
                        // if(email_local){
                        //   localStorage.setItem('email', this.user.email);
                        // }
                        
                        setTimeout(() => {
                            this.$router.replace('/admin');
                            location.reload();
                        }, 2500);
                    })
                    .catch(error=>{
                        this.notification('Ocurrió un error al cambiar la información', 'error');
                    })
            }
        },
    getToken(){
            let token = localStorage.getItem("token");
            return token;
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
    salir(){
       this.$swal.fire({
        title: 'Salir',
        text: "Está seguro que desea salir del sistema?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, salir',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem('token');
          localStorage.removeItem('current_user');
          location.reload();
        }
      })
    }, 
    verResena(id){
      console.log(id);
    },
    getCurrentUser(){
      this.current_user = JSON.parse(localStorage.getItem('current_user'));
      this.user.username = this.current_user.user.username;
      this.user.email = this.current_user.user.email;
    }
  }
};
</script>

<style scoped></style>
