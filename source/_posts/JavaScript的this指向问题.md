---
title: JavaScript的this指向问题
date: 2017/06/24 16:53:50
categories:
  - 前端
tags:
  - this指向
  - 构造函数
---

### 什么是构造函数？

在 JavaScript 中，用 new 关键字来调用的函数，称为构造函数。

**它的作用**
重复需要使用的属性当做构造函数的参数传递，可以减少大量的重复操作过程。
在使用时，若 new 忘记使用，会产生严重的后果。会导致构造函数内部变量变为全局变量。

### this 是什么？

理解 this 之前，先纠正一个观点，this 既不指向函数自身，也不指函数的词法作用域。如果仅通过 this 的英文解释，太容易产生误导。它实际是在函数被调用时才发生的绑定，也就是说 this 具体指向什么，取决于你是怎么调用的函数。

#### this 调用

**_谁调用,指向谁_**
**_如果赋值给对象,就会改变 this 的指向_**
**_不在第一层调用,不会向上继承_**

#### 1.以函数形式调用时，this 永远指向 window

```javascript
alert(this)

=>[object Window]
```

或

```javascript
function fn(){
	console.log(this);
}
fn();
=>[object Window]
```

#### 2.以方法形式调用时，this 是调用方法的对象

```javascript
function foo() {
	console.log(this);
}
new foo();
=> [object Object]
```

#### 3.以构造函数调用时，this.是新创建的那个对象

```javascript
function fn(){
	console.log(this)
}
new p();
=>fn {}
```

#### 4.使用 call 和 apply 调用时，this 的指向为 this 指定的那个对象

**call 和 apply 的使用用：**
改变 this 的指向，第一个参数为你要传入的对象，传入后函数的 this 就指向了这个对象,后面的参数为你为函数传递的参数值

```javascript
function  foo(x,y) {
	console.log(this);
	=> foo {}
	console.log(x,y);
}
new foo();
//当后面参数个数确定时用call,参数之间用逗号连接
foo.call("abc1",3,4);
```

```javascript
function  test(x,y) {
	console.log(this);
	=> test {}
	console.log(x,y);
}
new test();
//当后面参数个数不确定时用apply，参数通过数组形式输入
test.apply("abc2",[3,4])
```
