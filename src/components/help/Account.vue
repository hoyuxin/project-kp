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
export default class Account extends Vue {
  public get qaList() {
    return [
      {
        name: '1',
        title: '開設真實帳戶時，需要什麼資料？',
        content:
          '依據監管要求，開設首個真實帳戶需要客戶提供個人身份信息（例如全名、地址、電話、身份證件、地址證明等）以核實認證。開設非首個真實帳戶，則無需重複提交以上資料。',
      },
      {
        name: '2',
        title: '模擬帳戶有效期是多久呢?',
        content: '模擬帳戶有效期通常是1個月。',
      },
      {
        name: '3',
        title: '註冊帳戶是否收費？',
        content: '於本公司開戶， KP不收取任何費用。',
      },
      {
        name: '4',
        title: 'KP提供虛擬帳戶嗎?',
        content:
          '我們提供存有虛擬資金的模擬帳戶，供客戶在沒有風險的環境下，試用我們的平台進行交易。\n前往交易軟件頁面，下載我們的MT4並點擊開啟模擬帳戶，選擇交易服務器為KP-Demo，即可成功創建模擬帳戶。',
      },
      {
        name: '5',
        title: '如何儲值到交易帳戶?',
        content:
          '根據不同客戶需求提供多種存款方式，支持PayTrust、USDT存款，安全便捷。 前往登錄頁面，進入用戶中心，選擇【錢包】，點擊【存款】，選擇存款方式，輸入有效金額，前往支付即可。',
      },
      {
        name: '6',
        title: '什麼情況下會觸發系統自動平倉？',
        content:
          '當帳戶淨值低於強制平倉保證金要求時，系統會進行強制平倉；鎖倉並不能完全免卻強制平倉的風險，因此客戶進行鎖倉後仍須不定時留意其帳戶結馀及維持保證金。',
      },
      {
        name: '7',
        title: '為何收不到開戶成功的郵件?',
        content: '請在您的郵箱中，嘗試選定所有KP信件，設定這不是垃圾信件。',
      },
      {
        name: '8',
        title: 'MT4交易服務器是什麼？',
        content: '真實帳戶服務器：KP2-Live；模擬帳戶服務器：KP2-Demo。',
      },
    ];
  }
}
</script>
<style lang="less" scoped>
@media (min-width: 768px) {
}
</style>