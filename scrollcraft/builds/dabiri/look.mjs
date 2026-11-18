import { chromium } from 'playwright-core'
const OUT = process.argv[2]
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', headless: true })
for (const [n, w, h, m] of [['desk', 1440, 900, false], ['phone', 390, 844, true]]) {
  const c = await b.newContext({ viewport: { width: w, height: h }, isMobile: m, hasTouch: m })
  const p = await c.newPage()
  await p.goto('http://localhost:4521/', { waitUntil: 'load' }); await p.waitForTimeout(1500)
  for (const [sel, tag] of [['#floor', 'floor'], ['#services', 'services'], ['#counter', 'counter'], ['.foot', 'foot']]) {
    await p.evaluate((s) => document.querySelector(s).scrollIntoView({ block: s === '.foot' ? 'end' : 'start', behavior: 'instant' }), sel)
    if (sel === '#floor') await p.evaluate(() => scrollBy(0, innerHeight * 0.8))
    await p.waitForTimeout(1300)
    await p.screenshot({ path: `${OUT}/${n}-${tag}.png` })
  }
  await p.goto('http://localhost:4521/inventory', { waitUntil: 'load' }); await p.waitForTimeout(1200)
  await p.screenshot({ path: `${OUT}/${n}-inv-top.png` })
  await p.evaluate(() => scrollTo(0, document.body.scrollHeight)); await p.waitForTimeout(1000)
  await p.screenshot({ path: `${OUT}/${n}-inv-foot.png` })
  await c.close()
}
await b.close()
