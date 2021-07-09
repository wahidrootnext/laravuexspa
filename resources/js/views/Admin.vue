<template>
    <div class="min-h-screen bg-indigo-50">
        <navbar/>
        <div class="flex">
            <div class="w-48 bg-gray-700 min-h-screen text-white text-sm py-1">
                <sidebar/>
            </div>
            <div class="flex-1 p-5">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from '../components/Navbar.vue';
    import Sidebar from '../components/Sidebar.vue';
    export default {
        components: {
            Navbar,
            Sidebar
        }
    }
</script>

<style>
    th, td {
		padding: 8px;
	}
</style>