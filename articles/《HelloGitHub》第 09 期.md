>兴趣是最好的老师，**HelloGitHub** 就是帮你找到兴趣！

![](https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/01/img/hello-github.jpg)

## 简介
分享 GitHub 上有趣、入门级的开源项目。

这是一个面向**编程新手**、**热爱编程**、**对开源社区感兴趣** 人群的月刊，月刊的内容包括：**各种编程语言的项目**、**让生活变得更美好的工具**、**书籍、学习笔记、教程等**，这些开源项目大多都是非常容易上手，而且非常 Cool。主要是希望大家能动手用起来，加入到**开源社区**中。
- 会编程的可以贡献代码
- 不会编程的可以反馈使用这些工具中的 Bug
- 帮着宣传你觉得优秀的项目
- Star 项目⭐️

在浏览、参与这些项目的过程中，你将学习到**更多编程知识**、**提高编程技巧**、**找到编程的乐趣**。

🎉 最后 [HelloGitHub](https://hellogithub.com) 这个项目就诞生了 🎉

---
> **以下为本期内容**｜每个月 **28** 号发布最新一期｜[点击查看往期内容](https://github.com/521xueweihan/HelloGitHub#往期回顾)

#### C++ 项目
1、[json](https://github.com/nlohmann/json)：C++ 的 JSON 库


![](https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/09/img/json-show.gif)

#### Go 项目
2、[vim-go](https://github.com/fatih/vim-go)：Go 的 vim 配置

#### Java 项目
3、[MSEC](https://github.com/Tencent/MSEC)：MSEC 是腾讯开源的，毫秒服务引擎(Mass Service Engine in Cluster)
它是一个开源框架，适用于在廉价机器组成的集群上开发和运营分布式后台服务。毫秒服务引擎集 RPC、名字发现服务、负载均衡、业务监控、灰度发布、容量管理、日志管理、key-value 存储于一体，[官网介绍](http://haomiao.qq.com/index.html#documents)

4、[android](https://github.com/SmartisanTech/android)：锤子开源的 One Step 项目，一步（one step）是通过拖拽完成将信息发送至应用或联系人的动作，节省了在不同应用之间切换的诸多步骤，第一次打通了手持设备中应用间的边界，[One Step](http://www.smartisan.com/m1/#/os?section=onestep)

5、[android-open-project](https://github.com/Trinea/android-open-project)：Android 开源项目分类汇总

#### JavaScript 项目
6、[vue-hackernews-2.0](https://github.com/vuejs/vue-hackernews-2.0)：这是一个 Vue2.0 示例，克隆 [Hacker News](https://news.ycombinator.com/) 网站（我感觉比原站好看多了😅）


![](https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/09/img/vue-hackernews-show-min.png)

7、[N-blog](https://github.com/nswbmw/N-blog)：N-blog 项目是面向新手的 Node.js 教程，该教程讲述了 Node.js 基本知识点，同时结合搭建一个多人博客的实战，从零基础到实际开发，由浅到深帮助新手入门 Node.js 这门语言

8、[pomelo](https://github.com/NetEase/pomelo)：Pomelo 网易开源的一个 Node.js 游戏服务器框架，[Demo](http://pomelo.netease.com/demo.html)

#### PHP 项目
9、[VulApps](https://github.com/Medicean/VulApps)：VulApps 是用于快速搭建各种漏洞环境，可用来学习、理解常见的漏洞，增强自己在开发过程的安全意识

#### Python 项目
10、[flask-limiter](https://github.com/alisaifee/flask-limiter)：Flask-Limiter 是一个 Flask 的扩展库，它可以根据访问者的 IP 限制其访问频率、次数等，示例代码如下：
```python
from flask import Flask
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

app = Flask(__name__)
limiter = Limiter(
    app,
    key_func=get_remote_address,
    global_limits=["2 per minute", "1 per second"],
)

@app.route("/slow")
@limiter.limit("1 per day")
def slow():
    return "24"

@app.route("/fast")
def fast():
    return "42"

@app.route("/ping")
@limiter.exempt
def ping():
    return 'PONG'

app.run()
```

11、[ngrok](https://github.com/inconshreveable/ngrok)：ngrok 是一个十分方便、好用的工具，它可以把本地某个端口的服务，通过一个安全隧道，映射到公网的一个地址。同时它提供了一个 Web 页面，展示了每个请求、响应的所有信息，便于调试本地的程序。基本的使用方法如下：
```
ngrok 协议 本地服务监听的端口
ngrok http 8000

创建成功会返回公网地址，然后通过该地址就可以访问到本地的服务。
本地访问 http://localhost:4040，就可以查看关于每个请求、响应的相关数据
```


![](https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/09/img/ngrok-show-min.png)

12、[glances](https://github.com/nicolargo/glances)：Glances 是一个可以让你**一目了然**你的系统情况（类 top、htop)的工具，它界面友好，安装方便：`pip install glances`


![](https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/09/img/glances-show-min.png)

#### Swift 项目
13、[Kingfisher](https://github.com/onevcat/Kingfisher)：Kingfisher 是一个异步下载和缓存图片的库，你可以把它看做 SDWebImage 的纯 Swift 实现和替代。它可以帮助简单地实现像是用户头像或者 table view 里面的图片的下载和缓存这样的工作，以提高 app 速度和帮助开发者节省时间，[作者的中文博客](http://project.onevcat.com/)

#### 其它
14、[freecodecamp.cn](https://github.com/FreeCodeCampChina/freecodecamp.cn)：freecodecamp 是一个自由的开源编程社区，[freecodecamp 中文社区](https://freecodecamp.cn)

15、[Web-Frontend-Introduction-And-Best-Practicesa](https://github.com/wxyyxc1992/Web-Frontend-Introduction-And-Engineering-Practices)：Web 前端开发入门与实践练习

16、[best-chinese-front-end-blogs](https://github.com/FrankFang/best-chinese-front-end-blogs)：该项目是收集优质的中文前端博客

17、[golang-open-source-projects](https://github.com/hackstoic/golang-open-source-projects)：中文版 awesome-go

18、[Learn-Algorithms](https://github.com/nonstriater/Learn-Algorithms)：算法数据结构学习，C 语言实现

19、[FromXToGo](https://github.com/golang/go/wiki/FromXToGo)：（英文）如果你正从某个语言（PHP, Python, Ruby 等）想要换到 Golang 却又害怕吗？

#### 开源书籍
20、[the-way-to-go_ZH_CN](https://github.com/Unknwon/the-way-to-go_ZH_CN)：《The Way to Go》中文译本，中文正式名《Go 入门指南》

#### 机器学习
21、[machine-learning-for-software-engineers](https://github.com/ZuzooVn/machine-learning-for-software-engineers)：自上而下的学习路线，软件工程师的机器学习，[中文版](https://github.com/ZuzooVn/machine-learning-for-software-engineers/blob/master/README-zh-CN.md)



---

## 换种方式阅读
- **网站：** https://hellogithub.com
- **GitBook：** https://gitbook.hellogithub.com

## 声明
如果你发现了好玩、有意义的开源项目 [点击这里](https://github.com/521xueweihan/HelloGitHub/issues/new) 分享你觉得有意思的项目。

**欢迎转载，请注明出处和作者，同时保留声明。**
