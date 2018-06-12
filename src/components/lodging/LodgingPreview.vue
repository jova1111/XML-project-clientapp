<template>
    <div>
        <h3>Смештај у {{ lodging.place }}</h3>
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
