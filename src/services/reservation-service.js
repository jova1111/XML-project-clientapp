import axios from 'axios';
import { getApiEndpoint } from '../constants/index.js';
import { Reservation } from '../model/reservation';

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
    },
    getAll(){
        return new Promise((resolve,reject) => {
            let headers = {'Authorization' : 'Bearer ' + JSON.parse(localStorage.getItem('token')).value}
            axios.get(getApiEndpoint() + '/secure/reservations/', {headers : headers}).then(
                ({data}) => {
                    resolve(data);
                },
                ({ response }) =>{
                    reject(response.data);
                })
        });
    },
    get(id){
        return new Promise((resolve,reject) => {
            let headers = {'Authorization' : 'Bearer ' + JSON.parse(localStorage.getItem('token')).value}
            axios.get(getApiEndpoint() + '/secure/reservations/' + id, {headers : headers}).then(
                ({data}) => {
                    resolve(data);
                },
                ({ response }) =>{
                    reject(response.data);
                })
        });
    }

}