<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item"><router-link to="/">Home</router-link></a>
            <a class="navbar-item"><router-link to="/login">Login</router-link></a>
            <a class="navbar-item"><router-link to="/register">Register</router-link></a>
        </div>
        </nav>
</template>

<script>
export default {
    name: 'navbar',
    data() {
        return {

        }
    }
}
</script>
