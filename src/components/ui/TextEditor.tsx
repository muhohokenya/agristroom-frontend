"use client";
import { ManagedUI } from "@/src/hooks/useModalContext";
import { EditorState } from "draft-js";
import dynamic from "next/dynamic";
import React, { useContext, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

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
  const { callback } = props;

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const { proceed, setProceed } = useContext(ManagedUI);

  const onEditorStateChange = (
    editorState: React.SetStateAction<EditorState>
  ) => {
    setEditorState(editorState);
  };

  const onChange = (e: Draft.DraftModel.Encoding.RawDraftContentState) => {
    callback(e.blocks[0].text)
  };


  return (
    <div className="relative max-w-[802px] sticky top-[200px] min-h-[230px]">
      <Editor
        onChange={onChange}
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbarClassName={`flex !justify-start mx-auto min-w-[345px] lg:min-w-[802px]`}
        editorClassName="mt-1 shadow-sm  px-2 min-h-[200px] min-w-[345px] lg:min-w-[802px] mx-auto"
        toolbar={
          {
            options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'history'],
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
          }
        }

      />
      <div className={`${!proceed ? " flex h-32  bg-white opacity-40 w-full absolute top-0 " : "hidden"}`}></div>
    </div>
  );
}

export default TextEditor;
