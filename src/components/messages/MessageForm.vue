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

        <input type="button" class="button is-info" @click="send()" value="Posalji">
    </form>
</template>

<script>
    import { Message } from '../../model/message';
    import reservationService from '../../services/reservation-service';
    import messageService from '../../services/message-service';

    export default {
        data() {
            return {
                isLoaded: false,
                message: new Message(),
            }
        },
        mounted: function() {
            reservationService.get(this.$route.params.reservationId)
                .then(response => {
                    this.message.reservation = response;
                    this.isLoaded = true;
                    console.log(this.message.reservation)
                })
                .catch(error => {
                    console.log(error);
                })
        },
        methods: {
            send() {
                this.isLoaded = false;
                messageService.sendToAgent(this.message, this.message.reservation.lodging.agent.id)
                    .then(response => {
                        alert("Poruka uspesno poslata!");
                        this.$router.push('/');
                    })
                    .catch(error => {
                        alert(error);
                        this.isLoaded = true;
                    });
            }
        }
    }
</script>

