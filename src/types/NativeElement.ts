import { CSSProperties } from "./CSSProperties";

export interface NativeElement {
  id?: string;
  classList?: string[];
  style?: CSSProperties;
}
