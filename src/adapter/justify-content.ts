import Yoga from 'yoga-layout-wasm/asm'

export const JUSTIFYCONTENT_ADAPTER = {
  'center': Yoga.JUSTIFY_CENTER,
  'flex-start': Yoga.JUSTIFY_FLEX_START,
  'flex-end': Yoga.JUSTIFY_FLEX_END
}

export const justifyContentParam = (val: keyof typeof JUSTIFYCONTENT_ADAPTER) => [JUSTIFYCONTENT_ADAPTER[val]]
