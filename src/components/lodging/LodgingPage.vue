<template>
    <div>
        <h2>Смештај у {{ lodging.location }}</h2>
        <p>Цена: {{ lodging.price }}</p>
        <p>Kaтегорија: {{ lodging.category }}</p>
        <p>Опис: {{ lodging.description }}</p>
        <p>Период: од {{ lodging.fromDate }} до {{ lodging.toDate }}</p>
        <p>Максималан број особа: {{ lodging.guestNumber }}</p>
        
    </div>

</template>

<script>
import { Lodging } from '../../model/lodging.js';
import lodgingService from '../../services/lodging-service.js';

export default {
    props: [
        "id"
    ], 
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

<style scoped>
    h2 {
        font-size: 150%;
    }

</style>
