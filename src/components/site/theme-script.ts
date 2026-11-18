/* Shared by the server layout (pre-paint script) and the client toggle. */
export const THEME_KEY = 'dabiri-theme'
export const THEME_COLORS = { dark: '#0d0b0b', light: '#f3efea' } as const

/* Runs before first paint: ?theme= in the URL (for previews, not saved), else
   the saved choice, else the device's preference. */
export const themeScript = `(function(){try{var q=location.search.match(/[?&]theme=(light|dark)/);if(q){document.documentElement.setAttribute('data-theme',q[1]);return}var t=localStorage.getItem('${THEME_KEY}');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.setAttribute('data-theme',t)}catch(e){document.documentElement.setAttribute('data-theme','dark')}})()`
