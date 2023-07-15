/* eslint-disable @typescript-eslint/no-unsafe-return */
export const truncate = (str: string, len: number) => {
  return str.length > len ? `${str.substring(0, len - 3)}...` : str
}

export const timeout = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
export const truncateMiddle = (fullStr: string, strLen: number, separator: string) => {
  if (fullStr.length <= strLen) return fullStr

  separator = separator || '...'

  const sepLen = separator.length,
    charsToShow = strLen - sepLen,
    frontChars = Math.ceil(charsToShow / 2),
    backChars = Math.floor(charsToShow / 2)

  return fullStr.substr(0, frontChars) + separator + fullStr.substr(fullStr.length - backChars)
}

// ** Checks if an object is empty (returns boolean)
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
export const isObjEmpty = (obj: any) => Object.keys(obj).length === 0

// ** Returns K format from a number
export const kFormatter = (num: number) => (num > 999 ? `${(num / 1000).toFixed(1)}k` : num)

// ** Converts HTML to string
export const htmlToString = (html: any) => html.replace(/<\/?[^>]+(>|$)/g, '')
