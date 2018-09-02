<template>
    <div v-if="isLoaded">
        <message-preview :message="message" v-bind:key="message.id" v-for="message in messages"></message-preview>
    </div>
</template>

<script>
    import messageService from '../../services/message-service';
    import MessagePreview from './MessagePreview';

    export default {
        components: {
            'message-preview': MessagePreview
        },
        data() {
            return {
                isLoaded: false,
                messages: []
            }
        },
        mounted: function() {
            messageService.getAll()
                .then(response => {
                    this.messages = response;
                    this.isLoaded = true;
                    console.log(this.messages)
                })
                .catch(error => {
                    alert(error);
                })
        }
    }
</script>

<style scoped>

</style>


