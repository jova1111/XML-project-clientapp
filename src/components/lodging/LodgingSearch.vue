<template>
    <div class="search-container">
        Претражи смештаје:
        <table>
            <tr>
                <td>Град:</td>
                <td><input class="input" v-model="city" type="text" placeholder="Назив града..."></td>
            </tr>
            <tr>
                <td>Почетак периода:</td>
                <td><input class="input" v-model="startDate" type="date" :min="todaysDate"></td>
            </tr>
            <tr>
                <td>Крај периода:</td>
                <td><input class="input" v-model="endDate" type="date" :min="todaysDate"></td>
            </tr>
        </table>
        <p>Tип смештаја:</p>
        <label v-bind:key="'type' + type.id" v-for="type in types"><input type="checkbox"   v-model="type.value">{{ type.typeName }}</label>

        <p>Категорија:</p>
        <label v-bind:key="'category' + category.id" v-for="category in categories"><input type="checkbox" v-model="category.value">{{ category.categoryName }}</label>

        <p>Услуге:</p>
        <label v-bind:key="'facility' + facility.id" v-for="facility in facilities"><input type="checkbox" v-model="facility.value">{{ facility.name }}</label>

        <input type="button" @click="search()" class="button is-info" value="Претражи">
    </div>
</template>


<script>
import lodgingService from '../../services/lodging-service.js';

export default {
    computed: {
        todaysDate() {
            return new Date().toJSON().split('T')[0];
        },
        choosenTypes() {
            return this.types.filter(el => el.value == true).map(el => el.id);
        },
        choosenCategories() {
            return this.categories.filter(el => el.value == true).map(el => el.id);
        },
        choosenFacilities() {
            return this.facilities.filter(el => el.value == true).map(el => el.id);
        }
    },

    data() {
        return {
            city: "",
            startDate: "",
            endDate: "",
            types: [],
            categories: [],
            facilities: []
        }
    },

    methods: {
        search() {
            if(!this.city || !this.startDate || !this.endDate) {
                alert('Морате изабрати град, почетак периода и крај.');
                return;
            }
            this.$emit('search-started');
            let query = { 
                city: this.city, 
                startDate: this.startDate, 
                endDate: this.endDate, 
                types: this.choosenTypes,
                categories: this.choosenCategories,
                facilities: this.choosenFacilities
            };
            lodgingService.search(query)
                .then(response => {
                    this.$emit('search-over', response);
                });
        }
    },
    
    created() {
        lodgingService.getTypes()
            .then(types => {
                this.types = types.map(el => ({...el, value:false }));
            });

        lodgingService.getCategories()
            .then(categories => {
                this.categories = categories.map(el => ({ ...el, value: false}));
            });

        lodgingService.getFacilities()
            .then(facilities => {
                this.facilities = facilities.map(el => ({ ...el, value: false }));
            });
    }
}
</script>

<style scoped>
    .search-container {
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 10px;
        border: 1px solid black;
    }
</style>

