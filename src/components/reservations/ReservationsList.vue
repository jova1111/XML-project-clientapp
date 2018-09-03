<template>
    <div>
        <reservations-preview v-bind:key="reservation.id" v-for="reservation in reservations" :reservation="reservation"></reservations-preview> 
    </div>
</template>


<script>
import ReservationsPreview from './ReservationsPreview.vue';

export default {
    components: {
        'reservations-preview' : ReservationsPreview
    },

    props: [
        "reservations"
    ],
    
    data() {
        return {
            
        }
    },
    mounted: function() {
        console.log("mountovan")
    }
}
</script>