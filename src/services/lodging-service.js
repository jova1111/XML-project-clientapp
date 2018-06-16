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
                    reject(response.data);
                })
        });
    },

    get(id) {
        return new Promise((resolve, reject) => {
            axios.get(getApiEndpoint() + '/lodging/' + id)
                .then(({ data }) => {
                    resolve(new Lodging(data));
                })
                .catch(({ response }) => {
                    reject(response.data);
                })
        });
    },

    getTypes() {
        return new Promise((resolve, reject) => {
            axios.get(getApiEndpoint() + '/getLodgingTypes')
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(({ response }) => {
                    reject(response.data);
                });

        });
    },

    getCategories() {
        return new Promise((resolve, reject) => {
            axios.get(getApiEndpoint() + '/getCategories')
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(({ response }) => {
                    reject(response.data);
                });
        });
    },

    getFacilities() {
        return new Promise((resolve, reject) => {
            axios.get(getApiEndpoint() + '/getFavours')
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(({ response }) => {
                    reject(response.data);
                });
        });
    },

    search(data) {
        let qs = require('qs');
        return new Promise((resolve, reject) => {
            axios.get(getApiEndpoint() + '/lodging/search',
                {
                    params: data, 
                    paramsSerializer: function(params) {
                        return qs.stringify(params, {arrayFormat: 'repeat'})
                    }
                })
                .then(({ data }) => {
                    let lodgings = [];
                    for(let lodgingJson of data) {
                        lodgings.push(new Lodging(lodgingJson))
                    }
                    resolve(lodgings);
                })
                .catch(({ response }) => {
                    reject(response.data);
                });
        });
    }
}