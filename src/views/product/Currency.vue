<template>
  <div class="currency-wrap">
    <div class="currency-block">
      <nav-list :currentIndex="3" />
      <p>{{$t('product.currency.content')}}</p>
      <div class="currency-table">
        <el-table :data="tableData"
                  stripe
                  height="600px"
                  style="width: 100%">
          <el-table-column prop="No"
                           :label="$t('product.column.item1')"
                           width="80" />
          <el-table-column prop="Name"
                           :label="$t('product.column.item2')"
                           align="center" />
          <el-table-column prop="Product"
                           :label="$t('product.column.item3')"
                           align="center" />
          <el-table-column prop="Point"
                           :label="$t('product.column.item4')"
                           align="center" />
          <el-table-column prop="Leverage"
                           :label="$t('product.column.item5')"
                           align="center" />
          <el-table-column prop="Pip"
                           :label="$t('product.column.item6')"
                           align="center" />
          <el-table-column prop="Time"
                           :label="$t('product.column.item7')"
                           align="center"
                           width="200" />
        </el-table>
      </div>
      <div class="currency-warn-block">
        <span>{{$t('product.notice.title')}}</span>
        <ul class="currency-warn-list">
          <li class="currency-warn-item">{{$t('product.notice.item1')}}</li>
          <li class="currency-warn-item">{{$t('product.notice.item2')}}</li>
          <li class="currency-warn-item">{{$t('product.notice.item3')}}</li>
          <li class="currency-warn-item">{{$t('product.notice.item4')}}</li>
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
export default class Currency extends Vue {
  public get tableData() {
    return [
      {
        No: '1',
        Name: 'BTCUSD',
        Product: this.$t('product.currency.list.item1'),
        Point: 80,
        Leverage: '1:10',
        Pip: '0.5 ' + this.$t('product.us'),
        Time: this.$t('product.currency.time') + ' 00:01-23:55',
      },
      {
        No: '2',
        Name: 'BCHUSD',
        Product: this.$t('product.currency.list.item2'),
        Point: 60,
        Leverage: '1:10',
        Pip: '1 ' + this.$t('product.us'),
        Time: this.$t('product.currency.time') + ' 00:01-23:55',
      },
      {
        No: '3',
        Name: 'ETHUSD',
        Product: this.$t('product.currency.list.item3'),
        Point: 35,
        Leverage: '1:10',
        Pip: '1 ' + this.$t('product.us'),
        Time: this.$t('product.currency.time') + ' 00:01-23:55',
      },
      {
        No: '4',
        Name: 'LTCUSD',
        Product: this.$t('product.currency.list.item4'),
        Point: 35,
        Leverage: '1:10',
        Pip: '10 ' + this.$t('product.us'),
        Time: this.$t('product.currency.time') + ' 00:01-23:55',
      },
      {
        No: '5',
        Name: 'DSHUSD',
        Product: this.$t('product.currency.list.item5'),
        Point: 50,
        Leverage: '1:10',
        Pip: '1 ' + this.$t('product.us'),
        Time: this.$t('product.currency.time') + ' 00:01-23:55',
      },
      {
        No: '6',
        Name: 'ADAUSD',
        Product: this.$t('product.currency.list.item6'),
        Point: 3.5,
        Leverage: '1:5',
        Pip: '10 ' + this.$t('product.us'),
        Time: this.$t('product.currency.time') + ' 00:01-23:55',
      },
      {
        No: '7',
        Name: 'DOTUSD',
        Product: this.$t('product.currency.list.item7'),
        Point: 22,
        Leverage: '1:5',
        Pip: '1 ' + this.$t('product.us'),
        Time: this.$t('product.currency.time') + ' 00:01-23:55',
      },
      {
        No: '8',
        Name: 'EOSUSD',
        Product: this.$t('product.currency.list.item8'),
        Point: 30,
        Leverage: '1:10',
        Pip: '1 ' + this.$t('product.us'),
        Time: this.$t('product.currency.time') + ' 00:01-23:55',
      },
      {
        No: '9',
        Name: 'LINKUSD',
        Product: this.$t('product.currency.list.item9'),
        Point: 80,
        Leverage: '1:5',
        Pip: '1 ' + this.$t('product.us'),
        Time: this.$t('product.currency.time') + ' 00:01-23:55',
      },
      {
        No: '10',
        Name: 'TRXUSD',
        Product: this.$t('product.currency.list.item10'),
        Point: 1.2,
        Leverage: '1:5',
        Pip: '10 ' + this.$t('product.us'),
        Time: this.$t('product.currency.time') + ' 00:01-23:55',
      },
      {
        No: '11',
        Name: 'XLMUSD',
        Product: this.$t('product.currency.list.item11'),
        Point: 2.2,
        Leverage: '1:5',
        Pip: '10 ' + this.$t('product.us'),
        Time: this.$t('product.currency.time') + ' 00:01-23:55',
      },
    ];
  }
}
</script>
<style lang="less" scoped>
.currency {
  &-wrap {
    background-color: #fbfbfb;
  }
  &-block {
    padding: 20px;
    max-width: 1200px;
    margin: auto;
  }
  &-table {
    min-height: 100%;
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