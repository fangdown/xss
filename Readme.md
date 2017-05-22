#原理
##反射型：发出请求时，XSS代码出现在URL中，作为输入提交到服务器端，服务器端解析后响应，XSS代码随响应内容一起传回给浏览器，最后浏览器解析并执行XSS代码，这个过程像一次反射，故叫反射型XSS。
##存储型： 存储型和反射型XSS的差别在于提交的代码会存储在服务器端（数据库、内存、文件系统等），下次请求目标页面时不用再提交XSS代码。

#防范
> * 编码
> * 过滤
> * 校正

## Build Setup

``` bash
# install dependencies 先按照express 搭建简单的服务框架
npm install express-generator -g

express xss --view= pug
cd xss 
npm install
SET DEBUG = xss:* & npm start

# serve with hot reload at localhost:3000
npm start

