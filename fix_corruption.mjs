import fs from 'fs';
import path from 'path';

const SRC_ASSETS = 'd:/TechnoSky_Official/inkKartLLC/frontend/src/assets';
const DEST_ASSETS = 'd:/next-js/inkKartLLC-WEB/assets';
const APP_DIR = 'd:/next-js/inkKartLLC-WEB/app';

// 1. Properly copy assets (Fix Image Corruption)
function copyAssets(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  
  fs.readdirSync(src).forEach(item => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    
    if (fs.statSync(srcPath).isDirectory()) {
      copyAssets(srcPath, destPath);
    } else {
      // Use copyFileSync to preserve binary data for images!
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

if (fs.existsSync(SRC_ASSETS)) {
  console.log('Restoring uncorrupted assets...');
  copyAssets(SRC_ASSETS, DEST_ASSETS);
  console.log('✅ Assets restored.');
}

// 2. Fix broken @/../ imports in nested blog routes
function fixNestedImports(dir) {
  fs.readdirSync(dir).forEach(item => {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      fixNestedImports(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('@/../') || content.includes('@/../../')) {
        content = content.replace(/@\/\.\.\/\.\.\//g, '@/');
        content = content.replace(/@\/\.\.\//g, '@/');
        fs.writeFileSync(fullPath, content);
        console.log(`✅ Fixed imports in ${item}`);
      }
    }
  });
}

console.log('Fixing nested imports in app/ directory...');
fixNestedImports(APP_DIR);
console.log('✅ All fixes applied!');
