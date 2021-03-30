import { FC } from "../types";

interface IFrameProps {
  children?: HTMLElement | HTMLElement[];
  classList?: string[];
  onLoad?: () => void;
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
    }

    props?.onLoad && props?.onLoad();
  }

  element.onload = load;

  return element;
}
