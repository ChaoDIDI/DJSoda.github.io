var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
//mongoose模板引入
var db = require('./db');
//art-template 引入模板
var template = require('art-template');
template.config('base', '');
template.config('extname', '.html');
app.engine('.html', template.__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/api/page/:page', (req, res) => {
  var page = req.params.page;
  page = page || 1;
  page = parseInt(page);
  var pageSize = 40; //每一页显示的数据数量

  db.pchongs.find().count((err,total)=>{
    if(err){
      console.log(err);
    }
    var pageCount = Math.ceil(total / pageSize);

    //页面范围限制
    if (page > pageCount) {
      page = pageCount;
    }
    if (page < 1) {
      page = 1;
    }
    db.pchongs.find().limit(pageSize).skip((page-1)*pageSize).exec((err,data)=>{
      res.json({data:data});
    })
  })




});
app.listen(3000,(req,res)=>{
  console.log('服务器运行中.....');
});