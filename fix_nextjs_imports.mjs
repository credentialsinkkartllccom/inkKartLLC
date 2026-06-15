import fs from 'fs';
import path from 'path';

const DIRS = ['d:/next-js/inkKartLLC-WEB/app', 'd:/next-js/inkKartLLC-WEB/components', 'd:/next-js/inkKartLLC-WEB/context'];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Remove all react-router-dom imports completely
  content = content.replace(/import\s+{[^}]*}\s+from\s+['"]react-router-dom['"];?\n?/g, '');
  content = content.replace(/import\s+\w+\s+from\s+['"]react-router-dom['"];?\n?/g, '');

  // 2. Add next/link if <Link is used
  if (content.match(/<Link\b/)) {
    if (!content.includes("import Link from 'next/link'") && !content.includes('import Link from "next/link"')) {
      // Find the first import statement and insert before it, or at top
      const importMatch = content.match(/import\s/);
      if (importMatch) {
        content = content.replace(/import\s/, "import Link from 'next/link';\nimport ");
      } else {
        content = "import Link from 'next/link';\n" + content;
      }
    }
  }

  // 3. Add next/navigation hooks if used
  const usesRouter = content.match(/\buseRouter\b/);
  const usesPathname = content.match(/\busePathname\b/);
  const usesSearchParams = content.match(/\buseSearchParams\b/);
  
  if (usesRouter || usesPathname || usesSearchParams) {
    const navImports = [];
    if (usesRouter) navImports.push('useRouter');
    if (usesPathname) navImports.push('usePathname');
    if (usesSearchParams) navImports.push('useSearchParams');

    const navImportString = `import { ${navImports.join(', ')} } from 'next/navigation';`;
    
    // Check if next/navigation is already imported
    const existingNavImport = content.match(/import\s+{[^}]*}\s+from\s+['"]next\/navigation['"];?/);
    
    if (existingNavImport) {
        // Just replace the existing one with the complete one we built
        content = content.replace(existingNavImport[0], navImportString);
    } else {
        // Inject it
        const importMatch = content.match(/import\s/);
        if (importMatch) {
            content = content.replace(/import\s/, `${navImportString}\nimport `);
        } else {
            content = `${navImportString}\n` + content;
        }
    }
  }

  // 4. Change remaining `<NavLink` to `<Link` just in case
  content = content.replace(/<NavLink\b/g, '<Link');
  content = content.replace(/<\/NavLink>/g, '</Link>');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed imports in ${path.basename(filePath)}`);
  }
}

function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(item => {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      scanDir(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
      processFile(fullPath);
    }
  });
}

console.log('Scanning project for broken React Router imports...');
DIRS.forEach(dir => scanDir(dir));
console.log('✅ Fix complete! All Next.js routing components injected.');
