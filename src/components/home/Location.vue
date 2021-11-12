<template>
  <div class="location-block">
    <div class="location-map location-left">
      <img :src="imgMap"
           alt="map"
           class="img-map">
      <div class="location-canada">
        <span class="location-point" />
        <p class="location-country">{{$t('home.location.ca')}}</p>
      </div>
      <div class="location-uk">
        <span class="location-point" />
        <p class="location-country">{{$t('home.location.uk')}}</p>
      </div>
      <div class="location-au">
        <span class="location-point" />
        <p class="location-country">{{$t('home.location.au')}}</p>
      </div>
    </div>
    <div class="location-content location-right">
      <div class="location-agency">
        <p>{{$t('home.location.agency.title')}}</p>
        <span>{{$t('home.location.agency.content')}}</span>
      </div>
      <div class="location-icon-block">
        <div v-for="item in iconList"
             :key="item.label">
          <i :class="[item.iconClass,'location-icon']" />
          <p>{{$t(item.label)}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import map from '@/assets/home/pic-map.png';

@Component
export default class Location extends Vue {
  public imgMap: string = map;
  public get iconList() {
    return [
      {
        iconClass: 'el-icon-map-location',
        label: 'home.location.icon.label1',
      },
      {
        iconClass: 'el-icon-s-flag',
        label: 'home.location.icon.label2',
      },
      {
        iconClass: 'el-icon-trophy',
        label: 'home.location.icon.label3',
      },
      {
        iconClass: 'el-icon-s-help',
        label: 'home.location.icon.label4',
      },
    ];
  }
}
</script>
<style lang="less" scoped>
@main-color: #2067a6;
.location {
  &-block {
    padding: 50px 0;
    position: relative;
  }
  &-map {
    position: relative;
    margin: 0 auto 40px;
  }
  &-point {
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 100%;
    background-color: @main-color;
    border: 5px solid #fff;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 0px 16px 0 @main-color;
    }
  }
  &-country {
    position: absolute;
    top: 30px;
  }
  &-canada {
    min-width: 50px;
    position: absolute;
    top: 25%;
    left: 25%;
  }
  &-uk {
    min-width: 50px;
    position: absolute;
    top: 25%;
    left: 46%;
  }
  &-au {
    min-width: 65px;
    position: absolute;
    bottom: 15%;
    right: 4%;
  }
  &-icon {
    font-size: 30px;
    color: @main-color;
    padding: 10px 0;
    &-block {
      display: flex;
      justify-content: space-around;
      text-align: center;
    }
  }
  &-agency {
    margin: 0 40px;
    p {
      font-size: 26px;
      font-weight: bold;
    }
    span {
      display: block;
      margin: 20px 0 40px;
    }
  }
}
.img-map {
  width: 100%;
  vertical-align: middle;
}
@media (min-width: 1200px) {
  .location {
    &-block {
      display: flex;
      justify-content: space-around;
      align-items: center;
      max-width: 1200px;
      margin: auto;
    }
    &-map {
      margin: 0;
      min-width: 600px;
    }
  }
}
</style>