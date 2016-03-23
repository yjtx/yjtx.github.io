---
author: yjtx
date: 2016-03-22 11:07:39+00:00
layout: post
title: egret 2.5 及以上输入框被盖住的规避方法
pid: 31
tags:
- 博客
- egret 2.5 及以上输入框被盖住的规避方法
---

* 去掉 index.html 中 html 的 css 的样式

~~~
html, body{
            -ms-touch-action: none;
            background: #888888;
            padding: 0;
            border: 0;
            margin: 0;
            height: 100%;
        }
~~~

改成

~~~
body {
            -ms-touch-action: none;
            background: #888888;
            padding: 0;
            border: 0;
            margin: 0;
            height: 100%;
        }
~~~

* 在调用 egret.runEgret() 前对 body 的 width 和 height 进行重新赋值

~~~
	var clientWidth = document.documentElement.clientWidth;
	var clientHeight = document.documentElement.clientHeight;
	document.body.style.width = clientWidth + "px";
	document.body.style.height = clientHeight + "px";
    egret.runEgret();
~~~