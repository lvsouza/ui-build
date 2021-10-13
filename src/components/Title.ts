import { ISubscription } from "../interfaces";
import { NativeElement } from "../types";

interface TitleActions {
  getText: () => string;
  setText: (text: string) => void;
  getChildren: () => HTMLCollection;
}

interface TitleProps extends NativeElement<HTMLHeadingElement> {
  key?: string;
  children?: Node | Node[];
  onClick?: (ev: MouseEvent) => void;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  observables?: (ref: HTMLHeadingElement, actions: TitleActions) => ISubscription[];
}

export function Title(): HTMLHeadingElement;
export function Title(props?: TitleProps): HTMLHeadingElement;
export function Title(props?: TitleProps) {
  const element = document.createElement(props?.variant || 'h1');

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

  // Set on click
  if (props?.onClick) {
    element.onclick = props.onClick;
  }

  // Set on click
  if (props?.key) {
    element.setAttribute('data-key', props.key);
  }

  if (typeof props.observables === 'function') {
    const subscriptions = props.observables(element, {
      getText: () => element.textContent,
      getChildren: () => element.children,
      setText: (text) => element.textContent = text,
    });

    element.remove = () => {
      subscriptions.forEach(sub => sub.unsubscribe());
      element.remove();
    };
  }

  return element;
}
