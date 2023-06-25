import { ErrorBoundary } from './ErrorBoundary';
import { ErrorComponent } from './ErrorComponent';

type Props = {};

export const Example = ({}: Props) => {
  return (
    <>
      <ErrorBoundary fallback={<div>에러</div>}>
        <ErrorComponent />
      </ErrorBoundary>
    </>
  );
};
