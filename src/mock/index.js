import Mock from 'mockjs';

Mock.mock(/\/api\/product/, 'get', (options) => {
  let items = {
    "state": true,
    "data": [
      {
        "name": "碳酸钙",
        "count": 5,
        "order": false
      },
      {
        "name": "碳酸氢钠",
        "count": 56,
        "order": false
      },
      {

        "name": "碳酸锂",
        "count": 0,
        "order": true
      },
      {

        "name": "碳酸氢钾",
        "count": 1139,
        "order": false
      }
    ],
    "message": "返回成功"
  };
  const {url} = options;
  let {value} = getQueryObject(url);
  items.data = items.data.filter(it => it.name.startsWith(value));

  return items;
});

function getQueryObject(url) {
  url = url == null ? window.location.href : url;
  let search = url.substring(url.lastIndexOf("?") + 1);
  let obj = {};
  let reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, function (rs, $1, $2) {
    var name = decodeURIComponent($1);
    var val = decodeURIComponent($2);
    val = String(val);
    obj[name] = val;
    return rs;
  });
  return obj;
}
