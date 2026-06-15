import fs from 'fs';
import path from 'path';

const DIRS = [
  'd:/next-js/inkKartLLC-WEB/app',
  'd:/next-js/inkKartLLC-WEB/components'
];

function processContent(content, isCss) {
  let newContent = content;

  // 1. Universal Typography Replacement
  newContent = newContent.replace(/['"]?Outfit['"]?/gi, "'DM Sans'");

  // 2. CSS File Replacements
  if (isCss) {
    newContent = newContent.replace(/#0096D6/gi, 'var(--accent)');
    newContent = newContent.replace(/#003087/gi, 'var(--primary)');
    newContent = newContent.replace(/#4A6FA5/gi, 'var(--text-muted)');
    
    newContent = newContent.replace(/background:\s*#ffffff/gi, 'background: var(--bg)');
    newContent = newContent.replace(/background:\s*#fff\b/gi, 'background: var(--bg)');
    newContent = newContent.replace(/background-color:\s*#ffffff/gi, 'background-color: var(--bg)');
    newContent = newContent.replace(/background-color:\s*#fff\b/gi, 'background-color: var(--bg)');
    
    newContent = newContent.replace(/color:\s*#111111/gi, 'color: var(--primary)');
    newContent = newContent.replace(/color:\s*#111\b/gi, 'color: var(--primary)');
    
    newContent = newContent.replace(/#f0f0f0/gi, 'var(--border)');
    newContent = newContent.replace(/#eee\b/gi, 'var(--border)');
  } 
  // 3. JSX Tailwind Replacements
  else {
    newContent = newContent.replace(/bg-\[\#0096D6\]/gi, 'bg-[var(--accent)]');
    newContent = newContent.replace(/text-\[\#0096D6\]/gi, 'text-[var(--accent)]');
    newContent = newContent.replace(/border-\[\#0096D6\]/gi, 'border-[var(--accent)]');

    newContent = newContent.replace(/bg-\[\#003087\]/gi, 'bg-[var(--primary)]');
    newContent = newContent.replace(/text-\[\#003087\]/gi, 'text-[var(--primary)]');
    newContent = newContent.replace(/border-\[\#003087\]/gi, 'border-[var(--primary)]');

    newContent = newContent.replace(/text-\[\#4A6FA5\]/gi, 'text-[var(--text-muted)]');
    
    newContent = newContent.replace(/text-\[\#111111\]/gi, 'text-[var(--primary)]');
    newContent = newContent.replace(/text-\[\#111\]/gi, 'text-[var(--primary)]');
    
    // Special Tailwind Backgrounds
    newContent = newContent.replace(/\bbg-white\b/gi, 'bg-[var(--bg)]');
    newContent = newContent.replace(/\bbg-[#ffffff]\b/gi, 'bg-[var(--bg)]');
    newContent = newContent.replace(/\bbg-[#fff]\b/gi, 'bg-[var(--bg)]');
  }

  return newContent;
}

function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(item => {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      scanDir(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx') || fullPath.endsWith('.css')) {
      // Skip the globals.css since it defines the variables!
      if (path.basename(fullPath) === 'globals.css') return;

      const original = fs.readFileSync(fullPath, 'utf8');
      const processed = processContent(original, fullPath.endsWith('.css'));
      if (original !== processed) {
        fs.writeFileSync(fullPath, processed);
        console.log(`✅ Themed: ${path.basename(fullPath)}`);
      }
    }
  });
}

console.log('Migrating entire UI to InkjetProGuide cream/gold aesthetic...');
DIRS.forEach(dir => scanDir(dir));
console.log('✅ UI Migration Complete!');
