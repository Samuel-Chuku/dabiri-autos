# Dabiri Autos · BRIEF

**Self-authored under explicit creative delegation.** Samuel, 2026-11-17, on
questions 1 to 8: "Just do something i can look at... Something that fits the
business and has appeal to any visitors. Premium feel, premium experience."
Everything below marked *Authored* is my decision under that delegation. Items
marked *Samuel* are his words.

## Scope (Samuel)

"every page, every animation, everything. We need a complete overhaul. key
details, contact info, address, company details can remain. But overhaul
everything else."

Pages: home, `/inventory`, `/contact`, 404. Framework stays Next.js 14 static
export (`output: 'export'`), Tailwind stays available.

## Facts that are kept verbatim (evidence: current site source)

- Dabiri Autos Limited, RC 8313006, registered Nigerian dealership.
- 14 Olatunde Onimole St, Surulere, Lagos 100011.
- Phone and WhatsApp: +234 810 248 7687. Instagram: @dabiri_autos.
- Hours: Monday to Saturday, 9:00 AM to 6:00 PM.
- Services: iBUY, iSELL, iSWAP, car financing, vehicle inspection (150-point),
  documentation, after-sales, 24/7 support.
- Stats (Samuel: "stats are real"): 363+ cars sold, 8,655+ followers, 100%
  verified vehicles.
- Inventory (Samuel: "Use those for now"): the five listings in
  `src/data/vehicles.ts`, names, prices and specs unchanged.

## Evidence vs assumption

- **Evidence.** The real lot has a red painted floor with green lane stripes,
  a black shade canopy, a blue-and-yellow neighbouring building. The logo is a
  heavy italic wordmark in black and red with a speedometer "D". The studio
  turntable (`public/frames/scene1`, 169 frames) is a black Hyundai Sonata under
  a red key light on a wet floor.
- **Corrected identities.** `car-mercedes.png` is a black Mercedes GLE, not a
  C300; `hero_benzOut.png` is the white Mercedes C-Class. `car-landcruiser.png`
  is a Toyota Highlander. `car-honda.png` is a Honda Accord. The listing images
  are remapped so each name shows its own body: C300 → `hero_benzOut`,
  GLE 450 → `car-mercedes`. The "Toyota Corolla 2024" listing has no matching
  photo on file; it is shown with an honest "photo on request" plate instead of
  a Honda labelled as a Toyota.
- **Uncertain, flagged to Samuel.** The Camry photo is an older generation than
  "2024". The C300 photo body looks older than 2024. Kept as listed, per
  "Use those for now".
- **Assumption.** Visitors are Lagos buyers on phones first, reached mostly
  through Instagram and WhatsApp. The real conversion is a WhatsApp chat.

## The eight topics

1. **Vibe** (*Authored*): night showroom, Lagos lot, honest metal. References:
   the roller-shutter of a Lagos shopfront at opening time; the lit
   turntable of a motor-show stand; a museum object label.
2. **Journey** (*Authored*): the shutter goes up on one car; the real lot in
   Surulere and its numbers; walk the floor car by car; sit inside; watch one
   car turn all the way round under inspection; what we do (buy, sell, swap,
   finance, papers); the tag you built becomes a WhatsApp message.
3. **Energy** (*Authored*): bright open, calm documentary, brisk browse, near
   silence, the peak, steady, a quiet close that holds.
4. **Feeling and the one moment** (*Authored*): see the curve and peak below.
5. **The thing no other site does** (*Authored*): every car you tag on any page
   is clipped to a valet tag that follows you around the site, and at the end
   the tag tears off as a ready-written WhatsApp message to the dealer.
6. **Range** (*Samuel*: "Premium feel, premium experience."): premium, low-key
   cinematic. Off-black and Dabiri red, one accent. Not cream-and-brass, no
   purple, no glow.
7. **One world or scenes** (*Authored*): distinct scenes. The studio and the
   real lot are two places on purpose: the polish, then the proof.
8. **Assets** (*Samuel*: "I have no new images at the moment... preferrably use
   real assets... use the same stuffs there for now"): real lot photos, the
   turntable sequence, the logo. Generation budget: "no more than 100
   credits". Spent only on the hero: one empty studio plate and one cutout of
   the listed C300, derived from the real lot photo.

## Primary action (Authored, Samuel: "Use whatever blends")

**Chat on WhatsApp.** One label, everywhere. With a tag, the message carries the
tagged cars.

## Grammar (Authored)

**Gallery / catalog.** A dealership's real question is "what are the options",
and a car is an object with facts. Labels are facts, never pitch. Inventory is
the index of objects. Contact is an inquiry plate typeset like a label.

## Feeling curve (home)

Re-ordered once during scoring (services moved ahead of the interior) so no two
flow-family acts sit side by side and the peak runs straight into the ending.

```
1  Anticipation   the shutter rolls up off a white C300 in a dark studio, the lights come up, label already reading facts
2  Trust          the real lot in Surulere, red floor, real numbers ticking in once
3  Appetite       the floor: five cars travelling sideways, each labelled, each taggable
4  Confidence     what happens on the lot, set as a ledger: buy, sell, swap, finance, papers, after
5  Intimacy       near silence: one interior, one small line, nothing moving but a slow wipe
6  Awe (PEAK)     a car turns a full circle under the visitor's hand while the inspection points tick on
7  Resolve        the tag laid out on the counter with your cars on it, one button, address beside it, holding
```

## Score

| Beat | Device | Span (vh) | Why |
|---|---|---|---|
| Anticipation | `pin` + bespoke planes on `--sc-p` (plate, word, car, haze, shutter) | 1.9 | A shutter going up is a change you cause; layered planes give depth |
| Trust | `flow` + `count` (real figures, fire once) | natural | Facts, not choreography |
| Appetite | `pan` + `tilt` + staggered settle | 3.4 | Lateral travel reads as options |
| Confidence | `flow` + `in` ledger | natural | Administrative, compressed |
| Intimacy | `reveal` (wipe up) + one late cue | flow | Authored quiet before the peak |
| Awe | `pin` + `sequence` (169 real turntable frames) + scrubbed `count` + `--sc-p` checks and sweep | 4.2 (largest) | The one moment |
| Resolve | `flow`, the counter ticket (signature) | natural | Holds, ends on an action |

## Feel check (cold scroll of the final build, then diffed)

```
1  Anticipation   felt: anticipation, then "lights on" as the shutter clears        match
2  Trust          felt: grounded (real photos, real numbers)                        match
3  Appetite       felt: browsing, wanting to tag                                    match
4  Confidence     felt: orderly, a bit plain                                         match (plain is intended)
5  Intimacy       felt: quiet                                                        match
6  Awe            felt: the strongest change on the page; the count and ticks land   match
7  Resolve        felt: arrival, the ticket is the obvious last move                match
```

Changes made from the first pass: peak span raised 3.8 → 4.2 so it clearly
out-spans the floor rail (3.4); the floating tag moved off the mid-right edge
(it covered rail cards and the hero car); on phones the hero label moved into
the copy stack (it collided with the headline at 360×640) and the car stopped
cropping its nose; a column scrim replaced a radial one under the hero copy
(3.0:1 → clears 4.5:1).

## The peak

> "I scrolled and the car turned all the way round in the showroom light, and
> the inspection points came on one by one as it turned."

Lives in act 6. Largest span on the page (4.2). Act 5 is the authored near-silence
before it: a single interior image and one line, deliberately quiet, so the
harness should not flag it as dead scroll.

## Tell-someone sentence

> It's the site where the shutter rolls up on the car, you walk the floor
> tagging the ones you like, and your tag turns into a WhatsApp message to the
> dealer.

## Authored silence

Act 5 (interior). Low motion by design, one wipe, one line.

## Generation spend

Balance 443 → 401: **42 credits of the 100 allowed.** One plate (14), one
lost job (14, billed but the download failed in the stock script), one C300
re-light from the real lot photo for the hero cutout (14). Originals in `gen/`.
