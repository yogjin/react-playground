import {
  ButtonHTMLAttributes,
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  forwardRef,
  InputHTMLAttributes,
  Ref,
} from 'react';
import styled from 'styled-components';

type BackGroundColor = {
  backgroundColor?: string;
};

type PropsWithoutRef = ComponentPropsWithoutRef<'input'> & BackGroundColor;
type PropsWithRef = ComponentPropsWithRef<'input'> & BackGroundColor;

type MyButtonProps = {
  backgroundColor?: string;
} & ComponentPropsWithoutRef<'button'>;

export const MyButton = forwardRef((props: MyButtonProps, ref: Ref<HTMLButtonElement>) => {
  return <button {...props}></button>;
});

/** 재사용 컴포넌트를 만들 때 props 타입은 어떻게 선언할까?
 * ComponentPropsWithoutRef
 * */

/** ref를 받아야하는 재사용 컴포넌트를 만들 때는 props 타입은 어떻게 선언해야할까?
 * ComponentPropsWithRef
 * + 컴포넌트를 React.forwardRef로 감싼다
 * */

/**
 * 결론: PropsWithoutRef를 사용하자.
 * Ref를 받을 필요가 없을 때 PropsWithRef를 이용하면 사용하는 쪽에서
 * 커스텀 컴포넌트에 Ref를 사용해야할 때는 어차피 forwardRef로 감싸야하기 때문
 *
 * 또한 InputHTMLAttributes<HTMLInputElement> 을 상속해서 선언해도 된다.
 * 하지만 PropsWithoutRef가 InputHTMLAttributes<HTMLInputElement>이 선언되어 있는 IntrinsicElements를 이용하기 때문에 사용하기 편한 PropsWithoutRef를 추천
 * PropsWithoutRef는 PropsWithoutRef<'input'> 와 같이 제네릭을 태그이름으로 사용할 수 있어서 편리하다
 */

export const InputWithoutRef = ({ backgroundColor, ...props }: PropsWithoutRef) => {
  return <input style={{ backgroundColor }} {...props}></input>;
};

export const InputWithRef = forwardRef<HTMLInputElement, PropsWithoutRef>(
  ({ backgroundColor, ...props }, ref) => {
    return <input style={{ backgroundColor }} ref={ref} {...props}></input>;
  }
);

export const StyledInput = forwardRef<HTMLInputElement, PropsWithoutRef>(
  ({ backgroundColor, ...props }, ref) => {
    return <Styled.Input style={{ backgroundColor }} ref={ref} {...props}></Styled.Input>;
  }
);

const Styled = {
  Input: styled.input<PropsWithoutRef>`
    background-color: ${({ backgroundColor }) => backgroundColor ?? 'white'};
  `,
};
