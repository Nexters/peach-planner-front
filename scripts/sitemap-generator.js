// https://blog.logrocket.com/build-sitemap-generator-nextjs/
const fs = require('fs');
const globby = require('globby');
function addPage(page) {
    const path = page.replace('pages', '').replace('.tsx', '');
    const route = path === '/index' ? '' : path;
    return `  <url>
    <loc>${`${process.env.PUBLIC_URL}${route}`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`;
}

async function generateSitemap() {
    // excludes Nextjs files and API routes.
    const pages = await globby([
        'pages/**/*{.tsx,.js,.mdx}',
        '!pages/_*.js',
        '!pages/api',
        '!pages/**/[id]*', // TODO:: dynamic page sitemap, https://cheatcode.co/tutorials/how-to-generate-a-dynamic-sitemap-with-next-js
        '!pages/**/[id]/**', // TODO:: dynamic page sitemap, https://cheatcode.co/tutorials/how-to-generate-a-dynamic-sitemap-with-next-js
    ]);
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(addPage).join('\n')}
  </urlset>`;
    fs.writeFileSync('public/sitemap.xml', sitemap);
}
generateSitemap();