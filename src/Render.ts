
export const Render = (target: HTMLElement, builder: () => HTMLElement | HTMLElement[]) => {
  const elements = builder();

  if (Array.isArray(elements)) {
    elements.forEach(element => target.appendChild(element));
  } else {
    target.appendChild(elements);
  }
}
