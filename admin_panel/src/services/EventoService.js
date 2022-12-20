import Api from '@/services/Api';

export default {
    getEventos(){
        return Api().get('/eventos_programados');
    },
    eliminarEvento(id){
        return Api().delete(`/eventos_programados/${id}`);
    }
}