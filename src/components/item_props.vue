<template>
  <div>
    <div style="margin-top: 20px; ">
      <div class="weui-flex">
        <div style=" margin-left: 20px;  text-align: center; font-size: 16px; font-weight: bold; color: #666666">
          <div class="placeholder">
            数量：
          </div>
        </div>
        <div class="weui-flex__item" style="margin-left: 10px; ">
          <div class="placeholder">
            <input  style="border: 1px solid rgb(227,227,227); height: 25px; width: 90% " type="search" @input="change"
                   v-model="value" required=""/>
          </div>
        </div>
        <div style="width: 90px; text-align: center; margin-left: 10px ;    position: relative; top: -3px;">
          <div>
            <div class="btn" style="color: white; width: 65px; height: 30px; background: #009933">
              <span style="line-height: 0px; position: relative;top: 2px;" @click="ok"> 确定 </span>
            </div>
          </div>
        </div>
      </div>
      <div style="padding-left: 20px; padding-top: 30px; line-height: 40px">
        <div v-for="(item, index) in items" style="  margin-bottom: 20px">
          <div style="font-size: 15px; font-size: 15px; color: #999999">
            <div>
              <span style="font-weight: bold">数量</span>：
              <span style="color: rgb(0, 153, 51); font-weight: bold">{{item.no}}</span>
            </div>
            <div>
              <span style="font-weight: bold">货&nbsp;&nbsp;&nbsp;&nbsp;号</span>：
              <span>{{item.artNo}}</span>
            </div>
            <div>
              <span style="font-weight: bold">CAS&nbsp;&nbsp;&nbsp;&nbsp;号</span>：
              <span>{{item.cas}}</span>
            </div>
            <div>
              <span style="font-weight: bold">MSDS&nbsp;&nbsp;&nbsp;&nbsp;</span>：
              <span>{{item.msds}}</span>
            </div>
            <div>
              <span style="font-weight: bold">规&nbsp;&nbsp;&nbsp;&nbsp;格</span>：
              <span>{{item.specification}}</span>
            </div>
            <div>
              <span style="font-weight: bold">生产厂家</span>：
              <span>{{item.madeFacory}}</span>
            </div>
            <div>
              <span style="font-weight: bold">供货厂家</span>：
              <span>{{item.supplier}}</span>
            </div>
            <div>
              <span style="font-weight: bold">存放柜号</span>：
              <span>{{item.cntrNo}}</span>
            </div>
            <div>
              <span style="font-weight: bold">单&nbsp;&nbsp;&nbsp;&nbsp;价</span>：
              <span>{{item.price}}</span>
            </div>
          </div>
          <div v-if="index < items.length - 1"
               style="border-bottom: 1px rgb(214,214,214) solid; height: 1px; width: 93%;  margin-top: 20px ">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {filterRepetition} from "../commo/help";

  export default {
    name: "item_props",
    data() {
      return {
        value: 1,
        items: [
          {
            "no": "56",
            "artNo": "T-122-01",
            "cas": "298-14-6",
            "msds": "https://",
            "specification": "298-14-6",
            "madeFacory": "上海金穗生物科技有限公司",
            "supplier": "上海金穗生物科技有限公司",
            "cntrNo": "298-14-6",
            "price": "￥40.00元"
          },
          // {
          //   "no": "56",
          //   "artNo": "T-122-01",
          //   "cas": "298-14-6",
          //   "msds": "https://",
          //   "specification": "298-14-6",
          //   "madeFacory": "上海金穗生物科技有限公司",
          //   "supplier": "上海金穗生物科技有限公司",
          //   "cntrNo": "298-14-6",
          //   "price": "￥40.00元"
          // },
        ]
      }
    },
    mounted() {

      console.log(this.$route.query)
    },
    watch: {
      value(n, o) {
        if(isNaN(this.value)) {
          this.value = o;
        }
      }
    },
    methods: {
      ok() {
        if(this.value <= 0) {
          this.$weui.alert("个数需要大于0");
          return;
        }

        let l = localStorage['machines'] || [];
        l = typeof l === 'string' ? JSON.parse(l) : l;
        l.push({
          name: this.$route.query.name
        });
        l = filterRepetition(l);

        localStorage['machines'] = JSON.stringify(l);
        this.$weui.alert("添加成功", () => {
          this.$router.go(-1);
        });
      },
      init() {
        this.$axios.get(`/api/items?value=${this.value}`).then((res) => {
          let {data} = res.data;
          this.items = data;
        });
      },
      change() {

      }
    }
  }
</script>

<style scoped>
  input {
    outline: none;
  }

  .btn {
    width: 60px;
    background: rgb(0, 153, 51);
    border-radius: 5px;
    height: 35px;
    text-align: center;
  }

</style>
