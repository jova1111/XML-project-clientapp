<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item"><router-link to="/">Home</router-link></a>
            <a v-if="isLogged" class="navbar-item"><router-link to="/reservations">User Page</router-link></a>
            <a v-if="isLogged" class="navbar-item"><router-link to="/inbox">Inbox</router-link></a>
            <a v-if="isLogged" class="navbar-item" @click="this.logout">Logout</a>
            <a v-if="!isLogged" class="navbar-item"><router-link to="/login">Login</router-link></a>
            <a v-if="!isLogged" class="navbar-item"><router-link to="/register">Register</router-link></a>
        </div>
    </nav>
</template>

<script>
import authService from '../../services/auth-service.js'
export default {
    name: 'navbar',
    data() {
        return {
            
        }
    },
    computed: {
        isLogged: function() {
            return authService.isAuthenticated();
        }
    },
    methods: {
        logout: function() {
                authService.logout();
            },
    }
}
</script>
