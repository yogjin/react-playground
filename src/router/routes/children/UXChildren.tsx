import Main from '../../../pages/UX-technique/Editor/Main.js';
import { Route } from '../../../types/common.js';

export const UXChildren: Route[] = [
  {
    path: '',
    element: <>UX 기술을 테스트하는 페이지입니다.</>,
    title: 'README',
  },
  {
    path: 'editor',
    element: <Main />,
    title: '위지위그 editor.js',
  },
];
