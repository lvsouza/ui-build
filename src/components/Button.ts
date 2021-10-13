import { ISubscription } from "../interfaces";
import { NativeElement } from "../types";

interface ButtonActions {
  getChildren: () => HTMLCollection;
}

interface ButtonProps extends NativeElement<HTMLButtonElement> {
  children?: Node | Node[];
  onClick?: (ev: MouseEvent) => void;
  observables?: (ref: HTMLButtonElement, actions: ButtonActions) => ISubscription[];
}

export function Button(): HTMLButtonElement;
export function Button(props?: ButtonProps): HTMLButtonElement;
export function Button(props?: ButtonProps): HTMLButtonElement {
  const element = document.createElement('button');

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

  if (typeof props.observables === 'function') {
    const subscriptions = props.observables(element, {
      getChildren: () => element.children,
    });

    element.remove = () => {
      subscriptions.forEach(sub => sub.unsubscribe());
      element.remove();
    };
  }

  return element;
}
