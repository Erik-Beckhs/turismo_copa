import Api from '@/services/Api';

export default {
    getNoticias(){
        return Api().get('/noticias');
    },
    eliminarNoticia(id){
        return Api().delete(`/noticias/${id}`);
    },
    saveNoticia(item){
        return Api().post('/noticias', item);
    }, 
    getNoticia(id){
        return Api().get(`/noticias/${id}`);
    },
    editaNoticia(item){
        return Api().put(`/noticias/${item.id}`, item);
    },
    countNoticias(){
        return Api().get(`/noticias/count`);
    }
}