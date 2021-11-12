<template>
  <div>
    <banner-section />
    <intro />
    <platform />
    <location />
    <brand />
    <trade />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BannerSection from '../components/home/BannerSection.vue';
import Intro from '../components/home/Intro.vue';
import Location from '../components/home/Location.vue';
import Brand from '../components/home/Brand.vue';
import Platform from '../components/home/Platform.vue';
import Trade from '../components/home/Trade.vue';

@Component({
  components: {
    BannerSection,
    Intro,
    Location,
    Brand,
    Platform,
    Trade,
  },
})
export default class Home extends Vue {}
</script>

<style lang="less">
</style>