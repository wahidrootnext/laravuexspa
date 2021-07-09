<template>
    Welcome {{ user?.name }}
</template>

<script>
    import { mapGetters } from "vuex";
    export default {
        computed: {
            ...mapGetters("auth", {
                user: 'getUser'
            })
        }
    }
</script>