<template>
  <div id="app">
    <div class="app-view">
      <div class="app-content">
        <header-nav />
        <router-view />
      </div>
      <bottom-section />
    </div>
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
.app {
  &-view {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  &-content {
    flex: 1;
  }
}
</style>