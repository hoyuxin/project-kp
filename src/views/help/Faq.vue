<template>
  <div class="faq-block">
    <div class="faq-list-block">
      <ul class="faq-list">
        <li :class="['faq-list__item',{'active': item.index === defaultIndex}]"
            v-for="item in list"
            :key="item.index"
            @click="activeItem(item.index)">{{item.label}} <i class="el-icon-caret-right icon-arrow" /></li>
      </ul>
    </div>
    <div class="faq-question-block">
      <component :is="componentName" />
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import Account from '@/components/help/Account.vue';
import Common from '@/components/help/Common.vue';
import Deposit from '@/components/help/Deposit.vue';
import Trade from '@/components/help/Trade.vue';

@Component({
  components: {
    Account,
    Common,
    Deposit,
    Trade,
  },
})
export default class Faq extends Vue {
  public activeName = '1';
  public defaultIndex = 0;
  public componentName = 'Trade';
  public get list() {
    return [
      { label: '常見問題', index: 0 },
      { label: '交易問題', index: 1 },
      { label: '存取問題', index: 2 },
      { label: '帳戶問題', index: 3 },
    ];
  }
  public activeItem(index: number) {
    this.defaultIndex = index;
    switch (index) {
      case 0:
        this.componentName = 'Common';
        break;
      case 1:
        this.componentName = 'Trade';
        break;
      case 2:
        this.componentName = 'Deposit';
        break;
      case 3:
        this.componentName = 'Account';
        break;

      default:
        break;
    }
  }
}
</script>
<style lang="less" scoped>
@--color-red: #db351f;
.faq {
  &-list {
    padding: 20px 0;
    list-style: none;
    display: flex;
    justify-content: center;
    &__item {
      &:hover,
      &.active {
        color: @--color-red;
        cursor: pointer;
        .icon-arrow {
          opacity: 1;
          transition: left 1s, opacity 2s;
          transform: rotate(90deg);
        }
      }
      margin: auto 10px;
    }
  }
  &-question-block {
    flex: 1;
  }
}
.icon-arrow {
  opacity: 0;
}
@media (min-width: 1440px) {
  .faq {
    &-block {
      display: flex;
      margin: auto;
      max-width: 1200px;
    }
    &-list {
      line-height: 3;
      display: inherit;
      padding: 0;
      &-block {
        width: 100%;
        max-width: 300px;
        text-align: center;
      }
      &__item {
        &:hover,
        &.active {
          .icon-arrow {
            transform: rotate(0deg);
          }
        }
      }
    }
  }
  /deep/ .el-collapse-item {
    &__header,
    &__wrap {
      background-color: transparent;
    }
    &__header {
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>