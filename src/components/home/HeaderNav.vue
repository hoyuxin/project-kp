<template>
  <div class="nav-block">
    <div class="nav-left">
      <img alt="logo"
           :src="logo" />
      <nav>
        <ul class="nav-menu">
          <li class="nav-menu__item">{{$t('home.product')}}</li>
          <li class="nav-menu__item">{{$t('home.trade')}}</li>
          <li class="nav-menu__item">{{$t('home.about')}}</li>
          <li class="nav-menu__item">{{$t('home.question')}}</li>
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
  public get langText() {
    return this.$i18n.locale === 'zh-tw' ? 'English' : '繁體中文';
  }
}
</script>


<style lang="less">
.nav {
  &-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
@media (min-width: 768px) {
}
</style>
