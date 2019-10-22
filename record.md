1. /api/product  (get)
  request:
    value:  ""    // string类型  例如: 碳酸钙

  response:
    state:  true/false,          //成功是true
    data:   []  // array    例如 [{
                                   "name": "碳酸钙",   // 名称
                                   "count": 5,      // 剩余数量
                                   "order": false   // 需要预约是是true,不然是false
                                 },]
    "message":  "" // 备注 例如: "返回成功"

2. /api/items (get)
   request:
      value:   ""    // string类型  例如: 碳酸钙

   response:
       state:  true/false,
       data:   [{}]  //  array    例如 [{
                                           "no": "56",// 数量
                                           "artNo": "T-122-01",//货号
                                           "cas": "298-14-6",//CAS号
                                           "msds": "https://",//MSDS
                                           "specification": "298-14-6",//规格
                                           "madeFacory": "上海金穗生物科技有限公司",//生产厂家
                                           "supplier": "上海金穗生物科技有限公司",//供货厂家
                                           "cntrNo": "298-14-6",//存放柜号
                                           "price": "￥40.00元"//单价
                                         }]
       "message":  "" // 备注 例如: "返回成功"
