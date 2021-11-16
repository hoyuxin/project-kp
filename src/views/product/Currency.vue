<template>
  <div class="currency-wrap">
    <div class="currency-block">
      <nav-list :currentIndex="3" />
      <p>虛擬貨幣是基於密碼學，通過代碼創建的一種電子加密貨幣。它們在傳統銀行和政府系統範圍之外自主運作。</p>
      <div class="currency-table">
        <el-table :data="tableData"
                  stripe
                  height="600px"
                  style="width: 100%">
          <el-table-column prop="No"
                           label="序號"
                           width="80" />
          <el-table-column prop="Name"
                           label="交易代號"
                           align="center" />
          <el-table-column prop="Product"
                           label="名稱"
                           align="center" />
          <el-table-column prop="Point"
                           label="點差"
                           align="center" />
          <el-table-column prop="Leverage"
                           label="槓桿"
                           align="center" />
          <el-table-column prop="Pip"
                           label="點值"
                           align="center" />
          <el-table-column prop="Time"
                           label="交易時間"
                           align="center"
                           width="200" />
        </el-table>
      </div>
      <div class="currency-warn-block">
        <span>注意：</span>
        <ul class="currency-warn-list">
          <li class="currency-warn-item">點差和倉息會隨行情變化，本公司不再另行通知；</li>
          <li class="currency-warn-item">所有產品在周末及假日休市後，所有掛單將被取消；</li>
          <li class="currency-warn-item">保證金低於50%時執行強制平倉，本公司保留根據市場行情波動調整保證金比例的權利；</li>
          <li class="currency-warn-item">解鎖需要補足原先單向保證金。</li>
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
export default class Currency extends Vue {
  public get tableData() {
    return [
      {
        No: '1',
        Name: 'BTCUSD',
        Product: '比特幣',
        Point: 80,
        Leverage: '1:10',
        Pip: '0.5美金',
        Time: '周一 至 周六 00:01-23:55',
      },
      {
        No: '2',
        Name: 'BCHUSD',
        Product: '比特幣現金',
        Point: 60,
        Leverage: '1:10',
        Pip: '1美金',
        Time: '周一 至 周六 00:01-23:55',
      },
      {
        No: '3',
        Name: 'ETHUSD',
        Product: '以太幣',
        Point: 35,
        Leverage: '1:10',
        Pip: '1美金',
        Time: '周一 至 周六 00:01-23:55',
      },
      {
        No: '4',
        Name: 'LTCUSD',
        Product: '萊特幣',
        Point: 35,
        Leverage: '1:10',
        Pip: '10美金',
        Time: '周一 至 周六 00:01-23:55',
      },
      {
        No: '5',
        Name: 'DSHUSD',
        Product: '達世幣',
        Point: 50,
        Leverage: '1:10',
        Pip: '1美金',
        Time: '周一 至 周六 00:01-23:55',
      },
      {
        No: '6',
        Name: 'ADAUSD',
        Product: '艾達幣',
        Point: 3.5,
        Leverage: '1:5',
        Pip: '10美金',
        Time: '周一 至 周六 00:01-23:55',
      },
      {
        No: '7',
        Name: 'DOTUSD',
        Product: '波卡幣',
        Point: 22,
        Leverage: '1:5',
        Pip: '1美金',
        Time: '周一 至 周六 00:01-23:55',
      },
      {
        No: '8',
        Name: 'EOSUSD',
        Product: '柚子幣',
        Point: 30,
        Leverage: '1:10',
        Pip: '1美金',
        Time: '周一 至 周六 00:01-23:55',
      },
      {
        No: '9',
        Name: 'LINKUSD',
        Product: 'Chainlink幣',
        Point: 80,
        Leverage: '1:5',
        Pip: '1美金',
        Time: '周一 至 周六 00:01-23:55',
      },
      {
        No: '10',
        Name: 'TRXUSD',
        Product: '波場幣',
        Point: 1.2,
        Leverage: '1:5',
        Pip: '10美金',
        Time: '周一 至 周六 00:01-23:55',
      },
      {
        No: '11',
        Name: 'XLMUSD',
        Product: '恆星幣',
        Point: 2.2,
        Leverage: '1:5',
        Pip: '10美金',
        Time: '周一 至 周六 00:01-23:55',
      },
    ];
  }
}
</script>
<style lang="less" scoped>
.currency {
  &-wrap {
    background-color: #fbfbfb;
  }
  &-block {
    padding: 20px;
    max-width: 1200px;
    margin: auto;
  }
  &-table {
    min-height: 100%;
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