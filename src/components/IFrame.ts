import { FC } from "../../core/types/FuctionalComponent";

interface IFrameProps {
  children?: HTMLElement | HTMLElement[];
  classList?: string[];
  onLoad?: () => void;
}

export const IFrame: FC<IFrameProps, HTMLIFrameElement> = ({ children, classList, onLoad }) => {
  const element = document.createElement('iframe');

  const load = () => {
    if (children && element.contentDocument) {
      if (Array.isArray(children)) {
        element.contentDocument.body.append(...children);
      } else {
        element.contentDocument.body.appendChild(children);
      }

      if (classList) {
        element.classList.add(...classList);
      }
    }

    onLoad && onLoad();
  }

  element.onload = load;

  return element;
}
