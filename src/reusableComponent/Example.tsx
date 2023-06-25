import { useRef } from 'react';
import { InputWithoutRef, InputWithRef, StyledInput } from './Input';

export const Example = () => {
  const inputRef0 = useRef<HTMLInputElement>(null);
  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);

  return (
    <>
      <input placeholder="default input"></input>

      <InputWithoutRef
        type="text"
        placeholder="withoutRef input"
        // ref={inputRef0}
        onChange={(e) => {
          console.log(inputRef0.current?.value);
        }}
      ></InputWithoutRef>
      {/* ERROR! <InputWithoutRef type="text" placeholder="InputWithoutRef" ref={inputRef}></InputWithoutRef> */}

      <InputWithRef
        backgroundColor="skyblue"
        type="text"
        placeholder="InputWithRef"
        ref={inputRef1}
        onChange={(e) => {
          console.log(inputRef1.current?.value);
        }}
      ></InputWithRef>

      <StyledInput
        backgroundColor="pink"
        placeholder="styled & withoutRef"
        ref={inputRef2}
        onChange={(e) => {
          console.log(inputRef2.current?.value);
        }}
      ></StyledInput>
    </>
  );
};
