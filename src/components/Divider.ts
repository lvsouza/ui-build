interface DividerProps {
  classList?: string[];
}

export function Divider(): HTMLHRElement;
export function Divider(props?: DividerProps): HTMLHRElement;
export function Divider(props?: DividerProps): HTMLHRElement {
  const element = document.createElement('hr');

  const load = () => {
    if (props?.classList) {
      element.classList.add(...props.classList);
    }
  }

  load();

  return element;
}
