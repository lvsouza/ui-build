import { NativeElement } from "../types";

interface TitleProps extends NativeElement {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: Node | Node[];
}

export function Title(): HTMLHeadingElement;
export function Title(props?: TitleProps): HTMLHeadingElement;
export function Title(props?: TitleProps) {
  const element = document.createElement(props?.variant || 'h1');

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
  }

  load();

  return element;
}
