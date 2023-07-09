import { useState } from 'react';
import Card from './Card';
import CardSkeleton from './CardSkeleton';

type Props = {};

const Main = ({}: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  return <>{isLoading ? <CardSkeleton /> : <Card />}</>;
};

export default Main;
