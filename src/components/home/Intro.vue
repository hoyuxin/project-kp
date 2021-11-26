<template>
  <div class="intro-block">
    <div v-for="item in list"
         :key="item.icon"
         class="intro-list">
      <div class="intro-item">
        <div>
          <i :class="['intro-icon', item.icon]" />
        </div>
        <div class="intro-context">
          <span class="intro-title">{{$t(item.title)}}</span>
          <span class="intro-label">{{$t(item.label)}}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Intro extends Vue {
  public get list() {
    return [
      {
        icon: 'el-icon-s-data',
        title: 'home.intro.item1.title',
        label: 'home.intro.item1.label',
      },
      {
        icon: 'el-icon-s-custom',
        title: 'home.intro.item2.title',
        label: 'home.intro.item2.label',
      },
      {
        icon: 'el-icon-s-marketing',
        title: 'home.intro.item3.title',
        label: 'home.intro.item3.label',
      },
      {
        icon: 'el-icon-s-platform',
        title: 'home.intro.item4.title',
        label: 'home.intro.item4.label',
      },
    ];
  }
}
</script>
<style lang="less" scoped>
.intro {
  &-block {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    background-color: #eee;
  }
  &-list {
    width: 50%;
  }
  &-item {
    padding: 20px 10px;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    cursor: pointer;
  }
  &-icon {
    font-size: 32px;
    padding-right: 15px;
    color: #2067a6;
  }
  &-title {
    font-size: 18px;
    font-weight: bold;
    color: #000;
  }
  &-label {
    display: block;
    font-size: 14px;
  }
}
@media (min-width: 768px) {
  .intro {
    &-block {
      padding: 20px 0;
      flex-wrap: nowrap;
    }
    &-item {
      margin: 5px;
    }
  }
}
</style>