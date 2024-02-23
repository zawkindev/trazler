export function getImgUrl(src) {
  return new URL(`../assets/images/${src}`, import.meta.url).href
}

export function generateBreadcrumbData(items) {
  const array = []

  items.forEach((element, index) => {
    array.push(element)
    if (!(index === 1 || index === items.length - 1)) {
      array.push(">")
    }
  })

  return array
}
