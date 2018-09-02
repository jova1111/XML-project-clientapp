import axios from 'axios';
import { Message } from '../model/message';
import { getApiEndpoint } from '../constants/index.js';

export default {

    getAllReceived() {
        return new Promise((resolve, reject) => {
            let headers = { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token')).value };
            axios.get(getApiEndpoint() + '/secure/messages/user/received', { headers: headers })
                .then(({ data }) => {
                    let messages = [];
                    for(let messageJson of data) {
                        messages.push(new Message(messageJson))
                    }
                    resolve(messages);
                }) 
                .catch(({ response }) => {
                    console.log(response)
                    reject(response.data);
                });
        });
    },

    getAllSent() {
        return new Promise((resolve, reject) => {
            let headers = { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token')).value };
            axios.get(getApiEndpoint() + '/secure/messages/user/sent', { headers: headers })
                .then(({ data }) => {
                    let messages = [];
                    for(let messageJson of data) {
                        messages.push(new Message(messageJson))
                    }
                    resolve(messages);
                }) 
                .catch(({ response }) => {
                    console.log(response)
                    reject(response.data);
                });
        });
    },

    sendToAgent(message ,agentId) {
        return new Promise((resolve, reject) => {
            let headers = { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token')).value };
            axios.post(getApiEndpoint() + '/secure/messages/user/' + agentId + '/send', message, { headers: headers })
                .then(response => {
                    resolve(response);
                }) 
                .catch(({ response }) => {
                    console.log(response)
                    reject(response.data);
                });
        });
    }

}