<template>
    <div>
        <h3 v-if="type == 'received'" class="subtitle">Od: {{ message.reservation.lodging.agent.firstName }} {{ message.reservation.lodging.agent.lastName }}</h3>
        <h3 v-if="type == 'sent'" class="subtitle">Za: {{ message.reservation.lodging.agent.firstName }} {{ message.reservation.lodging.agent.lastName }}</h3>
        <h3 class="subtitle">Rezervacija za smestaj: {{ message.reservation.lodging.naziv }}</h3>
        <p>{{ message.content }}</p>
        <hr>
    </div>
</template>

<script>
    export default {
        props: [
            'message',
            'type'
        ]
    }
</script>

