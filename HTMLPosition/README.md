# css定位

视频链接：http://www.imooc.com/learn/931

html的3种布局方式：
1. 标准流
2. 浮动
3. 定位

| 块级元素 | 内联元素 |
| :-: | :-: |
| div, h1, table, p, ol ul li | a, span, img,input|

position属性
- static: 默认，正常文档流
- relative: 用 left，top等可以改变位置，但还保留其原来空间，后面的会覆盖前面的
- absolute: 不保留其原来空间，脱离的文档流，absolute定位是找父级元素定位，没有父级找浏览器边框定位，所以就算没有设置top、left值，依旧会脱离文档与浏览器边框进行定位。absolute中的定位方式（left，top等）和relative是不一样的。而且absolute只相对与窗口。
- fixed： 不保留其原来空间，脱离的文档流，
