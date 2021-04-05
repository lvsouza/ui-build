import { NativeElement } from "../types";

interface InputProps extends NativeElement<HTMLInputElement> {
  type?: 'text' | 'number' | 'date' | 'color' | 'time' | 'checkbox' | 'radio' | 'range' | string;
  children?: Node | Node[];
  value?: string;
}

export function Input(): HTMLInputElement;
export function Input(props?: InputProps): HTMLInputElement;
export function Input(props?: InputProps) {
  const element = document.createElement('input');

  const load = () => {
    if (props?.children) {

      if (Array.isArray(props.children)) {
        props.children.forEach(node => element.appendChild(node));
      } else {
        element.appendChild(props.children);
      }
    }

    if (props?.value) {
      element.value = props.value;
    }

    if (props?.type) {
      element.type = props.type;
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

  // Load the element reference
  if (props.ref) {
    props.ref.value = element;
  }

  return element;
}
