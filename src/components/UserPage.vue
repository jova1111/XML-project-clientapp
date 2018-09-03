<template>
    <div>
        <spinner v-if="!isReservations"></spinner>
        <reservations-list v-else :reservations="reservations"></reservations-list>   
    </div>
</template>

<script>
    import LoadingSpinner from './indicators/LoadingSpinner';
    import reservationService from '../services/reservation-service';
    import authService from '../services/auth-service';
    import messageService from '../services/message-service';
    import ReservationList from './reservations/ReservationsList';


    export default {
        name: "userPage",
    
        components: {
            "spinner": LoadingSpinner,
            'reservations-list': ReservationList
        },

        data() {
            return {
                reservations: [],
                isReservations: false,
                isRated: false
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
