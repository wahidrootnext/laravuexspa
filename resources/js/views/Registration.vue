<template>
    <div class="flex h-screen">
        <div class="w-8/12 p-4 bg-gray-100">
            <div class="flex h-full justify-center items-center">
                <lottie :anim="require('../../svg/blogging/blogging.json')"/>
            </div>
        </div>
        <div class="w-4/12 p-8 self-center">
            <form class="grid grid-cols-1 gap-3">
                <div class="block text-2xl font-bold text-indigo-700 pb-2">Create an account</div>
                <label class="block">
                    <span class="text-gray-700 font-medium">Email address</span>
                    <input type="email" class="mt-1 block w-full rounded-0 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                </label>
                <label class="block">
                    <span class="text-gray-700 font-medium">Password</span>
                    <input type="password" class="mt-1 block w-full rounded-0 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                </label>
                <label class="block pt-2">
                    <button type="button" class="bg-indigo-500 text-white px-6 py-3 w-full rounded font-bold hover:bg-indigo-600 transition duration-200 each-in-out">Submit</button>
                </label>
                <label class="block text-center">
                    Already have an account? <router-link :to="{ name: 'login' }" class="text-indigo-500">Log in</router-link>
                </label>
            </form>
        </div>
    </div>
</template>

<script>
    import Lottie from '../components/Lottie.vue';
    export default {
        components: {
            Lottie
        }
    }
</script>