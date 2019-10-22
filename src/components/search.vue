<template>
  <div style="height: 65px;   ">
    <div>
      <div style="width: 100%;  " class="weui-search-bar" id="searchBar">
        <form class="weui-search-bar__form">
          <div class="weui-search-bar__box">
            <i class="weui-icon-search"></i>
            <input type="search" @input="change" v-model="value" class="weui-search-bar__input" id="searchInput"
                   placeholder="搜索试剂或耗材" required="">
            <a @click="value = ''" class="weui-icon-clear" id="searchClear"></a>
          </div>
        </form>
        <div
          style="text-align: center; margin: 0 auto;  display: inline-block; margin-left: 10px; margin-right: 10px;position: relative; top: 4px;">
          <svg t="1570334567236" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="3608" width="35" height="35">
            <path
              d="M512 597.332992c225.82272 0 398.222336 85.388288 398.222336 228.170752 0 61.536256-50.016256 108.33408-124.348416 108.33408h-547.74784c-74.776576 0-124.348416-45.830144-124.348416-108.33408 0-140.977152 174.35136-228.170752 398.222336-228.170752z m0 56.889344c-196.484096 0-341.332992 72.439808-341.332992 171.281408 0 30.04416 23.14752 51.44576 67.459072 51.44576h547.74784c43.726848 0 67.459072-22.20544 67.459072-51.44576 0-100.49024-142.926848-171.281408-341.332992-171.281408zM512 455.110656c94.256128 0 170.667008-76.409856 170.667008-170.665984 0-94.257152-76.41088-170.667008-170.667008-170.667008s-170.667008 76.41088-170.667008 170.667008S417.743872 455.110656 512 455.110656zM512 512c-125.67552 0-227.555328-101.879808-227.555328-227.555328S386.32448 56.889344 512 56.889344s227.555328 101.879808 227.555328 227.555328S637.67552 512 512 512z"
              fill="#323233" p-id="3609"></path>
          </svg>
        </div>
      </div>
    </div>

    <div v-if="value.length <= 1">
      <div>
        <div style="margin-top: 15px; color: #BCBCBC; font-size: 20px;  ">
          <span style="padding-left: 10px; ">最近搜索</span>
          <span style="color: blue; float: right; color: #169BD5; padding-right: 10px; " @click="clear">清除</span>
        </div>
      </div>

      <div style="margin-top: 10px;">
        <div v-for="item in list" style="display: inline-block; margin: 5px;">
          <div @click="jump(item)"
               style="background: #E4E4E4; padding: 5px 25px;  font-size: 16px;   flex-direction: column; flex-wrap: wrap; ">
            {{item.name}}
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div style="margin-top: 10px;">
        <div v-for="sl in searchList"
             style="width: 90%; margin: 0 auto; border-bottom: 1px solid #333333; padding: 25px 5px 5px;">
          <span style="margin-left: 10px; font-size: 18px; color: #797979">
            <span>{{sl.name}}</span>
            <span>（{{sl.count}}瓶）</span>
          </span>
          <span style="float: right;position: relative;bottom: 5px;">
            <div class="btn" @click="register(sl.name, sl.order)" v-if="!sl.order" href="javascript:;"
                 style="color: white; background: #009933">
              <span style="line-height: 0px; position: relative;top: 5px;">
                登记
              </span>
            </div>
             <div @click="order(sl.name, sl.order)" class="btn" v-else href="javascript:;"
                  style="color: white;  background: #169BD5">
              <span style="line-height: 0px; position: relative;top: 5px;">
                预约
              </span>
            </div>
          </span>
        </div>
      </div>
    </div>

    <div style="position: fixed; bottom: 40px; right: 40px;">
      <div style="height: 45px; width: 45px;  border-radius: 50%; background: #CCCCCC">
        <div style=" position: relative;top: 10px;left: 9px;">
          <svg t="1571668188784" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="2769" width="25" height="25">
            <path
              d="M768 186.181818H256V0h512v186.181818zM302.545455 139.636364h418.90909V46.545455H302.545455v93.090909z m558.545454 768H162.909091V395.636364h698.181818v512zM209.454545 861.090909h605.09091V442.181818H209.454545v418.909091z m651.636364 162.909091H162.909091V418.909091c0-102.260364 55.179636-173.684364 139.636364-184.692364V139.636364h418.90909v94.580363c84.456727 11.008 139.636364 82.432 139.636364 184.692364v605.090909zM209.454545 977.454545h605.09091V418.909091c0-64.418909-30.487273-139.636364-116.363637-139.636364h-23.272727V186.181818H349.090909v93.090909H325.818182c-85.876364 0-116.363636 75.217455-116.363637 139.636364v558.545454z m253.184-183.365818a92.416 92.416 0 0 1-65.815272-27.275636 93.090909 93.090909 0 0 1 0-131.630546l98.722909-98.722909a95.278545 95.278545 0 0 1 131.630545 0 93.090909 93.090909 0 0 1 0 131.630546l-98.722909 98.722909a92.439273 92.439273 0 0 1-65.815273 27.275636z m98.72291-238.359272a46.242909 46.242909 0 0 0-32.907637 13.637818l-98.722909 98.722909a46.545455 46.545455 0 0 0 0 65.815273 47.639273 47.639273 0 0 0 65.815273 0l98.722909-98.72291a46.545455 46.545455 0 0 0-32.907636-79.45309z m-16.453819 161.722181l-98.722909-98.722909 32.907637-32.907636 98.722909 98.722909z"
              p-id="2770"></path>

          </svg>
          <div  v-if="getNumber() > 0" style="position: absolute;right: 10px;" class="van-info">
            <span style="font-weight: bold">{{ getNumber() }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {filterRepetition} from "../commo/help";

  export default {
    data() {
      return {
        value: "",
        list: [],
        inputTimer: null,
        searchList: [],
      }
    },
    mounted() {
      let {localStorage} = window;
      let {composition} = localStorage;

      if (composition) {
        this.list = JSON.parse(composition);
        return;
      }
    },
    methods: {
      getNumber() {
        let l = localStorage['machines'] || [];
        l = typeof l === 'string' ? JSON.parse(l) : l;

        return l.length;
      },
      addLocal(args) {
        let l = localStorage['composition'] || [];
        l = typeof l === 'string' ? JSON.parse(l) : l;
        l.push(args);
        l = filterRepetition(l.reverse());

        localStorage['composition'] = JSON.stringify(l);
        this.list = JSON.parse(localStorage['composition']);
      },
      register(name, order) {
        this.jump({
          name: name,
          order: order
        });
      },
      isHas(args) {
        let l = localStorage['composition'] || [];
        l = typeof l === 'string' ? JSON.parse(l) : l;

        for (let i = 0; i < l.length; i++) {
          if (l[i].name === args.name) {
            return true;
          }
        }

        return false;
      },
      jump(item) {
        this.addLocal(item);
        if (!item.order) {
          this.$router.push({path: '/register', query: item})
        } else {
          this.$router.push({path: '/order', query: item})
        }
      },
      order(name, order) {
        this.jump({
          name: name,
          order: order
        });
      },
      clear() {
        this.$weui.confirm("确定清空吗？",
          () => {
            let {localStorage} = window;
            localStorage.removeItem('composition');
            this.list = [];
          }
        );
      },
      change() {
        const {value} = this;
        this.searchList = [];
        if (value.length <= 1) {
          clearTimeout(this.inputTimer);
          return;
        } else {
          clearTimeout(this.inputTimer);
          this.inputTimer = setTimeout(() => {
            this.$axios.get(`/api/product?value=${value}`).then((res) => {
              let {data} = res.data;
              this.searchList = data;
            });
          }, 50);
        }
      }
    }
  }
</script>

<style>
  .btn {
    width: 60px;
    background: rgb(0, 153, 51);
    border-radius: 5px;
    height: 35px;
    text-align: center;
  }

  .van-info {
    position: absolute;
    top: 0;
    right: 0;
    box-sizing: border-box;
    min-width: 20px;
    padding: 2px 3px;
    color: #fff;
    font-weight: 500;
    font-size: 12px;
    font-family: PingFang SC, Helvetica Neue, Arial, sans-serif;
    line-height: 14px;
    text-align: center;
    background-color: #ee0a24;
    border: 1px solid #fff;
    border-radius: 50%;
    -webkit-transform: translate(50%, -50%);
    transform: translate(50%, -50%);
    -webkit-transform-origin: 100%;
    transform-origin: 100%;
  }
</style>
