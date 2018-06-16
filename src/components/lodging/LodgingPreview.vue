<template>
    <div class="preview-container">
        <div>
            <img class="preview-image" :src="lodging.images[0]">
        </div>
        <div>
            <router-link :to="'/lodging/' + lodging.id"><h3>Смештај у {{ lodging.location }}</h3></router-link>
            <p>{{ lodging.description }}</p>
            <p>Цена: {{ lodging.price }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'lodging'
    ],

    data() {
        return {

        }
    }
}
</script>

<style scoped>
    h3 {
        font-size: 130%;
    }

    p {
        font-size: 120%;
    }

    .preview-container {
        display: flex;
    }

    .preview-image {
        width: 200px;
        height: auto;
        margin-right: 30px;
    }
</style>
