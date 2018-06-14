<template>
    <div>
        <router-link :to="'/lodging/' + lodging.id"><h3>Смештај у {{ lodging.place }}</h3></router-link>
        <p>{{ lodging.description }}</p>
        <p>Цена: {{ lodging.price }}</p>
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
