import { CSSProperties } from "./CSSProperties";

export interface NativeElement<T> {
  id?: string;
  classList?: string[];
  style?: CSSProperties;
}
