<template>
  <div class="brand-block">
    <div class="brand-item">
      <div class="brand-image">
        <img :src="images.imgCountry"
             alt="brand-img" />
      </div>
      <div class="brand-content">
        <div class="brand-content-container">
          <p class="brand-sub-title">{{$t('home.brand.block1.title')}}</p>
          <p>{{$t('home.brand.block1.item1')}}</p>
          <p>{{$t('home.brand.block1.item2')}}</p>
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
          <p class="brand-sub-title">{{$t('home.brand.block2.title')}}</p>
          <p>{{$t('home.brand.block2.item1')}}</p>
          <p>{{$t('home.brand.block2.item2')}}</p>
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
  public images = { imgCountry, imgCountry1 };
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
  &-content {
    box-sizing: border-box;
    padding: 0 20px;
    &-container {
      padding: 40px 20px;
      line-height: 2;
    }
  }
  &-sub-title {
    font-size: 24px;
    padding: 20px 0;
  }
}
@media (min-width: 768px) {
  .brand {
    &-item {
      display: flex;
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
@media (min-width: 1200px) {
  .brand {
    &-item {
      align-items: center;
    }
  }
}
</style>