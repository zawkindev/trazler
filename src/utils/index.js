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

export function formatDate(date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

  const month = months[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()

  const formattedDate = `${month} ${day}, ${year}`

  return formattedDate
}
