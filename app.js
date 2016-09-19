var express = require('express');
var swig = require('swig');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

//设置静态文件托管
//当用户访问的url以/public开头，返回对应的__dirname + '/public'目录下对应文件
app.use('/public', express.static(__dirname + '/public'));


app.engine('html', swig.renderFile);
//设置模板文件存放的目录，第一个参数必须是views
app.set('views', './views');
//注册模板引擎
app.set('view engine', 'html');

//取消模板缓存
swig.setDefaults({cache: false});

app.use( bodyParser.urlencoded({extended:true}) );

app.use('/admin',require('./routers/admin'));
app.use('/api',require('./routers/api'));
app.use('/',require('./routers/main'));

mongoose.connect('mongodb://localhost:27017/bolg',function(err){
    if(err){
        console.log('数据库连接失败')
    }else{
        console.log('数据库连接成功');
        app.listen(8282);
    }
});
