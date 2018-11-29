# HelloGitHub 知乎自动迁移脚本

基于`puppeteer`，依赖`ts-node`

## 用法

```bash
$ cnpm i ts-node -g
$ cnpm i
$ ts-node zhihu.ts
```

注意会打开一个网页，然后用自己的知乎 APP 扫描二维码登录，完成后命令行输入`y`并回车

## 注释

`cp.ts`会把 `./HelloGithub/content` 下的期刊全部拷贝并且重命名到 `./articles` 目录下，并且会去掉第一行

`zhihu.ts`会启动一个 chrome puppeteer 自动上传

封面会取 covers 内按照字母排序的数组的[期刊号]

由于各种重试啊乱七八糟的操作，上传会 sleep 很久等待图片上传，大约 7 分钟一个，可以自己编辑
