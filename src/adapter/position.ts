import Yoga from 'yoga-layout-wasm/asm'

export const POSITION_ADAPTER = {
  relative: Yoga.POSITION_TYPE_RELATIVE,
  absolute: Yoga.POSITION_TYPE_ABSOLUTE
}

export const positionParam = (val: keyof typeof POSITION_ADAPTER) => [POSITION_ADAPTER[val]]
