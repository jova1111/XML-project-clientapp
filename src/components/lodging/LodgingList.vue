<template>
    <div>
        <lodging-preview v-bind:key="lodging.id" v-for="lodging in lodgings" :lodging="lodging"></lodging-preview>
    </div>
</template>


<script>
import LodgingPreview from './LodgingPreview.vue';

export default {
    components: {
        'lodging-preview' : LodgingPreview
    },

    props: [
        "lodgings"
    ],
    
    data() {
        return {
            
        }
    },

    mounted() {

    }
}
</script>
