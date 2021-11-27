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
        title: 'help.account.q1',
        content: 'help.account.ans1',
      },
      {
        name: '2',
        title: 'help.account.q2',
        content: 'help.account.ans2',
      },
      {
        name: '3',
        title: 'help.account.q3',
        content: 'help.account.ans3',
      },
      {
        name: '4',
        title: 'help.account.q4',
        content: 'help.account.ans4',
      },
      {
        name: '5',
        title: 'help.account.q5',
        content: 'help.account.ans5',
      },
      {
        name: '6',
        title: 'help.account.q6',
        content: 'help.account.ans6',
      },
      {
        name: '7',
        title: 'help.account.q7',
        content: 'help.account.ans7',
      },
      {
        name: '8',
        title: 'help.account.q8',
        content: 'help.account.ans8',
      },
    ];
  }
}
</script>
<style lang="less" scoped>
@media (min-width: 768px) {
}
</style>