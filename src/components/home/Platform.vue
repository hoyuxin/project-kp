<template>
  <div class="platform-block">
    <div class="platform-mt4 block-border">
      <div>
        <p class="block-title">Meta Trade 4 {{$t('home.download')}}</p>
        <span class="block-content">{{$t('home.bottomSection.title')}}</span>
      </div>
      <div class="platform-system">
        <div class="platform-system__item">
          <p>{{$t('home.bottomSection.android')}}</p>
          <a class="download"
             href="https://reurl.cc/L7Zo3x"
             target="_blank">{{$t('home.download')}} ></a>
        </div>
        <div class="platform-system__item">
          <p>{{$t('home.bottomSection.ios')}}</p>
          <a class="download"
             href="https://reurl.cc/NZEoj5"
             target="_blank">{{$t('home.download')}} ></a>
        </div>
      </div>
    </div>
    <div class="company-intro block-border">
      <div class="company-img-block">
        <img src="https://picsum.photos/seed/picsum/360/440"
             alt="company-img"
             class="company-img">
      </div>
      <div>
        <p class="block-title company">KP</p>
        <p class="company-intro__content">
          {{$t('home.bottomSection.companyIntro')}}
        </p>
      </div>
    </div>
    <div class="company-brand block-border">
      <div>
        <span class="block-title">{{$t('home.bottomSection.brand.title')}}</span>
        <ul class="company-brand__list">
          <li><i class="el-icon-check" />{{$t('home.bottomSection.brand.label1')}}</li>
          <li><i class="el-icon-check" />{{$t('home.bottomSection.brand.label2')}}</li>
          <li><i class="el-icon-check" />{{$t('home.bottomSection.brand.label3')}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Platform extends Vue {}
</script>
<style lang="less" scoped>
.platform {
  &-block {
    padding: 0 40px;
  }
  &-mt4 {
    box-sizing: border-box;
    padding: 10px 20px;
  }
  &-system {
    list-style: none;
    &__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
      &:first-child {
        border-bottom: 1px solid #ddd;
      }
      .download {
        cursor: pointer;
        color: #2067a6;
      }
    }
  }
}
.company {
  &-intro {
    // display: flex;
    // align-items: flex-start;
    &__content {
      padding: 20px;
      margin: 0;
    }
  }
  &-img {
    &-block {
      width: 100%;
    }
    width: 100%;
    vertical-align: middle;
  }
  &-brand {
    padding: 20px;
    text-align: center;
    &__list {
      list-style: none;
      padding: 0;
      line-height: 2;
    }
  }
}
.block {
  &-border {
    border: 1px solid #ddd;
    margin: 20px 0;
  }
  &-title {
    color: #000;
    font-weight: bold;
    &.company {
      margin: 0;
      padding: 50px 0 0 20px;
    }
  }
  &-content {
    padding: 10px 0;
  }
}
@media (min-width: 1200px) {
  .platform {
    &-block {
      display: flex;
      justify-content: center;
      padding: 30px 0;
    }
  }
  .company {
    &-intro {
      width: 500px;
      margin: 0 20px;
      display: flex;
      align-items: flex-start;
    }
    &-brand {
      width: 300px;
      text-align: left;
    }
    &-img {
      border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;
    }
  }

  .block {
    &-border {
      border-radius: 10px;
      margin: 0 10px;
    }
  }
}
</style>