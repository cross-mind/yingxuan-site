# 英选 · 品牌官网

「英选」AI Agent 建设咨询与定制化 Agent 服务的单页品牌官网。使用 [Astro](https://astro.build) 构建，产出纯静态站点，零客户端框架、构建产物极小。

## 技术栈

- **框架**：Astro 4（静态输出，`output: static`）
- **样式**：原生 CSS（设计令牌 + 组件级 scoped 样式），无 UI 库依赖
- **交互**：纯 CSS，无客户端 JavaScript 框架
- **字体**：系统字体栈（含中文 PingFang / 微软雅黑等），无需外部字体请求

## 本地开发

```bash
npm install
npm run dev      # 本地开发 http://localhost:4321
npm run build    # 产出静态站点到 dist/
npm run preview  # 本地预览 dist/
```

## 部署

站点为纯静态产物（`dist/`），Vercel 与 Cloudflare Pages 均可零配置托管。**推荐 Cloudflare Pages**（全球边缘节点、免费额度充足、对国内访问相对友好）。

### 方案 A：Cloudflare Pages（推荐）

1. 在 Cloudflare Dashboard → Workers & Pages → Create → Pages → 连接本 Git 仓库
2. 构建设置：
   - Framework preset：`Astro`
   - Build command：`npm run build`
   - Build output directory：`dist`
3. 保存并部署，后续 push 自动触发构建

### 方案 B：Vercel

仓库已含 `vercel.json`。

- 网页：导入本仓库，Vercel 会自动识别 Astro，无需额外配置
- 或 CLI：`npm i -g vercel && vercel --prod`

## 目录结构

```
src/
  layouts/Base.astro       # HTML 骨架 + <head>（meta / OG / favicon）
  components/Header.astro   # 顶部导航
  components/Footer.astro   # 页脚（公司信息 + ICP 备案）
  pages/index.astro         # 单页全部内容与 scoped 样式
  styles/global.css         # 设计令牌与基础样式
public/favicon.svg          # 品牌标识（宝石切面 = 精选之意）
```

## 关键说明与假设

- **联系方式**：页面 CTA 区块使用真实邮箱 `ivan@yingxuan.io`（`src/pages/index.astro`）。
- **文案与视觉**：因暂无产品截图 / Demo 素材，文案与品牌视觉由执行方基于「AI Agent 咨询 + 定制开发」的业务定位合理规划。
- **页脚合规信息**：公司名称「深圳市自由邦互联网有限公司」与 ICP 备案号「粤ICP备15021086号-2」已展示，备案号链接至工信部备案系统 <https://beian.miit.gov.cn/>（新标签页打开）。
