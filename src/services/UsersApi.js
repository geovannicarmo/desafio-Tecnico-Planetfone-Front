import api from './API';
import { toast } from 'react-toastify';

export async function usersDataAPI(){
    try{
        const response = await api.get(`./users`);
        toast ('Requisição feita');
        return response.data;
    }catch(err){
        
        console.log(err)
        toast (err);
    }
}