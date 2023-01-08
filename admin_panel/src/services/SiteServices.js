import Api from '@/services/Api';

export default {
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