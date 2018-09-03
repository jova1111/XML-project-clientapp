<template>
    <div>
        <h3 v-if="type == 'received'" class="subtitle">Od: {{ message.reservation.lodging.agent.firstName }} {{ message.reservation.lodging.agent.lastName }}</h3>
        <h3 v-if="type == 'sent'" class="subtitle">Za: {{ message.reservation.lodging.agent.firstName }} {{ message.reservation.lodging.agent.lastName }}</h3>
        <h3 class="subtitle">Rezervacija za smestaj: {{ message.reservation.lodging.name }}</h3>
        <p>{{ message.content }}</p>
        <p class="date">{{ message.dateSent | formattedDate }}</p>
        <hr>
    </div>
</template>

<script>
    export default {
        filters: {
            formattedDate: function (value) {
                if (!value) return '';
                var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
                let date = new Date(value);
                value = date.toLocaleString("en-GB");
                return value;
            }
        },
        props: [
            'message',
            'type'
        ]
    }
</script>

<style scoped>
    .date {
        color: gray;
    }
</style>

