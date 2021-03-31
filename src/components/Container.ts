import { NativeElement } from "../types";

interface ContainerProps extends NativeElement {
  children?: Node | Node[];
}

export function Container(): HTMLDivElement;
export function Container(props?: ContainerProps): HTMLDivElement;
export function Container(props?: ContainerProps) {
  const element = document.createElement('div');

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
