<template>
  <div>
    <tail :name="name"/>
    <search/>
  </div>
</template>

<script>
  import Tail from '../components/tail';
  import Search from '../components/search';

  export default {
    name: 'index',
    data() {
      return {
        name: "实验室登记与预约"
      }
    },
    components: {
      Tail,
      Search
    }
  }
</script>

<style>

</style>
