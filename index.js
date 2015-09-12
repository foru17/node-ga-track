/**
 * Project:Node Google Analytics
 * Author:i@luolei.org
 */

'use strict'

var express = require('express');
var app = express();

var ua = require('universal-analytics');
var visitor = ua('UA-21856187-7');//谷歌统计


app.get("/redirection", function(req, res) {
    var des = req.query.dest || '目标页面标记Tag',//目标页面标记TAG
        tid = req.query.tid || '来源渠道Tag',
        url = decodeURIComponent(req.query.url) || 'https://luolei.org';//跳转的URL
		visitor.event("跳转统计", tid, tid + '_' + des, 42).send();
		res.redirect(url);
});

app.listen(3000);

