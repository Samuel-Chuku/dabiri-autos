// Functional + visual checks the scroll harness does not cover.
// usage: node scrollcraft/builds/dabiri/check.mjs [baseUrl] [outDir]
import { chromium } from 'playwright-core'
import fs from 'node:fs'
import path from 'node:path'

const BASE = process.argv[2] || 'http://localhost:4520'
const OUT = path.resolve(process.argv[3] || 'scrollcraft/builds/dabiri/lab/check')
fs.mkdirSync(OUT, { recursive: true })
const CHROME = process.env.SCROLLCRAFT_CHROME || '/usr/bin/google-chrome'
const browser = await chromium.launch({ executablePath: CHROME, headless: true })
const report = []
const log = (...a) => { const s = a.join(' '); report.push(s); console.log(s) }

async function ctx(w, h, extra = {}) {
  const c = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, ...extra })
  await c.addInitScript(() => {
    Element.prototype.requestPointerLock = () => {}
    Element.prototype.setPointerCapture = () => {}
  })
  return c
}
async function page(c, url, name) {
  const p = await c.newPage()
  const errs = []
  p.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()) })
  p.on('pageerror', (e) => errs.push(String(e)))
  p.on('requestfailed', (r) => errs.push('FAILED ' + r.url()))
  p.on('response', (r) => { if (r.status() >= 400) errs.push(`${r.status()} ${r.url()}`) })
  await p.goto(BASE + url, { waitUntil: 'load', timeout: 60000 })
  await p.waitForTimeout(1500)
  const ov = await p.evaluate(() => document.documentElement.scrollWidth - innerWidth)
  log(`[${name}] ${url} horizontal overflow: ${ov}px`)
  p._errs = errs
  return p
}
const shot = (p, n, full = false) => p.screenshot({ path: path.join(OUT, n + '.png'), fullPage: full })
async function scrollTo(p, sel, block = 'start') {
  await p.evaluate(([s, b]) => document.querySelector(s).scrollIntoView({ block: b, behavior: 'instant' }), [sel, block])
  await p.waitForTimeout(1200)
}

for (const [label, w, h] of [['desk', 1440, 900], ['laptop', 1280, 720], ['tablet', 820, 1180], ['phone', 390, 844], ['compact', 360, 640]]) {
  const c = await ctx(w, h, ['desk','laptop'].includes(label) ? {} : { isMobile: true, hasTouch: true })
  // HOME
  const home = await page(c, '/', label)
  await shot(home, `${label}-home-0`)
  if (await home.isVisible('.bar__burger')) { await home.click('.bar__burger'); await home.waitForTimeout(250); await shot(home, `${label}-menu`); await home.keyboard.press('Escape'); await home.waitForTimeout(200) }
  const rail = await home.evaluate(() => { const r = document.querySelector('.floor__rail'); return r ? r.scrollWidth - innerWidth : null })
  log(`[${label}] floor rail overflow: ${rail}px (want > ${Math.round(w / 2)})`)
  await scrollTo(home, '.lot'); await shot(home, `${label}-lot`)
  await scrollTo(home, '.lot__side--a', 'center'); await shot(home, `${label}-lot-2`)
  await scrollTo(home, '#services'); await shot(home, `${label}-services`)
  await scrollTo(home, '#counter'); await shot(home, `${label}-counter`)
  const stats = await home.$$eval('.stats dd', (els) => els.map((e) => e.textContent))
  log(`[${label}] stats after entry: ${stats.join(' | ')}`)
  if (label !== 'desk' && label !== 'laptop') {
    const small = await home.evaluate(() => [...document.querySelectorAll('a,button,select,textarea')].filter((e) => { const r = e.getBoundingClientRect(); const cs = getComputedStyle(e); return r.width && r.height && cs.visibility !== 'hidden' && (r.height < 40 || r.width < 40) && !e.closest('.sr,.skip,figcaption') }).map((e) => (e.getAttribute('aria-label') || e.textContent).trim().slice(0, 24) + ' ' + Math.round(e.getBoundingClientRect().width) + 'x' + Math.round(e.getBoundingClientRect().height)))
    log(`[${label}] small tap targets on home: ${small.length ? small.join(' | ') : 'none'}`)
  }
  log(`[${label}] home errors: ${home._errs.length ? home._errs.join(' ; ') : 'none'}`)

  // INVENTORY + TAG FLOW
  const inv = await page(c, '/inventory', label)
  await shot(inv, `${label}-inventory`)
  await inv.click('.row:nth-child(1) .tagbtn')
  await inv.click('.row:nth-child(3) .tagbtn')
  await inv.waitForTimeout(400)
  const count = await inv.textContent('.vtag__count')
  log(`[${label}] tag count after tagging 2: ${count}`)
  await inv.click('.vtag__card'); await inv.waitForTimeout(300)
  await shot(inv, `${label}-tag-open`)
  const href = await inv.getAttribute('.vtag__panel a.btn', 'href')
  log(`[${label}] tag WhatsApp message: ${decodeURIComponent(href.split('text=')[1] || '').replace(/\n/g, ' / ')}`)
  await inv.keyboard.press('Escape')
  // filter: SUV only (phones open the filter panel first)
  if (await inv.isVisible('.filters__toggle')) { await inv.click('.filters__toggle'); await inv.waitForTimeout(200); await shot(inv, `${label}-filters-open`) }
  await inv.selectOption('.filters__panel .sel:nth-child(2) select', 'SUV'); await inv.waitForTimeout(300)
  const suv = await inv.$$eval('.row .label__name', (e) => e.map((x) => x.textContent))
  log(`[${label}] SUV filter -> ${suv.join(', ')}`)
  await inv.selectOption('.filters__panel .sel:nth-child(4) select', '1'); await inv.waitForTimeout(300)
  log(`[${label}] SUV + under 30M empty state: ${await inv.isVisible('.inv__empty')}`)
  await inv.click('.inv__empty .btn--ghost'); await inv.waitForTimeout(300)
  await inv.click('.row:nth-child(1) .textbtn'); await inv.waitForTimeout(500)
  await shot(inv, `${label}-details`)
  log(`[${label}] dialog open: ${await inv.evaluate(() => document.querySelector('dialog.sheet').open)}`)
  await inv.keyboard.press('Escape'); await inv.waitForTimeout(300)
  log(`[${label}] dialog closed by Esc: ${await inv.evaluate(() => !document.querySelector('dialog.sheet').open)}`)
  log(`[${label}] inventory errors: ${inv._errs.length ? inv._errs.join(' ; ') : 'none'}`)

  // CONTACT: tag persists across pages, reason + note compose the message
  const con = await page(c, '/contact', label)
  await shot(con, `${label}-contact`)
  await con.click('.chip:nth-child(3)')
  await con.fill('.ticket__note textarea', 'Can I come Saturday morning?')
  const chref = await con.getAttribute('.ticket a.btn', 'href')
  log(`[${label}] contact message: ${decodeURIComponent(chref.split('text=')[1] || '').replace(/\n/g, ' / ')}`)
  await scrollTo(con, '.ticket', 'center'); await shot(con, `${label}-contact-ticket`)
  log(`[${label}] contact errors: ${con._errs.length ? con._errs.join(' ; ') : 'none'}`)

  const nf = await page(c, '/nope', label)
  await shot(nf, `${label}-404`)
  await c.close()
}

// keyboard order on home (desktop)
{
  const c = await ctx(1440, 900)
  const p = await page(c, '/', 'kbd')
  const order = []
  for (let i = 0; i < 14; i++) {
    await p.keyboard.press('Tab')
    order.push(await p.evaluate(() => { const a = document.activeElement; return (a.getAttribute('aria-label') || a.textContent || a.tagName).trim().slice(0, 40) }))
  }
  log('[kbd] first 14 tab stops: ' + order.join(' | '))
  await c.close()
}

// reduced motion: everything present, rail scrollable
{
  const c = await ctx(1440, 900, { reducedMotion: 'reduce' })
  const p = await page(c, '/', 'reduced')
  await shot(p, 'reduced-home', true)
  await c.close()
}

fs.writeFileSync(path.join(OUT, 'report.txt'), report.join('\n'))
await browser.close()
