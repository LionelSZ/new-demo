# 🌍 绿能资产星图矩阵 (Green Energy Asset Star Map Matrix)

![Vue](https://img.shields.io/badge/Vue-3.4.0-4FC08D?logo=vue.js)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?logo=vite)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3.2-3178C6?logo=typescript)
![Mapbox GL](https://img.shields.io/badge/Mapbox%20GL-3.19.1-000000)
![License](https://img.shields.io/badge/License-MIT-green)

一个基于 **Vue 3 + Vite + Mapbox GL** 的绿能资产可视化管理平台，提供实时的电站、储能设施的地理位置展示和数据分析功能。

## ✨ 项目特性

- 🗺️ **交互式地图** - 基于 Mapbox GL 实现的中国地图可视化
- 📊 **数据展板** - 实时的电站和储能设施概览数据
- 🎨 **玻璃拟态设计** - 现代化的毛玻璃效果 UI
- 💡 **发光动画** - 地图边界呼吸动画效果
- 🔍 **交互功能** - 鼠标悬浮、点击弹窗等交互体验
- 📱 **响应式布局** - 支持不同尺寸屏幕
- ⚡ **高性能** - Vite 快速打包和 HMR 开发体验

## 🚀 快速开始

### 系统要求

- Node.js >= 18.0.0
- npm >= 9.0.0

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

启动开发服务器，默认访问 http://localhost:3000

### 生产打包

```bash
npm run build
```

生成优化的生产版本到 `dist` 目录

### 类型检查

```bash
npm run build:prod
```

运行 Vue TSC 类型检查并打包

### 预览打包结果

```bash
npm run preview
```

## 📁 项目结构

```
new-demo/
├── src/
│   ├── views/
│   │   └── home/
│   │       ├── index.vue              # 首页主组件
│   │       └── components/
│   │           └── DetailPopup.vue    # 详情弹窗组件
│   ├── assets/
│   │   ├── svg/                       # SVG 图标资源
│   │   │   ├── point-1.svg            # 电站图标
│   │   │   └── point-2.svg            # 储能图标
│   │   └── images/                    # 图片资源
│   │       └── title_bg.png           # 标题背景图
│   ├── data/
│   │   └── china-map.json             # 中国地图 GeoJSON 数据
│   ├── config/
│   │   └── mapbox.ts                  # Mapbox 配置文件
│   ├── App.vue                        # 根组件
│   └── main.ts                        # 入口文件
├── index.html                         # HTML 模板
├── vite.config.ts                     # Vite 配置
├── tsconfig.json                      # TypeScript 配置
├── package.json                       # 项目依赖配置
└── README.md                          # 项目文档
```

## 🔧 技术栈

| 技术 | 版本 | 描述 |
|------|------|------|
| **Vue** | ^3.4.0 | 渐进式 JavaScript 框架 |
| **Vite** | ^5.0.8 | 下一代前端构建工具 |
| **TypeScript** | ^5.3.2 | JavaScript 的超集 |
| **Mapbox GL** | ^3.19.1 | WebGL 地图库 |
| **Vue Router** | ^4.2.5 | Vue 官方路由库 |
| **SCSS** | ^1.69.5 | CSS 预处理器 |
| **Vueuse** | ^10.7.0 | Vue 组合式 API 工具库 |

## 📋 功能说明

### 1. 地图展示
- **中国边界**: 使用 GeoJSON 数据展示中国地图
- **发光边界**: 实现边界线的呼吸动画效果
- **点标记**: 在地图上展示电站和储能设施位置

### 2. 数据展板

#### 左侧面板
- **电站概览**: 展示电站数量、发电量、容量等核心指标
- **��能概览**: 展示储能设施数量、容量、价值等信息

#### 右侧面板
- **电站排名**: 显示装机容量排名前 5 的电站
- **资本运作**: 最新的融资和并购信息
- **行业资讯**: 行业动态和政策导向新闻

### 3. 交互功能
- **鼠标悬浮**: 悬浮在地图标记上显示信息提示
- **点击事件**: 点击标记弹出详细信息弹窗
- **卡片悬浮**: 数据卡片支持悬浮效果

## ⚙️ 配置说明

### Vite 配置 (vite.config.ts)

```typescript
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core'],
      dts: 'src/auto-imports.d.ts',
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
```

### Mapbox 配置

在 `src/config/mapbox.ts` 中配置您的 Mapbox token：

```typescript
export const MapboxConfig = {
  MAPBOX_TOKEN: 'your_mapbox_token_here'
}
```

获取 token：[Mapbox 官方网站](https://www.mapbox.com/)

## 📊 数据格式

### 中国地图数据 (china-map.json)

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": { "name": "中国" },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [...]
      }
    }
  ]
}
```

### 地点数据格式

```javascript
{
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [lng, lat] },
      properties: {
        type: 'power' | 'storage',  // 电站或储能
        name: '地点名称'
      }
    }
  ]
}
```

## 🎨 样式说明

### 主题色彩

- **主色调**: `#00ddff` (亮青色) - 用于强调和高亮
- **背景色**: `#030816` (深蓝黑) - 主背景
- **次色调**: `#0b4065` (深蓝) - 地图填充色

### 玻璃拟态效果

使用 `backdrop-filter: blur(10px)` 实现毛玻璃效果，配合半透明背景创建现代化 UI

## 🐛 常见问题

### Q: SVG 图标在打包后显示 404？
**A:** 确保在 `src/views/home/index.vue` 中正确导入 SVG：
```typescript
import point1Svg from '@/assets/svg/point-1.svg'
import point2Svg from '@/assets/svg/point-2.svg'
```

### Q: Mapbox 地图不显示？
**A:** 
1. 检查是否正确配置了 Mapbox token
2. 确保网络连接正常
3. 检查浏览器控制台是否有错误信息

### Q: 数据更新后页面不刷新？
**A:** 使用 Vue 的 `ref()` 包装数据，并使用 `.value` 修改：
```javascript
const data = ref([...])
data.value = newData
```

## 📈 性能优化

- ✅ 使用本地 JSON 替代网络请求，减少网络延迟
- ✅ 导入 SVG 资源而非绝对路径引用
- ✅ 使用 Vite 的代码分割和 tree-shaking
- ✅ 启用 GZIP 压缩
- ✅ 使用 CDN 加速资源分发

## 🔐 环境变量

创建 `.env` 文件用于配置敏感信息：

```env
VITE_MAPBOX_TOKEN=your_mapbox_token_here
```

在代码中使用：
```typescript
const token = import.meta.env.VITE_MAPBOX_TOKEN
```

## 📦 依赖更新

定期检查依赖更新：

```bash
npm outdated
npm update
```

## 🚀 部署

### 部署到 Vercel

```bash
npm run build
```

上传 `dist` 目录到 Vercel

### 部署到 GitHub Pages

```bash
npm run build
```

将 `dist` 目录推送到仓库的 `gh-pages` 分支

### Docker 部署

```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📝 License

MIT License - 详见 [LICENSE](./LICENSE) 文件

## 👨‍💻 作者

**LionelSZ**
- GitHub: [@LionelSZ](https://github.com/LionelSZ)

## 📞 联系方式

- 📧 Email: your_email@example.com
- 💬 Issues: [GitHub Issues](https://github.com/LionelSZ/new-demo/issues)

## 📚 相关资源

- [Vue 3 官方文档](https://vuejs.org/)
- [Vite 官方文档](https://vitejs.dev/)
- [Mapbox GL 文档](https://docs.mapbox.com/mapbox-gl-js/)
- [TypeScript 文档](https://www.typescriptlang.org/)

## 🎯 后续计划

- [ ] 添加数据动态更新接口
- [ ] 实现用户认证和权限管理
- [ ] 添加图表数据可视化 (ECharts)
- [ ] 支持导出报告功能
- [ ] 国际化多语言支持
- [ ] 添加单元测试和 E2E 测试
- [ ] 性能监控和埋点分析

---

**最后更新**: 2026-03-11  
**版本**: v0.0.1