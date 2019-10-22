<template>
  <div style="height: 49px; background: #F2F2F2">
    <div style="padding: 15px 5px; display: inline-block" @click="back">
      <svg t="1571499414755" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
           p-id="2492" width="20" height="20">
        <path
          d="M640 857.6c-12.8 0-21.333333-4.266667-29.866667-12.8l-302.933333-302.933333c-17.066667-17.066667-17.066667-42.666667 0-59.733334l302.933333-302.933333c17.066667-17.066667 42.666667-17.066667 59.733334 0s17.066667 42.666667 0 59.733333L396.8 512l273.066667 273.066667c17.066667 17.066667 17.066667 42.666667 0 59.733333-8.533333 8.533333-17.066667 12.8-29.866667 12.8z"
          p-id="2493"></path>
      </svg>
    </div>

    <span style="position: relative; top: -4px; font-size: 17px; color: #666666;">
      <span style="font-weight: bold; ">{{type}}</span>
      <span>{{articles}}</span>
    </span>
  </div>
</template>

<script>
  export default {
    name: "sub_tail",
    props: ["type", "articles"],
    methods: {
      back() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>

</style>
