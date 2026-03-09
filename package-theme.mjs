import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = __dirname
const DIST = path.join(ROOT, 'dist')
const OUT  = path.join(ROOT, 'theme')

// ── 1. 检查 dist/ 是否存在 ────────────────────────
if (!fs.existsSync(DIST)) {
  console.error('❌  dist/ 不存在，请先运行 npm run build')
  process.exit(1)
}

// ── 2. 清空并重建 theme/ ──────────────────────────
if (fs.existsSync(OUT)) fs.rmSync(OUT, { recursive: true })
fs.mkdirSync(OUT)

// ── 3. 复制 dist/ 所有内容到 theme/ ──────────────
function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true })
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name)
    const d = path.join(dest, entry.name)
    entry.isDirectory() ? copyDir(s, d) : fs.copyFileSync(s, d)
  }
}
copyDir(DIST, OUT)

// ── 4. 写入 WordPress 主题必要文件 ───────────────
fs.writeFileSync(path.join(OUT, 'style.css'), `/*
Theme Name: Zenmo Law
Theme URI: https://zenmolaw.com
Author: Global Focus Law Group PLLC
Description: Zenmo Law - React SPA Theme
Version: 1.0.0
*/
`)

fs.writeFileSync(path.join(OUT, 'index.php'), `<?php
// Zenmo Law - React SPA
// Required by WordPress. All routing is handled by functions.php.
`)

fs.writeFileSync(path.join(OUT, 'functions.php'), `<?php
// Zenmo Law - React SPA Theme

remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'rsd_link');

function zenmo_enqueue_assets() {
    $theme_dir   = get_template_directory_uri();
    $assets_path = get_template_directory() . '/assets/';

    if (is_dir($assets_path)) {
        foreach (scandir($assets_path) as $file) {
            if (str_ends_with($file, '.css')) {
                wp_enqueue_style('zenmo-main', $theme_dir . '/assets/' . $file, [], null);
            }
            if (str_ends_with($file, '.js') && str_contains($file, 'index')) {
                wp_enqueue_script('zenmo-main', $theme_dir . '/assets/' . $file, [], null, true);
            }
        }
    }
}
add_action('wp_enqueue_scripts', 'zenmo_enqueue_assets');

function zenmo_load_react() {
    $index = get_template_directory() . '/index.html';
    if (file_exists($index)) {
        echo file_get_contents($index);
        exit;
    }
}
add_action('template_redirect', 'zenmo_load_react');
`)

// ── 5. 完成 ───────────────────────────────────────
console.log('✅  打包完成！')
console.log('📁  输出目录：theme/')
console.log('👉  将 theme/ 文件夹压缩为 zenmo-law.zip 后上传到 WordPress')
