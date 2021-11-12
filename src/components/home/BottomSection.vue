<template>
  <div>
    <div class="trade-intro">
      <div class="trade-intro__content">
        <p>{{$t('home.tradeBlock.content1')}}</p>
        <p>{{$t('home.tradeBlock.content2')}}</p>
      </div>
    </div>
    <div class="bottom-menu">
      <div class="bottom-menu-section">
        <ul class="bottom-menu__list clear-default"
            v-for="item in menuList"
            :key="item.label">
          <li class="bottom-menu__item">
            <a href=""
               class="bottom-menu__label">{{$t(item.label)}}</a>
            <ul class="bottom-menu__sub clear-default"
                v-for="sub in item.subMenu"
                :key="sub.label">
              <li class="bottom-submenu">{{$t(sub.label)}}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="copyright">
      <p>Copyright © {{thisYear}} All Rights Reserved.</p>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class BottomSection extends Vue {
  public get thisYear() {
    const year = new Date().getFullYear();
    return year;
  }
  public get menuList() {
    return [
      {
        label: 'home.product',
        subMenu: [
          { label: 'home.forex', link: '' },
          { label: 'home.oil', link: '' },
          { label: 'home.currency', link: '' },
        ],
      },
      {
        label: 'home.trade',
        subMenu: [{ label: 'Meta 4', link: '' }],
      },
      {
        label: 'home.about',
        subMenu: [
          { label: 'home.company', link: '' },
          { label: 'home.new', link: '' },
        ],
      },
      {
        label: 'home.question',
        subMenu: [
          { label: 'home.contact', link: '' },
          { label: 'home.qa', link: '' },
        ],
      },
    ];
  }
}
</script>
<style lang="less" scoped>
.trade-intro {
  background-color: #eee;
  color: #878787;
  &__content {
    margin: auto;
    text-align: left;
    padding: 20px;
  }
}

.bottom-menu {
  background-color: #3a3f42;
  &-section {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: auto;
  }
  &__list {
    padding: 20px 20px 60px;
  }
  &__label {
    color: #fff;
    text-decoration: none;
  }
}
.bottom-submenu {
  color: #878787;
  margin: 20px 0 0;
  cursor: pointer;
  &:hover {
    color: #fff;
    font-weight: bold;
  }
}
.clear-default {
  list-style: none;
}
.copyright {
  text-align: center;
  background-color: #333;
  padding: 10px 0;
  color: #fff;
}
@media (min-width: 1200px) {
  .trade-intro {
    &__content {
      width: 1000px;
    }
  }
}
</style>