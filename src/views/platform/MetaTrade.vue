<template>
  <div class="platform-wrap">
    <div class="platform-banner-block">
      <div class="platform-mt4">
        <div class="banner-text-block">
          <div class="platform-banner-wrap">
            <div class="banner-title-block">
              <p class="banner-title">{{ $t('platform.MT4.Title')}}</p>
              <p class="banner-sub-title">{{ $t('platform.MT4.SubTitle')}}</p>
            </div>
            <div class="banner-button-block">
              <a class="banner-link"
                 :href="linkList.pc"
                 target="_blank">
                <el-button class="win-button  mt4-button window-btn-mob">
                  <div class="button-content">
                    <div class="hover-win-icon icon-size"></div><span class="button-text">DOWNLOAD WINDOWS</span>
                  </div>
                </el-button>
              </a>
              <a class="banner-link"
                 :href="linkList.ios"
                 target="_blank">
                <el-button class="ios-button  mt4-button">
                  <div class="button-content">
                    <div class="hover-ios-icon icon-size"></div><span class="button-text">DOWNLOAD IOS</span>
                  </div>
                </el-button>
              </a>
              <a class="banner-link"
                 :href="linkList.android"
                 target="_blank">
                <el-button class="android-button  mt4-button">
                  <div class="button-content">
                    <div class="hover-android-icon icon-size"></div><span class="button-text">DOWNLOAD ANDROID</span>
                  </div>
                </el-button>
              </a>
            </div>
          </div>
        </div>
        <div class="banner-img-block">
          <img :src="bannerImg"
               alt="banner-img"
               class="platform-banner-img">
        </div>
      </div>
    </div>
    <div class="platform-advantage-block">
      <div class="platform-advantage-left">
        <h4>MT4優勢特點</h4>
        <p>Meta Tradr 4 是全球最受歡迎的貨幣對與差價合約交易平台， 集合了⾏情圖表、技術分析、交易等功能， 賬戶可進⾏下單、平倉、限價單、止損、止盈、
          查看報表等操作。提供電腦版、Android系統、iOS系統多場景安裝使用。</p>
      </div>
      <div class="platform-advantage-right">
        <div class="features-radio-item-block">
          <div class="features-radio-item clearfix"
               @mousemove="decideMouseMove"
               v-for=" (item,index) in RadioItemListRow1"
               :key="index">
            <div class="radio-circle">
              <p class="out-circle"
                 :class="{ 'default-checked':  index === 0 && isHoverItem}"></p>
            </div>
            <div class="radio-text"><span>{{ item.radioText }}</span></div>
          </div>
        </div>
        <div class="features-radio-item-block">
          <div class="features-radio-item clearfix"
               @mousemove="decideMouseMove"
               v-for=" (item,index) in RadioItemListRow2"
               :key="index">
            <div class="radio-circle">
              <p class="out-circle"></p>
            </div>
            <div class="radio-text"><span>{{ item.radioText }}</span></div>
          </div>
        </div>
      </div>

    </div>
    <div class="platform-icon-block">
      <div class="platform-icon-item"
           v-for="item in list"
           :key="item.icon">
        <div class="platform-icon-image-block">
          <img :src="item.icon"
               alt="platform-icon"
               class="platform-icon-image">
        </div>
        <div>
          <p class="platform-icon-title">{{item.title}}</p>
          <p>{{item.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import bannerImg from '@/assets/platform/mt4.png';
import icon1 from '@/assets/platform/icon-1.svg';
import icon2 from '@/assets/platform/icon-2.svg';
import icon3 from '@/assets/platform/icon-3.svg';
import icon4 from '@/assets/platform/icon-4.svg';
@Component
export default class MetaTrade extends Vue {
  public isHoverItem: boolean = true;
  public images = { icon1, icon2, icon3, icon4 };
  public linkList: any = {
    pc: '',
    ios: '',
    android: '',
  };
  public bannerImg: string = bannerImg;
  public created() {
    this.linkList = {
      pc: 'https://reurl.cc/ARY3RQ',
      ios: 'https://reurl.cc/Oknmpv',
      android: `https://reurl.cc/vgALqL`,
    };
  }
  public decideMouseMove() {
    this.isHoverItem = false;
  }
  public get RadioItemListRow1() {
    return [
      { radioText: this.$t('platform.MT4.Feature.Item1') },
      { radioText: this.$t('platform.MT4.Feature.Item2') },
      { radioText: this.$t('platform.MT4.Feature.Item3') },
    ];
  }
  public get RadioItemListRow2() {
    return [
      { radioText: this.$t('platform.MT4.Feature.Item4') },
      { radioText: this.$t('platform.MT4.Feature.Item5') },
      { radioText: this.$t('platform.MT4.Feature.Item6') },
    ];
  }
  public get list() {
    const { icon1, icon2, icon3, icon4 } = this.images;
    return [
      { icon: icon1, title: '一鍵交易', content: '一鍵即進入市場並平倉。' },
      {
        icon: icon2,
        title: '演算法交易',
        content: '使用 MQL4 編程語言建立您的交易機器人，並在終端中執行它們。',
      },
      { icon: icon3, title: 'MetaTrader Market', content: '直接在平台上購買專家顧問和指標。' },
      { icon: icon4, title: '基本分析', content: '終端中的新聞和訊號用於追蹤所有金融市場事件。' },
    ];
  }
}
</script>
<style lang="less" scoped>
@--color-red: #db351f;
.platform {
  &-banner {
    &-block {
      background-color: #222830;
    }
    &-img {
      vertical-align: middle;
      height: auto;
      max-width: 100%;
    }
  }
  &-advantage {
    &-block {
      padding: 20px;
    }
    &-left {
      h4 {
        color: #0c1f3d;
        font-size: 28px;
        padding: 20px 0;
      }
    }
    &-right {
      padding: 40px 0;
    }
  }
  &-icon {
    &-block {
      padding: 30px 20px;
      text-align: center;
    }
    &-image {
      width: 100%;
      vertical-align: middle;
      &-block {
        width: 76px;
        height: 76px;
        margin: auto;
        padding: 50px 0 0;
      }
    }
    &-title {
      color: #0c1f3d;
      font-weight: bold;
      padding: 10px 0;
    }
  }
}
.banner {
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
}
.mt4-button {
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
.win-button {
  display: none;
}
.button-content {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
}
.icon-size {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}
.hover-win-icon {
  background-image: url('~@/assets/platform/win.svg');
}
.win-button:hover .hover-win-icon,
.win-button:focus .hover-win-icon {
  background-image: url('~@/assets/platform/win-w.svg');
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
.clearfix::after {
  content: '';
  display: inline-block;
  clear: both;
}
.out-circle {
  position: relative;
  top: 4px;
  width: 14px;
  height: 14px;
  border-radius: 100%;
  border: 1px solid #ccc;
}
.features-radio-item {
  display: flex;
  line-height: 2;
  align-items: center;
  &:hover {
    .radio-text {
      cursor: pointer;
    }
    .out-circle {
      border-color: #db351f;
      &::after {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: #db351f;
      }
    }
  }
}
.radio-text {
  padding: 0 20px;
}
@media (min-width: 768px) {
  .platform {
    &-icon {
      &-item {
        width: 50%;
      }
      &-block {
        display: flex;
        flex-wrap: wrap;
      }
    }
  }
}
@media (min-width: 1200px) {
  .platform {
    &-mt4 {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &-advantage {
      &-block {
        display: flex;
        justify-content: space-around;
        padding: 20px 0;
      }
      &-left {
        width: 30%;
        h4 {
          color: #0c1f3d;
          font-size: 28px;
          padding: 20px 0;
        }
      }
      &-right {
        display: flex;
        justify-content: space-around;
        padding: 40px 0;
      }
    }
    &-icon {
      &-block {
        max-width: 1200px;
        margin: auto;
        display: flex;
        padding: 40px 0px;
      }
      &-item {
        flex-basis: 25%;
      }
    }
  }
  .banner {
    &-title {
      font-size: 42px;
    }
    &-button-block {
      padding: 0 20px;
      display: flex;
    }
  }
  .win-button {
    display: block;
  }
}
</style>