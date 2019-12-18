<!--
 * @Descripttion: 🐉短信接入
 * @Author: xinxin
 * @Date: 2019-12-12 18:59:39
 * @LastEditTime : 2019-12-18 19:21:34
 -->

### 短信接入平台

··· 注册短信服务，申请 id,密钥
··· npm install
··· npm start

#### 配置环境

··· 阿里云服务器申请的短信服务，node.js 框架 express 应用

```js
var client = new Core({
  accessKeyId: "", //短信接入的id
  accessKeySecret: "", //短信平台接入的密钥
  endpoint: "https://dysmsapi.aliyuncs.com",
  apiVersion: "2017-05-25"
});
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
