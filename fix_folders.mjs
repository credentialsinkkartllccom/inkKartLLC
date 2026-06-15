import fs from 'fs';
import path from 'path';

const SRC_DIR = 'd:/TechnoSky_Official/inkKartLLC/frontend/src';
const DEST_DIR = 'd:/next-js/inkKartLLC-WEB';

const FOLDERS_TO_COPY = ['components', 'context', 'redux', 'utils', 'assets', 'data', 'theme', 'styles'];

function ensureDirSync(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function processComponentContent(content) {
  let processed = content;
  // ONLY replace react-router-dom Links and useNavigate, DO NOT touch relative imports (../)
  processed = processed.replace(/import\s+\{\s*Link\s*\}\s+from\s+['"]react-router-dom['"];?/g, "import Link from 'next/link';");
  processed = processed.replace(/<Link\s+([^>]*)to=/g, "<Link $1href=");
  
  processed = processed.replace(/import\s+\{\s*.*useNavigate.*\s*\}\s+from\s+['"]react-router-dom['"];?/g, "import { useRouter, useParams, usePathname } from 'next/navigation';");
  processed = processed.replace(/import\s+\{\s*.*useParams.*\s*\}\s+from\s+['"]react-router-dom['"];?/g, "import { useRouter, useParams, usePathname } from 'next/navigation';");
  processed = processed.replace(/import\s+\{\s*.*useLocation.*\s*\}\s+from\s+['"]react-router-dom['"];?/g, "import { useRouter, useParams, usePathname } from 'next/navigation';");
  processed = processed.replace(/const\s+(\w+)\s*=\s*useNavigate\(\)/g, "const $1 = useRouter()");
  processed = processed.replace(/const\s+location\s*=\s*useLocation\(\)/g, "const pathname = usePathname()");
  processed = processed.replace(/location\.pathname/g, "pathname");

  if ((processed.includes('useState') || processed.includes('useEffect') || processed.includes('useRouter') || processed.includes('useDispatch') || processed.includes('onClick')) && !processed.includes('"use client"') && !processed.includes("'use client'")) {
    processed = `"use client";\n\n` + processed;
  }
  
  return processed;
}

FOLDERS_TO_COPY.forEach(folder => {
  const srcFolderPath = path.join(SRC_DIR, folder);
  const destFolderPath = path.join(DEST_DIR, folder);
  
  if (fs.existsSync(srcFolderPath)) {
    const copyRecursiveSync = (src, dest) => {
      const exists = fs.existsSync(src);
      const stats = exists && fs.statSync(src);
      const isDirectory = exists && stats.isDirectory();
      if (isDirectory) {
        ensureDirSync(dest);
        fs.readdirSync(src).forEach(childItemName => {
          copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
        });
      } else {
        let content = fs.readFileSync(src, 'utf8');
        // Only process JSX/JS for react-router fixes, leaving relative imports intact
        if (src.endsWith('.jsx') || src.endsWith('.js')) {
            content = processComponentContent(content);
        }
        fs.writeFileSync(dest, content);
      }
    };
    copyRecursiveSync(srcFolderPath, destFolderPath);
    console.log(`✅ Restored ${folder}/ perfectly.`);
  }
});

console.log("Fix complete! Run `npm run dev` again.");
