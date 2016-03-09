---
author: yjtx
date: 2016-02-25 10:07:39+00:00
layout: post
title: Type Script 的类型
pid: 12
tags:
- 博客
- Type Script 的类型
---

### 基础类型

* number

* string

* boolean



### 泛型

* any

### 空指

* void

### 函数

* Function

* (param1:type, param2:type) => type

### 字典

* [key:string]:string

### 数组

* type[]

* Array<type>

### 类

* class C

* interface I

```
interface LabelledValue {
  label: string;
}
```

```
interface SquareConfig {
  color?: string;
  width?: number;
}
```


* enum E


### 模板

* \<T extendsA\>

```
create(EventClass:{new (type:string | A, bubbles?:boolean|string, cancelable?:boolean): T; eventPool?:A[]},
                                              type:string, bubbles?:boolean, cancelable?:boolean):T
                                              
```




