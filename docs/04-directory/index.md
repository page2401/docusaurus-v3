---
title: "04. 目录结构与路由取舍"
description: "实测 Docusaurus v3 的 docs/ 单层隔离、numberPrefixParser 取舍与 _category_.json 自动侧边栏中文分组机制。"
sidebar_position: 4
---

# 04. 目录结构与路由取舍（Docusaurus `_category_.json` 模式）

本章节基于母版 `docs/04-directory/` 多级嵌套子目录 `nested/`，实测 **Docusaurus v3** 在目录隔离、文件名前缀解析与自动侧边栏中文分组上的经典工程方案：

1. **`docs/` 单层内容隔离 + Docs-only 模式**：通过 `routeBasePath: '/'` 与 `blog: false` 将 `docs/` 直接挂载为站点根路由，仓库根目录 `README.md` 与工程配置文件天然隔离，零误编译风险。
2. **`_category_.json` 解决自动侧边栏中文命名痛点**：相比 Astro Starlight `autogenerate` 直接暴露英文目录名 `nested`，Docusaurus 允许在 `docs/04-directory/nested/_category_.json` 中声明 `label`、`position` 与 `collapsed`，既保留了自动扫描防“孤岛页”的优势，又能优雅指定中文分组标题。
3. **`numberPrefixParser` 路由取舍**：Docusaurus 默认会自动剥离 `01-` 数字前缀生成无序号 URL；本基准站显式设置 `numberPrefixParser: false` 以保持与母版一致的 `/01-annotations` 等基准路由，同时完整保留离线相对 `.md` 链接跳转能力。

## 嵌套子文档实测入口

- [进入子文档 A：排序前缀与 URL 纯净度权衡](./nested/01-order-and-url.md)
- [进入子文档 B：多级子目录与侧边栏同步机制](./nested/02-sidebar-sync.md)
