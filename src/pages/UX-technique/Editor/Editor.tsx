import EditorJS from '@editorjs/editorjs';
import { configuration } from './configuration';

type Props = {};

const Editor = ({}: Props) => {
  const editor = new EditorJS(configuration());

  const saveContents = () => {
    editor
      .save()
      .then((outputData) => {
        console.log('Article data: ', outputData);
      })
      .catch((error) => {
        console.log('Saving failed: ', error);
      });
  };

  return (
    <div>
      <h1>dong-gle editor</h1>
      <div>
        <button onClick={saveContents}>저장하기</button>
        <div id="editor" style={{ border: '1px solid' }}></div>
      </div>
    </div>
  );
};

export default Editor;
