import fs from 'fs';
import path from 'path';

const blogsDir = 'd:\\next-js\\inkKartLLC-WEB\\app\\blogs';

const subdirs = fs.readdirSync(blogsDir).filter(f => fs.statSync(path.join(blogsDir, f)).isDirectory());

for (const dir of subdirs) {
  const pagePath = path.join(blogsDir, dir, 'page.jsx');
  if (fs.existsSync(pagePath)) {
    console.log(`Fixing page: ${pagePath}`);
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // 1. Replace CSS import
    content = content.replace("import './BlogGuide.css';", "import '@/styles/BlogGuide.css';");
    content = content.replace('import "./BlogGuide.css";', "import '@/styles/BlogGuide.css';");
    
    // 2. Replace hardcoded blue colors in icons
    content = content.replace(/color="#0096D6"/g, 'color="#D9A520"');
    content = content.replace(/color='#0096D6'/g, 'color="#D9A520"');
    
    fs.writeFileSync(pagePath, content, 'utf8');
  }
}
console.log('All blog article pages successfully fixed!');
