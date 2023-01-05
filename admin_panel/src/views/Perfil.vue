<template>
    <div class="perfil">
        <v-container>
            <v-row>
                <v-col cols="6">
                    <v-card class="pa-10">
                        <v-form ref="form"
                        v-model="valid"
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
                                <v-col cols="12" class="text-right">
                                    <v-btn color="primary" tile dense @click="validate">
                                        Modificar
                                    </v-btn>
                                </v-col>
                            </v-card-actions>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import AuthService from '@/services/AuthService';

export default {
    name: 'Perfil',
    components: {
    }, 
    data(){
        return{
            user:{
                username:'',
                email:''
            },
            valid:true,
            current_user:{},
            emailRules: [
            v => !!v || 'E-mail es requerido',
            v => /.+@.+\..+/.test(v) || 'E-mail no valido',
            ],
            nameRules: [
                v => !!v || 'Campo requerido',
                v => (v && v.length >= 5) || 'El campo debería tener al menos 5 caracteres',
            ],
        }
    },
    mounted(){
        this.getCurrentUser();
    }, 
    methods:{
        validate () {
            if(this.$refs.form.validate()){
                let token = this.getToken();
                let id_user = this.current_user.userId;
                AuthService.updateUser(token, this.user, id_user). then(()=>{
                        this.notification('La información se modificó de manera satisfactoria', 'success');
                        setTimeout(() => {
                            this.$router.replace('/admin');
                            location.reload();
                        }, 4000);
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
        getCurrentUser(){
            this.current_user = JSON.parse(localStorage.getItem('current_user'));
            this.user.username = this.current_user.user.username;
            this.user.email = this.current_user.user.email;
        }
    }
}
</script>
<style scoped>
    
</style>
