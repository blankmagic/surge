# Surge Rule


> 规则不是万能的

> 不是所有广告都能简单的依靠规则阻止！

## *简介*
本项目基于 [ConnersHua](https://github.com/ConnersHua) 修改而来，时间精力有限，尽量看教程少提问！

~***完整教程 [新手启蒙](https://diaosi.one/2020/surge-basic-tutorial)***~
~***订阅更新 [Telegram频道](https://t.me/who_channel)***~

## *规则*
   
### GlobalMedia
   - *海外流媒体服务，如需细化海外流媒体（Youtube、Netflix、PronHub...）策略需排在此规则之前*
   
### Global / China
   - *海外加速 - Proxy / 中国直连 - DIRECT*
   
### Apple
   - *如无特殊需求可不用加此策略及选择代理，在大部分地区 Apple CDN 可正常工作，使用代理后可能导致「Cannot Connect to iCloud」等问题*
  
_________________

## *模块*

> 使用本规则需配合相关 Module 模块： [URL Rewrite](https://github.com/maicoo-l/Surge/blob/master/Module/Rewrite.sgmodule)  [Ad Block](https://github.com/maicoo-l/Surge/blob/master/Module/Ad%20Block.sgmodule) 等等

## *其他*

> Youtube 去视频广告会造成以下问题
   - 网页版可能无法正常播放
   - YouTube Premium 用户无法正常播放

> 默认禁用，如需启用需在「HTTPS 解密(MitM)」的「主机名」列表中删除 (-) ：

```properties
*.googlevideo.com
```

> ⚠️ 注意：如果开启了代理服务器的「UDP 转发」会失效。


## *感谢*


 [@lhie1](https://github.com/lhie1)

 [@ConnersHua](https://github.com/ConnersHua)

 [@chavyleung](https://github.com/chavyleung)

 [@yichahucha](https://github.com/yichahucha)

 [@langkhach](https://github.com/langkhach270389)

 [@Choler](https://github.com/Choler)

 [@Meeta](https://github.com/MeetaGit)

 [@NobyDa](https://github.com/NobyDa)


原文: https://github.com/maicoo-l/Surge

_________________

## [License](https://github.com/maicoo-l/Surge/blob/master/LICENSE)
> 可以拷贝、转发，但是必须提供原作者信息，同时也不能将本项目用于商业用途。
