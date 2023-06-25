import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { api, TodoItem } from './api';

type Props = {};

export const Todos = ({}: Props) => {
  const [error, setError] = useState<unknown>();

  // client에 접속
  const queryClient = useQueryClient();

  // Query: GET 요청
  const { data: todoList } = useQuery({
    queryKey: ['todos'],
    queryFn: api.getTodos,
    suspense: true, // react Suspense 이용가능하다. 또한 이걸 설정해야 에러바운더리에서 잡을 수 있다.
  });

  // Mutation: POST, PATCH, PUT, DELETE 요청
  const { mutate: addTodo } = useMutation(api.postTodo, {
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['todos'] }); // 위에서 todos로 등록한 query요청 refetch
    },
    onError: (error) => {
      // 비동기적으로 에러가 발생하기 때문에 에러바운더리에서 잡히도록 하려면 외부 state를 조작해서 리렌더링이 일어나도록한다.
      setError(error);
    },
  });

  // mutation으로 인해 발생한 리렌더링 시 에러가 있다면 error를 던져서 에러바운더리에서 잡히도록 한다.
  if (error) {
    throw error;
  }

  return (
    <>
      <ul>
        {todoList?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <button onClick={() => addTodo({ id: uuid(), title: uuid() })}>추가하기</button>
    </>
  );
};
