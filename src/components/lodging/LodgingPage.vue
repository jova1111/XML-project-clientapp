<template>
    <div>
        <h2 class="title">Смештај у {{ lodging.location }}</h2>
        <p>Цена: {{ lodging.price }}</p>
        <p>Kaтегорија: {{ lodging.category }}</p>
        <p>Опис: {{ lodging.description }}</p>
        <p>Максималан број особа: {{ lodging.guestNumber }}</p>
        <h3 class="subtitle">Периоди:</h3>
        <ul>
            <li v-bind:key="index" v-for="(period, index) in lodging.periods">Од {{ period.dateFrom | formattedDate }} до {{ period.dateTo | formattedDate }}</li>
        </ul>
    </div>

</template>

<script>
import { Lodging } from '../../model/lodging.js';
import lodgingService from '../../services/lodging-service.js';

export default {
    props: [
        "id"
    ], 
    filters: {
        formattedDate: function (value) {
            if (!value) return '';
            let date = new Date(value);
            value = date.toLocaleDateString("en-GB");
            return value;
        }
    },
    data() {
        return {
            lodging: new Lodging()
        }
    },
    created() {
        lodgingService.get(this.id)
            .then((response) => {
                this.lodging = response;
            })
            .catch((error) => {
                alert(error);
            });
    }
}
</script>
