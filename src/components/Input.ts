import { ISubscription } from "../interfaces";
import { NativeElement } from "../types";

interface InputActions {
  getValue: () => string;
  setValue: (value: string) => void;
}

interface InputProps extends NativeElement<HTMLInputElement> {
  type?: 'text' | 'number' | 'date' | 'color' | 'time' | 'checkbox' | 'radio' | 'range' | string;
  onClick?: (ev: MouseEvent) => void;
  children?: Node | Node[];
  value?: string;
  observables?: (ref: HTMLInputElement, actions: InputActions) => ISubscription[];
}

export function Input(): HTMLInputElement;
export function Input(props?: InputProps): HTMLInputElement;
export function Input(props?: InputProps) {
  const element = document.createElement('input');

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

  if (typeof props.observables === 'function') {
    const subscriptions = props.observables(element, {
      getValue: () => element.value,
      setValue: (value) => element.value = value,
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
