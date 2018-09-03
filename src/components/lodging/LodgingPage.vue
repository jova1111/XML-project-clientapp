<template>
    <div>
        <h2 class="title">Смештај у {{ lodging.location }}</h2>
        <p>Цена: {{ lodging.price }}</p>
        <p>Kaтегорија: {{ lodging.category.categoryName }}</p>
        <p>Опис: {{ lodging.description }}</p>
        <p>Максималан број особа: {{ lodging.guestNumber }}</p>
        <p>Период: од 
        <select v-model ="selected">
         <option v-bind:key="option.id" v-for="option in lodging.periods" v-bind:value="option" 
         v-if="!option.reserved">
             {{ option.dateFrom.substring(0,10) }} до {{ option.dateTo.substring(0,10) }}
        </option>
        </select>
        </p>
        <button class="button is-info" @click="reserv()" > Rezerviši </button>
    </div>

</template>

<script>
import { Lodging } from '../../model/lodging.js';
import lodgingService from '../../services/lodging-service.js';
import reservationService from '../../services/reservation-service.js';
import { Reservation } from '../../model/reservation.js';
import { User } from '../../model/user.js';
import authService from '../../services/auth-service.js';

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
            lodging: new Lodging(),
            reservation: new Reservation(),
            selected: ''
        }
    },
    created() {
        lodgingService.get(this.id)
            .then((response) => {
                this.lodging = response;
                console.log(this.lodging)
            })
            .catch((error) => {
                alert(error);
            });
    },
    methods: {
        reserv(){
            if(authService.isAuthenticated()){
            authService.getUser()
                .then((response) => {
                    this.reservation.lodging = this.lodging;
                    this.reservation.period = this.selected;
                    this.reservation.user = response;
                    this.reservation.activated = false;
                    reservationService.reserv(this.reservation)
                    .then(response => {
                        alert(response);
                     })
                    .catch(error => {
                        alert(error);
                    });
                })
                .catch((error) => {
                    alert(error);
                });
            }else{
                alert("Morate se ulogovati da bi ste izvršili rezervaciju");
                this.$router.push('/login');
            }
        }
  
    }

}
</script>
