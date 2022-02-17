<template>
  <div class="nav-block">
    <div class="nav-left">
      <img alt="logo"
           :src="logo"
           @click="goHome"
           class="logo-img" />
      <nav class="nav-menu-block nav-mob">
        <ul class="nav-menu">
          <li class="nav-menu__item"
              v-for="item in navList"
              :key="item.index"
              @mouseenter="mouseEnter(item.index)"
              @mouseleave="mouseleave">{{$t(item.label)}}
            <div v-if="showIndexSubMenu === item.index"
                 :class="[{'nav-menu__item-sub': showIndexSubMenu === item.index} ]"
                 @mouseenter="mouseEnter(item.index)">
              <p v-for="subMenu in item.child"
                 :key="subMenu.index"
                 :class="[subMenu.name]"
                 @click.prevent="goPage(subMenu.name)">{{$t(subMenu.label)}}</p>
            </div>
          </li>
        </ul>
      </nav>
    </div>
    <div class="nav-right ">
      <div class="nav-mob">
        <p class="language"
           @click="toggleLan($i18n.locale)">{{langText}}</p>
      </div>
      <div class="nav-mob-icon"
           @click="handlerMenu">
        <div class="nav-mob-menu"></div>
      </div>
      <div :class="['nav-mob-wrap', { 'show':isActiveMobMenu}]">
        <div v-for="mobMenu in navList"
             :key="mobMenu.index"
             class="nav-mob-wrap__item"
             @click="handlerMobMenu(mobMenu.index)">
          <p class="nav-mob-wrap__item-text">{{$t(mobMenu.label)}}</p>
          <div v-if="mobMenu.index === activeIndexMenu ">
            <p v-for="subMenu in mobMenu.child"
               :key="subMenu.index"
               :class="['nav-mob-wrap__item-sub']"
               @click="goPage(subMenu.name)">
              <span :class="[subMenu.name]">{{$t(subMenu.label)}}</span>
            </p>
          </div>
        </div>
        <p class="nav-mob-wrap__item-lang"
           @click="toggleLan($i18n.locale)">{{langText}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import logo from '@/assets/logo.png';
@Component
export default class HeaderNav extends Vue {
  public logo: string = logo;
  public isActiveMobMenu: boolean = false;
  public activeIndexMenu: number = -1;
  public showIndexSubMenu: number = -1;
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
    this.isActiveMobMenu = false;
  }
  public handlerMenu() {
    this.isActiveMobMenu = !this.isActiveMobMenu;
  }
  public handlerMobMenu(index: number) {
    if (this.activeIndexMenu === index) {
      this.activeIndexMenu = -1;
    } else {
      this.activeIndexMenu = index;
    }
  }
  public mouseEnter(index: number) {
    this.showIndexSubMenu = index;
  }
  public mouseleave() {
    this.showIndexSubMenu = -1;
  }

  public get langText() {
    return this.$i18n.locale === 'zh-tw' ? 'English' : '繁體中文';
  }
  public get navList() {
    return [
      {
        label: 'home.product',
        index: 1,
        name: 'Indices',
        child: [
          { label: 'home.indices', index: 0, name: 'Indices' },
          { label: 'home.commodity', index: 1, name: 'Commodity' },
          { label: 'home.currency', index: 2, name: 'Currency' },
        ],
      },
      {
        label: 'home.trade',
        index: 2,
        name: 'MetaTrade4',
        child: [
          { label: 'home.mt4', index: 0, name: 'MetaTrade4' },
          { label: 'home.app', index: 1, name: 'App' },
        ],
      },
      {
        label: 'home.about',
        index: 3,
        name: 'Company',
        child: [
          { label: 'home.company', index: 0, name: 'Company' },
          { label: 'home.new', index: 1, name: 'News' },
        ],
      },
      {
        label: 'home.question',
        index: 4,
        name: 'Faq',
        child: [{ label: 'home.qa', index: 1, name: 'Faq' }],
      },
    ];
  }
}
</script>


<style lang="less">
@--color-red: #db351f;

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
    position: relative;
  }
  &-menu {
    display: flex;
    list-style: none;
    &__item {
      padding-left: 20px;
      position: relative;
      width: 80px;
      &:hover {
        color: @--color-red;
        cursor: pointer;
      }
      &-sub {
        display: block;
        width: 150px;
        background-color: #eee;
        position: absolute;
        z-index: 10;
        top: 20px;
        padding: 20px;
        color: black;
        line-height: 2;
        .Indices,
        .Commodity,
        .Currency,
        .MetaTrade4,
        .App,
        .Company,
        .News,
        .Faq {
          &:hover {
            background-color: #ccc;
            color: #777;
          }
        }
      }
    }
  }
  &-mob {
    display: none;
    &-icon {
      width: 28px;
      height: 28px;
      cursor: pointer;
      position: relative;
    }
    &-menu {
      width: 18px;
      height: 2px;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #0a1e3d;
      margin: auto;
      box-shadow: 0 6px 0 #0a1e3d, 0 -6px 0 #0a1e3d;
    }
    &-wrap {
      text-align: center;
      width: 300px;
      height: calc(100% - 100px);
      background-color: #eee;
      position: fixed;
      top: 100px;
      right: -320px;
      transition: right 0.4s;

      &.show {
        transition: right 0.4s;
        right: 0;
      }

      &__item {
        cursor: pointer;
        margin: 20px 0;
        text-align: center;

        &-lang {
          padding: 20px 0;
          font-weight: bold;
          color: #2067a6;
          cursor: pointer;
        }
        &-sub {
          background-color: rgba(200, 200, 200, 0.5);
          padding: 20px 0;
          &:hover {
            color: @--color-red;
            font-weight: bold;
          }
        }
        &-text {
          padding-bottom: 15px;
        }
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
  .nav {
    &-mob {
      display: block;
      &-icon {
        display: none;
      }
      &-wrap {
        &.show {
          display: none;
        }
      }
    }
  }
}
</style>
