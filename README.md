# JSelect : 一个轻量级 Select 组件UI


## 如何使用它 ?

1. 首先将JS、CSS文件引入你的项目

```html
<link rel="stylesheet" href="./JSelect.css">
<script type="text/javascript" src="./JSelect.js"></script>
```

2. 在你的script块中初始化即可
```javascript
let jSelect=new JSelect('select');
```

## 有何优点?
1. 上手简单，直接美化指定的select组件。
2. 原生JS，ES6语法，无需引入Jquery，轻量级。
3. 不影响表单的使用，支持直接对原生的select控件进行修改_value属性(注意要修改_value 而不是 value)和绑定onchange事件，本组件只做美化效果。
4. 可以直接修改源代码，样式表中有经常要控制的属性的注释，简单易操作。

## 参数说明:
(String) elSelector: 元素选择器 (eg:'select','.mySelect')  将渲染所有的被选择器选中的元素!

## 内置方法
render :重新渲染select 组件， 适用于select组件被动态更新后重新渲染。

> 如有BUG、更好的建议或意见欢迎您请移至 Issues！

> 想支持作者请Star！不胜感激！

> By:Jack     E-mail:jackjun0724@gamil.com
