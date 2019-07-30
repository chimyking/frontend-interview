----------------
title: LESS
----------------

##　概述
### Variables （变量）
```
@nice-blue: #5B83AD;
@light-blue: @nice-blue + #111;
#header {
  color: @light-blue;
}
```
输出：
```
#header {
  color: #6c94be;
}
```
### Mixins （混合）
```
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
#menu a {
  color: #111;
  .bordered;
}
.post a {
  color: red;
  .bordered;
}
```

输出：
```
#menu a {
  color: #111;
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
.post a {
  color: red;
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
```
### Nested rules （嵌套规则）
```
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}
```
输出：
```
#header {
  color: black;
}
#header .navigation {
  font-size: 12px;
}
#header .logo {
  width: 300px;
}
```

```
.clearfix {
  display: block;
  zoom: 1;

  &:after {
    content: " ";
    display: block;
    font-size: 0;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
```
### Media query bubbling and nested media queries （媒体查询合嵌套媒体查询）
```
.screencolor{
  @media screen {
    color: green;
    @media (min-width:768px) {
    color: red;
    }
    }
  @media tv {
    color: black;
  }
}
```
输出:
```
@media screen {
  .screencolor {
    color: green;
  }
}
@media screen and (min-width: 768px) {
  .screencolor {
    color: red;
  }
}
@media tv {
  .screencolor {
    color: black;
  }
}
```
### Operations （运算）
```
@base: 5%;
@filler: @base * 2;
@other: @base + @filler;
 
color: #888 / 4;
background-color: @base-color + #111;
height: 100% / 2 + @filler;
```
### Functions （函数）

less 内置一系列函数
- Misc Functions （杂项函数）
- String Functions （字符串函数）
- List Functions （列表函数）
- Math Functions （数学函数）
- Type Functions （类型函数）
- Color Definition Functions （颜色定义函数）
- Color Channel Functions （颜色通道函数）
- Color Operation Functions （颜色操作函数）
- Color Blending Functions （颜色混合函数）
### Namespaces and Accessors （命名空间和访问器）
```
#bundle {
  .button {
    display: block;
    border: 1px solid black;
    background-color: grey;
    &:hover {
      background-color: white
    }
  }
  .tab { ... }
  .citation { ... }
}
```
> 需要注意的是命名空间内声明的变量将只作用于该命名空间，并且在作用域外通过相同的语法是无效的，你会用它来引用一个mixin (#Namespace > .mixin-name)。因此，举例来说，你不能这么做： (#Namespace > @this-will-not-work)。
### Scope （作用域）
Less 中的作用域与编程语言中的作用域概念非常相似。首先会在局部查找变量和混合，如果没找到，编译器就会在父作用域中查找，依次类推。
```
@var: red;
#page {
  @var: white;
  #header {
    color: @var; // white
  }
}
```

### Comments （注释）
```
/* One hell of a block
style comment! */
@var: red;

// Get in line!
@var: white;
```
### Importing （导入）
```
@import "library"; // library.less
@import "typo.css";
```
## Variables （变量）
```
// 变量
@link-color:        #428bca; // sea blue
@link-color-hover:  darken(@link-color, 10%);

// 用法
a,
.link {
  color: @link-color;
}
a:hover {
  color: @link-color-hover;
}
.widget {
  color: #fff;
  background: @link-color;
}
```
**Variable Interpolation （变量插值）**
**Selectors （选择器）**
```
// 变量
@mySelector: banner;

// 用法
.@{mySelector} {
  font-weight: bold;
  line-height: 40px;
  margin: 0 auto;
}
```
**URLs**
```
// Variables
@images: "../img";

// Usage
body {
  color: #444;
  background: url("@{images}/white-sand.png");
}
```
**Import statements （导入语句）**
```
// 变量
@themes: "../../src/themes";

// 用法
@import "@{themes}/tidal-wave.less";
```
**Properties （属性）**
```
@property: color;
.widget {
  @{property}: #0ee;
  background-@{property}: #999;
}
```
**Variable Names （变量名）**
```
@fnord:  "I am fnord.";
@var:    "fnord";
content: @@var;

content: "I am fnord.";
```
**Lazy Loading （延迟加载）**
> 变量是延迟加载的，在使用前不一定要预先声明。
```
.lazy-eval {
  width: @var;
}

@var: @a;
@a: 9%;


.lazy-eval-scope {
  width: @var;
  @a: 9%;
}
@var: @a;
@a: 100%;

```
**default variables （默认变量）**
## Extend （扩展）
## Mixins （混合）
## Parametric Mixins （带参数的混合）
## Mixins as Functions （作为函数使用的混合）
## Passing Rulesets to Mixins （传递规则集给混合）
## Import Directives （导入准则）
## Import Options （导入选项）
## Mixin Guards
## CSS Guards
## Loops （循环）
## Merge （合并）
## Parent Selectors （父级选择器）



[LESS](https://www.html.cn/doc/less/features/#parent-selectors-feature)