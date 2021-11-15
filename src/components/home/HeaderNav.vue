<template>
  <div class="nav-block">
    <div class="nav-left">
      <img alt="logo"
           :src="logo"
           @click="goHome"
           class="logo-img" />
      <nav>
        <ul class="nav-menu">
          <li class="nav-menu__item"
              v-for="item in navList"
              :key="item.index"
              @click="goPage(item.name)">{{$t(item.label)}}</li>
        </ul>
      </nav>
    </div>
    <div class="nav-right">
      <p class="language"
         @click="toggleLan($i18n.locale)">{{langText}}</p>
      <el-button>{{$t('home.login')}}</el-button>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import logo from '@/assets/logo.png';
@Component
export default class HeaderNav extends Vue {
  public logo: string = logo;
  public switchLang(newLang: string) {
    this.$i18n.locale = newLang;
    localStorage.setItem('locale', newLang);
  }
  public toggleLan(locale: string) {
    locale === 'zh-tw' ? this.switchLang('en') : this.switchLang('zh-tw');
  }
  public goHome() {
    this.$router.push({ name: 'Home' });
  }
  public goPage(nameRouter: string) {
    this.$router.push({ name: nameRouter });
  }
  public get langText() {
    return this.$i18n.locale === 'zh-tw' ? 'English' : '繁體中文';
  }
  public get navList() {
    return [
      { label: 'home.product', index: 1, name: 'Indices' },
      { label: 'home.trade', index: 2, name: 'MetaTrade4' },
      { label: 'home.about', index: 3, name: 'Company' },
      { label: 'home.question', index: 4, name: '' },
    ];
  }
}
</script>


<style lang="less">
.nav {
  &-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 20;
    background-color: #fff;
  }
  &-left {
    display: flex;
    align-items: center;
  }
  &-right {
    display: flex;
    align-items: center;
    padding: 0 20px 0 0;
  }
  &-menu {
    display: flex;
    list-style: none;
    &__item {
      padding-left: 20px;
      &:hover {
        color: red;
        cursor: pointer;
      }
    }
  }
}
.language {
  margin-right: 15px;
  min-width: 65px;
  text-align: center;
  cursor: pointer;
}
.logo-img {
  cursor: pointer;
}
@media (min-width: 768px) {
}
</style>
