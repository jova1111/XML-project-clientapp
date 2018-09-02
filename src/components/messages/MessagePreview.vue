<template>
    <div>
        <h3 class="subtitle">From: {{ message.reservation.lodging.agent.firstName }} {{ message.reservation.lodging.agent.lastName }}</h3>
        <h3 class="subtitle">Reservation: {{ message.reservation.lodging.naziv }}</h3>
        <p>{{ message.content }}</p>
        <hr>
    </div>
</template>

<script>
    export default {
        props: [
            'message'
        ]
    }
</script>

