export const empty = Object.defineProperties({}, {
  ARRAY: {
    value: Object.preventExtensions([]),
    writable: false,
    configurable: false,
    enumerable: true
  },
  OBJECT: {
    value: Object.preventExtensions({}),
    writable: false,
    configurable: false,
    enumerable: true
  },
  STRING: {
    value: '',
    writable: false,
    configurable: false,
    enumerable: true
  },
  NOOP: {
    value: () => {},
    writable: false,
    configurable: false,
    enumerable: true
  }
})

export const equipment = {
  "F": "truck-pickup",
  "R": "truck-moving",
  "V": "truck"
}
