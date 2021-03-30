
type FuctionalComponentWithProps<T = any, O = HTMLElement> = (props: T) => O;
type FuctionalComponentWithoutProps<O = HTMLElement> = () => O;

export type FuctionalComponent<T = null, O = HTMLElement> =
  T extends null
  ? FuctionalComponentWithoutProps<O>
  : FuctionalComponentWithProps<T, O>;

export type FC<I = null, O = HTMLElement> = FuctionalComponent<I, O>;

