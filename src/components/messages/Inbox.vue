<template>
    <div>
        <spinner v-if="!isLoaded"></spinner>
        <div v-if="isLoaded">
            <a @click.prevent="receivedPage = true">Primljene</a>
            <a @click.prevent="changeToSent">Poslate</a>
            <hr>
            <div v-if="receivedPage">
                <message-preview type="received" :message="message" v-bind:key="message.id" v-for="message in receivedMessages"></message-preview>
            </div>
            <div v-if="!receivedPage">
                <message-preview type="sent" :message="message" v-bind:key="message.id" v-for="message in sentMessages"></message-preview>
            </div>
        </div>
    </div>
</template>

<script>
    import messageService from '../../services/message-service';
    import MessagePreview from './MessagePreview';
    import LoadingSpinner from '../indicators/LoadingSpinner';

    export default {
        components: {
            'message-preview': MessagePreview,
            'spinner': LoadingSpinner
        },
        data() {
            return {
                isLoaded: false,
                receivedMessages: [],
                sentMessages: [],
                gotSentMessages: false,
                receivedPage: true
            }
        },
        mounted: function() {
            messageService.getAllReceived()
                .then(response => {
                    this.receivedMessages = response;
                    this.isLoaded = true;
                    console.log(this.messages)
                })
                .catch(error => {
                    alert(error);
                });
        },
        methods: {
            changeToSent() {
                if(!this.gotSentMessages) {
                    this.isLoaded = false;
                    messageService.getAllSent()
                        .then(response => {
                            this.sentMessages = response;
                            this.isLoaded = true;
                            this.gotSentMessages = true;
                        })
                        .catch(error => {
                            alert(error);
                        });
                }
                this.receivedPage = false;
            }
        }
    }
</script>

<style scoped>
    a {
        margin-right: 30px;
    }
</style>


