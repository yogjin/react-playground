import { memo } from 'react';

type Props = {};

export const ChildWithoutProps = memo(({}: Props) => {
  return <p>난 Props로 state를 받지않는 컴포넌트 0</p>;
});
