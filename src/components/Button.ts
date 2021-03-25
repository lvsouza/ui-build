interface ButtonProps {
  children?: Node | Node[];
  classList?: string[];
}

export function Button(props?: ButtonProps) {
  const element = document.createElement('button');

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
