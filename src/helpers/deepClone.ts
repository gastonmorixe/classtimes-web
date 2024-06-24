export const deepClone = <T extends unknown>(object: T): T => {
  if (!object) return object
  return JSON.parse(JSON.stringify(object))
}
