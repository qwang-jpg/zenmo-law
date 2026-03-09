# Zenmo Law — 项目开发文档

> Global Focus Law Group PLLC · 纽约移民 & 商业法律事务所  
> 线上地址：https://zenmolaw.com

---

## 一、项目概述

Zenmo Law 是一家位于纽约曼哈顿中城的律师事务所，主要服务方向为：

- **移民法**：H-1B、L-1、O-1、EB-1、EB-2 NIW、EB-5、家庭移民、绿卡申请、身份维持
- **商业法**：公司注册（LLC/C-Corp）、合同起草、商标注册、合规咨询
- **个人法律**：交通违章、民事纠纷、人身伤害

网站面向国际客户，以英文为主。

---

## 二、技术架构

### 核心技术栈

| 层级 | 技术 |
|------|------|
| 框架 | React 18 + React Router 6 |
| 构建工具 | Vite |
| 样式 | Tailwind CSS 3 |
| 动画 | Framer Motion |
| 图标 | Lucide React 0.263.1 |
| UI 组件 | Radix UI |
| 部署方式 | 编译为静态文件，作为 WordPress 主题上传 |

### 项目目录结构

```
zenmo-law/
├── public/
│   └── images/
│       ├── backgrounds/          # 各页面 Hero 背景图
│       │   ├── home-background.jpeg
│       │   ├── En-about-us-background.jpeg
│       │   ├── Immigration-background.jpg
│       │   ├── business-background.jpg
│       │   └── Individual-background.jpg
│       ├── logos/
│       │   └── Website-logo.png  # 导航栏 Logo
│       └── icons/
│           └── Icon.png
│
├── src/
│   ├── main.jsx                  # 入口
│   ├── App.jsx                   # 路由配置
│   ├── index.css                 # 全局样式 / CSS token
│   ├── hooks/
│   │   └── useSEO.js             # SEO hook + PAGE_SEO 配置对象
│   ├── lib/
│   │   ├── utils.js              # 工具函数（cn classnames）
│   │   └── assetUrl.js           # 图片路径工具函数（适配 WordPress 部署路径）
│   ├── pages/                    # 页面组件（对应路由）
│   └── components/
│       ├── layout/               # Header、Footer、PageLayout
│       ├── shared/               # 跨页复用组件
│       ├── home/                 # 首页专用组件
│       ├── immigration/          # 移民法页专用组件
│       ├── business/             # 商业法页专用组件
│       ├── individual/           # 个人法页专用组件
│       ├── about/                # 关于我们专用组件
│       ├── contact/              # 联系页专用组件
│       ├── career/               # 招聘页专用组件
│       ├── portal/               # 客户门户登录
│       ├── privacy-policy/       # 隐私政策
│       ├── legal-statement/      # 法律声明
│       └── attorney-advertising/ # 律师广告声明
│
├── package-theme.mjs             # 打包脚本：自动生成 WordPress 主题包
├── tailwind.config.js            # 品牌色 token
├── vite.config.js                # base 设为 /wp-content/themes/zenmo-law/
└── package.json
```

---

## 三、路由一览

| 路径 | 页面文件 | SEO |
|------|----------|-----|
| `/` | `Home.jsx` | ✅ 已配置 |
| `/about-us` | `AboutUs.jsx` | ✅ 已配置 |
| `/immigration-law` | `ImmigrationLaw.jsx` | ✅ 已配置 |
| `/business-law` | `BusinessLaw.jsx` | ✅ 已配置 |
| `/individual-law` | `IndividualLaw.jsx` | ✅ 已配置 |
| `/contact` | `Contact.jsx` | ✅ 已配置 |
| `/career` | `Career.jsx` | 🚫 noindex |
| `/portal` | `Portal.jsx` | 🚫 noindex |
| `/privacy-policy` | `PrivacyPolicy.jsx` | 🚫 noindex |
| `/legal-statement` | `LegalStatement.jsx` | 🚫 noindex |
| `/attorney-advertising` | `AttorneyAdvertising.jsx` | 🚫 noindex |
| `*` | `NotFound.jsx` | 🚫 noindex（404 页）|

---

## 四、品牌色 Token（tailwind.config.js）

```js
colors: {
  'zenmo-primary':       '#4F47E6',   // 主色调（紫蓝）
  'zenmo-secondary':     '#0D1629',   // 深背景（导航、Footer）
  'zenmo-bg':            '#F8F9FB',   // 浅背景
  'zenmo-text':          '#4B5563',   // 正文灰
  'zenmo-subheading':    '#CBD5E1',   // Hero 副文字（浅）
  'zenmo-heading':       '#1E293B',   // 深色标题
  'zenmo-footer-text':   '#94A3B8',   // Footer 文字
  'zenmo-btn1':          '#4F47E6',   // 主按钮色
  'zenmo-btn2':          '#3d36c7',   // 主按钮 hover
  'zenmo-number-color':  '#1E3A6E',   // 首页数字装饰色
}
```

---

## 五、SEO 系统（useSEO.js）

所有 SEO 配置集中在 `src/hooks/useSEO.js` 的 `PAGE_SEO` 对象中。

**在页面中使用：**

```jsx
import { useSEO, PAGE_SEO } from '@/hooks/useSEO'

export default function ImmigrationLaw() {
  useSEO(PAGE_SEO.immigration)
  return ( ... )
}
```

**添加新页面时，在 PAGE_SEO 中增加一条：**

```js
newPage: {
  title: '页面标题（不含 | Zenmo Law）',
  description: '约 150 字以内的 meta description',
  canonical: '/new-page',
  keywords: ['关键词1', '关键词2'],
},
```

**不需要 SEO 的页面（noindex）：**

```js
useSEO({ noIndex: true })
// 或直接引用已有配置
useSEO(PAGE_SEO.career)
```

---

## 六、图片路径（assetUrl.js）

所有组件中的图片引用必须通过 `assetUrl()` 函数，**不能直接写 `/images/...`**。

```jsx
import { assetUrl } from '@/lib/assetUrl'

// 背景图
style={{ backgroundImage: `url(${assetUrl('/images/backgrounds/home-background.jpeg')})` }}

// img 标签
<img src={assetUrl('/images/logos/Website-logo.png')} />
```

> ⚠️ 直接写 `/images/...` 在 WordPress 部署时会 404，因为实际路径是
> `/wp-content/themes/zenmo-law/images/...`

---

## 七、共用组件说明

### `PageLayout`
包裹 `Header` + `Footer`，在 `App.jsx` 中作为所有路由的父级容器使用。

### `SubpageHero`
子页面通用 Hero。Props：`title`（必填）、`subtitle`（可选）、`centered`（默认 true）。背景使用 `.hero-gradient`（深蓝渐变）。

### `CTASection`
页面底部行动召唤区块。接受 `title` 和 `description` props，有默认值。

### `ServiceProcess`
"How We Work" 四步流程组件，2×2 网格布局。首页（默认）背景为 `bg-zenmo-light-bg`；子页面传入 `variant="section"` 使用白色背景。

### `WhyZenmo`
"Why Zenmo Law" 四项优势组件，2×2 网格布局，背景 `#F8FAFC`。

---

## 八、本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器（localhost:5173）
npm run dev
```

---

## 九、打包 & 上传 WordPress

### 一键部署命令

```bash
npm run deploy
```

该命令自动执行：`vite build` → 复制 `dist/` → 写入 WordPress 主题必要文件（`style.css`、`index.php`、`functions.php`）→ 输出至 `theme/` 文件夹。

### 手动步骤（如需分开执行）

```bash
npm run build        # 仅构建
npm run package      # 仅打包主题（需先 build）
```

### 上传流程

1. 运行 `npm run deploy`，等待完成
2. 进入 `theme/` 文件夹，**全选内部所有文件**压缩为 `zenmo-law.zip`
   - ⚠️ 选中 `theme/` 内部的文件压缩，不要压缩 `theme/` 文件夹本身（否则会多一层目录导致安装失败）
3. WordPress 后台 → 外观 → 主题 → 上传主题 → 选择 `zenmo-law.zip`
4. 安装后点击**启用**

> ⚠️ 每次更新代码后重新执行 `npm run deploy`，重新压缩上传即可。

---

## 十、新增页面流程

1. 在 `src/pages/` 新建页面文件，例如 `NewPage.jsx`
2. 在 `src/components/` 对应目录下新建所需组件
3. 在 `src/App.jsx` 中添加路由：
   ```jsx
   import NewPage from './pages/NewPage'
   <Route path="/new-page" element={<NewPage />} />
   ```
4. 在 `src/hooks/useSEO.js` 的 `PAGE_SEO` 对象中添加 SEO 配置
5. 在 `Header.jsx` 导航菜单中添加链接（如需要）
6. 组件中用到图片时使用 `assetUrl()` 函数

---

## 十一、联系信息（真实数据）

| 项目 | 内容 |
|------|------|
| 电话 | +1 (800) 696-8608 |
| 邮箱 | contact@zenmolaw.com |
| 地址 | 747 3rd Ave, New York NY 10017 |
| 办公时间 | Mon – Fri, 9:00 AM – 6:00 PM EST |
| 律所全称 | Global Focus Law Group PLLC DBA Zenmo Law |
