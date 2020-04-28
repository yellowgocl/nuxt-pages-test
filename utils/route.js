export const basePath = (path) => {
  const patt = /\/(desktop|mobile)/
  return patt.test(path) ? path.replace(patt, '') : path
}
