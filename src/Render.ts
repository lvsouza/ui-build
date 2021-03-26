export const Render = (elements: HTMLElement | HTMLElement[], target: HTMLElement) => {
  if (Array.isArray(elements)) {
    elements.forEach(element => target.appendChild(element));
  } else {
    target.appendChild(elements);
  }
}
