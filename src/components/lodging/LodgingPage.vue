<template>
    <div>
        <h2 class="title">Naziv {{ lodging.name }}</h2>
        <h3>Mesto: {{ lodging.location }} </h3>
        <p>Cena: {{ lodging.price }}</p>
        <p>Kategorija: {{ lodging.category.categoryName }}</p>
        <p>Opis: {{ lodging.description }}</p>
        <p>Maksimalan broj osoba: {{ lodging.guestNumber }}</p>
        <p>Period: od 
        <select v-model ="selected">
         <option v-bind:key="option.id" v-for="option in lodging.periods" v-bind:value="option" 
         v-if="!option.reserved">
             {{ option.dateFrom.substring(0,10) }} do {{ option.dateTo.substring(0,10) }}
        </option>
        </select>
        </p>
        <button class="button is-info" @click="reserv()" > Rezerviši </button>
        <div v-for="srcsi in lodging.images" v-bind:value="srcsi">
              <img class="preview-image" :src="srcsi">
        </div>
        <button class="button is-info" @click="showComment()" > ... </button>
        <div v-if="isActive">
        <p>Komentari:</p>
        <div v-for="comment in comments" v-bind:value="comment" v-if="comment.approved">
            <p> {{ comment.content }}
            <hr/>
            </p>
        </div>
        </div>
    </div>

</template>

<script>
import { Lodging } from '../../model/lodging.js';
import lodgingService from '../../services/lodging-service.js';
import reservationService from '../../services/reservation-service.js';
import { Reservation } from '../../model/reservation.js';
import { User } from '../../model/user.js';
import authService from '../../services/auth-service.js';
import commentService from '../../services/comment-service.js';

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
            selected: '',
            comments: [],
            isActive: false
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
        },
        showComment(){
            this.isActive = !this.isActive;
             commentService.getMy(this.id).then((response) => {
            this.comments = response;
           })
            .catch((error) => {
            alert(error);
             });
        }

  
    }

}
</script>
<style scoped>
    .preview-image {
        width: 200px;
        height: auto;
        margin-right: 30px;
    }
</style>