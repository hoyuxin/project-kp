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
export default class Common extends Vue {
  public get qaList() {
    return [
      {
        name: '1',
        title: '為何收不到開戶成功的郵件?',
        content: '請在您的郵箱中，嘗試選定所有KP信件，設定這不是垃圾信件。',
      },
      {
        name: '2',
        title: 'KP提供虛擬帳戶嗎?',
        content:
          '我們提供存有虛擬資金的模擬帳戶，供客戶在沒有風險的環境下，試用我們的平台進行交易。\n前往交易軟件頁面，下載我們的MT4並點擊開啟模擬帳戶，選擇交易服務器為KP-Demo，即可成功創建模擬帳戶。',
      },
      {
        name: '3',
        title: '模擬帳戶有效期是多久呢?',
        content: '模擬帳戶有效期通常是1個月。',
      },
      {
        name: '4',
        title: 'KP如何保障我的身份信息安全?',
        content:
          '我們可能會利用您的資訊對您作出進一步的問詢調查，包括打擊金融欺詐的調查。 KP全權保護你的個人信息不被濫用、丟失、未授權訪問、修改或洩露。',
      },
      {
        name: '5',
        title: '平台點差水準是多少？',
        content:
          'KP 採用浮動點差，點差會根據行情波動而浮動。詳情前往<a href="/product/indices" target="_blank">產品介紹</a>頁面查看。',
      },
      {
        name: '6',
        title: '開設真實帳戶時，需要什麼資料？',
        content:
          '依據監管要求，開設首個真實帳戶需要客戶提供個人身份信息（例如全名、地址、電話、身份證件、地址證明等）以核實認證。開設非首個真實帳戶，則無需重複提交以上資料。',
      },
      {
        name: '7',
        title: 'KP 帳戶使用哪國貨幣進行交易？',
        content: '帳戶使用美元進行交易及結算，客戶使用其他貨幣時，將根據參考銀行匯率進行兌換。',
      },
      {
        name: '8',
        title: '註冊帳戶是否收費？',
        content: '於本公司開戶， KP不收取任何費用。',
      },
    ];
  }
}
</script>
<style lang="less" scoped>
@media (min-width: 768px) {
}
</style>