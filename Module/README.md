# 使用教程（Surge for iOS）
* 开启 HTTP Rewrite, MitM, Scripting 开关
* 配置 MitM 证书
  * 点击 MitM 下方的 Configure CA
  * 如果你的机场提供了 Surge 托管服务，那么很大概率你将会看到一个已经生成好的证书，如果你没有看到，请点击按钮生成一个新的证书
  * 点击 Install CA certificate to System，遵循 Surge 提示操作（你会下载并安装一个配置文件，随后在 iOS 系统设置的关于界面最下方选择信任刚刚安装的证书）
  * 如果你刚刚的配置文件已经附带了生成好的证书，那么在你完成安装后回到 Surge 界面点击左上角的 Cancel 即可（你的证书已经配置好了），如果你是刚刚自己生成的证书，请点击右上角 Done 保存
* 开启模块
  * 点击 Module 下方的 Modules 按钮，点击 Install modules 按钮，粘贴以你需要白嫖的软件名字命名的 .sgmodule 文件的 GitHub raw 链接，确认安装后确保刚刚安装的模块左侧有对勾代表模块已经启用，点击右上角 Done 确认即可