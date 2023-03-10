import Api from '@/services/Api';

export default {
    getResenas(){
        return Api().get('/resenas');
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