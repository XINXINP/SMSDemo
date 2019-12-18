<!--
 * @Descripttion: 🐉短信接入
 * @Author: xinxin
 * @Date: 2019-12-12 18:59:39
 * @LastEditTime : 2019-12-18 19:21:34
 -->

### 短信接入平台

1.注册短信服务，申请 id,密钥 2.填写配置环境
3.npm install
4.npm start 
5.浏览器打开 http://localhost:8083

#### 配置环境

阿里云服务器申请的短信服务，node.js 框架 express 应用

```js
var client = new Core({
  accessKeyId: "", //短信接入的id
  accessKeySecret: "", //短信平台接入的密钥
  endpoint: "https://dysmsapi.aliyuncs.com",
  apiVersion: "2017-05-25"
});
var params = {
  RegionId: "", //模板自己申请
  PhoneNumbers: phoneNumber, //要发送的手机号
  SignName: "雾灵", //应用名称（自己创建）
  TemplateCode: "", //模板code（自己创建）
  TemplateParam: '{"code":"' + code + '"}' //要发送的验证码（验证码自己设置，可以随机生成，参考程序中的）
};
```

#### 主要参数

··· RegionId

··· PhoneNumbers

··· SignName

··· TemplateCode

··· TemplateParam

··· SmsUpExtendCode

··· OutId

#### 详细参考

[nodejs sdk参考]: https://help.aliyun.com/document_detail/57342.html?spm=a2c1g.8271268.10000.121.137fdf25hQ4V5g

#### 最后

麻烦给个 star,谢谢
