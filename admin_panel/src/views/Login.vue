<template>
  <v-app>
    <div class="background"></div>
    <div class="alfa"></div>
    <v-main class="d-flex justify-center align-center">
      <v-col cols="10" lg="4" class="mx-auto">
        <v-card class="pa-4">
          <div class="text-center">
            <!--<v-avatar size="150" color="indigo lighten-4">
              <v-icon size="40" color="indigo">mdi-account</v-icon>
              <v-img src="@/assets/logo_copa.png" />
        
            </v-avatar>-->

              <v-img style="margin:0 auto !important;" src="@/assets/img/escudo.jpg" width="150"/>
            
            <h2 class="indigo--text">Copacabana - Admin</h2>
          </div>
          <v-form @submit.prevent="submitHandler" ref="form">
            <v-card-text class="px-15">
              <v-text-field
                v-model="user.email"
                :rules="emailRules"
                type="email"
                label="Email"
                placeholder="Email"
                prepend-inner-icon="mdi-account"
                required
              />
              <v-text-field
                      v-model="user.password"
                      :rules="passwordRules"
                      :type="passwordShow?'text':'password'"
                      label="Password"
                      placeholder="Password"
                      prepend-inner-icon="mdi-key"
                      :append-icon="passwordShow ? 'mdi-eye':'mdi-eye-off'"
                      @click:append="passwordShow = !passwordShow"
                      required
              />
              <v-switch v-model="recuerdame" label="Recuerdame" color="indigo"></v-switch>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn :loading="loading" type="submit" color="indigo">
                <span class="white--text px-8">Login</span>
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-main>
    <v-snackbar top color="red" v-model="snackbar">
      Credenciales Incorrectas
    </v-snackbar>
  </v-app>
</template>

<script>
import AuthService from '@/services/AuthService'

export default {
  name: 'Login',


  data: () => ({
    loading:false,
    snackbar:false,
    passwordShow:false,
    user:{
      email:'', 
      password:''
    },
    emailRules: [
      v => !!v || 'E-mail es requerido',
      v => /.+@.+\..+/.test(v) || 'E-mail no valido',
    ],
    passwordRules: [
      v => !!v || 'Password es requerido',
      v => (v && v.length >= 6) || 'Password debería tener al menos 6 caracteres',
    ],
    recuerdame:false
  }),
  methods:{
    submitHandler(){
      if (this.$refs.form.validate()){
          this.loading = true;
          AuthService.login(this.user)
          .then(response => {
            let token = response.data.id;
            localStorage.setItem("current_user", JSON.stringify(response.data));
            localStorage.setItem("token", token);
            if(this.recuerdame == true){
              localStorage.setItem("email",this.user.email);
            }
            else{
              let email =localStorage.getItem("email");
              if(email){
                localStorage.removeItem("email");
              }
            }
            this.$router.replace('/main');
          }).
          catch(error=>
            {
              this.notification("Credenciales incorrectas", "error");
              //this.snackbar = true;
              this.user = {
                email:'',
                password:''
              }
              this.loading=false;
            }
          )
          .finally(()=>this.loading=false)
      }
    },
     notification(title, icon){
          this.$swal.fire({
          position: 'top',
          icon,
          title,
          showConfirmButton: false,
          timer: 1500
        })
    }, 
    verificaToken(){
      let token = localStorage.getItem('token');
      if (token){
        this.$router.replace('/main');
      }
    },
    verificaUser(){
      let email = localStorage.getItem("email");
      if(email){
        this.user.email = email;
        this.recuerdame = true;
      }
    }
  },
  mounted(){
    this.verificaToken();
    this.verificaUser();
  }
};
</script>
<style>
  .background{
    background-image: url(../assets/basilica.jpg) !important;
    height: 100%;
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
    background-size: cover;
  }
  .alfa{
    background-color: rgba(0, 0, 0, .6);
    height: 100%;
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
  }
</style>