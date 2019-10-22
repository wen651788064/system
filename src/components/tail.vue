<template>
  <div style="height: 70px; background: black; ">
    <div style="    height: 70px;background: black; position: fixed;top: 0px;width: 100%;display: block;z-index: 1000;  ">
      <div style="position: relative; top: 35px;">
        <div class="weui-flex">
          <div class="weui-flex__item">
          <span style="color: white; font-size: 16px;  font-weight: bold; margin-left: 20px;">
          {{name}}
        </span>
          </div>
          <div class="weui-flex__item">
          <span style="color: white; float: right; margin-right: 20px">
            <svg t="1570333824165" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="2690"
                 width="30" height="30"><path
              d="M213.333333 512a85.333333 85.333333 0 1 1-85.333333-85.333333 85.333333 85.333333 0 0 1 85.333333 85.333333z m298.666667-85.333333a85.333333 85.333333 0 1 0 85.333333 85.333333 85.333333 85.333333 0 0 0-85.333333-85.333333z m384 0a85.333333 85.333333 0 1 0 85.333333 85.333333 85.333333 85.333333 0 0 0-85.333333-85.333333z"
              fill="#5C5C66" p-id="2691"></path></svg>
          </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["name"]
  }
</script>

<style scoped>

</style>
