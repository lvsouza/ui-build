
export const Render = (target: HTMLElement, builder: () => HTMLElement | HTMLElement[]) => {
  const elements = builder();

  if (Array.isArray(elements)) {
    target.append(...elements);
  } else {
    target.appendChild(elements);
  }
}
