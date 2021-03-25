
export type FuctionalComponent<T = {}, O = HTMLElement> = (props: T) => O;
export type FC<I = {}, O = HTMLElement> = FuctionalComponent<I, O>;

