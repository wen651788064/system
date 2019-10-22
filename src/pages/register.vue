<template>
  <div>
    <tail :name="name"/>
    <sub-tail :type="type" :articles="articles"/>
    <item-props/>
  </div>
</template>

<script>
  import Tail from '../components/tail';
  import SubTail from '../components/sub_tail';
  import ItemProps from '../components/item_props';

  export default {
    name: "order",
    data() {
      return {
        name: "试剂与易耗品登记系统",
        type: "登记",
        articles: "碳酸氢钠",
      }
    },
    mounted() {
      this.articles = this.$route.query.name;
    },
    components: {
      Tail,
      SubTail,
      ItemProps
    },
  }
</script>

<style scoped>

</style>
