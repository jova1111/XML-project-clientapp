import axios from 'axios';
import { getApiEndpoint } from '../constants/index.js';
import { Lodging } from '../model/lodging.js';

export default {
    index() {
        return new Promise((resolve, reject) => {
        axios.get(getApiEndpoint() + '/lodging')
            .then(({ data }) => {
                let lodgings = [];
                for(let lodgingJson of data) {
                    lodgings.push(new Lodging(lodgingJson))
                }
                resolve(lodgings);
            })
            .catch(({ response }) => {
                console.log(response.data);
                reject(response.data);
            })
        });
    }
}