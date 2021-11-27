<template>
  <div class="commodity-wrap">
    <div class="commodity-block">
      <nav-list :currentIndex="2" />
      {{$t('product.commodities.content')}}
      <div class="commodity-content">
        <h4> {{$t('product.commodities.swap.title')}}</h4>
        <div class="commodity-product-text">
          <p>{{$t('product.commodities.swap.item1')}}</p>
          <p>{{$t('product.commodities.swap.item2')}}</p>
          <p>{{$t('product.commodities.swap.item3')}}</p>
          <p>{{$t('product.commodities.swap.item4')}}</p>
        </div>
        <ul class="commodity-list">
          <li>{{$t('product.commodities.swap.item5')}}</li>
          <li>{{$t('product.commodities.swap.item6')}}</li>
          <li>{{$t('product.commodities.swap.item7')}}</li>
        </ul>
      </div>
      <div class="commodity-table">
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
                           align="center" />
        </el-table>
      </div>
      <div class="commodity-warn-block">
        <span>{{$t('product.notice.title')}}</span>
        <ul class="commodity-warn-list">
          <li class="commodity-warn-item">{{$t('product.notice.item1')}}</li>
          <li class="commodity-warn-item">{{$t('product.notice.item2')}}</li>
          <li class="commodity-warn-item">{{$t('product.notice.item3')}}</li>
          <li class="commodity-warn-item">{{$t('product.notice.item4')}}</li>
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
export default class Commodity extends Vue {
  public get tableData() {
    return [
      {
        No: '1',
        Name: 'UKOIL',
        Product: this.$t('product.commodities.list.item1'),
        Point: 2.4,
        Leverage: '1:200',
        Pip: '10 ' + this.$t('product.us'),
        Time: this.$t('product.commodities.time') + ' 02:06-22:59',
      },
      {
        No: '2',
        Name: 'USOIL',
        Product: this.$t('product.commodities.list.item2'),
        Point: 2.4,
        Leverage: '1:200',
        Pip: '10 ' + this.$t('product.us'),
        Time: this.$t('product.commodities.time') + ' 00:01-22:59',
      },
      {
        No: '3',
        Name: 'XAGUSD',
        Product: this.$t('product.commodities.list.item3'),
        Point: 2.4,
        Leverage: '1:200',
        Pip: '50 ' + this.$t('product.us'),
        Time: this.$t('product.commodities.time') + ' 00:01-22:59',
      },
      {
        No: '4',
        Name: 'XAUUSD',
        Product: this.$t('product.commodities.list.item4'),
        Point: 0.8,
        Leverage: '1:500',
        Pip: '10 ' + this.$t('product.us'),
        Time: this.$t('product.commodities.time') + ' 00:01-22:59',
      },
    ];
  }
}
</script>
<style lang="less" scoped>
.commodity {
  &-wrap {
    background-color: #fbfbfb;
  }
  &-block {
    padding: 20px;
    max-width: 1200px;
    margin: auto;
  }
  &-content {
    margin: 20px 0;
    background-color: #f1f1f1;
    padding: 20px 20px 0;
  }
  &-product-text {
    padding: 20px 0;
    color: #0c1f3d;
  }
  &-list {
    color: #868c92;
    list-style: none;
    line-height: 1.5;
    padding: 10px 0 20px;
  }
  &-table {
    padding: 40px 0;
    margin: auto;
  }
  &-warn {
    &-block {
      padding-top: 40px;
      color: #868c92;
      margin: auto;
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