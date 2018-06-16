<template>
    <div v-if="!isLoading">
        <lodging-search @search-started="isSearching=true" @search-over="searchDone"></lodging-search>
        <lodging-list v-if="!isSearching" :lodgings="lodgings"></lodging-list>
        <spinner v-else></spinner>
    </div>
    <spinner v-else></spinner>
</template>

<script>
import LodgingList from './lodging/LodgingList.vue';
import LodgingSearch from './lodging/LodgingSearch.vue';
import LoadingSpinner from './indicators/LoadingSpinner.vue';
import lodgingService from '../services/lodging-service.js';


export default {
    name: "home",

    components: {
        "spinner": LoadingSpinner,
        "lodging-list": LodgingList,
        "lodging-search": LodgingSearch
    },

    data() {
        return {
            lodgings: [],
            isLoading: true,
            isSearching: false
        }
    },

    methods: {
        searchDone(results) {
            this.lodgings = results;
            this.isSearching = false;
        }
    },

    mounted() {
        lodgingService.index()
            .then(response => {
                this.lodgings = response;
                this.isLoading = false;
            })
            .catch(error => {
                alert(error);
            });
    }
}
</script>

