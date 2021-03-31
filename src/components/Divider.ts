import { NativeElement } from "../types";

interface DividerProps extends NativeElement { }

export function Divider(): HTMLHRElement;
export function Divider(props?: DividerProps): HTMLHRElement;
export function Divider(props?: DividerProps): HTMLHRElement {
  const element = document.createElement('hr');

  const load = () => {
    if (props?.classList) {
      element.classList.add(...props.classList);
    }

    if (props?.style) {
      Object.assign(element.style, props?.style);
    }
  }

  load();

  return element;
}
