import Mock from 'mockjs'
Mock.mock('/api/user/login',{
  "status": 0,
  "data": {
    "id|10001-11000": 0,             //id范围
    "username": "@cname",            //用户名
    "email": "admin@51purse.com",    //邮箱地址
    "phone": null,                   //电话
    "role": 0,                       //角色
    "createTime": 1479048325000,     
    "updateTime": 1479048325000
  }
});