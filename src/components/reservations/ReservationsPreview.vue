<template>
    <div class="preview-container">
        <div>
            <h3>Smeštaj {{ reservation.lodging.location }}</h3>
            <p>Opis: {{ reservation.lodging.description }}</p>
            <p>Cena: {{ reservation.lodging.price }}</p>
            <p>Period: {{ reservation.period }} </p>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'reservation'
    ],

    data() {
        return {

        }
    }
}
</script>

<style scoped>
    h3 {
        font-size: 130%;
    }

    p {
        font-size: 120%;
    }

    .preview-container {
        display: flex;
    }

    .preview-image {
        width: 200px;
        height: auto;
        margin-right: 30px;
    }
</style>
