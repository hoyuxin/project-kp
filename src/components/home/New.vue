<template>
  <div class="home-new-block">
    <loading v-if="isLoading" />
    <div class="title-search">
      <p class="home-new-page-title"
         @click="handlerNews">最新消息</p>
      <el-select v-model="searchType"
                 placeholder="消息類別"
                 @change="handlerType">
        <el-option v-for="item in type"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value">{{item.label}}</el-option>
      </el-select>
    </div>
    <div v-for="item in oneNew"
         :key="item.Title"
         class="home-new-content-block">
      <p class="home-new-time">{{item.PublishTime}}</p>
      <p class="home-new-title">{{item.Title}}</p>
      <p class="home-new-content">{{item.Description}}</p>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import dayjs from 'dayjs';
import Loading from '@/components/Loading.vue';

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
export default class New extends Vue {
  public isLoading: boolean = false;
  public oneNew: Data[] = [];
  public searchType = null;
  public apiParams: any = {
    url: '/MOTC/v2/PTX/Web/News',
    method: 'get',
    params: {
      $top: 1,
      $format: 'JSON',
    },
  };
  public created() {
    this.callApi();
  }
  public callApi() {
    this.isLoading = true;
    this.oneNew = [];
    this.$http(this.apiParams as any)
      .then((response: any) => {
        const res = response.data.Newses;
        if (res.length > 0) {
          res.forEach((item: Data) => {
            this.oneNew.push({
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
  public handlerNews() {
    this.$router.push({ name: 'News' });
  }
  public handlerType() {
    this.apiParams.params.$filter = `NewsCategory eq ${this.searchType}`;
    this.callApi();
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
@--color-red: #db351f;

.home-new {
  &-page-title {
    font-size: 20px;
    text-decoration: underline;
    color: @--color-red;
    padding: 20px;
    cursor: pointer;
  }
  &-block {
    margin: 20px;
    background-color: #def;
    padding: 0 0 20px;
  }
  &-content-block {
    box-sizing: border-box;
    padding: 0 20px;
  }
  &-title-block {
    padding-right: 20px;
  }
  &-title {
    font-weight: bold;
    line-height: 1.75;
  }
  &-content {
    font-size: 14px;
    word-break: break-all;
  }
}
.title-search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
}
@media (min-width: 768px) {
  max-width: 1200px;
}
</style>