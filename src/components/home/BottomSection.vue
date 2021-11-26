<template>
  <div class="bottom-section">
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
            <p @click="goPage(item.name)"
               class="bottom-menu__label">{{$t(item.label)}}</p>
            <ul class="bottom-menu__sub clear-default"
                v-for="sub in item.subMenu"
                :key="sub.label">
              <li class="bottom-submenu"
                  @click="goPage(sub.name)">{{$t(sub.label)}}</li>
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
        name: 'Indices',
        subMenu: [
          { label: 'home.indices', name: 'Indices' },
          { label: 'home.commodity', name: 'Commodity' },
          { label: 'home.currency', name: 'Currency' },
        ],
      },
      {
        label: 'home.trade',
        name: 'MetaTrade4',
        subMenu: [
          { label: 'Meta Trade4', name: 'MetaTrade4' },
          { label: 'App', name: 'App' },
        ],
      },
      {
        label: 'home.about',
        name: 'Company',
        subMenu: [
          { label: 'home.company', name: 'Company' },
          { label: 'home.new', name: 'News' },
        ],
      },
      {
        label: 'home.question',
        name: 'Contact',

        subMenu: [
          { label: 'home.contact', name: 'Contact' },
          { label: 'home.qa', name: 'Faq' },
        ],
      },
    ];
  }
  public goPage(router: string) {
    this.$router.push({ name: router });
  }
}
</script>
<style lang="less" scoped>
.bottom-section {
  position: flex;
  right: 0;
  bottom: 0;
  left: 0;
}
.trade-intro {
  background-color: #dfdfdf;
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
    font-size: 14px;
  }
  &__list {
    padding: 20px 20px 60px;
  }
  &__label {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
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

@media (min-width: 768px) {
  .bottom-menu {
    &-section {
      font-size: 18px;
    }
  }
}
@media (min-width: 1200px) {
  .trade-intro {
    &__content {
      max-width: 1200px;
    }
  }
}
</style>