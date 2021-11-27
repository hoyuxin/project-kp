<template>
  <div class="news-block">
    <loading v-if="isLoading" />
    <div class="news-search-bar-block">
      <el-select v-model="searchType"
                 :placeholder="$t('home.news.placeholder')"
                 @change="handlerType">
        <el-option v-for="item in type"
                   :key="item.value"
                   :label="$t(item.label)"
                   :value="item.value">{{$t(item.label)}}</el-option>
      </el-select>
    </div>
    <div v-for="item in news"
         :key="item.UpdateTime"
         class="news-item">
      <div class="news-item-title-block">
        <p class="news-title">{{item.Title}}</p>
        <p class="news-time">{{item.PublishTime}}</p>
      </div>
      <p class="news-description">{{item.Description}}</p>
    </div>
    <p v-if="news.length === 0 && !isLoading">{{emptyText}}</p>
    <p class="news-more"
       v-if="news.length >= 10"
       @click="handlerMore">{{$t('home.news.more')}}</p>
    <!-- {{news}} -->
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import Loading from '@/components/Loading.vue';
import dayjs from 'dayjs';
interface Data {
  Title: string;
  Description: string;
  PublishTime: string;
}

@Component({
  components: {
    Loading,
  },
})
export default class News extends Vue {
  public isLoading: boolean = false;
  public pageSize: number = 0;
  public searchType = null;
  public news: Data[] = [];
  public apiParams: any = {
    url: '/MOTC/v2/PTX/Web/News',
    method: 'get',
    params: {
      $top: 10,
      $format: 'JSON',
    },
  };
  public created() {
    this.callApi();
  }
  public callApi() {
    this.isLoading = true;
    this.news = [];
    this.$http(this.apiParams as any)
      .then((response: any) => {
        const res = response.data.Newses;
        if (res.length > 0) {
          res.forEach((item: Data) => {
            this.news.push({
              Title: item.Title,
              Description: item.Description,
              PublishTime: dayjs(item.PublishTime).format('YYYY/MM/DD hh:mm:ss'),
            });
          });
        }
        this.isLoading = false;
      })
      .catch((error) => {
        // console.log('Error:', error.message);
        this.isLoading = false;
      });
  }
  public handlerType() {
    this.apiParams.params.$filter = `NewsCategory eq ${this.searchType}`;
    this.callApi();
  }
  public handlerMore() {
    this.pageSize += 10;
    this.apiParams.params.$skip = this.pageSize;
    this.callApi();
  }
  public get emptyText() {
    return this.news.length > 0 ? '' : this.$t('home.news.empty');
  }
  public get type() {
    return [
      { label: 'home.news.title', value: 1 },
      // { label: '新聞稿', value: 2 },
      // { label: '營運資訊', value: 3 },
      // { label: '轉乘資訊', value: 4 },
      { label: 'home.news.item1', value: 5 },
      { label: 'home.news.item2', value: 6 },
      { label: 'home.news.item3', value: 7 },
      { label: 'home.news.item4', value: 8 },
      { label: 'home.news.item5', value: 9 },
      { label: 'home.news.item6', value: 10 },
    ];
  }
}
</script>
<style lang="less" scoped>
.news {
  &-search-bar-block {
    padding: 0 20px;
  }
  &-block {
    box-sizing: border-box;
    overflow: hidden;
  }
  &-item {
    border: 1px solid #2067a6;
    border-radius: 10px;
    margin: 20px;
    padding: 20px;
    box-sizing: border-box;
    &-title-block {
      display: flex;
      justify-content: space-between;
      padding-bottom: 15px;
    }
  }
  &-title {
    color: brown;
    font-weight: bold;
  }
  &-time {
    color: #65a;
    font-size: 16px;
  }
  &-description {
    font-size: 14px;
    word-break: break-all;
  }
  &-more {
    text-align: center;
    margin: 20px 0;
    cursor: pointer;
    color: #2067a6;
    font-weight: bold;
  }
}
@media (min-width: 768px) {
}
</style>