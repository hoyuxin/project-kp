<template>
  <el-carousel height="750px">
    <el-carousel-item v-for="item in list"
                      :key="item.index">
      <img :src="item.url">
    </el-carousel-item>
  </el-carousel>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class BannerSection extends Vue {
  public list: any[] = [
    { url: 'https://picsum.photos/3840/2160/?blur=1', index: 1 },
    { url: 'https://picsum.photos/3840/2160/?blur=2', index: 2 },
    { url: 'https://picsum.photos/3840/2160/?blur=3', index: 3 },
    { url: 'https://picsum.photos/3840/2160/?blur=4', index: 4 },
  ];
}
</script>
<style lang="less">
</style>
