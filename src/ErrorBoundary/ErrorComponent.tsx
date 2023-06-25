import { useEffect, useState } from 'react';

type Props = {};

export const ErrorComponent = ({}: Props) => {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    if (count === 1) {
      throw new Error('버튼을 눌러서 에러가 발생했어요!');
    }
  });

  return <button onClick={onClick}>에러 발생!</button>;
};
