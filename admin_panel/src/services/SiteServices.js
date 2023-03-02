import Api from '@/services/Api';

export default {
    getHospedajeId(id){
        return Api().get(`/hospedajes/${id}?filter[include]=servicios&filter[include]=tipos_habitacion`);
    },
    getAllHospedaje(){
        return Api().get(`/hospedajes?filter[include]=servicios&filter[include]=tipos_habitacion`);
    },
    getAtractivoLimit(limit){
        return Api().get(`/atractivos?filter[limit]=${limit}&filter[where][or][0][categoria]=Sitios%20Naturales&filter[where][or][1][categoria]=Etnografía%20y%20Folklore&filter&filter[where][or][2][categoria]=Patrimonio%20Urbano%20Arquitectónico&filter&filter[where][or][3][categoria]=Realizaciones%20técnicas%20científicas`);
    },
    getEventosLimit(limit){
        return Api().get(`/atractivos?filter[limit]=${limit}&filter[where][and][0][categoria]=Eventos%20Programados`);
    },
    getActividad(limit){
        return Api().get(`/atractivos?filter[limit]=${limit}&filter[where][and][0][categoria]=Actividades%20Que%20Hacer`);
    },
    getActividadCount(){
        return Api().get(`/atractivos/count?where[categoria]=Actividades%20Que%20Hacer`);
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
    },
    getResenaLimit(limit){
        return Api().get(`/resenas?filter[limit]=${limit}&filter[where][and][0][estado]=1`);
    },
}