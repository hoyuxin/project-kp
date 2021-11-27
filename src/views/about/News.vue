<template>
  <div class="news-block">
    <loading v-if="isLoading" />
    <div class="news-search-bar-block">
      <el-select v-model="searchType"
                 placeholder="消息類別"
                 @change="handlerType">
        <el-option v-for="item in type"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value">{{item.label}}</el-option>
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
       @click="handlerMore">查看更多></p>
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
    return this.news.length > 0 ? '' : '暫無最新消息';
  }
  public get type() {
    return [
      { label: '最新消息', value: 1 },
      // { label: '新聞稿', value: 2 },
      // { label: '營運資訊', value: 3 },
      // { label: '轉乘資訊', value: 4 },
      { label: '活動訊息', value: 5 },
      { label: '系統公告', value: 6 },
      { label: '新服務上架', value: 7 },
      { label: 'API修正', value: 8 },
      { label: '來源異常', value: 9 },
      { label: '資料更新', value: 10 },
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