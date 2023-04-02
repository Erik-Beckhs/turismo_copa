import Api from '@/services/Api';

export default {
    getResenas(){
        return Api().get('/resenas');
    },
    getResenasAprobadas(){
        return Api().get(`/resenas?filter[where][and][0][estado]=1&filter[order][0]=id DESC`);
    },
    deleteResena(id){
        return Api().delete(`/resenas/${id}`);
    },
    aprobarResena(id, estado){
        return Api().patch(`/resenas/${id}`, estado);
    },
    countResenas(estado){
        return Api().get(`/resenas/count?where[estado]=${estado}`);
    }, 
    saveImage(id, dataimage){
        return Api().post(`/resenas/${id}/image`, dataimage, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveResena(item){
        return Api().post('/resenas', item);
    }, 
}