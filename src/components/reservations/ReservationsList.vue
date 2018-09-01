<template>
    <div>
        <reservations-preview v-bind:key="reservations.id" v-for="reservation in reservations" : reservation="reservation"></reservations-preview> 
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

    mounted() {

    }
}
</script>