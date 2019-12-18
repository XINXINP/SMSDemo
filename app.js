/*
 * @Descripttion: 🐉后台入口文件
 * @Author: xinxin
 * @Date: 2019-12-14 23:23:05
 * @LastEditTime: 2019-12-15 18:57:00
 */
//注意这个是你的路径

var express = require('express');
var app = express();
var crypto = require('crypto')
var sendSMS = require('./message');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser());
app.use(bodyParser.json());

//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8083');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});
app.get('/phone', function (req, res) {
    if (req.query && req.query.phone) {
        console.log(req.query.phone + "用户申请注册账号");
        sendSMS(req.query.phone, res);
    } else {
        res.send('短信验证失败')
    }
})
app.post('/sendphone', function (req, res) {
    console.log(req.params);
    var cont = req.body.sginNumber;
    console.log(cont);
    if (req.body) {
        var secret = "bufurulaibufuqing";
        var decipher = crypto.createDecipher('aes192', secret);
        var dec = decipher.update(`${cont}`, 'hex', 'utf8'); //编码方式从hex转为utf-8;
        dec += decipher.final('utf8');
        if (req.body.code == dec) {
            res.send({ 'message': '登录成功' })
        } else {
            res.send({ 'message': '参数错误' })
        }
    } else {
        res.send('验证码失效')
    }
})
app.listen(8083, () => { console.log('雾灵服务启动') })