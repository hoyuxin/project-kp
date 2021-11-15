<template>
  <div class="indices-wrap">
    <div class="indices-block">
      <nav-list :currentIndex="1" />
      <p>平台提供多種股指產品，各自反映股市場走勢特點，投資者可根據市場發展趨勢，並按個人投資目標選擇合適市場進行交易。</p>
      <div class="indices-table">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="No"
                           label="序號"
                           align="center"
                           width="80" />
          <el-table-column prop="Name"
                           label="交易代號"
                           align="center" />
          <el-table-column prop="Product"
                           label="名稱"
                           align="center"
                           width="160" />
          <el-table-column prop="Point"
                           label="點差"
                           width="120"
                           align="center" />
          <el-table-column prop="Leverage"
                           label="槓桿"
                           width="120"
                           align="center" />
          <el-table-column prop="Pip"
                           label="點值"
                           width="120"
                           align="center" />
          <el-table-column prop="Time"
                           label="交易時間"
                           align="center"
                           width="200" />
        </el-table>
      </div>
      <div class="indices-warn-block">
        <span>注意：</span>
        <ul class="indices-warn-list">
          <li class="indices-warn-item">點差和倉息會隨行情變化，本公司不再另行通知；</li>
          <li class="indices-warn-item">所有產品在周末及假日休市後，所有掛單將被取消；</li>
          <li class="indices-warn-item">保證金低於50%時執行強制平倉，本公司保留根據市場行情波動調整保證金比例的權利；</li>
          <li class="indices-warn-item">解鎖需要補足原先單向保證金。</li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import NavList from '@/components/product/NavList.vue';

@Component({
  components: {
    NavList,
  },
})
export default class Indices extends Vue {
  public get tableData() {
    return [
      {
        No: '1',
        Name: 'DAX',
        Product: '德國DAX指數',
        Point: 2.4,
        Leverage: '1:100',
        Pip: '25歐元',
        Time: '周一 至 周四 00:05-22:15',
      },
      {
        No: '2',
        Name: 'DOW',
        Product: '道瓊斯工業平均指數',
        Point: 3.0,
        Leverage: '1:100',
        Pip: '5美金',
        Time: '周一 至 周六 00:01-23:55',
      },
      {
        No: '3',
        Name: 'FTSE100',
        Product: '富時100指數',
        Point: 2.0,
        Leverage: '1:100',
        Pip: '10英鎊',
        Time: '周一 至 周六 00:01-23:55',
      },
      {
        No: '4',
        Name: 'HSI',
        Product: '恆生指數',
        Point: 0.7,
        Leverage: '1:10',
        Pip: '50港幣',
        Time: '周一 至 周六 00:01-23:55',
      },
      {
        No: '5',
        Name: 'NAS100',
        Product: '斯達克100指數',
        Point: 2.0,
        Leverage: '1:100',
        Pip: '10美金',
        Time: '周一 至 周六 00:01-23:55',
      },
      {
        No: '6',
        Name: 'NIKKEI',
        Product: '日經平均指數',
        Point: 1.4,
        Leverage: '1:100',
        Pip: '500日元',
        Time: '周一 至 周六 00:01-23:55',
      },
      {
        No: '7',
        Name: 'SPX500',
        Product: '標準普爾500指數',
        Point: 1.0,
        Leverage: '1:100',
        Pip: '10美金',
        Time: '周一 至 周四  00:05-22:15',
      },
      {
        No: '8',
        Name: 'USDX',
        Product: 'SPX500',
        Point: 3.5,
        Leverage: '1:100',
        Pip: '10美金',
        Time: '周一 至 周四 00:01-23:00',
      },
    ];
  }
}
</script>
<style lang="less" scoped>
.indices {
  &-wrap {
    background-color: #fbfbfb;
  }
  &-block {
    max-width: 1200px;
    padding: 20px;
    margin: auto;
  }
  &-table {
    max-width: 1000px;
    padding: 40px 0;
    min-height: 100%;
  }
  &-list {
    list-style: none;
    line-height: 1.71;
    color: #868c92;
  }
  &-warn {
    &-block {
      padding-top: 40px;
      color: #868c92;
    }
    &-list {
      list-style-type: decimal;
      padding: 0 20px 20px;
    }
    &-item {
      line-height: 2;
    }
  }
}
@media (min-width: 768px) {
}
</style>