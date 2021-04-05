import { NativeElement } from "../types";

interface DividerProps extends NativeElement<HTMLHRElement> { }

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

    if (props?.id) {
      element.id = props.id;
    }
  }

  load();

  // Load the element reference
  if (props?.ref) {
    props.ref.value = element;
  }

  return element;
}
