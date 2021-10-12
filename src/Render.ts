import { stateEvent, stateIndex } from "./events";

const draw = (target: HTMLElement, elements: HTMLElement | HTMLElement[]) => {
  console.log('Draw')
  if (Array.isArray(elements)) {
    elements.forEach(element => target.appendChild(element));
  } else {
    target.appendChild(elements);
  }
}

const clear = (target: HTMLElement) => {
  console.log('Clear')
  target.innerHTML = '';
}

export const Render = (target: HTMLElement, builder: () => HTMLElement | HTMLElement[]) => {
  window.addEventListener(stateEvent.type, () => {
    const elements = builder();

    clear(target);
    draw(target, elements);

    stateIndex.index = 0;
  });

  const elements = builder();
  draw(target, elements);
}
