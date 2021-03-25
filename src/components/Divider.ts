interface DividerProps {
  classList?: string[];
}

export function Divider(props?: DividerProps) {
  const element = document.createElement('hr');

  const load = () => {
    if (props?.classList) {
      element.classList.add(...props.classList);
    }
  }

  load();

  return element;
}
