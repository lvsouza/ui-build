import { Button, Container, FC, Text, Title, useRef, useState } from "ui-build";

import './styles/index.css';

export const App: FC = () => {
  return Counter();
};

const Counter: FC = () => {
  const [counter, setCounter] = useState(0);

  return Container({
    classList: ['full-width', 'flex-column', 'padding-s'],
    children: [
      Container({
        classList: ['full-width'],
        children: [
          Button({
            onClick: () => setCounter(counter - 1),
            children: Text('Subtrair'),
            classList: ['padding-s', 'flex1']
          }),
          Button({
            onClick: () => setCounter(counter + 1),
            children: Text('Somar'),
            classList: ['padding-s', 'flex1']
          }),
        ]
      }),
      Container({
        children: [
          Title({
            variant: 'h2',
            children: Text('Contador: ' + counter)
          }),
        ]
      }),
    ],
  });
}