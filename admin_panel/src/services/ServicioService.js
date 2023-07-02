import Api from '@/services/Api';

export default {
    getServicio(id){
        return Api().get(`/servicios/${id}`);
    },
    getServicios(){
        return Api().get('/servicios');
    },
    getServiciosType(type){
        return Api().get(`/servicios?filter[where][tipo]=${type}`);
    },
    getFullServicio(id){
        return Api().get(`/servicios/${id}?filter[include]=formas_pago&filter[include]=horarios`);
    },
    eliminarServicio(id){
        return Api().delete(`/servicios/${id}`);
    },
    guardaServicio(servicio){
        return Api().post(`/servicios`, servicio);
    },
    editServicio(item){
        return Api().put(`/servicios/${item.id}`, item);
    },
    getFormasPago(id){
        return Api().get(`/servicios/${id}/formas_pago`);
    },
    getHorarios(id){
        return Api().get(`/horarios?filter[where][id_servicio]=${id}`);
    },
    savePagos(id, item){
        return Api().post(`/servicios/${id}/formas_pago`, item);
    },
    saveHorarios(id, item){
        return Api().post(`/servicios/${id}/horarios`, item);
    },
    deleteAllFormasPago(id){
        return Api().delete(`/servicios/${id}/formas_pago`);
    }, 
    deleteAllHorarios(id){
        return Api().delete(`/servicios/${id}/horarios`);
    },
    
    saveImage(id, dataimage){;
        return Api().post(`/servicios/${id}/image`, dataimage, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        });
    },
    editHorarios(item){
        return Api().put(`/horarios/${item.id}`, item);
    },
}