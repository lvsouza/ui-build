interface InputProps {
  type?: 'text' | 'number' | 'date' | 'color' | 'time' | 'checkbox' | 'radio' | 'range' | string;
  children?: Node | Node[];
  classList?: string[];
  value?: string;
}

export function Input(props?: InputProps) {
  const element = document.createElement('input');

  const load = () => {
    if (props?.children) {

      if (Array.isArray(props.children)) {
        props.children.forEach(node => element.appendChild(node));
      } else {
        element.appendChild(props.children);
      }
    }

    if (props?.value) {
      element.value = props.value;
    }

    if (props?.type) {
      element.type = props.type;
    }

    if (props?.classList) {
      element.classList.add(...props.classList);
    }
  }

  load();

  return element;
}
