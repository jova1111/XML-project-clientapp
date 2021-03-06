import axios from 'axios';
import { getApiEndpoint } from '../constants/index.js';
import router from '../router';

export default {
    login(user) {
        var data = {
            email: user.email,
            password: user.password
        };
        return new Promise((resolve, reject)=> {
            axios.post(getApiEndpoint() + '/login', data)
                .then(({ data }) => {
                    this.authenticate(data.token, data.expiresIn);
                    resolve("Успешно сте се улоговали!");
                })
                .catch(({ response }) => {
                    reject(response.data)
                });
            
        });
    },

    authenticate(tokenStr, expDate) {
        let token = { value: tokenStr, expirationDate: Date.now() + expDate * 1000 }
        localStorage.setItem('token', JSON.stringify(token));
    },

    isAuthenticated() {
        let tokenJson = localStorage.getItem('token');
        if (!tokenJson) {
            return false;
        }
        let token = JSON.parse(tokenJson);
        if(Date.now() > token.expirationDate) {
            localStorage.removeItem('token');
            return false;
        }
        return true;
    },

    register(user) {
        return new Promise((resolve, reject) => {
            axios.post(getApiEndpoint() + '/user', user).then(
                (success) => {
                    resolve('Успешно сте се регистровали.');
                }, 
                ({ response }) => {
                    reject(response.data);
                })
        });
    },
    getUser() {
        
        let headers = {'Authorization' : 'Bearer ' + JSON.parse(localStorage.getItem('token')).value}
        return new Promise((resolve, reject) => {
            axios.get(getApiEndpoint() + '/secure/getUser/', {headers : headers}).then(
                ({data}) => {
                    resolve(data);
                }, 
                ({ response }) => {
                    reject(response.data);
                })
        });
    },
    logout() {
        localStorage.removeItem('token');
        router.push('/');
        window.location.reload();
    }

}