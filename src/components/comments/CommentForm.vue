<template>
    <spinner v-if="!isLoaded"></spinner>
    <form v-else>
        <div class="field">
        <label class="label">Rezervacija za</label>
        <div class="control">
            <input disabled class="input" type="text" v-model="comment.reservation.lodging.name">
        </div>
        </div>

        <div class="field">
            <label class="label">Tekst komentara</label>
            <div class="control">
                <textarea class="textarea" v-model="comment.content" placeholder="Tekst komentara..."></textarea>
            </div>
        </div>

        <div class="field">
            <label class="label">Ocena</label>
            <div class="select">
                <select v-model="comment.rating">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
        </div>

        <input type="button" class="button is-info" @click="send()" value="Posalji">
    </form>
</template>

<script>
    import LoadingSpinner from '../indicators/LoadingSpinner';
    import authService from '../../services/auth-service';
    import commentService from '../../services/comment-service';
    import reservationService from '../../services/reservation-service';
    import { Comment } from '../../model/comment';

    export default {
        components: {
            'spinner': LoadingSpinner
        },
        data() {
            return {
                isLoaded: false,
                comment: new Comment()
            }
        },
        mounted: function() {
            authService.getUser()
                .then(response => {
                    this.comment.user = response;
                })
                .then(() => {
                    reservationService.get(this.$route.params.reservationId)
                        .then(response => {
                            this.comment.reservation = response;
                            this.isLoaded = true;
                        })
                })
                .catch(error => {
                    alert(error);
                });
        },
        methods: {
            send() {
                this.isLoaded = false;
                commentService.addComment(this.comment)
                    .then(response => {
                        alert("Uspesno ste ocenili smestaj.");
                        this.$router.push('/');
                    })
                    .catch(error => {
                        alert(error);
                        this.isLoaded = true;
                    })
            }
        }
    }
</script>

<style scoped>

</style>
