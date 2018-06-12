<template>
    <lodging-list :lodgings="lodgings"></lodging-list>
</template>

<script>
import LodgingList from './lodging/LodgingList.vue';
import lodgingService from '../services/lodging-service.js';


export default {
    name: "home",

    components: {
        "lodging-list": LodgingList
    },

    data() {
        return {
            lodgings: []
        }
    },

    mounted() {
        lodgingService.index()
            .then(response => {
                for(let lodging of response) {
                    console.log(lodging);
                    this.lodgings.push(lodging);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
}
</script>

