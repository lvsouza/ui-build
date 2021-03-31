import { NativeElement } from "../types/NativeElement";

interface ButtonProps extends NativeElement {
  children?: Node | Node[];
}

export function Button(): HTMLButtonElement;
export function Button(props?: ButtonProps): HTMLButtonElement;
export function Button(props?: ButtonProps): HTMLButtonElement {
  const element = document.createElement('button');

  const load = () => {
    if (props?.children) {
      if (Array.isArray(props.children)) {
        props.children.forEach(node => element.appendChild(node));
      } else {
        element.appendChild(props.children);
      }
    }

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

  return element;
}
