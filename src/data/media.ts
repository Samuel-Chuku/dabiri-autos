/* Every lot photo ships at 1400w plus an 800w copy for phones. */
export const srcSet = (src: string) => `${src.replace(/\.webp$/, '-800.webp')} 800w, ${src} 1400w`
