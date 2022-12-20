import Api from '@/services/Api';

export default {
    getNoticias(){
        return Api().get('/noticias');
    },
    eliminarNoticia(id){
        return Api().delete(`/noticias/${id}`);
    }
}