<template>
  <div class="product-block">
    <router-view />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Products extends Vue {}
</script>
<style lang="less" scoped>
@media (min-width: 768px) {
}
</style>