import axios from 'axios';
import { Message } from '../model/message';
import { getApiEndpoint } from '../constants/index.js';

export default {

    getAll() {
        return new Promise((resolve, reject) => {
            let headers = { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token')).value };
            axios.get(getApiEndpoint() + 'secure/user/messages', { headers: headers }).then(
                ({ data }) => {
                    let messages = [];
                    for(let messageJson of data) {
                        messages.push(new Message(messageJson))
                    }
                    resolve(messages);
                }, 
                ({ response }) => {
                    console.log(response)
                    reject(response.data);
                })
        });
    }

}