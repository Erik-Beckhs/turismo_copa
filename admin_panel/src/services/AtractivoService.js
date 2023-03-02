import Api from '@/services/Api';

export default {
    saveAtractivo(atractivo){
        return Api().post(`/atractivos`, atractivo);
    },
    saveImage(id, dataimage){
        return Api().post(`/atractivos/${id}/image`, dataimage, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveArticulo(id, articulo){
        return Api().post(`/atractivos/${id}/articulos`, articulo);
    }, 
    getAtractivo(id){
        return Api().get(`/atractivos/${id}`);
    },
    getAtractivos(){
        return Api().get(`/atractivos`);
    },
    getArticulosAtractivo(id){
        return Api().get(`/atractivos/${id}/articulos`);
    },
    editAtractivo(id, atractivo){
        return Api().put(`/atractivos/${id}`, atractivo);    
    },
    deleteAllAtractivosArticulo(id){
        return Api().delete(`/atractivos/${id}/articulos`);
    },
    deleteAtractivo(id){
        return Api().delete(`/atractivos/${id}`);
    },
    countAtractivos(){
        return Api().get(`/atractivos/count`);
    },
    countEventos(){
        return Api().get(`/atractivos/count?where[categoria]=Eventos%20Programados`);
    },
}