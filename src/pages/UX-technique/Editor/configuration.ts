export const configuration = () => {
  return {
    // editor.js 인스턴스를 가질 HTMLElement의 id (에디터 본체)
    holder: 'editor',
    autofocus: true,
    /**
     * 사용가능한 툴들
     * 확장하여 사용한다.
     */
    tools: {},

    /**
     * 렌더링해야할 저장된 이전 데이터들
     */
    data: {},

    onReady: () => {
      console.log('에디터 로딩중...');
    },
    onChange: (api, event) => {
      console.log(`에디터 컨텐츠가 변경되었습니다`, event);
    },
  };
};
