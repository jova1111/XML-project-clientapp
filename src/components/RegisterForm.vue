<template>
    <form>
        <div class="field">
            <label class="label">Име</label>
            <div class="control">
                <input class="input" type="text" v-model="user.firstName" placeholder="Име...">
            </div>
        </div>

        <div class="field">
            <label class="label">Презиме</label>
            <div class="control">
                <input class="input" type="text" v-model="user.lastName" placeholder="Презиме...">
            </div>
        </div>

        <div class="field">
            <label class="label">Имејл</label>
            <div class="control">
                <input class="input" type="text" v-model="user.email" placeholder="Имејл...">
            </div>
        </div>

        <div class="field">
            <label class="label">Шифра</label>
            <div class="control">
                <input class="input" type="password" v-model="user.password" placeholder="Шифра...">
            </div>
        </div>

        <input type="button" class="button is-info" @click="submit()" value="Региструј се">
    </form>
</template>


<script>
import User from '../model/user.js';
import authService from '../services/auth-service.js'

export default {
    

    data() {
        return {
            user: new User()
        }
    },

    methods: {
        submit() {
            console.log(authService)
            authService.register(this.user)
                .then(response => {
                    alert(response);
                })
                .catch(error => {
                    alert(error);
                });
        }
    }

}
</script>
