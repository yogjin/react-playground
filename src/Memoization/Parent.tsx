import { useState } from 'react';
import { ChildWithoutProps } from './ChildWithoutProps';

import { ChildWithProps } from './ChildWithProps';

type Props = {};

export const Parent = ({}: Props) => {
  const [state, setState] = useState(0);

  const triggerRerender: React.MouseEventHandler<HTMLButtonElement> = () => {
    setState((prev) => prev + 1);
  };

  return (
    <>
      <button onClick={triggerRerender}>state 변경!</button>
      <ChildWithProps state={state} />
      <ChildWithoutProps />
    </>
  );
};
