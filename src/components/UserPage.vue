<template>
    <div>
        <spinner v-if="!isReservations"></spinner>
        <div v-else>
        <!--  <reservations-list v-if="!isReservations" :reservations="reservations"></reservations-list> -->
                <h1>Sve vaše rezervacije</h1>
                <div v-bind:key="reservation.id" v-for="reservation in reservations">
                <h3>Smeštaj {{ reservation.lodging.location }}</h3>
                    <p>Opis: {{ reservation.lodging.description }}</p>
                    <p>Cena: {{ reservation.lodging.price }}</p>
                    <p>Period: {{ reservation.period.dateFrom.substring(0,10)}} do {{ reservation.period.dateTo.substring(0,10)}}</p>
                    <router-link :to="'/message/' + reservation.id" tag="button" class="button">Posalji poruku</router-link>
                    <hr>
                </div>
        </div>
    </div>
</template>

<script>
    import LoadingSpinner from './indicators/LoadingSpinner.vue';
    import reservationService from '../services/reservation-service.js';
    //import ReservationList from './reservations/ReservationsList.vue';
    import authService from '../services/auth-service.js';


    export default {
        name: "userPage",
    
        components: {
            "spinner": LoadingSpinner,
    //     "reservations-list": ReservationList
        },

        data() {
            return {
                reservations: [],
                isReservations: false,
            }
        },

        methods: {
        },

        created() {     
            reservationService.getAll()
                .then(  data => {
                    console.log(data);
                    this.reservations = data;
                    this.isReservations = true;
                })
                .catch(error => {
                    alert(error);
                });   
        }
            
    }
</script>
<style scoped>
     h1 {
        font-size: 160%;
        font-style: bold;
        text-align: center;
    }

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
