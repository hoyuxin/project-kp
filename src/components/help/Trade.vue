<template>
  <qa-container :qaList="qaList" />
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import QaContainer from '@/components/help/QaContainer.vue';

@Component({
  components: {
    QaContainer,
  },
})
export default class Trade extends Vue {
  public get qaList() {
    return [
      {
        name: '1',
        title: '可以交易哪些產品?',
        content:
          'KP提供全球主流產品交易服務：指數、大宗商品、虛擬貨幣。詳情前往<a href="/product/indices" target="_blank">產品介紹</a>頁面查看。',
      },
      {
        name: '2',
        title: '交易是否支持鎖倉?',
        content: '如客戶同時持有相同產品而不同買賣方向的持倉單，系統會作預設鎖倉處理。',
      },
      {
        name: '3',
        title: '解鎖有什麼要求?',
        content:
          '解锁时需要补足原有持仓单的保证金额度。\n例如，现在买入1手FTSE100保证金为600美元，卖出1手FTSE100保证金为600美元，锁仓保证金要求为300美元。如其中一持仓单平仓，系统即进行锁仓。解锁后，需要补足未平仓单的保证金额度（1FTSE100），即增加保证金至600美元。',
      },
      { name: '4', title: '隔夜費如何計算?', content: '庫存費並非固定值，報價銀行會根據市場行情變化而進行調整。' },
      {
        name: '5',
        title: '產品的交易時間有哪些時段?',
        content: '對應產品的交易時間，請前往<a href="/product/indices" target="_blank">產品介紹</a>頁面查看。',
      },
      {
        name: '6',
        title: '平台提供什麼類型的槓桿交易?',
        content: '依據監管要求，KP 根據不同客戶的交易需求及風險承受能力，為客戶提供1:100、1:200倍槓桿選擇。',
      },
      {
        name: '7',
        title: '什麼情況下會觸發系統自動平倉？',
        content:
          '當賬戶淨值低於強制平倉保證金要求時，系統會進行強制平倉；鎖倉並不能完全免卻強制平倉的風險，因此客戶進行鎖倉後仍須不定時留意其賬戶結馀及維持保證金。',
      },
      {
        name: '8',
        title: '為什麼下單價格與交易價格出現差別？',
        content:
          '觸發止損和限價後，未必能以定單所指定的價格執行，即出現滑動價差。當市場大幅波動時，下單價格與交易價格之間可能會出現明顯的差別。',
      },
    ];
  }
}
</script>
<style lang="less" scoped>
@media (min-width: 768px) {
}
</style>