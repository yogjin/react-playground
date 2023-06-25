// src/mocks/handlers.js
import { rest } from 'msw';
import { v4 as uuid } from 'uuid';
import { API_BASE_URL, API_ENDPOINT, TodoItem } from '../tanstack-query/api';

const todos: TodoItem[] = [
  { id: uuid(), title: '기상' },
  { id: uuid(), title: '선릉가기' },
];

export const handlers = [
  rest.get(`${API_BASE_URL}${API_ENDPOINT.TODOS}`, (req, res, ctx) => {
    return res(ctx.delay(300), ctx.json(todos), ctx.status(200));
  }),
  rest.post(`${API_BASE_URL}${API_ENDPOINT.TODOS}`, async (req, res, ctx) => {
    const todo = await req.json<TodoItem>();

    todos.push(todo);

    return res(ctx.delay(300), ctx.status(200));
  }),
];
