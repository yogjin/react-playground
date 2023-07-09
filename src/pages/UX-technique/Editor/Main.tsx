import { useState } from 'react';
import Editor from './editor/Editor';
import EditorTextParser from './parser/editorTextParser';
import exampleData from './editor/exampleData';

type Props = {};

const Main = ({}: Props) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [data, setData] = useState(exampleData);

  function toggleEditMode() {
    if (isEditMode) {
      setIsEditMode(false);
      console.log('Edit mode is now disabled');
    } else {
      setIsEditMode(true);
      console.log('Edit mode is now enabled');
    }
  }

  return (
    <div className="App">
      <button id="toggle-edit-btn" onClick={toggleEditMode}>
        Toggle Edit Mode
      </button>

      <div className="app-content">
        {isEditMode ? <Editor data={data} setData={setData} /> : <EditorTextParser data={data} />}
      </div>
    </div>
  );
};

export default Main;
