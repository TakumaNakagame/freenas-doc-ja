---
sidebarDepth: 0
title: はじめに
---

## 著作権表示
FreeNAS® is © 2011-2019 iXsystems

FreeNAS® and the FreeNAS® logo are registered trademarks of iXsystems

FreeBSD® is a registered trademark of the FreeBSD Foundation

Written by users of the FreeNAS® network-attached storage operating system.

Version 11.2

Copyright © 2011-2019 iXsystems

This Guide covers the installation and use of FreeNAS® 11.2.

The FreeNAS® User Guide is a work in progress and relies on the contributions of many individuals. If you are interested in helping us to improve the Guide, read the instructions in the README. IRC Freenode users are welcome to join the #freenas channel where you will find other FreeNAS® users.

The FreeNAS® User Guide is freely available for sharing and redistribution under the terms of the Creative Commons Attribution License. This means that you have permission to copy, distribute, translate, and adapt the work as long as you attribute iXsystems as the original source of the Guide.

FreeNAS® and the FreeNAS® logo are registered trademarks of iXsystems.

Active Directory® is a registered trademark or trademark of Microsoft Corporation in the United States and/or other countries.

Apple, Mac and Mac OS are trademarks of Apple Inc., registered in the U.S. and other countries.

Broadcom is a trademark of Broadcom Corporation.

Chelsio® is a registered trademark of Chelsio Communications.

Cisco® is a registered trademark or trademark of Cisco Systems, Inc. and/or its affiliates in the United States and certain other countries.

Django® is a registered trademark of Django Software Foundation.

Facebook® is a registered trademark of Facebook Inc.

FreeBSD® and the FreeBSD® logo are registered trademarks of the FreeBSD Foundation®.

Intel, the Intel logo, Pentium Inside, and Pentium are trademarks of Intel Corporation in the U.S. and/or other countries.

LinkedIn® is a registered trademark of LinkedIn Corporation.

Linux® is a registered trademark of Linus Torvalds.

Oracle is a registered trademark of Oracle Corporation and/or its affiliates.

Twitter is a trademark of Twitter, Inc. in the United States and other countries.

UNIX® is a registered trademark of The Open Group.

VirtualBox® is a registered trademark of Oracle.

VMware® is a registered trademark of VMware, Inc.

Wikipedia® is a registered trademark of the Wikimedia Foundation, Inc., a non-profit organization.

Windows® is a registered trademark of Microsoft Corporation in the United States and other countries.

#### 表記規約

FreeNASの® 11.2ユーザガイドには、これらの表記規則を使用しています。

| 項目 | 視覚的な例 |
|--------------------------------------------------------------------|---------------------------------------------|
| グラフィック要素：ボタン、アイコン、フィールド、列、およびボックス | [ Import CA ]ボタンをクリックします。 |
| メニュー選択 | システム‣情報を選択します。 |
| コマンド | scpコマンドを使用してください。 |
| ファイル名とプールとデータセットの名前 | /etc/rc.confファイルを見つけます。 |
| キーボードキー | 押しEnterキーを。 |
| 重要なポイント | これは重要。 |
| フィールドに入力された値、またはデバイス名 | アドレスフィールドに127.0.0.1と入力します。 |

表1 テキストフォーマットの例

| アイコン | 使用法 |
|---------------------------|--------------------------------------------|
| 追加 | 新しいアイテムを追加してください。 |
| Settings（設定） | 設定メニューを表示します。 |
| Options（オプション） | オプションメニューを表示します。 |
| Browse（参照） | システムディレクトリの拡大図を表示します。 |
| Power（電源） | 電源オプションメニューを表示します。 |
| Show（表示） | パスワードフィールドの文字を表示します。 |
| Hide（隠す） | パスワードフィールドの文字を隠します。 |
| Configure（設定） | 編集の設定。 |
| 襁（打ち上げ） | サービスを起動します。 |
| ▶（スタート） | 刑務所を始めなさい。 |
| Stop（停止） | 刑務所をやめなさい。 |
| Update（更新） | 刑務所を更新します。 |
| Delete（削除） | 刑務所を削除します。 |
| Encry（暗号化オプション） | プールの暗号化オプション |

表2 FreNASのアイコン

 # はじめに

FreeNASのは®埋め込まれたオープンソースのネットワーク接続ストレージ（NAS）オペレーティング・システムのFreeBSDに基づいており、下に放出される 、2句のBSDライセンス。NASには、ファイルの保存と共有に最適化されたオペレーティングシステムがあります。

FreeNASの®は、ブラウザベースのグラフィカル構成インターフェースを提供します。内蔵のネットワークプロトコルは、複数のオペレーティングシステムへのストレージアクセスを提供します。追加のソフトウェアをインストールすることによって組み込み機能を拡張するためのプラグインシステムが提供されています。

## 11.2の新機能
FreeNASの® 11.2は、オペレーティングシステム、ベースアプリケーション、およびドライバにいくつかの新しい重要な機能、既存の機能に多くの改良とバグの修正、およびバージョンの更新が含ま機能リリース、です。ユーザはこれらの改良とバグ修正を利用するためにこのリリースにアップデートすることをお勧めします。

これらの主な機能は、このバージョンの新機能です。

- ログイン画面はデフォルトで新しいAngularベースのUIになります。従来のUIを使い続けたいユーザーは、ログイン画面で「Legacy UI」を選択できます。
- このリリース以降、新しいUI内のガイドの公開バージョン およびガイドオプションに表示されるスクリーンショット は、新しいUI用です。ただし、クラシックUIにログインしている間にガイドアイコンをクリックしたユーザーには、引き続き古いUIのスクリーンショットが表示されます。ガイドの両方のバージョンが利用可能になるのは、移行期間中にクラシックUIが将来のリリースで非推奨になる前に、新しいUIに慣れてきたユーザーを支援するためです。
- 古いAPIから新しいミドルウェアへの書き換えは続きます。書き換えが完了すると、api.freenas.org は推奨されなくなり、新しいAPIドキュメントに置き換えられます。その間に、新しいミドルウェアのAPIドキュメントを見るには、新しいUIにログインし、ブラウザのロケーションバーにあるFreeNASシステムのURLをクリックして、そのURL /api/docsの最後に追加します。
- ブートローダはGRUBからネイティブのFreeBSDブートローダに変更されました。これにより、一部のユーザーがGRUBで経験したいくつかの問題を解決するはずです。FreeBSDのブートローダがブート環境を完全にサポートするようになるまで、GRUBは一時的な解決策として導入されました。
- プラグインと刑務所のバックエンドから切り替わった 看守するiocageと監視員は、もはやバグ修正を受信しません。新しいUIは自動的に iocageを使ってプラグインとJailsを作成し管理します。サポートされている最新のアプリケーションバージョンを実行していることを確認するために、新しいUIを使用して既存のプラグインと Jailsを再作成することをお勧めします。
- プラグインはFreeBSD 11.2-RELEASEに切り替えられ、すべてのプラグインはこのバージョン用に再構築されました。
- 仮想マシンはよりクラッシュ耐性があります。ゲストが起動されると、利用可能なメモリ容量がチェックされ、システムリソースが不十分な場合は初期化エラーが発生します。起動時にゲストにメモリをオーバーコミットするオプションがありますが、これは通常の使用にはお勧めできません。ゲストが停止すると、そのリソースがシステムに返されます。さらに、UEFIブートメニューの修正により、Linuxカーネル4.15以降を正しく起動できるようになりました。
- クラウド同期タスクは、データが送信される前に暗号化し、クラウド上に保存されている間は暗号化された形式でデータを保持するための設定オプションを提供します。ファイル名は暗号化することもできます。
- 自己暗号化ドライブ （SED）の予備サポートが追加されました。

このソフトウェアは追加または更新されました。

- 基本オペレーティングシステムはFreeBSD 11.2の STABLEブランチです 。これは多くの更新されたドライバとバグ修正をもたらします。このブランチは、FreeBSD-SA-18：13.nfsまでのFreeBSDセキュリティ勧告を含むようにパッチが当てられてい ます。
- Linux上のZFSから移植されたソート済みスクラブのサポートのおかげで、OpenZFSはIllumosで最新かつ少し先を進んでいます。注目に値する改善には、チャンネルプログラム、データディスクの削除、より弾力的なボリュームのインポート、vdevが欠けているプールをインポートする機能、プールのチェックポイント、圧縮ARCのパフォーマンスの向上、およびZILのバッチ処理が含まれます。この変更の一環として、デフォルトのZFS間接ブロックサイズが128 KiBから32 KiBに縮小されました。これらの改善点の多くはさらなるテストが必要なのでまだUIに統合されていないことに注意してください。
- IPsecカーネルモジュールが追加されました。kldload ipsecを使って手動でロードできます 。
- eMMCフラッシュストレージのサポートが追加されました。
- EM、 IGB、 のixgbe、およびIXL インテルのドライバがMTUに設定されたときに発生するパフォーマンス低下の問題を解決するパッチが適用されている9000（9Kジャンボクラスタ）。以下のため9Kジャンボクラスタを構成する前に cxgbe 作成の調整パラメータをして 変数のhw.cxgbe.largest_rx_cluster、タイプのローダー、および値の4096。 cxgbの ドライバは、ジャンボクラスタをサポートしていませんし、より大きなMTU使用しないでください4096。
- bnxtドライバは、BroadcomのNetXtreme-CとのNetXtreme-Eイーサネットドライバのサポートを提供する追加されています。
- VT端末は デフォルトで使用されているとはsyscons端子がカーネルから削除されます。
- 基本システムにncduが追加されました。このCLIユーティリティは、コンソールまたはSSHセッションからディスク使用量を分析するために使用できます。
- drm-next-kmod が基本システムに追加され、Intelグラフィックカード用のコンソールにUTF-8フォントのサポートが追加されました。
- Samba 4.7は最新のセキュリティ脆弱性に対処するために修正されている 。
- rsyncがバージョン3.1.3にアップデートされました 。
- rcloneがバージョン1.44にアップデートされました 。
- Minioがバージョン2018-04-04T05にアップデートされ ました。
- Netdataはバージョン1.10.0にアップデートされ ました。
- iocageは10月3日の時点でアップストリームと同期され、多くのバグ修正とIPv6サポートの改善を提供しています。
- RancherOSがバージョン1.4.2にアップデートされました 。
- zshは新規インストール用のルートシェルです。アップグレードでは、引き続きデフォルトのrootシェルとしてcshシェルが使用されます。
- ifconfigのタップインターフェイスの説明に、接続されている仮想マシンの名前が表示されるようになりました。
- xattrは基本システムに追加されており、コマンド行からファイル拡張属性を変更するために使用できます。利用可能なオプションを表示するには、xattr -hと入力します。
- convmvが基本システムに追加され、コマンドラインからファイル名のエンコーディングを変換するために使用することができます。利用可能なオプションを表示するには、convmvと入力します。
- cloneacl CLIユーティリティが追加されました。複雑なACLを既存の共有に再帰的に複製するために使用することができます。使用方法についてはcloneaclと入力してください。
- これらのスイッチは、freenas-debug： -MSATADOM情報のダンプと-Z古いデバッグ情報の削除のために追加されました。-GシステムはもはやGRUBを使用してスイッチが削除されていません。-Jスイッチが削除され、-jスイッチではなく、ウォーデンのiocage刑務所の情報を表示するように書き直されました。
- これらのスイッチがarcstatに追加されました。使用可能なすべての統計を表示するための-aと、接尾辞なしで生数値を表示するための-p。

これらの画面オプションは変更されました。


- ATAセキュリティユーザー、SEDパスワード、および SEDパスワードリセットフィールドが追加されました システム‣高度な。
- [ コンソールのスクリーンセーバーを有効にする]フィールドは、システム‣詳細設定から削除されました 。
- カーネルのクラッシュダンプ、毎日のテレメトリの有効自動アップロードのチェックボックスから削除されている システム‣高度な。
- [ 省電力デーモンを有効にする ]オプションは、システム‣詳細設定から削除されました。
- [アラート設定]が[ システム]に追加され、利用可能なアラート条件を一覧表示したり、アラートごとに通知頻度を設定したりするために使用できます。
- これらのクラウド認証情報がシステムに追加されました ‣クラウド認証情報：Amazonクラウドドライブ、ボックス、ドロップボックス、FTP、Googleドライブ、HTTP、Hubic、Mega、Microsoft OneDrive、pCloud、SFTP、WebDAV、およびYandex。
- [ チームドライブID]フィールドが[ システム]‣クラウド認証情報‣[追加]に追加され 、Googleドライブがプロバイダーの場合に表示されます。
- エンドポイントのURLはに追加された システム- >クラウド資格情報は- >クラウド資格を追加します が、場合にのみ表示されますアマゾンS3がとして選択されている プロバイダ。これは、Wasabiなどの他のS3互換サービスへの接続を設定するために使用できます。
- ドライブアカウントタイプとドライブID がシステム - >クラウド認証情報 - >クラウド認証情報の追加に追加されました 。これらのフィールドは、Microsoft OneDriveがプロバイダーとして選択されている場合に表示され ます。
- [ システム]‣ [ アップデート ]の[ 新しいアップデートを自動的にチェックする ]オプションが、[ 毎日アップデートをチェックする ]と[ 利用可能な場合はダウンロードする ]に 変更されました 。
- システム‣Updateの列車セレクタ が変更され、ドロップダウンメニューに許容列車のみが表示されるようになりました。各列車のオプションには詳細な説明があります。
- システムアップグレードを実行する前に、システム設定のコピーを保存し、パスワードシークレットシードを含めるように求めるプロンプトを追加するオプションがあります。このポップアップは（設定）‣設定に進み、 アップグレード前に「設定を保存」ダイアログを有効にするの設定を解除することで有効にできます。
- [ コンテナ]、[ リモート暗号化]、[ ファイル名暗号化]、[ 暗号化パスワード]、および[ 暗号化ソルト]フィールドが[タスク]> [クラウド同期]タスク> [クラウド同期の追加]に追加されました 。
- 最初のインターフェースを設定するときに、ネットワーク‣インターフェース‣インターフェースの追加のNICおよびインターフェース名フィールドは 、WebインターフェースのNIC設定で事前設定されています。ユーザがWebインターフェイスNICの前に別のインターフェイスを設定しようとすると、警告が表示されます。
- Storage‣Pools‣Zvolの追加‣ADVANCED MODEのBlock sizeフィールドでは 、4Kより小さいサイズを選択できなくなりました。これは、パフォーマンス上の問題が、効率的な処理には小さすぎるブロックサイズを設定するのを防ぐためです。
- Execのフィールドが追加されました ストレージプール‣‣データセット‣ADVANCED MODEを追加します。レコードサイズのフィールドは、もはやよりもサイズが小さく選ぶことができますない4K。これは、パフォーマンス上の問題が、効率的な処理には小さすぎるブロックサイズを設定するのを防ぐためです。
- [ 作成日 ]列が[ ストレージ]‣スナップショットに追加されました 。
- 「SEDのパスワード」列が「ストレージ」‣ディスクに追加されました 。
- [ ストレージ ]> [ ディスクのインポート ]に[ MSDOSFSロケール ]ドロップダウンメニューが追加されました 。
- ドメインアカウントのパスワードで ディレクトリサービス‣Active Directoryは 、初めてのドメインを設定する際にのみ必要です。
- 「ユーザーベース」および「グループベース」フィールドは、ディレクトリサービス‣Active Directory‣詳細モードから削除されました 。
- [ ホームディレクトリを有効にする]、[ ホームディレクトリ]、[ ホーム共有名]、および[ ホーム共有タイムマシン] フィールドは[ サービス]‣AFPから削除され、[ タイムマシン割り当て]フィールドは[ 共有]‣アップル（AFP）共有から削除されました 。これらのフィールドは、共有‣Apple（AFP）共有‣ホームシェアとして使用するに置き換えられました 。
- Services‣TFTPのUmaskフィールドがFile Permissionsセレクタに変更されました。
- [ ホスト名]フィールドが[ サービス]‣UPSに追加されました 。UPS Driver with が選択されている場合、このフィールドはPortフィールドを置き換え ます。snmp
- BitTorrent SyncプラグインはResilio Syncに改名されました。
- ディスク温度グラフがReporting‣ディスクに追加されました 。このカテゴリは、グラフが表示される前にユーザーがデバイスとメトリックを選択できるように改良されました。
- 稼働時間グラフは、レポーティング‣システムタブから削除されました 。
- 仮想マシン‣デバイス追加および編集フォームには、VMデバイスの起動優先順位を設定するためのDevice Orderフィールドがあります。