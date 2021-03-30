interface LabelProps {
  children?: Node | Node[];
  classList?: string[];
}

export function Label(): HTMLLabelElement;
export function Label(props?: LabelProps): HTMLLabelElement;
export function Label(props?: LabelProps) {
  const element = document.createElement('label');

  if (typeof props === 'string' || Array.isArray(props)) {

    if (Array.isArray(props)) {
      element.textContent = props.join();
    } else {
      element.textContent = props;
    }

    return element;
  }

  const load = () => {
    if (props?.children) {
      if (Array.isArray(props.children)) {
        props.children.forEach(node => element.appendChild(node));
      } else {
        element.appendChild(props.children);
      }
    }

    if (props?.classList) {
      element.classList.add(...props.classList);
    }
  }

  load();

  return element;
}
