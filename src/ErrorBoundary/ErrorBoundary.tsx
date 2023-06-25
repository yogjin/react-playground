import { Component, ErrorInfo, PropsWithChildren, ReactElement } from 'react';

type Props = {
  fallback: ReactElement;
} & PropsWithChildren;

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError = (error: unknown) => {
    return { hasError: true };
  };

  componentDidCatch(error: Error, info: ErrorInfo) {
    // 에러 처리 로직을 구현합니다.
    console.error('에러 발생:', error, info);
  }

  render() {
    if (this.state.hasError) {
      // 에러가 발생했을 때 보여줄 UI를 반환합니다.
      return this.props.fallback;
    }
    // 에러가 없을 경우 자식 컴포넌트를 렌더링합니다.
    return this.props.children;
  }
}
