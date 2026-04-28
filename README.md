# Resume-vuepress
![](https://img.shields.io/badge/build-passing-brightgreen.svg)
![](https://img.shields.io/badge/VuePress-v1.0.2-orange.svg)
![](https://img.shields.io/badge/license-MIT-%23373737.svg)

## 简介

通过本项目，你可以使用 Markdown 书写简历，并通过 VuePress 部署为可预览的页面。

在线预览地址：[cv.anxcye.com](https://cv.anxcye.com)

来源于这个项目 [Siricee/Resume-vuepress](https://github.com/Siricee/Resume-vuepress)<br>



## 使用

```bash
git clone git@github.com:Anxcye/vuepress-cv.git
cd Resume-vuepress
pnpm install
```
在`resume`文件夹内，根据`scaffold.md`修改`README.md`并保存，后执行以下命令
```bash
pnpm run dev 	# 预览
pnpm run build	# 生成静态页面
```


**打印简历**：

Chrome 页面中右键 -> 打印 -> 另存为 pdf。

*注意：打印-更多设置-取消勾选页眉和页脚。否则会有标题和日期。*

## 部署
本项目使用GitHub Pages + GitHub Actions自动部署。具体可参考 [官方文档](https://v1.vuepress.vuejs.org/zh/guide/deploy.html#github-pages-and-github-actions)

其他方式部署这里不讲解，请参阅 [VuePress文档|部署](https://v1.vuepress.vuejs.org/guide/deploy.html)。

---

## 开发

本项目依赖于VuePress 1.0.2，结构按官方文档推荐风格设计，有问题请先参阅 [官方文档](https://v1.vuepress.vuejs.org/guide/deploy.html)。

### 命名

所有页面、目录下的默认页均为 `README.md` 且 **不可更改**，这是VuePress的约定。

本项目中的 `根目录 README.md` 与 `resume/README.md` 完全不同，前者为项目说明文档，后者为简历文档。


YML / Shell / Pythonを使います。
パイプラインのステップは以下の通りです。まず、コードをコンパイルし、テストを実行します。その後、Dockerイメージをビルドし、レジストリにアップロードします。次に、対応する環境からKubernetesにDockerイメージをロードし、最終的にコンテナとして実行します。
2019年から2025年までの職場でオンラインコースで独学して、同僚のコードを読みます。
大規模なプロジェクトはどのようにパイプラインを築きますかを学びました。ゼロから一までのパイプラインをデザインできます。
15〜20人のチームで開発しました。


主に Java、Node.js、TypeScript、Kotlin を使って、バックエンド開発をしました。
どんなものを製作したか
今まで、次のようなWebサービスや機能を作りました：ユーザー認証サービス、 会員サービス、ゲームデータ連携サービス、投票フォーム、応募フォーム、サブスクリプション管理機能、ランキング表示機能、社内認証システム、ESGデータを使う分析サービス。
2015年の大学期間から今まで、オンラインコースを独学します。
次のことをできます：バックエンドAPIの設計と開発、データベース設計とSQL最適化、高いアクセスに対応するシステム開発、Redis などを使ったキャッシュ設計、Docker・Kubernetes・AWS を使った運用、負荷テストと性能改善、要件を理解して機能を実装すること、ドキュメント作成と知識共有。
15〜20人のチームで開発しました。

主に HTML、CSS、JavaScript、TypeScript を使用し、Vue.js、jQuery、Bootstrap を使った開発経験があります。
これまでの実務では、CMS 上のページ設定や運用支援、管理用画面の機能追加・修正、コンテンツ表示に関わるWebページ開発に携わりました。
これらの技術は、大学で学んだ基礎をもとに、2019年から2025年までの実務を通じて身につけました。実務の中で、要件に応じて画面を修正し、表示や運用を支える機能を実装できるようになりました。
15〜20人のチームで開発しました。