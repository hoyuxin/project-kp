<template>
  <el-collapse v-model="activeName"
               accordion>
    <el-collapse-item v-for="item in qaList"
                      :key="item.name"
                      :title="item.title"
                      :name="item.name"
                      class="faq-question-item">
      <div v-html="item.content"
           class="faq-question-content" />
    </el-collapse-item>
  </el-collapse>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component
export default class QaContainer extends Vue {
  @Prop({ default: () => [] })
  public qaList!: string[];
  public activeName = '1';
  public defaultIndex = 0;
}
</script>
<style lang="less" scoped>
.faq {
  &-question {
    &-content {
      white-space: break-spaces;
    }
    &-item {
      margin: 20px;
      padding: 20px;
      background-color: #f1f2f4;
    }
  }
}
@media (min-width: 768px) {
}
</style>