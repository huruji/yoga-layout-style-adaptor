import Yoga from 'yoga-layout-wasm/asm'

export const OVERFLOW_ADAPTER = {
  'visible': Yoga.OVERFLOW_VISIBLE,
  'hidden': Yoga.OVERFLOW_HIDDEN,
  'scroll': Yoga.OVERFLOW_SCROLL,
}

export const overflowParam = (val: keyof typeof OVERFLOW_ADAPTER) => [OVERFLOW_ADAPTER[val]]
