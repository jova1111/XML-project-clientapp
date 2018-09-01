<template>
    <div>
        <p v-bind:key="message.id" v-for="message in messages">{{ message.content }}</p>
    </div>
</template>

<script>
    import messageService from '../../services/message-service';

    export default {
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
                })
                .catch(error => {
                    alert(error);
                })
        }
    }
</script>

<style scoped>

</style>


