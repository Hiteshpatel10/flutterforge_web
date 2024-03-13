export async function GET({ fetch, setHeaders })  {
    setHeaders({
    'Content-Type': 'application/xml'
    });
    
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
          xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        
    <url>
      <loc>https://flutterforge.online/</loc>
      <lastmod>2024-03-13T18:03:33+00:00</lastmod>
      <priority>1.00</priority>
    </url>
    <url>
      <loc>https://flutterforge.online/components</loc>
      <lastmod>2024-03-13T18:03:33+00:00</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://flutterforge.online/components/blur-container</loc>
      <lastmod>2024-03-13T18:03:33+00:00</lastmod>
      <priority>0.64</priority>
    </url>
    <url>
      <loc>https://flutterforge.online/components/marquee</loc>
      <lastmod>2024-03-13T18:03:33+00:00</lastmod>
      <priority>0.64</priority>
    </url>
    <url>
      <loc>https://flutterforge.online/components/snackbar</loc>
      <lastmod>2024-03-13T18:03:33+00:00</lastmod>
      <priority>0.64</priority>
    </url>
    <url>
      <loc>https://flutterforge.online/components/%20counting-text</loc>
      <lastmod>2024-03-13T18:03:33+00:00</lastmod>
      <priority>0.64</priority>
    </url>
    <url>
      <loc>https://flutterforge.online/components/date-select-drawer</loc>
      <lastmod>2024-03-13T18:03:33+00:00</lastmod>
      <priority>0.64</priority>
    </url>
    <url>
      <loc>https://flutterforge.online/components/onboarding</loc>
      <lastmod>2024-03-13T18:03:33+00:00</lastmod>
      <priority>0.64</priority>
    </url>
    <url>
      <loc>https://flutterforge.online/components/tab-bar</loc>
      <lastmod>2024-03-13T18:03:33+00:00</lastmod>
      <priority>0.64</priority>
    </url>
    <url>
      <loc>https://flutterforge.online/components/vertical-tab-bar</loc>
      <lastmod>2024-03-13T18:03:33+00:00</lastmod>
      <priority>0.64</priority>
    </url>
    <url>
      <loc>https://flutterforge.online/components/social-login</loc>
      <lastmod>2024-03-13T18:03:33+00:00</lastmod>
      <priority>0.64</priority>
    </url>
    
    
    </urlset>`;
    return new Response(sitemap);
    }
    