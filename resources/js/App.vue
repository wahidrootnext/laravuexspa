<template>
    <notifications />
    <router-view></router-view>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .dropdown:focus-within .dropdown-menu {
		opacity:1;
		transform: translate(0) scale(1);
		visibility: visible;
	}
    td, th {
        padding: .5rem;
    }
</style>