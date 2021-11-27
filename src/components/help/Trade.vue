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
        title: 'help.trade.q1',
        content: 'help.trade.ans1',
      },
      {
        name: '2',
        title: 'help.trade.q2',
        content: 'help.trade.ans2',
      },
      {
        name: '3',
        title: 'help.trade.q3',
        content: 'help.trade.ans3',
      },
      {
        name: '4',
        title: 'help.trade.q4',
        content: 'help.trade.ans4',
      },
      {
        name: '5',
        title: 'help.trade.q5',
        content: 'help.trade.ans5',
      },
      {
        name: '6',
        title: 'help.trade.q6',
        content: 'help.trade.ans6',
      },
      {
        name: '7',
        title: 'help.trade.q7',
        content: 'help.trade.ans7',
      },
      {
        name: '8',
        title: 'help.trade.q8',
        content: 'help.trade.ans8',
      },
    ];
  }
}
</script>
<style lang="less" scoped>
@media (min-width: 768px) {
}
</style>