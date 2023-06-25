type Props = {
  state: number;
};

export const ChildWithProps = ({ state }: Props) => {
  return <p>난 ChildWithProps: props로 state를 받는 컴포넌트 {state}</p>;
};
