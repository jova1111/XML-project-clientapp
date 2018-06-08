<template>
    <form>
        <div class="field">
        <label class="label">Имејл</label>
        <div class="control">
            <input class="input" type="text" placeholder="Имејл...">
        </div>
        </div>

        <div class="field">
            <label class="label">Шифра</label>
            <div class="control">
                <input class="input" type="password" placeholder="Шифра...">
            </div>
        </div>

        <input type="button" class="button is-info" @click="submit()" value="Улогуј се">
    </form>
</template>

<script>
import authService from "../services/auth-service";

export default {
    

    data() {
        return {

        }
    },
    methods: {
        submit() {
            authService.login();
        }
    }
}
</script>
