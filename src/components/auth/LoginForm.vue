<template>
    <form>
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

        <input type="button" class="button is-info" @click="submit()" value="Улогуј се">
    </form>
</template>

<script>
import authService from "../../services/auth-service";
import { User } from "../../model/user.js";

export default {
    

    data() {
        return {
            user: new User()
        }
    },
    methods: {
        submit() {
            authService.login(this.user)
                .then(response => {
                    alert("Успешно сте се улоговали!");
                })
                .catch(error => {
                    alert(error);
                })
        }
    }
}
</script>
