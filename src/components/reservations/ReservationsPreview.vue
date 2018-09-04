<template>
    <div class="preview-container">
        <h3>Smeštaj {{ reservation.lodging.location }}</h3>
        <p>Opis: {{ reservation.lodging.description }}</p>
        <p>Cena: {{ reservation.lodging.price }}</p>
        <p>Period: {{ reservation.period.dateFrom.substring(0,10)}} do {{ reservation.period.dateTo.substring(0,10)}}</p>
        <router-link :to="'/message/' + reservation.id" tag="button" class="button">Posalji poruku</router-link>
        <button v-if="Date.parse(reservation.period.dateTo) > Date.now()" class="button is-info" @click="delRes(reservation.id)" > Otkaži </button>
        <router-link v-if="Date.parse(reservation.period.dateTo) < Date.now() && isRated == false" :to="'/comment/' + reservation.id" tag="button" class="button">Oceni</router-link>
        <hr>
    </div>
</template>

<script>
    import commentService from '../../services/comment-service';
    import reservationService from '../../services/reservation-service.js';

    export default {
        props: [
            'reservation'
        ],

        data() {
            return {
                isRated: false
            }
        },
        methods: {
            delRes(id){
                reservationService.del(id)
                    .then((response) => {
                        alert("Rezervacija je otkazana");
                    })
                    .catch((error) => {
                        alert(error);
                    });
            }
        },
        mounted: function() {
            commentService.checkIfRated(this.reservation.lodging.id)
                    .then(() => {
                        this.isRated = true;
                    })
                    .catch(() => {
                        this.isRated = false;
                    });
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

    .preview-image {
        width: 200px;
        height: auto;
        margin-right: 30px;
    }
</style>
