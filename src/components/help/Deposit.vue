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
        title: 'help.deposit.q1',
        content: 'help.deposit.ans1',
      },
      {
        name: '2',
        title: 'help.deposit.q2',
        content: 'help.deposit.ans2',
      },
      {
        name: '3',
        title: 'help.deposit.q3',
        content: 'help.deposit.ans3',
      },
      {
        name: '4',
        title: 'help.deposit.q4',
        content: 'help.deposit.ans4',
      },
      {
        name: '5',
        title: 'help.deposit.q5',
        content: 'help.deposit.ans5',
      },
      {
        name: '6',
        title: 'help.deposit.q6',
        content: 'help.deposit.ans6',
      },
      {
        name: '7',
        title: 'help.deposit.q7',
        content: 'help.deposit.ans7',
      },
      {
        name: '8',
        title: 'help.deposit.q8',
        content: 'help.deposit.ans8',
      },
      {
        name: '9',
        title: 'help.deposit.q9',
        content: 'help.deposit.ans9',
      },
    ];
  }
}
</script>
<style lang="less" scoped>
@media (min-width: 768px) {
}
</style>