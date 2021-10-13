
type FunctionalComponentWithProps<T = any, O = HTMLElement> = (props: T) => O;
type FunctionalComponentWithoutProps<O = HTMLElement> = () => O;

export type FunctionalComponent<T = null, O = HTMLElement> =
  T extends null
  ? FunctionalComponentWithoutProps<O>
  : FunctionalComponentWithProps<T, O>;

export type FC<I = null, O = HTMLElement> = FunctionalComponent<I, O>;

