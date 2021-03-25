interface ContainerProps {
  children?: Node | Node[];
  classList?: string[];
}

export function Container(props?: ContainerProps) {
  const element = document.createElement('div');

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
