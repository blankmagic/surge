### ***For pure self-use*** <img src="https://raw.githubusercontent.com/blankmagic/blankmagic/main/IMG/github-hi.gif" width="25px">

Please read the [Documentation](https://www.notion.so/maicoo/Surge-bf22101efe66497582ea937ddc750246) before using this Configuration.

[Telegram Channel](https://t.me/Surge_classroom)


*Surge is a networking toolbox For iOS and macOS.*

<details>
  <summary>Surge official docs</summary>
  
  Surge documentation, along with technical details and guidelines.
  
  [Website](https://nssurge.com/)

  [Manual](http://manual.nssurge.com/)

  [Understanding Surge](https://manual.nssurge.com/book/understanding-surge/cn/)

  [FAQ](https://nssurge.com/support)
  
  [Community](https://community.nssurge.com/)  
</details>

*Special thanks*

<details>
  <summary>The author list</summary>

* [DivineEngine](https://github.com/DivineEngine/Profiles/tree/master/Surge)
* [Peng-YM](https://github.com/Peng-YM/Sub-Store/tree/master/config)
* [Lãng Khách](https://github.com/langkhach270389/Surge-LK/tree/main)
* [NobyDa](https://github.com/NobyDa/Script/tree/master)
* [Choler](https://github.com/Choler/Surge)
* [Yichahucha](https://github.com/yichahucha/surge/tree/master)
* [Chavyleung](https://github.com/chavyleung/scripts)
</details>

## 配置

你可以从该 URL 下载这个 [配置文件](https://blankmagic.github.io/surge/Profile.conf)

## 说明

### 关于 IPv6

默认并不开启 IPv6，如需要可在「更多设置 >」里打开「IPv6 支持」，或在文本配置中修改 `ipv6 = false` 为 `ipv6 = true`。

### 关于 DNS

如果所使用的网络没有 DNS 劫持问题，则配置为使用系统 DNS 并追加公共 DNS，如果所使用的网络存在 DNS 劫持问题，则配置为仅使用公共 DNS；
> 如部分运营商存在劫持海外正常网站至反诈页面的（据目前反馈它们没有抢答公共 DNS，所以）可以在「DNS 设置」中选择「使用自定义 DNS 服务器」或文本配置中将 `dns-server =` 中的 `system` 移除。

不建议使用海外 DNS（包括 119.28.28.28），如 `1.1.1.1` 解析哔哩哔哩返回的是香港的 CDN，这时候再指定个规则直连没什么意义；

非必要不建议使用 DoH；
> 必要指的是如中国移动这种抢答公共 DNS 的运营商

### 关于 Apple 分流

默认 Apple 分流为直连（除了被动或主动屏蔽的那些，所以 Apple.list 放在 Global.list 之后），所以如果想完全走代理可以将 `RULE-SET,Apple.list` 修改为代理策略。

但若想 Apple 只要国内全走直连只要国外全走代理可将 `RULE-SET,Apple.list` 注释或移除，**前提是 Apple 相关域名仅使用国内 DNS**。

License
-
<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
