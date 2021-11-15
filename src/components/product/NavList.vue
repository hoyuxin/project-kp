<template>
  <ul class="product-list">
    <li :class="['product-item',{'current-index': currentIndex === item.index}]"
        v-for="item in list"
        :key="item.index"
        @click="goPage(item)">{{$t(item.label)}}</li>
  </ul>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
interface List {
  label: string;
  index: number;
  routerName: string;
}
@Component
export default class NavList extends Vue {
  @Prop({ default: () => 0 })
  public currentIndex!: number;
  public get list() {
    return [
      { label: 'home.indices', index: 1, routerName: 'Indices' },
      { label: 'home.commodity', index: 2, routerName: 'Commodity' },
      { label: 'home.currency', index: 3, routerName: 'Currency' },
    ];
  }
  public goPage(item: List) {
    if (this.currentIndex === item.index) {
      return;
    } else {
      this.$router.push({ name: item.routerName });
    }
  }
}
</script>
<style lang="less" scoped>
@--color-red: #db351f;

.product {
  &-list {
    list-style: none;
    display: flex;
    align-items: center;
    padding: 20px 0 40px 0;
  }
  &-item {
    padding: 0 20px;
    cursor: pointer;
    &.current-index {
      color: #fff;
      background-color: @--color-red;
      padding: 5px 20px;
      border-radius: 20px;
    }
  }
}
@media (min-width: 768px) {
}
</style>