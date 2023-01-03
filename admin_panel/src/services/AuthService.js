import Api from '@/services/Api';

export default {
    login(credenciales){
        return Api().post(`/Users/login?include=user`, credenciales);
    },
    // current_user(){
    //     let user = JSON.parse(localStorage.getItem('user'));
    //     //let userId = localStorage.getItem('userId');
    //     return user;
    // },
    getUser(id){
        return Api().get(`/Users/${id}`);
    },
    changePassword(token, data){
        return Api().post(`Users/change-password?access_token=${token}`, data);
    },
    updateUser(token, data, id){
        return Api().patch(`Users/${id}?access_token=${token}`, data);
    }
}