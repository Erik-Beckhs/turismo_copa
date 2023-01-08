import Api from '@/services/Api';

export default {
    getHospedaje(id){
        return Api().get(`/hospedajes/${id}`);
    },
    getTiposHabitacion(id_hospedaje){
        return Api().get(`/hospedajes/${id_hospedaje}/tipos_habitacion`);
    },
    getServicios(id_hospedaje){
        return Api().get(`/hospedajes/${id_hospedaje}/servicios`);
    },
    getHospedajes(){
        return Api().get('/hospedajes');
    },
    eliminarHospedaje(id){
        return Api().delete(`/hospedajes/${id}`);
    },
    guardaHospedaje(hospedaje){
        return Api().post(`/hospedajes`, hospedaje);
    },
    saveTHabitacion(id, item){
        return Api().post(`/hospedajes/${id}/tipos_habitacion`, item);
    },
    saveServicios(id, item){
        return Api().post(`/hospedajes/${id}/servicios`, item);
    },
    editHospedaje(item){
        return Api().put(`/hospedajes/${item.id}`, item);
    },
    deleteAllTiposHabitacion(id){
        return Api().delete(`/hospedajes/${id}/tipos_habitacion`);
    },
    deleteAllServices(id){
        return Api().delete(`/hospedajes/${id}/servicios`);
    }, 
    countHospedajes(){
        return Api().get(`/hospedajes/count`);
    }
}