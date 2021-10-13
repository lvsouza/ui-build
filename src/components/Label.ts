import { ISubscription } from "../interfaces";
import { NativeElement } from "../types";

interface LabelActions {
  getText: () => string;
  setText: (text: string) => void;
  getChildren: () => HTMLCollection;
}

interface LabelProps extends NativeElement<HTMLLabelElement> {
  children?: Node | Node[];
  onClick?: (ev: MouseEvent) => void;
  observables?: (ref: HTMLLabelElement, actions: LabelActions) => ISubscription[];
}

export function Label(): HTMLLabelElement;
export function Label(props?: LabelProps): HTMLLabelElement;
export function Label(props?: LabelProps) {
  const element = document.createElement('label');

  if (typeof props === 'string' || Array.isArray(props)) {

    if (Array.isArray(props)) {
      element.textContent = props.join();
    } else {
      element.textContent = props;
    }

    return element;
  }

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

  // Set on click
  if (props?.onClick) {
    element.onclick = props.onClick;
  }

  return element;
}
