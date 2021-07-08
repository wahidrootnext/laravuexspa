<template>
    <ul>
        <li><router-link :to="{ name: 'dashboard' }">Dashboard</router-link></li>
        <li><router-link :to="{ name: 'products' }">Products</router-link></li>
        <li><router-link :to="{ name: 'orders' }">Orders</router-link></li>
    </ul>
</template>

<script>
    export default {
        
    }
</script>