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

#### C 项目
1、[ttygif](https://github.com/icholy/ttygif)：录制终端.gif

![](https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/26/img/ttygif.gif)

#### C++ 项目
2、[TrafficMonitor](https://github.com/zhongyang219/TrafficMonitor)：一款用于 Windows 平台的网速监控悬浮窗软件。可以显示当前网速、CPU及内存利用率、任务栏显示、更换皮肤、历史流量统计等功能

![](https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/26/img/TrafficMonitor-show-min.png)

#### CSS 项目
3、[caomei](https://github.com/xiangsudian/caomei)：一套免费、精致的开源图标库。
- 精心绘制 丨 风格统一、力求像素级的显示
- 使用高效 丨 资源轻量、灵活、多设备兼容
- 开源免费 丨 个人私用和商用版权开源免费

![](https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/26/img/caomei-show-min.png)

4、[You-need-to-know-css](https://github.com/l-hammer/You-need-to-know-css)：该项目包含了一些常用的 CSS 样式示例和作者阅读《CSS揭秘》的收获分享，适合于想要提高 CSS 技能的同学

#### Go 项目
5、[lgo](https://github.com/yunabe/lgo)：实现像 python 一样的交互式编程，同时整合了 Jupyter Notebook。效果如下：

![](https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/26/img/lgo.gif)

6、[gopool](https://github.com/aosen/gopool)：Golang 分布式的连接池，协程池。内含 Redis Client 连接池实现，特点如下：
- 提供下游的高可用访问，投票机制摘除下游不健康节点
- 最小健康比、最大冷却时长可配置
- 每个下游节点对应一个 channel，保证负载均衡
- 提供连接池状态监控接口包括总连接数、每个 IP 的连接数

7、[go-perfbook](https://github.com/dgryski/go-perfbook)：《关于 Go 性能优化的思考》概述了编写高性能 Go 代码的最佳实践。[中文](https://github.com/dgryski/go-perfbook/blob/master/performance-zh.md)

#### Java 项目
8、[AutoEx](https://github.com/BolexLiu/AutoEx)：帮助 Android 开发者，让项目在崩溃时从异常堆栈中，自动寻找 Stack Overflow 的回答。体积只有 9kb 并且没有依赖其他第三方库。当程序出现异常时会有如下输出：
```
┌—————————————————————AutoEx——————————————————————
├ 错误类型:android.content.res.Resources$NotFoundException: Resource ID #0x7f0b0056 type #0x12 is not valid。↑详细异常请往上滚动查看↑
├ 推荐参考Stack Overflow上4条同类问题。↓点击下方连接查看↓
├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
├ 标题:Android Resources$NotFoundException: Resource ID #0x7f030027
├ 链接:https://stackoverflow.com/questions/21269502/android-resourcesnotfoundexception-resource-id-0x7f030027
├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
├ 标题:android.content.res.Resources$NotFoundException: Resource ID #0x7f07007e
├ 链接:https://stackoverflow.com/questions/48161713/android-content-res-resourcesnotfoundexception-resource-id-0x7f07007e
├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
├ 标题:App crashes when adding an ImageView?
├ 链接:https://stackoverflow.com/questions/47600747/app-crashes-when-adding-an-imageview
├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
├ 标题:XML Android app will not load on phone
├ 链接:https://stackoverflow.com/questions/48310838/xml-android-app-will-not-load-on-phone
└—————————————————————AutoEx——————————————————————
```

9、[javatuples](https://github.com/javatuples/javatuples)：提供了多个方便易用的 Java 元组类。写 Java 代码经常会有需要使用元组的场景，我们经常会用 Array 或者 List 来代替这种实现。但是这不仅不够优雅，并且不够安全（你要放弃泛型来达到可以存放不同类型的数据）。而 javatuples 提供了多个类型安全的、优雅的实现类，大大提升了我们开发的效率以及便捷性。示例代码：
```java
...
String str = ...;
Integer integ = ...;
Double[] doubleArray = ...;
...
   
// create a tuple
Triplet<String,Integer,Double[]> triplet = Triplet.with(str, integ, doubleArray); 

// fetch data
...
String myStr = triplet.getValue0();
Integer myInteg = triplet.getValue1();
Double[] myDoubleArray = triplet.getValue2();
...
```

#### JavaScript 项目
10、[javascript-algorithms](https://github.com/trekhleb/javascript-algorithms)：包含了多种基于 JavaScript 的算法与数据结构，[中文](https://github.com/trekhleb/javascript-algorithms/blob/master/README.zh-CN.md)

11、[Day.js](https://github.com/xx45/dayjs)：一个轻量的 JavaScript 时间日期处理库。保持和 Moment.js 的 API 设计完全一样。如果你曾经用过 Moment.js，那么你已经知道如何使用 Day.js 了。体积仅有 2kb 是 Moment.js 的轻量化方案，示例代码如下：
```javascript
dayjs().startOf('month').add(1, 'day').set('year', 2018).format('YYYY-MM-DD HH:mm:ss');
```

12、[tui.calendar](https://github.com/nhnent/tui.calendar)：功能全面的 JavaScript 日程安排日历。虽然项目依赖了 jQuery，但是对于真实项目来说这样做是可以的。此项目适用于多种场景，炫酷的交互和 UI

![](https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/26/img/tui_calendar.gif)

13、[carbon](https://github.com/dawnlabs/carbon)：以美观、整洁的方式，展示你的代码片段。同时提供 SVG、PNG 多种方式展示

![](https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/26/img/carbon-show-min.png)

14、[BizCharts](https://github.com/alibaba/BizCharts)：蚂蚁出品的基于 React 的图表库。图表样式丰富、使用方便、易扩展、文档齐全，[官网](https://antv.alipay.com/zh-cn/g2/3.x/index.html)

#### Python 项目
15、[redis-faina](https://github.com/facebookarchive/redis-faina)：Redis 性能分析器。提供两种模式分析模式：命令实时、读取日志。其原理是使用 Redis MONITOR 命令，将该命令的结果通过管道传递给 redis-faina 脚本，脚本将返回的信息解析，并汇成总成统计信息。具体信息如下所示：
```shell
注意：分析非常闲的 redis 实例时，分析的结果可能偏差的很多。
时间单位为微秒：ms = 1.0 × 10^-6 seconds

Overall Stats
========================================
# 总命令数
Lines Processed  	10
# QPS
Commands/Sec     	1.03       

# 出现最多的 key 的前缀
Top Prefixes                           
========================================
startchart  	9	(90.00%)

# 请求最多的key
Top Keys                                
========================================
startchart:521xueweihan/hellogithub  	9	(90.00%)

# 请求最多的命令
Top Commands                        
========================================
get  	9	(90.00%)

# 请求响应时间的分布
Command Time (microsecs)       
========================================
Median  	583914.0
75%     	637395.0
90%     	5703923.0
99%     	5703923.0

# 总耗时最多的命令
Heaviest Commands (microsecs)
========================================
get  	9746157.0

# 慢请求列表
Slowest Calls                             
========================================
5703923.0  	"get" "startchart:521xueweihan/hellogithub"
637395.0   	"get" "startchart:521xueweihan/hellogithub"
633909.0   	"get" "startchart:521xueweihan/hellogithub"
583914.0   	"get" "startchart:521xueweihan/hellogithub"
569207.0   	"get" "startchart:521xueweihan/hellogithub"
548745.0   	"get" "startchart:521xueweihan/hellogithub"
545493.0   	"get" "startchart:521xueweihan/hellogithub"
523571.0   	"get" "startchart:521xueweihan/hellogithub"
```

16、[marshmallow](https://github.com/marshmallow-code/marshmallow)：使用类似于 ORM 的语法，序列化、反序列化 Python 对象。可以将序列化的对象呈现为标准格式，适用于例如数据校验、返回 HTTP API 的 JSON。示例代码如下：
```python
from datetime import date
from marshmallow import Schema, fields, pprint

class ArtistSchema(Schema):
    name = fields.Str()

class AlbumSchema(Schema):
    title = fields.Str()
    release_date = fields.Date()
    artist = fields.Nested(ArtistSchema())

bowie = dict(name='David Bowie')
album = dict(artist=bowie, title='Hunky Dory', release_date=date(1971, 12, 17))

schema = AlbumSchema()
result = schema.dump(album)
pprint(result, indent=2)
# 输出如下
# { 'artist': {'name': 'David Bowie'},
#   'release_date': '1971-12-17',
#   'title': 'Hunky Dory'}
```

#### Rust 项目
17、[fd](https://github.com/sharkdp/fd)：一个简单、快速、友好的替代 find 命令的方案

![](https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/26/img/fd.gif)

18、[rayon](https://github.com/rayon-rs/rayon)：一个易用、无数据竞争的将顺序迭代器妆化成并行迭代器。简单说就是原本你的数组只能一个一个地遍历，使用这个库可以并发同时从几个 index 开始遍历，同时也能遍历 map 等类似的数据结构

#### Swift 项目
19、[CocoaDebug](https://github.com/CocoaDebug/CocoaDebug)：iOS APP 内置调试工具，支持 log 日志查看、网络抓包、沙盒查看等功能，代码零入侵。示例代码：
```swift
//Step 1.
#if DEBUG
    import CocoaDebug
#endif

//Step 2.
#if DEBUG
    CocoaDebug.enable()
#endif

//Step 3.
public func print<T>(file: String = #file, function: String = #function, line: Int = #line, _ message: T, color: UIColor = .white) {
    #if DEBUG
        swiftLog(file, function, line, message, color)
    #endif
}
```

![](https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/26/img/CocoaDebug.gif)

#### 其它
20、[architect-awesome](https://github.com/xingshaocheng/architect-awesome)：《后端架构师技术图谱》

21、[a-cartoon-intro-to-redux-cn](https://github.com/jasonslyvia/a-cartoon-intro-to-redux-cn)：《看漫画学 Redux》

22、[architecture.of.internet-product](https://github.com/davideuler/architecture.of.internet-product)：知名互联网公司的架构文档

23、[public-apis](https://github.com/toddmotto/public-apis)：（英文）用于 Web 开发的公共 API 集合

24、[practical-programming-books](https://github.com/EZLippi/practical-programming-books)：实用的计算机相关技术书籍、入门的实用教程、技术网站、博文集合

#### 开源书籍
25、[sicp-py-zh](https://github.com/wizardforcel/sicp-py-zh)：《SICP Python 描述中文版》[在线阅读](https://wizardforcel.gitbooks.io/sicp-py/content/)

#### 机器学习
26、[AlphaZero_Gomoku](https://github.com/junxiaosong/AlphaZero_Gomoku)：使用 TensorFlow/Pytorch/Theano 实现 AlphaZero 算法，通过自我对弈从零训练五子棋 AI。实现简单、清晰，适合学习、了解 AlphaGo Zero 背后的关键思想和技术细节

![](https://raw.githubusercontent.com/521xueweihan/img/master/hellogithub/26/img/AlphaZero_Gomoku.gif)



---

## 换种方式阅读
- **网站：** https://hellogithub.com
- **GitBook：** https://gitbook.hellogithub.com

## 声明
如果你发现了好玩、有意义的开源项目 [点击这里](https://github.com/521xueweihan/HelloGitHub/issues/new) 分享你觉得有意思的项目。

**欢迎转载，请注明出处和作者，同时保留声明。**
