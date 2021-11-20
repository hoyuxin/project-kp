<template>
  <div>
    <div class="mob-app-wrap"
         :style="'background-image: url(' + bannerImg + ');'">
      <div class="mob-app-block">
        <div class="banner-text-block">
          <div class="mob-app-banner-wrap">
            <div class="banner-title-block">
              <h3 class="banner-title">{{ $t('platform.App.Title')}}</h3>
              <p class="banner-sub-title">{{ $t('platform.App.SubTitle')}}</p>
              <p class="banner-content">{{ $t('platform.App.BannerContent')}}</p>
            </div>
            <div class="banner-button-block">
              <el-button class="ios-button  mob-app-button">
                <div class="button-content">
                  <div class="hover-ios-icon icon-size"></div><span class="button-text">DOWNLOAD IOS</span>
                </div>
              </el-button>
              <el-button class="android-button mob-app-button">
                <div class="button-content">
                  <div class="hover-android-icon icon-size"></div><span class="button-text">DOWNLOAD WINDOWS</span>
                </div>
              </el-button>
            </div>
          </div>
        </div>
        <div class="phone-img-block">
          <img :src="phoneImg"
               alt="phone-img"
               class="phone-img">
        </div>
      </div>
    </div>
    <div class="mob-app-introduction-block">
      <div class="mob-app-introduction-row">
        <div class="mob-app-introduction-item-block"
             v-for="item in list"
             :key="item.title">
          <div class="mob-app-icon-triangle" />
          <div class="mob-app-introduction-item-text">
            <p class="mob-app-introduction-item-title">{{ $t(item.title)}}</p>
            <p class="mob-app-introduction-item-content"
               v-for="text in item.content"
               :key="text.index">{{$t(text.label)}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import bannerImg from '@/assets/platform/app-banner.png';
import phoneImg from '@/assets/platform/phone.png';
@Component
export default class MobApp extends Vue {
  public bannerImg: string = bannerImg;
  public phoneImg: string = phoneImg;
  public get list() {
    return [
      {
        title: 'platform.App.Introduction.Item1.Title',
        content: [
          { label: 'platform.App.Introduction.Item1.Item1', index: 0 },
          { label: 'platform.App.Introduction.Item1.Item2', index: 1 },
          { label: 'platform.App.Introduction.Item1.Item3', index: 2 },
          { label: 'platform.App.Introduction.Item1.Item4', index: 3 },
        ],
      },
      {
        title: 'platform.App.Introduction.Item2.Title',
        content: [
          { label: 'platform.App.Introduction.Item2.Item1', index: 0 },
          { label: 'platform.App.Introduction.Item2.Item2', index: 1 },
          { label: 'platform.App.Introduction.Item2.Item3', index: 2 },
          { label: 'platform.App.Introduction.Item2.Item4', index: 3 },
        ],
      },
      {
        title: 'platform.App.Introduction.Item3.Title',
        content: [
          { label: 'platform.App.Introduction.Item3.Item1', index: 0 },
          { label: 'platform.App.Introduction.Item3.Item2', index: 1 },
          { label: 'platform.App.Introduction.Item3.Item3', index: 2 },
        ],
      },
      {
        title: 'platform.App.Introduction.Item4.Title',
        content: [
          { label: 'platform.App.Introduction.Item4.Item1' },
          { label: 'platform.App.Introduction.Item4.Item2' },
        ],
      },
    ];
  }
}
</script>
<style lang="less" scoped>
@--color-red: #db351f;
.mob-app {
  &-wrap {
    width: 100%;
    background-repeat: no-repeat;
    background-position: 50%;
  }

  &-title {
    font-size: 26px;
    &-block {
      color: #fff;
      text-align: center;
      padding-top: 30px;
    }
  }
  &-button-block {
    text-align: center;
  }
  &-sub-title {
    padding: 20px 0 40px;
    font-size: 20px;
  }
  &-link {
    text-decoration: none;
  }
  &-img-block {
    text-align: right;
  }
  &-button {
    background-color: transparent;
    border-radius: 20px;
    border: 1px solid @--color-red;
    color: @--color-red;
    margin: 5px;
    min-width: 250px;
    &:hover {
      color: #fff;
      background-color: @--color-red;
    }
  }
  &-introduction {
    &-row {
      width: 100%;
    }
    &-block {
      padding: 40px 20px;
    }
    &-item {
      &-block {
        box-sizing: border-box;
        padding: 20px;
        margin: 20px 0;
        width: 100%;
        display: flex;
        &:nth-child(even) {
          background-color: rgba(241, 241, 241, 0.5);
        }
        &:nth-child(odd) {
          background-color: #f1f1f1;
        }
      }
      &-title {
        color: #0c1f3d;
        font-weight: bold;
      }
      &-content {
        line-height: 2;
      }
    }
  }
  &-icon-triangle {
    margin-right: 10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5.5px 0 5.5px 11px;
    border-color: transparent transparent transparent @--color-red;
    position: relative;
    top: 5px;
  }
}
.icon-size {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}

.hover-ios-icon {
  background-image: url('~@/assets/platform/ios.svg');
}
.ios-button:hover .hover-ios-icon,
.ios-button:focus .hover-ios-icon {
  background-image: url('~@/assets/platform/ios-w.svg');
}
.hover-android-icon {
  background-image: url('~@/assets/platform/android.svg');
}
.android-button:hover .hover-android-icon,
.android-button:focus .hover-android-icon {
  background-image: url('~@/assets/platform/android-w.svg');
}
.button-content {
  display: flex;
  align-items: center;
  justify-content: center;
}
.banner {
  &-text-block {
    max-width: 800px;
    color: #0c1f3d;
    padding: 0 60px;
    box-sizing: border-box;
  }
  &-title {
    font-size: 40px;
  }
  &-sub-title {
    padding: 20px 0;
    font-size: 22px;
  }
  &-content {
    line-height: 1.75;
    letter-spacing: 0.6px;
  }
  &-button-block {
    padding-top: 60px;
    text-align: center;
  }
}
.phone-img {
  width: 100%;
  vertical-align: middle;
  &-block {
    padding: 50px 30px 0;
  }
}
@media (min-width: 992px) {
  .mob-app {
    &-introduction {
      &-row {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
      &-item {
        &-block {
          box-sizing: border-box;
          width: 50%;
          margin: 20px 0;
        }
      }
    }
  }
}
@media (min-width: 1200px) {
  .mob-app {
    &-block {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    &-introduction {
      &-block {
        padding: 70px 0;
      }
      &-row {
        display: flex;
        justify-content: center;
      }
      &-item {
        &-block {
          margin: 0;
          max-width: 350px;
        }
      }
    }
  }
  .banner {
    &-button-block {
      text-align: left;
    }
  }
}
</style>