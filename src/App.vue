<template>
  <div id="app">
    <header-nav />
    <router-view />
  </div>
</template>

<script lang="ts">
import HeaderNav from './components/HeaderNav.vue';
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
    HeaderNav,
  },
})
export default class App extends Vue {}
</script>

<style lang="less">
</style>