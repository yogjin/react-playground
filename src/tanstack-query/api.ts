type TodoItem = {
  id: string;
  title: string;
};

const API_BASE_URL = 'api';
const API_ENDPOINT = {
  TODOS: '/todos',
};

const fetcher = {
  async get(url: RequestInfo | URL, options?: RequestInit) {
    const response = await fetch(url, options);

    // 에러 던지기 -> ErrorBoundary에서 잡힘
    if (!response.ok) throw new Error('200대 response가 오지 않았습니다.');

    return response.json();
  },

  async post(url: RequestInfo | URL, options?: RequestInit) {
    const response = await fetch(url, {
      method: 'POST',
      ...options,
    });

    // 에러 던지기 -> ErrorBoundary에서 잡힘
    if (!response.ok) throw new Error('200대 response가 오지 않았습니다.');

    return response;
  },
};

const api = {
  getTodos(): Promise<TodoItem[]> {
    return fetcher.get(`${API_BASE_URL}${API_ENDPOINT.TODOS}`);
  },

  postTodo(variables: TodoItem) {
    return fetcher.post(`${API_BASE_URL}${API_ENDPOINT.TODOS}`, {
      body: JSON.stringify(variables),
    });
  },
};

export type { TodoItem };
export { api, API_BASE_URL, API_ENDPOINT };
