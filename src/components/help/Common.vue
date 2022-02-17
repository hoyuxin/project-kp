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
        title: 'help.common.q1',
        content: 'help.common.ans1',
      },
      {
        name: '2',
        title: 'help.common.q2',
        content: 'help.common.ans2',
      },
      {
        name: '3',
        title: 'help.common.q3',
        content: 'help.common.ans3',
      },
      {
        name: '4',
        title: 'help.common.q4',
        content: 'help.common.ans4',
      },
      {
        name: '5',
        title: 'help.common.q5',
        content: 'help.common.ans5',
      },
      {
        name: '6',
        title: 'help.common.q6',
        content: 'help.common.ans6',
      },
      {
        name: '7',
        title: 'help.common.q7',
        content: 'help.common.ans7',
      },
      {
        name: '8',
        title: 'help.common.q8',
        content: 'help.common.ans8',
      },
    ];
  }
}
</script>
<style lang="less" scoped>
@media (min-width: 768px) {
}
</style>