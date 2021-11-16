<template>
  <div class="commodity-wrap">
    <div class="commodity-block">
      <nav-list :currentIndex="2" />
      大宗商品是全球經濟的基石，他們是用於世界範圍內交易的自然資源。
      <div class="commodity-content">
        <h4>無隔夜利息產品</h4>
        <div class="commodity-product-text">
          <p>無隔夜利息產品不支付或賺取任何交易的倉息或利息。</p>
          <p>KP可自行決定不時更新無隔夜利息產品的相關費用。</p>
          <p>KP保留取消無隔夜利息狀態的權利，而無需為此提供理由。</p>
          <p>如果KP檢測到無隔夜利息產品正在通過利用不支付隔夜利息的優勢以欺詐、操縱、現金返還套利、利差交易或其他形式的欺騙或欺詐活動的形式被濫用，則我們保留以下形式立即採取行動的權利：</p>
        </div>
        <ul class="commodity-list">
          <li>① 取消涉嫌濫用無隔夜利息產品的所有真實交易賬戶的無隔夜利息狀態；</li>
          <li>② 更正和收回產品無隔夜利息狀態期間應計隔夜利息及相關應計利息費用和/或與客戶所有交易賬戶相關的成本；</li>
          <li>③ 終止客戶協議</li>
        </ul>
      </div>
      <div class="commodity-table">
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
                           align="center" />
        </el-table>
      </div>
      <div class="commodity-warn-block">
        <span>注意：</span>
        <ul class="commodity-warn-list">
          <li class="commodity-warn-item">點差和倉息會隨行情變化，本公司不再另行通知；</li>
          <li class="commodity-warn-item">所有產品在周末及假日休市後，所有掛單將被取消；</li>
          <li class="commodity-warn-item">保證金低於50%時執行強制平倉，本公司保留根據市場行情波動調整保證金比例的權利；</li>
          <li class="commodity-warn-item">解鎖需要補足原先單向保證金。</li>
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
export default class Commodity extends Vue {
  public get tableData() {
    return [
      {
        No: '1',
        Name: 'UKOIL',
        Product: '布倫特原油',
        Point: 2.4,
        Leverage: '1:200',
        Pip: '10美金',
        Time: '周一 至 周四 02:06-22:59',
      },
      {
        No: '2',
        Name: 'USOIL',
        Product: '原油現貨',
        Point: 2.4,
        Leverage: '1:200',
        Pip: '10美金',
        Time: '周一 至 周四 00:01-22:59',
      },
      {
        No: '3',
        Name: 'XAGUSD',
        Product: '白銀現貨',
        Point: 2.4,
        Leverage: '1:200',
        Pip: '50美金',
        Time: '周一 至 周四 00:01-22:59',
      },
      {
        No: '4',
        Name: 'XAUUSD',
        Product: '黃金現貨',
        Point: 0.8,
        Leverage: '1:500',
        Pip: '10美金',
        Time: '周一 至 周四 00:01-22:59',
      },
    ];
  }
}
</script>
<style lang="less" scoped>
.commodity {
  &-wrap {
    background-color: #fbfbfb;
  }
  &-block {
    padding: 20px;
    max-width: 1200px;
    margin: auto;
  }
  &-content {
    margin: 20px 0;
    background-color: #f1f1f1;
    padding: 20px 20px 0;
  }
  &-product-text {
    padding: 20px 0;
    color: #0c1f3d;
  }
  &-list {
    color: #868c92;
    list-style: none;
    line-height: 1.5;
    padding: 10px 0 20px;
  }
  &-table {
    padding: 40px 0;
    margin: auto;
  }
  &-warn {
    &-block {
      padding-top: 40px;
      color: #868c92;
      margin: auto;
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