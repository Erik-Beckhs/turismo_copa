import Api from '@/services/Api';

export default {
    saveMultimedia(data){
        return Api().post(`/multimedias`, data);
    },
    editMultimedia(id, data){
        return Api().put(`/multimedias/${id}`, data);    
    },
    deleteMultimedia(id){
        return Api().delete(`/multimedias/${id}`);
    },
    saveImage(id, dataimage){
        return Api().post(`/multimedias/${id}/image`, dataimage, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        });
    },
    getMultimedia(module_padre, id_padre){
        return Api().get(`/multimedias?filter[where][and][0][pertenece_a]=${module_padre}&filter[where][and][1][id_padre]=${id_padre}&filter[order]=id%20ASC`);
    }
}