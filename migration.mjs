import fs from 'fs';
import path from 'path';

const SRC_DIR = 'd:/TechnoSky_Official/inkKartLLC/frontend/src';
const DEST_DIR = 'd:/next-js/inkKartLLC-WEB';

// Folders to copy directly to the root of the Next.js app
const FOLDERS_TO_COPY = ['assets', 'components', 'context', 'data', 'redux', 'styles', 'theme', 'utils'];

// Route mapping for pages
const PAGE_ROUTES = {
  'AboutUs.jsx': 'about',
  'Accessibility.jsx': 'accessibility',
  'Blogs.jsx': 'blogs',
  'BrowsePrinters.jsx': 'browse-printers',
  'Cart.jsx': 'cart',
  'Checkout.jsx': 'checkout',
  'Contact.jsx': 'contact',
  'CookiePolicy.jsx': 'cookie-policy',
  'Disclaimer.jsx': 'disclaimer',
  'DoNotSell.jsx': 'do-not-sell',
  'FAQs.jsx': 'faqs',
  'ForgotPassword.jsx': 'forgot-password',
  'InkToner.jsx': 'ink-toner',
  'MyOrders.jsx': 'orders',
  'OrderDetails.jsx': 'order/[id]',
  'OrderSuccess.jsx': 'order-success',
  'PolicyHub.jsx': 'policies',
  'Printers.jsx': 'printers',
  'PrivacyPolicy.jsx': 'privacy-policy',
  'ProductDetails.jsx': 'product/[slug]',
  'Profile.jsx': 'profile',
  'RefundReturnPolicy.jsx': 'refund-return-policy',
  'ResetPassword.jsx': 'reset-password',
  'Settings.jsx': 'settings',
  'ShippingPolicy.jsx': 'shipping-policy',
  'SignIn.jsx': 'signin',
  'SignUp.jsx': 'signup',
  'TermsConditions.jsx': 'terms-conditions',
  'TrackOrder.jsx': 'track-order',
};

// Helper: Ensure directory exists
function ensureDirSync(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Helper: Process content (React Router -> Next.js, relative paths -> alias)
function processContent(content, isComponent = false) {
  let processed = content;
  
  // Replace React Router Link
  processed = processed.replace(/import\s+\{\s*Link\s*\}\s+from\s+['"]react-router-dom['"];?/g, "import Link from 'next/link';");
  processed = processed.replace(/<Link\s+([^>]*)to=/g, "<Link $1href=");
  
  // Replace useNavigate with useRouter
  processed = processed.replace(/import\s+\{\s*.*useNavigate.*\s*\}\s+from\s+['"]react-router-dom['"];?/g, "import { useRouter, useParams, usePathname } from 'next/navigation';");
  processed = processed.replace(/import\s+\{\s*.*useParams.*\s*\}\s+from\s+['"]react-router-dom['"];?/g, "import { useRouter, useParams, usePathname } from 'next/navigation';");
  processed = processed.replace(/import\s+\{\s*.*useLocation.*\s*\}\s+from\s+['"]react-router-dom['"];?/g, "import { useRouter, useParams, usePathname } from 'next/navigation';");
  processed = processed.replace(/const\s+(\w+)\s*=\s*useNavigate\(\)/g, "const $1 = useRouter()");
  processed = processed.replace(/const\s+location\s*=\s*useLocation\(\)/g, "const pathname = usePathname()");
  processed = processed.replace(/location\.pathname/g, "pathname");
  
  // Fix relative imports (assuming we set up alias @/ -> DEST_DIR root)
  // For pages going from src/pages/X.jsx to app/X/page.jsx
  processed = processed.replace(/(['"])\.\.\//g, "$1@/");
  processed = processed.replace(/(['"])\.\.\/\.\.\//g, "$1@/");
  
  // Always add "use client" for safety in this migration, unless it's a pure util
  if ((processed.includes('useState') || processed.includes('useEffect') || processed.includes('useRouter') || processed.includes('useDispatch') || processed.includes('onClick')) && !processed.includes('"use client"') && !processed.includes("'use client'")) {
    processed = `"use client";\n\n` + processed;
  }
  
  return processed;
}

// 1. Copy utility folders
console.log("Copying components and utility folders...");
FOLDERS_TO_COPY.forEach(folder => {
  const srcFolderPath = path.join(SRC_DIR, folder);
  const destFolderPath = path.join(DEST_DIR, folder);
  
  if (fs.existsSync(srcFolderPath)) {
    // Recursive copy
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
        if (src.endsWith('.jsx') || src.endsWith('.js')) {
            content = processContent(content, true);
        }
        fs.writeFileSync(dest, content);
      }
    };
    copyRecursiveSync(srcFolderPath, destFolderPath);
    console.log(`✅ Copied & Processed ${folder}/`);
  }
});

// 2. Process Pages into App Router
console.log("\nMigrating Pages to Next.js App Router...");
const pagesDir = path.join(SRC_DIR, 'pages');

if (fs.existsSync(pagesDir)) {
  const files = fs.readdirSync(pagesDir);
  
  files.forEach(file => {
    // Skip Home.jsx as we manually built it, and skip directories for now
    if (file === 'Home.jsx' || fs.statSync(path.join(pagesDir, file)).isDirectory()) return;
    
    if (file.endsWith('.jsx')) {
      const routeName = PAGE_ROUTES[file];
      if (routeName) {
        const destRouteDir = path.join(DEST_DIR, 'app', routeName);
        ensureDirSync(destRouteDir);
        
        let content = fs.readFileSync(path.join(pagesDir, file), 'utf8');
        content = processContent(content);
        
        // Write the page.jsx
        fs.writeFileSync(path.join(destRouteDir, 'page.jsx'), content);
        console.log(`✅ Migrated ${file} -> app/${routeName}/page.jsx`);
        
        // Check for corresponding CSS file
        const cssFile = file.replace('.jsx', '.css');
        if (fs.existsSync(path.join(pagesDir, cssFile))) {
          const cssContent = fs.readFileSync(path.join(pagesDir, cssFile), 'utf8');
          fs.writeFileSync(path.join(destRouteDir, cssFile), cssContent);
          console.log(`   🎨 Migrated ${cssFile}`);
        }
      }
    }
  });
}

// 3. Migrate Blog pages
const blogsDir = path.join(SRC_DIR, 'pages', 'blogs');
if (fs.existsSync(blogsDir)) {
  const blogFiles = fs.readdirSync(blogsDir);
  blogFiles.forEach(file => {
    if (file.endsWith('.jsx')) {
      const slug = file.replace('.jsx', '').toLowerCase().replace(/([a-z])([A-Z])/g, '$1-$2'); // Basic kebab case
      const destRouteDir = path.join(DEST_DIR, 'app', 'blogs', slug);
      ensureDirSync(destRouteDir);
      
      let content = fs.readFileSync(path.join(blogsDir, file), 'utf8');
      content = processContent(content);
      
      fs.writeFileSync(path.join(destRouteDir, 'page.jsx'), content);
      console.log(`✅ Migrated Blog ${file} -> app/blogs/${slug}/page.jsx`);
      
      const cssFile = file.replace('.jsx', '.css');
      if (fs.existsSync(path.join(blogsDir, cssFile))) {
        const cssContent = fs.readFileSync(path.join(blogsDir, cssFile), 'utf8');
        fs.writeFileSync(path.join(destRouteDir, cssFile), cssContent);
      }
    }
  });
}

console.log("\n🚀 Migration Script Completed! Run `npm run dev` to see the changes.");
