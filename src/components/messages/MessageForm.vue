<template>
    <form v-if="isLoaded">
        <div class="field">
        <label class="label">Rezervacija za</label>
        <div class="control">
            <input disabled class="input" type="text" v-model="message.reservation.lodging.naziv">
        </div>
        </div>

        <div class="field">
            <label class="label">Tekst poruke</label>
            <div class="control">
                <textarea class="textarea" v-model="message.content" placeholder="Tekst poruke..."></textarea>
            </div>
        </div>

        <input type="button" class="button is-info" @click="submit()" value="Posalji">
    </form>
</template>

<script>
    import { Message } from '../../model/message';
    import reservationService from '../../services/reservation-service';

    export default {
        data() {
            return {
                isLoaded: false,
                message: new Message(),
                reservation: {}
            }
        },
        mounted: function() {
            reservationService.get(this.$route.params.reservationId)
                .then(response => {
                    this.message.reservation = response;
                    console.log(this.message)
                    this.isLoaded = true;
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
</script>

