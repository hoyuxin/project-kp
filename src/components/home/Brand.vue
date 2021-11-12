<template>
  <div class="brand-block">
    <div class="brand-item">
      <div class="brand-image">
        <img :src="images.imgCountry"
             alt="brand-img" />
      </div>
      <div class="brand-content">
        <div class="brand-content-container">
          <p class="brand-sub-title">可信賴的品牌</p>
          <p>我們的目標在於利用金融科技的最新研究成果， 為用戶提供卓越的交易條件和最先進的交易工具。我們的核心使命是為全球客戶及機構提供最佳的交易體驗。</p>
          <p>我們專業的多語言客服團隊24/7全天候為您提供卓越的客服支援</p>
        </div>
      </div>
    </div>
    <div class="brand-item brand-order">
      <div class="brand-image">
        <img :src="images.imgCountry1"
             alt="brand-img" />
      </div>
      <div class="brand-content">
        <div class="brand-content-container">
          <p class="brand-sub-title">原油、股票、虛擬貨幣</p>
          <p>槓桿最高1:200</p>
          <p>我們不斷開發新產品來滿足交易者需求，新增美國熱門股票CFDs差價合約產品。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import imgCountry from '@/assets/home/pic-building-1@2x.png';
import imgCountry1 from '@/assets/home/pic-building-2@2x.png';

@Component
export default class Brand extends Vue {
  public images: {} = { imgCountry, imgCountry1 };
}
</script>
<style lang="less" scoped>
.brand {
  &-image {
    img {
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }
  }
  &-item {
    background-color: red;
    color: #fff;
  }
  &-order {
    background-color: #232;
  }
  &-content-container {
    padding: 40px 20px;
    line-height: 2;
  }

  &-sub-title {
    font-size: 30px;
    padding: 20px 0;
  }
}
@media (min-width: 768px) {
  .brand {
    &-item {
      display: flex;
      align-items: center;
    }
    &-image,
    &-content {
      width: 50%;
    }
    &-content-container {
      max-width: 600px;
      padding: 0;
      margin: auto;
      text-align: center;
    }
    &-order {
      .brand-content {
        order: -1;
      }
    }
    &-sub-title {
      font-size: 40px;
    }
  }
}
</style>