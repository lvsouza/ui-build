import { CSSProperties } from "./CSSProperties";

export interface NativeElement {
  id?: string;
  name?: string;
  classList: string[];
  style?: CSSProperties;
}
