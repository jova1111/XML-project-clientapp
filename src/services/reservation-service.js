import axios from 'axios';
import { getApiEndpoint } from '../constants/index.js';

export default {
    reserv(reservation) {
        return new Promise((resolve, reject) => {
            axios.post(getApiEndpoint() + '/newReservation', reservation).then(
                (success) => {
                    resolve('Poslali ste zahtev za rezervaciju.');
                }, 
                ({ response }) => {
                    reject(response.data);
                })
        });
    }

}