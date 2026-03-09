/**
 * 返回正确的资源路径
 * 开发环境：/images/... 
 * 生产环境（WordPress）：/wp-content/themes/zenmo-law/images/...
 */
const base = import.meta.env.BASE_URL  // vite.config.js 中的 base 值

export function assetUrl(path) {
  // 去掉开头的 /，拼上 base
  return base + path.replace(/^\//, '')
}
