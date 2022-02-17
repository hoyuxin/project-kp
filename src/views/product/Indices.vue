<template>
  <div class="indices-wrap">
    <div class="indices-block">
      <nav-list :currentIndex="1" />
      <p>{{$t('product.indices.content')}}</p>
      <div class="indices-table">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="No"
                           :label="$t('product.column.item1')"
                           align="center"
                           width="80" />
          <el-table-column prop="Name"
                           :label="$t('product.column.item2')"
                           align="center" />
          <el-table-column prop="Product"
                           :label="$t('product.column.item3')"
                           align="center"
                           width="160" />
          <el-table-column prop="Point"
                           :label="$t('product.column.item4')"
                           width="120"
                           align="center" />
          <el-table-column prop="Leverage"
                           :label="$t('product.column.item5')"
                           width="120"
                           align="center" />
          <el-table-column prop="Pip"
                           :label="$t('product.column.item6')"
                           width="120"
                           align="center" />
          <el-table-column prop="Time"
                           :label="$t('product.column.item7')"
                           align="center"
                           width="200" />
        </el-table>
      </div>
      <div class="indices-warn-block">
        <span>{{$t('product.notice.title')}}</span>
        <ul class="indices-warn-list">
          <li class="indices-warn-item">{{$t('product.notice.item1')}}</li>
          <li class="indices-warn-item">{{$t('product.notice.item2')}}</li>
          <li class="indices-warn-item">{{$t('product.notice.item3')}}</li>
          <li class="indices-warn-item">{{$t('product.notice.item4')}}</li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import NavList from '@/components/product/NavList.vue';

@Component({
  components: {
    NavList,
  },
})
export default class Indices extends Vue {
  public get tableData() {
    return [
      {
        No: '1',
        Name: 'DAX',
        Product: this.$t('product.indices.list.item1'),
        Point: 2.4,
        Leverage: '1:100',
        Pip: '25 ' + this.$t('product.eur'),
        Time: this.$t('product.indices.time') + '  00:05-22:15',
      },
      {
        No: '2',
        Name: 'DOW',
        Product: this.$t('product.indices.list.item2'),
        Point: 3.0,
        Leverage: '1:100',
        Pip: '5 ' + this.$t('product.us'),
        Time: this.$t('product.indices.time1') + ' 00:01-23:55',
      },
      {
        No: '3',
        Name: 'FTSE100',
        Product: this.$t('product.indices.list.item3'),
        Point: 2.0,
        Leverage: '1:100',
        Pip: '10 ' + this.$t('product.gbp'),
        Time: this.$t('product.indices.time1') + ' 00:01-23:55',
      },
      {
        No: '4',
        Name: 'HSI',
        Product: this.$t('product.indices.list.item4'),
        Point: 0.7,
        Leverage: '1:10',
        Pip: '50 ' + this.$t('product.hk'),
        Time: this.$t('product.indices.time1') + ' 00:01-23:55',
      },
      {
        No: '5',
        Name: 'NAS100',
        Product: this.$t('product.indices.list.item5'),
        Point: 2.0,
        Leverage: '1:100',
        Pip: '10 ' + this.$t('product.us'),
        Time: this.$t('product.indices.time1') + ' 00:01-23:55',
      },
      {
        No: '6',
        Name: 'NIKKEI',
        Product: this.$t('product.indices.list.item6'),
        Point: 1.4,
        Leverage: '1:100',
        Pip: '500 ' + this.$t('product.jp'),
        Time: this.$t('product.indices.time1') + ' 00:01-23:55',
      },
      {
        No: '7',
        Name: 'SPX500',
        Product: this.$t('product.indices.list.item7'),
        Point: 1.0,
        Leverage: '1:100',
        Pip: '10 ' + this.$t('product.us'),
        Time: this.$t('product.indices.time') + ' 00:05-22:15',
      },
      {
        No: '8',
        Name: 'USDX',
        Product: this.$t('product.indices.list.item8'),
        Point: 3.5,
        Leverage: '1:100',
        Pip: '10 ' + this.$t('product.us'),
        Time: this.$t('product.indices.time') + ' 00:01-23:00',
      },
    ];
  }
}
</script>
<style lang="less" scoped>
.indices {
  &-wrap {
    background-color: #fbfbfb;
  }
  &-block {
    max-width: 1200px;
    padding: 20px;
    margin: auto;
  }
  &-table {
    max-width: 1000px;
    padding: 40px 0;
    min-height: 100%;
  }
  &-list {
    list-style: none;
    line-height: 1.71;
    color: #868c92;
  }
  &-warn {
    &-block {
      padding-top: 40px;
      color: #868c92;
    }
    &-list {
      list-style-type: decimal;
      padding: 0 20px 20px;
    }
    &-item {
      line-height: 2;
    }
  }
}
@media (min-width: 768px) {
}
</style>