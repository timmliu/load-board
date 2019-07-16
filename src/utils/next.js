export default function next(arr = [], current) {
  if (arr.length <= 1) throw new Error('array length must be 2 or greater')
  if (!arr.includes(current)) throw new Error('current must exist within array')
  const matchIndex = arr.findIndex(v => v === current)
  if (arr.length - 1 >= matchIndex + 1) return arr[matchIndex + 1];
  return arr[0];
}
