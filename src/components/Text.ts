interface TextProps {
  text?: string | string[];
}

export function Text(props?: TextProps) {
  const element = document.createTextNode('');

  if (props?.text) {
    if (Array.isArray(props.text)) {
      element.textContent = props.text.join();
    } else {
      element.textContent = props.text;
    }
  } else {
    element.textContent = '';
  }

  return element;
}
