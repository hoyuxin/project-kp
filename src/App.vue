<template>
  <div id="app">
    <header-nav />
    <router-view />
    <bottom-section />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderNav from './components/home/HeaderNav.vue';
import BottomSection from './components/home/BottomSection.vue';
@Component({
  components: {
    HeaderNav,
    BottomSection,
  },
})
export default class App extends Vue {}
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
  font-family: 'Microsoft YaHei', 'Open Sans', Arial, 'sans-serif', 'SourceSansPro-Semibold', 'Helvetica Neue',
    'PingFang SC', 'Microsoft YaHei', 'Tahoma', 'Helvetica', 'Arial', '\\5b8b\4F53', 'sans-serif';
}
</style>