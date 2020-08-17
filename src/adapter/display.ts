import Yoga from 'yoga-layout-wasm/asm'

export const DISPLAY_ADAPTER = {
  flex: Yoga.DISPLAY_FLEX,
  none: Yoga.DISPLAY_NONE
}

export const displayParam = (val: keyof typeof DISPLAY_ADAPTER) => [DISPLAY_ADAPTER[val]]
