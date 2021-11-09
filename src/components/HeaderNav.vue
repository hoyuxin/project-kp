<template>
  <div class="nav-block">
    <div class="nav-left">
      <img alt="logo"
           src="./../assets/logo.png">
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
      <el-button>{{$t('home.login')}}</el-button>
      <p class="language"
         @click="toggleLan($i18n.locale)">{{langText}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class HeaderNav extends Vue {
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
  margin-left: 10px;
  min-width: 65px;
  text-align: center;
  cursor: pointer;
}
</style>
