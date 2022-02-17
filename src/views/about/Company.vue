<template>
  <div>
    <div class="company-banner-block"
         :style="'background-image: url(' + bannerImg + ');'">
      <p>{{$t('about.title')}}</p>
    </div>
    <div class="company-block">
      <div class="company-content">
        <h3 class="company-title">{{$t('about.global.title')}}</h3>
        <p class="company-text">{{$t('about.global.content')}}</p>
      </div>
      <div class="company-list">
        <div class="company-item"
             v-for="item in list"
             :key="item.title">
          <h4 class="company-item-title">{{$t(item.title)}}</h4>
          <p>{{$t(item.label)}}</p>
        </div>
      </div>
    </div>
    <!-- 為何選擇KP -->
    <div class="company-trade-wrap">
      <div class="company-trade-block">
        <div class="company-trade-content">
          <h3 class="company-title">{{$t('about.choose.title')}}</h3>
        </div>
        <el-row>
          <el-col :xs="24"
                  :sm="12"
                  @mouseover.stop.native="handlerAniBackground"
                  class="el-col-main">
            <p class="company-trade-title">{{$t('about.choose.block1.title')}}</p>
            <p class="company-trade-sub-title">{{$t('about.choose.block1.content')}}</p>
            <ul class="company-trade-list">
              <li><i class="el-icon-check company-trade-icon" />{{$t('about.choose.block1.item1')}}</li>
              <li><i class="el-icon-check company-trade-icon" />{{$t('about.choose.block1.item2')}}</li>
              <li><i class="el-icon-check company-trade-icon" />{{$t('about.choose.block1.item3')}}</li>
              <li><i class="el-icon-check company-trade-icon" />{{$t('about.choose.block1.item4')}}</li>
              <li><i class="el-icon-check company-trade-icon" />{{$t('about.choose.block1.item5')}}</li>
            </ul>
          </el-col>
          <el-col :xs="24"
                  :sm="12"
                  @mouseover.stop.native="handlerAniBackground"
                  class="el-col-main">
            <p class="company-trade-title">{{$t('about.choose.block2.title')}}</p>
            <p class="company-trade-sub-title">{{$t('about.choose.block2.content')}}</p>
            <table>
              <tbody>
                <tr>
                  <td class="table-label">{{$t('about.choose.block2.column.label1')}}</td>
                  <td class="table-value">{{$t('about.choose.block2.column.value1')}}</td>
                </tr>
                <tr>
                  <td class="table-label">{{$t('about.choose.block2.column.label2')}}</td>
                  <td class="table-value">{{$t('about.choose.block2.column.value2')}}</td>
                </tr>
                <tr>
                  <td class="table-label">{{$t('about.choose.block2.column.label3')}}</td>
                  <td class="table-value">{{$t('about.choose.block2.column.value3')}}</td>
                </tr>
                <tr>
                  <td class="table-label">{{$t('about.choose.block2.column.label4')}}</td>
                  <td class="table-value">{{$t('about.choose.block2.column.value4')}}</td>
                </tr>
                <tr>
                  <td class="table-label">{{$t('about.choose.block2.column.label5')}}</td>
                  <td class="table-value">{{$t('about.choose.block2.column.value5')}}</td>
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
      <h3 class="company-title">{{$t('about.platform.title')}}</h3>
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
            <p class="company-intro-title"> {{$t(item.title)}}</p>
            <p v-for="listText in item.list"
               :key="listText">{{$t(listText)}}</p>
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
        title: 'about.global.item1.title',
        label: 'about.global.item1.content',
      },
      {
        title: 'about.global.item2.title',
        label: 'about.global.item2.content',
      },
      {
        title: 'about.global.item3.title',
        label: 'about.global.item3.content',
      },
      {
        title: 'about.global.item4.title',
        label: 'about.global.item4.content',
      },
    ];
  }
  public get introList() {
    const { icon1, icon2, icon3, icon4, icon5, icon6 } = this.images;
    return [
      {
        icon: icon1,
        title: 'about.platform.list.item1.title',
        list: [
          'about.platform.list.item1.label1',
          'about.platform.list.item1.label2',
          'about.platform.list.item1.label3',
        ],
      },
      {
        icon: icon2,
        title: 'about.platform.list.item2.title',
        list: ['about.platform.list.item2.label1', 'about.platform.list.item2.label2'],
      },
      {
        icon: icon3,
        title: 'about.platform.list.item3.title',
        list: [
          'about.platform.list.item3.label1',
          'about.platform.list.item3.label2',
          'about.platform.list.item3.label3',
        ],
      },
      {
        icon: icon4,
        title: 'about.platform.list.item4.title',
        list: [
          'about.platform.list.item4.label1',
          'about.platform.list.item4.label2',
          'about.platform.list.item4.label3',
        ],
      },
      {
        icon: icon5,
        title: 'about.platform.list.item5.title',
        list: [
          'about.platform.list.item5.label1',
          'about.platform.list.item5.label2',
          'about.platform.list.item5.labe3',
        ],
      },
      {
        icon: icon6,
        title: 'about.platform.list.item6.title',
        list: ['about.platform.list.item6.label1', 'about.platform.list.item6.label2'],
      },
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