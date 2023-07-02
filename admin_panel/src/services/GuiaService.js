import Api from '@/services/Api';

export default {
    getGuia(id){
        return Api().get(`/guias/${id}`);
    },
    getGuias(){
        return Api().get('/guias?filter[include]=tipos');
    },
    getFullGuias(){
        return Api().get('guias?filter[include]=idiomas&filter[include]=tipos');
    },
    getTipos(id){
        return Api().get(`/guias/${id}/tipos`);
    },
    getIdiomas(id){
        return Api().get(`/guias/${id}/idiomas`);
    },
    eliminarGuia(id){
        return Api().delete(`/guias/${id}`);
    },
    saveGuia(item){
        return Api().post(`/guias`, item);
    },
    saveTipos(id, item){
        return Api().post(`/guias/${id}/tipos`, item);
    },
    saveIdiomas(id, item){
        return Api().post(`/guias/${id}/idiomas`, item);
    },
    editaGuia(item){
        return Api().put(`/guias/${item.id}`, item);
    },
    deleteAllTipos(id){
        return Api().delete(`/guias/${id}/tipos`);
    },
    deleteAllIdiomas(id){
        return Api().delete(`/guias/${id}/idiomas`);
    }, 
    saveImage(id, dataimage){
        return Api().post(`/guias/${id}/image`, dataimage, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        });
    },
}