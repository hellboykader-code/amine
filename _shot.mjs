import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args:['--use-gl=angle','--use-angle=swiftshader','--no-sandbox'] });
const p = await b.newPage({ viewport:{width:1280,height:820} });
await p.goto('http://127.0.0.1:4173/amine/', { waitUntil:'networkidle' });
await p.waitForTimeout(1500);
await p.screenshot({ path:'/home/user/amine/_nav.png' });
await b.close();
