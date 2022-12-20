import Api from '@/services/Api';

export default {
    getHospedajes(){
        return Api().get('/hospedajes');
    },
    eliminarHospedaje(id){
        return Api().delete(`/hospedajes/${id}`);
    }
}