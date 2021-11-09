<template>
    <div>
        <banner-section/>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import BannerSection from '../components/BannerSection.vue';

@Component({
    components: {
        BannerSection,
    },
})
export default class Home extends Vue {}
</script>

<style>
</style>