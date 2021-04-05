import { stateEvent, stateIndex } from "./events";

export const Render = (target: HTMLElement, builder: () => HTMLElement | HTMLElement[]) => {
  const elements = builder();

  if (Array.isArray(elements)) {
    elements.forEach(element => target.appendChild(element));
  } else {
    target.appendChild(elements);
  }

  window.addEventListener(stateEvent.type, () => {
    const elements = builder();
    target.innerHTML = '';

    if (Array.isArray(elements)) {
      elements.forEach(element => target.appendChild(element));
    } else {
      target.appendChild(elements);
    }

    stateIndex.index = 0;
  });

}
