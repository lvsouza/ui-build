import { ISubscription } from "../interfaces";
import { NativeElement } from "../types";

interface IFrameActions { }

interface IFrameProps extends NativeElement<HTMLIFrameElement> {
  children?: HTMLElement | HTMLElement[];
  onLoad?: () => void;
  observables?: (ref: HTMLIFrameElement, actions: IFrameActions) => ISubscription[];
}

export function IFrame(): HTMLIFrameElement;
export function IFrame(props?: IFrameProps): HTMLIFrameElement;
export function IFrame(props?: IFrameProps): HTMLIFrameElement {
  const element = document.createElement('iframe');

  const load = () => {
    if (props?.children && element.contentDocument) {
      if (Array.isArray(props?.children)) {
        element.contentDocument.body.append(...props?.children);
      } else {
        element.contentDocument.body.appendChild(props?.children);
      }

      if (props?.classList) {
        element.classList.add(...props?.classList);
      }

      if (props?.style) {
        Object.assign(element.style, props?.style);
      }

      if (props?.id) {
        element.id = props.id;
      }
    }

    props?.onLoad && props?.onLoad();
  }

  element.onload = load;

  if (typeof props.observables === 'function') {
    const subscriptions = props.observables(element, {});

    element.remove = () => {
      subscriptions.forEach(sub => sub.unsubscribe());
      element.remove();
    };
  }

  return element;
}
