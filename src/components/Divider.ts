import { ISubscription } from "../interfaces";
import { NativeElement } from "../types";

interface DividerActions { }

interface DividerProps extends NativeElement<HTMLHRElement> {
  observables?: (ref: HTMLHRElement, actions: DividerActions) => ISubscription[];
}

export function Divider(): HTMLHRElement;
export function Divider(props?: DividerProps): HTMLHRElement;
export function Divider(props?: DividerProps): HTMLHRElement {
  const element = document.createElement('hr');

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
    const subscriptions = props.observables(element, {});

    element.remove = () => {
      subscriptions.forEach(sub => sub.unsubscribe());
      element.remove();
    };
  }

  return element;
}
