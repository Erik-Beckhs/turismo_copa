import Api from '@/services/Api';

export default {
    getHospedajeId(id){
        return Api().get(`/hospedajes/${id}?filter[include]=servicios&filter[include]=tipos_habitacion`);
    },
    getAllHospedaje(){
        return Api().get(`/hospedajes?filter[include]=servicios&filter[include]=tipos_habitacion`);
    },
    getAtractivoLimit(limit){
        return Api().get(`/atractivos?filter[limit]=${limit}&filter[where][inq][categoria]=Actividades%20Que%20Hacer&filter[where][inq][categoria]=Eventos%20Programados`);
    },
    getEventosLimit(limit){
        return Api().get(`/atractivos?filter[limit]=${limit}&filter[where][and][0][categoria]=Eventos%20Programados`);
    },
    getActividadLimit(limit){
        return Api().get(`/atractivos?filter[limit]=${limit}&filter[where][and][0][categoria]=Actividades%20Que%20Hacer`);
    },
    getDataLimit(module, limit){
        return Api().get(`/${module}?filter[limit]=${limit}`);
    },
    getDataDiffLimit(module, limit, id){
        return Api().get(`/${module}?filter[limit]=${limit}&filter[where][id][nlike]=${id}`);
    },
    getDataAll(module){
        return Api().get(`/${module}`);
    },
    getDataId(module, id){
        return Api().get(`/${module}/${id}`);
    }
}