import { NativeElement } from "../types";

interface TitleProps extends NativeElement<HTMLHeadingElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  onClick?: (ev: MouseEvent) => void;
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

    if (props?.id) {
      element.id = props.id;
    }
  }

  load();

  // Load the element reference
  if (props?.ref) {
    props.ref.value = element;
  }

  // Set on click
  if (props?.onClick) {
    element.onclick = props.onClick;
  }

  return element;
}
