<template>
  <div>
    <div class="company-banner-block"
         :style="'background-image: url(' + bannerImg + ');'">
      <p>關於我們</p>
    </div>
    <div class="company-block">
      <div class="company-content">
        <h3 class="company-title">通往全球交易市場</h3>
        <p class="company-text">兼具全球貨幣對經紀商、流動性提供商、貨幣對交易系統供應商、企業財資管理服務商等多重角色， 為全球投資者和企業提供專業、豐富、前瞻的金融產品和服務。</p>
      </div>
      <div class="company-list">
        <div class="company-item"
             v-for="item in list"
             :key="item.title">
          <h4 class="company-item-title">{{item.title}}</h4>
          <p>{{item.label}}</p>
        </div>
      </div>
    </div>
    <!-- 為何選擇KP -->
    <div class="company-trade-wrap">
      <div class="company-trade-block">
        <div class="company-trade-content">
          <h3 class="company-title">為什麼選擇在KP交易</h3>
        </div>
        <el-row>
          <el-col :xs="24"
                  :sm="12"
                  @mouseover.stop.native="handlerAniBackground"
                  class="el-col-main">
            <p class="company-trade-title">卓越的交易體驗</p>
            <p class="company-trade-sub-title">選擇KP並體驗我們卓越的交易服務！</p>
            <ul class="company-trade-list">
              <li><i class="el-icon-check company-trade-icon" />指數、大宗商品、數字貨幣</li>
              <li><i class="el-icon-check company-trade-icon" />最低點差至0</li>
              <li><i class="el-icon-check company-trade-icon" />最小交易量0.01手</li>
              <li><i class="el-icon-check company-trade-icon" />杠杆最高1:200</li>
              <li><i class="el-icon-check company-trade-icon" />最低存款金額10美元</li>
            </ul>
          </el-col>
          <el-col :xs="24"
                  :sm="12"
                  @mouseover.stop.native="handlerAniBackground"
                  class="el-col-main">
            <p class="company-trade-title">KP賬戶</p>
            <p class="company-trade-sub-title">適合所有初學者和專業的交易客戶。</p>
            <table>
              <tbody>
                <tr>
                  <td class="table-label">首次存款</td>
                  <td class="table-value">0 USD</td>
                </tr>
                <tr>
                  <td class="table-label">槓桿</td>
                  <td class="table-value">1:100、1:200</td>
                </tr>
                <tr>
                  <td class="table-label">訂單執行</td>
                  <td class="table-value">市價成交</td>
                </tr>
                <tr>
                  <td class="table-label">點差</td>
                  <td class="table-value">0起浮動點差</td>
                </tr>
                <tr>
                  <td class="table-label">強平比例</td>
                  <td class="table-value">50%</td>
                </tr>
              </tbody>
            </table>
          </el-col>
          <div class="ani-background-wrap"
               ref="ani-background-wrap" />
        </el-row>
      </div>
    </div>
    <!-- 公司Intro -->
    <div class="company-intro-block">
      <h3 class="company-title">我们的顶级平台，专为您打造</h3>
      <ul class="company-intro-list">
        <li class="company-intro-item"
            v-for="item in introList"
            :key="item.title">
          <div class="company-intro-icon-block">
            <img :src="item.icon"
                 alt="icon"
                 class="company-intro-icon" />
          </div>
          <div class="company-intro-content">
            <p class="company-intro-title"> {{item.title}}</p>
            <p v-for="listText in item.list"
               :key="listText">{{listText}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import icon1 from '@/assets/about/icon-1.svg';
import icon2 from '@/assets/about/icon-2.svg';
import icon3 from '@/assets/about/icon-3.svg';
import icon4 from '@/assets/about/icon-4.svg';
import icon5 from '@/assets/about/icon-5.svg';
import icon6 from '@/assets/about/icon-6.svg';
import bannerImg from '@/assets/about/img-banner.jpg';

@Component
export default class Company extends Vue {
  public aniBackground: any = null;
  public bannerImg = bannerImg;
  public images = { icon1, icon2, icon3, icon4, icon5, icon6 };
  public get list() {
    return [
      {
        title: '資金安全有保證',
        label: 'KP嚴格遵守監管機構的客戶資金規則，將所有客戶的資金單獨隔離存放，以保護客戶的資產安全。',
      },
      {
        title: '頂級交易服務經紀商',
        label: 'KP專注於提供指數、大宗商品、虛擬貨幣等多元化產品在線交易服務。',
      },
      {
        title: '卓越的交易體驗',
        label: '一個賬戶交易全球多元產品、支持同品種一鍵平倉、同方向一鍵平倉、所有訂單一鍵平倉、價格變動提醒等。',
      },
      {
        title: '最先進的交易工具',
        label: '利用金融科技的最新技術為客戶提供多功能一體的交易服務軟件。一站式移動交易App、簡單易用WebTrade等。',
      },
    ];
  }
  public get introList() {
    const { icon1, icon2, icon3, icon4, icon5, icon6 } = this.images;
    return [
      { icon: icon1, title: '可信賴的品牌', list: ['集团旗下品牌', '全球持牌金融机构', '产品及服务多维度受监管保护'] },
      { icon: icon2, title: '資金安全有保證', list: ['三個國家監管認可', '', '出入金高效、安全'] },
      { icon: icon3, title: '交易產品多元化', list: ['多種熱門指數產品', '多種大宗商品', '虛擬貨幣'] },
      {
        icon: icon4,
        title: '平台專業可靠',
        list: ['國際銀行報價，真正搓和式交易', '提供PC/手機/平板MT4交易軟件', 'APP服務，全球各地隨心交易'],
      },
      {
        icon: icon5,
        title: '全面投資扶持',
        list: ['免費課程，提供投資技能', '全方位市場資訊解析', '每日推送專家匯評'],
      },
      { icon: icon6, title: '客户疑問解答', list: ['24小時在線支援', '支持多語言'] },
    ];
  }

  public mounted() {
    this.aniBackground = this.$refs['ani-background-wrap'] as any;
    this.resizeAniBackgroundWrap();
  }

  public resizeAniBackgroundWrap() {
    setTimeout(() => {
      const { clientWidth, clientHeight }: any = this.$el.querySelector('.el-col-main');
      this.aniBackground.style.width = clientWidth + 'px';
      this.aniBackground.style.height = clientHeight + 'px';
      this.aniBackground.style.left = '0px';
    }, 100);
  }

  public handlerAniBackground(el: any) {
    const { clientWidth, clientHeight, offsetLeft, offsetTop }: any = el.currentTarget;
    this.aniBackground.style.width = clientWidth + 'px';
    this.aniBackground.style.height = clientHeight + 'px';
    this.aniBackground.style.left = offsetLeft + 'px';
    this.aniBackground.style.top = offsetTop + 'px';
  }
}
</script>
<style lang="less" scoped>
.company {
  &-banner-block {
    min-height: 300px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 60% top;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #fff;
    letter-spacing: 1.6px;
  }
  &-block {
    max-width: 1200px;
    margin: auto;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
  }
  &-title {
    color: #0a1e3d;
    font-size: 36px;
    padding: 20px 0;
    text-align: center;
  }
  &-text {
    padding-bottom: 30px;
  }
  &-item {
    border-width: 2px 0 0;
    border-style: solid;
    border-image: -webkit-gradient(linear, left top, right top, from(#0e1f3d), to(#e02020));
    border-image: linear-gradient(90deg, #0e1f3d 0, #e02020);
    border-image-slice: 1;
    padding: 20px 0 40px;
    margin: 0 10px;
    text-align: left;
    color: #0c1f3d;
    &-title {
      font-weight: bold;
      padding-bottom: 15px;
    }
  }
  &-trade {
    &-wrap {
      background-color: #fbfbfb;
    }
    &-block {
      max-width: 1200px;
      margin: auto;
      padding: 20px 0 40px;
    }
    &-list {
      list-style: none;
      line-height: 1.5;
    }
    &-icon {
      color: #0f95ff;
      padding-right: 10px;
    }
    &-title {
      font-size: 20px;
      font-weight: bold;
      color: #0c1f3d;
      padding: 20px 0;
    }
    &-sub-title {
      padding: 0 0 30px;
    }
  }
  &-intro {
    &-list {
      list-style: none;
    }
    &-item {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 50px 0;
      &:nth-child(odd) {
        background-color: #f9f9f9;
        &:hover {
          cursor: pointer;
          box-shadow: 0px 12px 44px 0 rgba(0, 0, 0, 0.12);
        }
      }
      &:nth-child(even) {
        cursor: pointer;
        background-color: #f1f2f4;
        &:hover {
          box-shadow: 0px 12px 44px 0 rgba(0, 0, 0, 0.12);
        }
      }
    }
    &-title {
      color: #2c3e50;
      font-weight: bold;
    }
    &-content {
      line-height: 1.71;
      padding-left: 20px;
      min-width: 250px;
    }
    &-icon {
      width: 100%;
      vertical-align: middle;
      &-block {
        width: 50px;
        height: 50px;
      }
    }
  }
}
.el-row {
  position: relative;
}
.el-col {
  position: relative;
  z-index: 1;
  &-main {
    padding: 30px;
  }
}
.ani-background-wrap {
  position: absolute;
  left: 0;
  top: 0;
  background-color: mix(#fff, #e2e4e7, 70%);
  transition: left 0.6s, top 0.6s;
}
.table {
  &-label {
    min-width: 140px;
    border-right: 2px solid #eee;
    color: #0e1f3d;
  }
  &-value {
    color: #0e1f3d;
    padding-left: 80px;
  }
}
@media (min-width: 1200px) {
  .company {
    &-banner-block {
      min-height: 600px;
      font-size: 36px;
    }
    &-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 40px 0;
    }
    &-item {
      width: 50%;
      max-width: 550px;
    }
    &-intro {
      &-list {
        display: flex;
        flex-wrap: wrap;
      }
      &-item {
        width: 33.33%;
      }
    }
  }
}
</style>