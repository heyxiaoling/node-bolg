var express = require('express');
var swig = require('swig');

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

//首页弄得
app.get('/',function(req,res,next){
    //在开发过程中需要取消模板缓存
    res.render('index'); //res.render('index.html');
});

// app.get('/main.css',function(req,res){
//     res.setHeader('content-type','text/css');
//     res.send('body {background:red;}');
// });
// 



app.listen(8282);