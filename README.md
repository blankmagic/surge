# Surge 规则配置文件


> 规则不是万能的

> 不是所有广告都能简单的依靠规则阻止！

### *简介*
本项目基于 [ConnersHua](https://github.com/ConnersHua) 修改而来，时间精力有限，尽量看教程少提问！

~***问题反馈 [提交Issues](https://github.com/maicoo-l/Surge/issues)***~
~***订阅更新 [Telegram频道](https://t.me/who_channel)***~

## *规则集*
### IP-based Rule
*遇到GEOIP或IP-CIDR规则时，Surge将发送DNS问题，以检查请求的主机名是否为域。您可以选择’no-resolve‘选项，以跳过带有域请求的规则。*
> 注意：如果某些域名不能被本地DNS服务器解析，请确保规则前面没有与该域匹配的基于IP的规则。否则，由于DNS错误，规则测试将失败。您也可以使用” no-resolve“解决问题。
### Special.list
   - *后续规则修正 - DIRECT*
   
### GlobalMedia.list
   - *海外流媒体服务，如需细化海外流媒体（Youtube、Netflix、PronHub...）策略需排在此规则之前*
   
### Global.list / China.list
   - *海外加速 - Proxy / 中国直连 - DIRECT*
   
### Apple.list
   - *如无特殊需求可不用加此策略及选择代理，在大部分地区 Apple CDN 可正常工作，使用代理后可能导致「Cannot Connect to iCloud」等问题*
_________________

## *引入NextDNS （nextdns.io）默认禁用，按需开启*

   - 屏蔽广告，跟踪器和恶意网站
   - 获取有关您的Internet流量的深入分析
   - 保护您的隐私并绕过审查制度
   - 保护您的孩子免受成人侵害

> 默认已添加事件脚本network-changed （[~脚本链接~](https://raw.githubusercontent.com/maicoo-l/Surge/master/Script/nextdns_linkedip.js)，需更改脚本内 linked IP）

## *其他*

> Youtube 去视频广告会造成以下问题
   - 网页版可能无法正常播放
   - YouTube Premium 用户无法正常播放

> 默认启用，如果无需启用需在「HTTPS 解密(MitM)」的「主机名」列表中禁用 (-) 或删除：

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
