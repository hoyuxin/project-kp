<template>
  <div class="trade-block">
    <div class="trade-img">
      <img :src="imgTrade"
           alt="trade">
    </div>
    <div class="trade-content">
      <p class="trade-sub-title">{{$t('home.platform.subTitle')}}</p>
      <p class="trade-title">TRADING TERMINAL</p>
      <div v-for="item in list"
           :key="item.label"
           class="trade-item">
        <div class="trade-point">
          <div class="trade-point__inside" />
        </div><span>{{$t(item.label)}}</span>
      </div>
      <p class="trade-intro">{{$t('home.platform.content')}}</p>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import imgTrade from '@/assets/home/trader.png';

@Component
export default class Trade extends Vue {
  public imgTrade = imgTrade;
  public get list() {
    return [
      { index: 0, label: 'home.platform.item1' },
      { index: 1, label: 'home.platform.item2' },
      { index: 2, label: 'home.platform.item3' },
      { index: 3, label: 'home.platform.item4' },
    ];
  }
}
</script>
<style lang="less" scoped>
@--color-red: #db351f;
.trade {
  &-block {
    color: rgba(10, 30, 61, 0.7);
  }
  &-item {
    display: flex;
    line-height: 1.71;
    align-items: center;
    cursor: pointer;
    padding-bottom: 20px;
    &:hover {
      .trade-point {
        border-color: @--color-red;
        &__inside {
          width: 8px;
          height: 8px;
          border-radius: 100%;
          background-color: @--color-red;
          position: relative;
          top: 17%;
          right: -22%;
        }
      }
    }
  }
  &-img {
    padding: 50px 0;
    background-color: #f7f7f9;
    text-align: center;
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
  &-content {
    padding-left: 30px;
  }
  &-point {
    width: 15px;
    height: 15px;
    border-radius: 100%;
    border: 1px solid #ccc;
    box-sizing: border-box;
    margin-right: 10px;
  }
  &-intro {
    max-width: 500px;
    line-height: 1.71;
    padding: 0 20px 20px;
    font-size: 14px;
  }
  &-sub-title {
    font-style: italic;
    padding-top: 20px;
  }
}
@media (min-width: 768px) {
  .trade {
    &-block {
      display: flex;
      align-items: center;
      background-color: #f7f7f9;
    }

    &-img {
      padding: 50px 0;
      width: 50%;
      text-align: center;
    }
    &-content {
      box-sizing: border-box;
      width: 50%;
      padding-left: 30px;
      background-color: #fff;
    }
    &-title {
      font-size: 30px;
      padding: 20px 0 40px;
    }
  }
}
@media (min-width: 1440px) {
  .trade {
    &-block {
      align-items: inherit;
    }
    &-content {
      padding: 80px 0 0 150px;
    }
    &-title {
      font-size: 40px;
    }
  }
}
</style>