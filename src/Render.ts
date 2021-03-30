export const Render = (target: HTMLElement, elements: HTMLElement | HTMLElement[]) => {
  if (Array.isArray(elements)) {
    elements.forEach(element => target.appendChild(element));
  } else {
    target.appendChild(elements);
  }
}
