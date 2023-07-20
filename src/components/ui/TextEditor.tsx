"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
);

interface Props {
  callback: (text: string) => void
}

function TextEditor(props: Props) {
  const {callback} = props;

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (
    editorState: React.SetStateAction<EditorState>
  ) => {
    setEditorState(editorState);
  };

  const onChange = (e:Draft.DraftModel.Encoding.RawDraftContentState) => {
    callback(e.blocks[0].text)
  };
  

  return (
    <div className="max-w-[802px] sticky top-[200px] min-h-[230px] ">
      <Editor
        onChange={onChange}
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbarClassName="flex  z-50 !justify-start mx-auto min-w-[345px] lg:min-w-[802px]"
        editorClassName="mt-1 shadow-xl  px-2 min-h-[200px] shadow-lg min-w-[345px] lg:min-w-[802px] mx-auto"
        
      />
    </div>
  );
}

export default TextEditor;
