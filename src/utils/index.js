export function getImgUrl(src) {
    return new URL(`../assets/images/${src}`, import.meta.url).href;
  }