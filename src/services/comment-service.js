import axios from 'axios'
import { getApiEndpoint } from '../constants';

export default {
    addComment(comment) {
        return new Promise((resolve, reject) => {
            let data = {
                content: comment.content,
                lodgingId: comment.reservation.lodging.id,
                publisherEmail: comment.user.email,
                rating: comment.rating
            }
            console.log(data);
            axios.post('http://localhost:8010/cloud-rating/us-central1/addRating', data)
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(({ response }) => {
                    reject(response.data);
                });

        });

        
    },

    checkIfRated(lodgingId) {
        let headers = { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token')).value };
        return new Promise((resolve, reject) => {
            axios.get(getApiEndpoint() + '/secure/check_user_rating/' + lodgingId, { headers: headers })
                .then(() => {
                    resolve();
                })
                .catch(({ response }) => {
                    reject(response.data);
                });

        });
    },
    getMy(lodgingId){
        return new Promise((resolve,reject) => {
            axios.get(getApiEndpoint() + '/comments/' + lodgingId)
            .then(({data}) =>{
                resolve(data);
                console.log(data);
            })
            .catch(({ response }) => {
                    reject(response.data);
                });
        });
    }
}