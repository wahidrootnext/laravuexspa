<template>
    <div class="lottie" ref="lottie"></div>
</template>

<script>
import lottie from 'lottie-web';
export default {
    props: ['anim'],
    mounted() {
        lottie.loadAnimation({
            container: this.$refs.lottie,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: this.anim
        });
    }
}
</script>