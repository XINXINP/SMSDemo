/*
 * @Descripttion: 🐉
 * @Author: xinxin
 * @Date: 2019-12-14 23:23:51
 * @LastEditTime : 2019-12-18 19:19:50
 */
/**
* 云通信基础能力业务短信发送、查询详情以及消费消息示例，供参考。
* Created on 2017-07-31
*/
const Core = require('@alicloud/pop-core');
var crypto = require('crypto')

var client = new Core({
    accessKeyId: '🍎',//填写自己的申请
    accessKeySecret: '🍎',//填写自己的申请
    endpoint: 'https://dysmsapi.aliyuncs.com',
    apiVersion: '2017-05-25'
});

var requestOption = {
    method: 'POST'
};
module.exports = function sendSMS(phoneNumber, res) {
    //随机生成六位数
    var code = "";
    for (var i = 0; i < 6; i++) {
        var radom = Math.floor(Math.random() * 10);
        code += radom;
    }
    //我当时的模板配置
    //自己可以配置
    var params = {
        "RegionId": "cn-hangzhou",
        "PhoneNumbers": phoneNumber,
        "SignName": "雾灵",
        "TemplateCode": "SMS_180340515",
        "TemplateParam": "{\"code\":\"" + code + "\"}"
    }
    //aes对称加密
    var secret = 'bufurulaibufuqing'; //密钥--可以随便写
    var cipher = crypto.createCipher('aes192', secret);
    var newpwd = cipher.update(code, 'utf8', 'hex'); //编码方式从utf-8转为hex;
    newpwd += cipher.final('hex'); //编码方式从转为hex;/输出加密后结果
    //解密开始
    client.request('SendSms', params, requestOption).then((result) => {
        let resultM = JSON.stringify(Object.assign({}, result.data, { 'sginNumber': newpwd }));
        res.cookie({ 'sginNumber': newpwd })
        res.send(resultM)
    }, (ex) => {
        res.cookie('sginNumber', newpwd, { maxAge: 60000, httpOnly: true })
        res.send(JSON.stringify(Object.assign({}, ex.data, { 'sginNumber': newpwd })))
    })
}
