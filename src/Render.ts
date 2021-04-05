import { stateEvent } from "./events";

export const Render = (target: HTMLElement, elements: HTMLElement | HTMLElement[]) => {
  if (Array.isArray(elements)) {
    elements.forEach(element => target.appendChild(element));
  } else {
    target.appendChild(elements);
  }

  window.addEventListener(stateEvent.type, () => {
    if (Array.isArray(elements)) {
      elements.forEach(element => target.appendChild(element));
    } else {
      target.appendChild(elements);
    }
  });
}
