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
export default class Deposit extends Vue {
  public get qaList() {
    return [
      {
        name: '1',
        title: '如何儲值到交易帳戶?',
        content:
          '根據不同客戶需求提供多種存款方式，支持PayTrust、USDT存款，安全便捷。 前往登錄頁面，進入用戶中心，選擇【錢包】，點擊【存款】，選擇存款方式，輸入有效金額，前往支付即可。',
      },
      {
        name: '2',
        title: '存取款一般多久可以到帳？',
        content: '存款實時到帳；取款一般1-3個工作日到帳。',
      },
      {
        name: '3',
        title: '單筆存款最低金額是多少？',
        content:
          '單筆存款最低金額為$10美元，最高金額為$10000美元。單日存款的最大額度受當地銀行系統影響，不同地區的用戶或有差異。',
      },
      {
        name: '4',
        title: '存款是否收取手續費？',
        content:
          '本公司存款不收取任何手續費。但如果客戶使用非美元貨幣進行存款，將參考銀行匯率自動兌換，或會產生匯率差損失',
      },
      {
        name: '5',
        title: '是否可以請他人代存款？',
        content:
          '對不起，KP 不接受來自第三方的任何存款。\n若客戶使用第三方存款，系統將退回該筆資金，並收取5%的手續費。必要時，本公司將協助相關部門調查該筆資金的真實來源。',
      },
      {
        name: '6',
        title: '取款多久到帳？',
        content: '取款通常1至3個工作日到帳。',
      },
      {
        name: '7',
        title: '如何取款？',
        content:
          'KP根據不同客戶需求提供多種取款方式，支持AsiaSecurity、USDT取款，安全便捷。 前往登錄頁面，進入用戶中心，選擇【錢包】，點擊【取款】，選擇取款渠道，按步驟操作即可。',
      },
      {
        name: '8',
        title: ' 取款收取手續費嗎？',
        content: 'KP提供多種取款方式，詳情請前往取款頁面查看。',
      },
      {
        name: '9',
        title: ' 單筆取款最低金額是多少？',
        content:
          '單筆取款最低金額為$100美元。低於$100美元的取款，只於每月10號開放申請。 （若當天不是工作日，則順延至下一個工作日）。',
      },
    ];
  }
}
</script>
<style lang="less" scoped>
@media (min-width: 768px) {
}
</style>