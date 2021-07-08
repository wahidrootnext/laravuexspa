<template>
    <ul>
        <li><router-link :to="{ name: 'dashboard' }" class="p-2 block"><i class="las la-tachometer-alt"></i><span class="ml-1">Dashboard</span></router-link></li>
        <li><router-link :to="{ name: 'products' }" class="p-2 block"><i class="las la-tachometer-alt"></i><span class="ml-1">Products</span></router-link></li>
        <li><router-link :to="{ name: 'orders' }" class="p-2 block"><i class="las la-tachometer-alt"></i><span class="ml-1">Orders</span></router-link></li>
    </ul>
</template>

<script>
    export default {
        
    }
</script>