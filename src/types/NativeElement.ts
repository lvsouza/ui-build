import { CSSProperties } from "./CSSProperties";
import { MutableRefObject } from "./MutableRefObject";

export interface NativeElement<T> {
  id?: string;
  classList?: string[];
  style?: CSSProperties;
  ref?: MutableRefObject<T | null | undefined>;
}
