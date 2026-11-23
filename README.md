# page2401/docusaurus-v3

独立静态站点对比子模块 —— **Docusaurus v3 (`3.10.2`)**。

- **线上预览地址**：`https://page.2401.xyz/docusaurus-v3/`
- **对比总站地址**：`https://page.2401.xyz/`
- **分支模型**：
  - `main`：仅保存纯工程源码与适配版 `*.md` 基准文档（挂载为主仓库 `sites/docusaurus-v3` 子模块）
  - `page`：由 GitHub Actions 自动构建并强制覆盖的纯静态产物孤儿分支（供 GitHub Pages 发布）

## 精确锁定依赖版本

- `@docusaurus/core`: `3.10.2`
- `@docusaurus/preset-classic`: `3.10.2`
- `@docusaurus/theme-mermaid`: `3.10.2`
- `@mdx-js/react`: `3.1.1`
- `react` / `react-dom`: `19.3.1`
- `remark-math`: `6.0.0`
- `rehype-katex`: `7.0.1`
- `katex`: `0.19.1`
- `mermaid`: `12.3.0`

## 本地开发与独立部署

```bash
npm install
npm run dev      # 本地开发预览
npm run build    # 构建至 build/ (默认 baseUrl: /docusaurus-v3/)

# 如需部署到独立根域名：
BASE_PATH=/ npm run build
```
