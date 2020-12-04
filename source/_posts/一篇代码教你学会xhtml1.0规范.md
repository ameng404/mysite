---
title: 一篇代码教你学会xhtml1.0规范
date: 2019/10/24 22:53:58
categories:
  - 前端
tags:
  - xhtml
  - 规范
---

### 为什么建议使用 XHTML 替代 HTML

XHTML 就是拥有 XML 规范的 HTML，将 XML 引入 HTML 的目的是改变 HTML 代码不够严格的问题，在我们的网络世界，到处充斥着劣质的 HTML 代码，这些代码的正确显示，取决于浏览器的容错能力，而我们对此是没有保障的。而 XML 要求您的内容必须严格按照规范进行置标，只有这样，我们才能获得结构严谨的文档，结构严谨的文档才能在各种浏览器中获得准确一致的表现，包括各种手持设备上的浏览器，我们知道，对手持设备而言，它们的浏览器没有那么强的处理能力来纠正 HTML 代码中的错误。同样， XHTML 完全向后兼容。

以下是我整理出来的常用规范。

```html
<!DOCTYPE html>
<html lang="en">
    <!--1.所有元素都应当包含在<html></html>元素中 -->
<head>
    <meta charset="UTF-8">
    <title>一篇代码教你学会xhtml1.0规范</title>
</head>
<body>
    <!-- 2.XHTML元素XHTML元素一定要被正确地嵌套使用 -->
    <!-- 可以嵌套使用，但是不能交叉 -->
    <b><i>这是错误写法</b></i>
    <b><i>这是正确写法</i></b>
    <!-- 以下元素必须严格按照嵌套规则 -->
    <a>a元素中不能包含其他的<a>元素。
    <pre>元素中不能包含<object>、<img>、<small>、<sub>或<sup>元素。
    <button>元素中不能包含<input>、<textarea>、<label>、<select>、
	<button>、<form>、<iframe>、<fieldset>元素。
    <label>元素中不能包含其他的<label>元素。
    <form>元素中不能包含其他的<form>元素。

    <!-- 3.元素和属性必须小写 -->
    错误：<BR>
    正确：<br>
    错误：<img SRC="false.jpg" ALT="错误的写法">
    正确：<img src="true.jpg" alt="正确的写法">

    <!-- 4.不能有没有关闭的空元素存在于代码中 -->
    <p>这个元素未关闭<p>
    <p>这个元素正确使用</p>

    <!-- 5.属性值必须带上英文的双引号 -->
    错误：<table width=100%>
    正确：<table width="100%">

    <!-- 6.把所有<和&特殊符号用编码表示 -->
    错误:<img src="pic.jpg"  src="abc & def">
    正确:<img src="pic.jpg"  src="abc &amp def"  />

    <!-- 7.属性不能简写 -->
    <input type="text" disabled value="这是错误的写法">
    <input type="text" disabled="true" value="这是正确的写法">

    <!-- 8.不要在注释内容中使“–” -->
    <!-- 这里是错误注释-----------“-”只能发生在XHTML注释的开头和结束-->
    <!--这里是正确注释============用等号或者空格替换内部的虚线 -->
</body>
</html>

```
