import Api from '@/services/Api';

export default {
    getAtractivoLimit(limit){
        return Api().get(`/atractivos?filter[limit]=${limit}&filter[where][inq][categoria]=Actividades%20Que%20Hacer&filter[where][inq][categoria]=Eventos%20Programados`);
    },
    getDataLimit(module, limit){
        return Api().get(`/${module}?filter[limit]=${limit}`);
    },
    getDataAll(module){
        return Api().get(`/${module}`);
    },
    getDataId(module, id){
        return Api().get(`/${module}/${id}`);
    }
}