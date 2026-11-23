---
title: "01. 专属标注与元数据"
description: "测试 Docusaurus v3 (3.10.2) 的 MDX 3 严格解析、三冒号 Admonitions、原生 HTML <details> 与 GFM Alerts 兼容性。"
---

# 01. 专属标注与元数据（Docusaurus v3 派生版）

不同静态网站生成器对“提示框 / 标注（Callouts / Admonitions）”和页面元数据的语法约定存在显著分歧。本文件由原始 GFM 母版派生适配至 **Docusaurus v3 (`3.10.2`)**。

## 1. Frontmatter 元数据与 MDX 3 严格语法边界

Docusaurus v3 默认将 `.md` 文件交由 **MDX 3** 编译器处理，兼具灵活的文档 Frontmatter 与严格的 JSX 语法约束：

- **当前页标题字段**：`title: "01. 专属标注与元数据"`
- **页面摘要字段**：`description: "..."`（可选扩展 `sidebar_position`、`sidebar_label`、`slug` 等控制字段）
- **MDX 3 派生观察点**：在纯 GFM 母版正文中裸写 `<id>` 或 `{variable}` 属于合法纯文本，但在 Docusaurus v3（MDX 3 默认模式）下会被当作 JSX 组件或 JS 表达式解析并直接中断构建，必须包裹在反引号如 `` `<id>` `` 内或改用转义字符。

## 2. 标准提示语义块（Docusaurus Admonitions）

Docusaurus v3 基于 `remark-directive` 原生支持 `:::note`、`:::tip`、`:::info`、`:::warning`、`:::danger` 五类提示容器，推荐通过紧随关键字的 `[方括号]` 指定自定义标题：

:::note
默认信息提示块：静态站点对比平台的每个子模块均独立维护 `main`（源码）与 `page`（构建产物）双分支，互不污染提交历史。
:::

:::tip[性能优化建议]
在派生到三冒号体系时，VitePress / VuePress 写作 `::: tip 性能优化建议`，而 Docusaurus v3 与 Astro Starlight 推荐使用方括号形式 `:::tip[性能优化建议]`。
:::

:::warning[版本边界注意]
注意区分各派系关键字命名——Docusaurus v3 同时兼容 `warning` 与旧版 `caution`（官方推荐统一使用 `warning`），Starlight 使用 `caution`，Docsify 传统语法则使用 `!>`。
:::

:::danger[不可逆分支覆盖警告]
自动化流水线在向 `page` 分支推送构建产物时会启用 `force_orphan: true`，切勿在 `page` 分支直接手工修改代码！
:::

## 3. 可折叠详情容器（原生 HTML `<details>`）

Docusaurus `@docusaurus/theme-classic` 会自动拦截并美化原生 `<details>` 与 `<summary>` 标签（无需私有 `::: details` 容器），内部空行后可继续解析代码块与数学公式：

<details>
<summary>点击展开查看 Docusaurus 折叠容器与内部 Markdown 混排结构</summary>

```markdown
:::tip[性能优化建议]
Docusaurus 原生接管并美化标准 HTML <details> 折叠面板。
:::
```

除了代码块，折叠容器内同样支持列表、表格与数学公式 $f(x) = x^2 + 1$。

</details>

## 4. GitHub 风格引用警报（GFM Alerts）跨框架直通测试

以下三段在**所有派生子模块中均保持一字不改**，用于测试：如果不做任何方言改写、直接把母版 `.md` 丢进目标生成器，哪些框架能原样渲染，哪些会退化为普通引用文本：

> [!NOTE]
> 这是一段标准的 GitHub Flavored Markdown `[!NOTE]` 警报文本，用于检验各生成器对母版语法的零改造直通能力。

> [!IMPORTANT]
> 跨平台迁移 Markdown 文档时，是否原生兼容 `> [!IMPORTANT]` 与 `> [!WARNING]` 直接决定了母版文档的派生改造成本。

> [!CAUTION]
> 若目标生成器未内置 GFM Alert 解析器（如 VuePress v1、Starlight 默认配置、Docsify v4 旧插件），上方标记会退化为普通引用块并原样露出 `[!CAUTION]` 字符串。
