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
    countResenas(){
        return Api().get(`/resenas/count`);
    }
}