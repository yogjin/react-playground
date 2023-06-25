import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

export function Counter() {
  const [count, setCount] = useState(0);

  console.log('rerender', count);

  useEffect(() => {
    console.log('useEffect!'); // 1

    const id = setInterval(() => {
      console.log('interval!', count); // 2 interval! 0
      setCount(count + 1); // 0 + 1
    }, 1000);

    return () => {
      console.log('cleanup!', count);
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <h1>{count}</h1>
      {/* <button onClick={() => (count += 1)}>1로 set</button> */}
    </>
  );
}

// 버츄얼돔
// 메모이제이션
// useRef
// 상태관리
// state 직접할당했을때
