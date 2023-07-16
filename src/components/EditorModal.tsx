import React, { SetStateAction, useContext, useState } from "react";
import TextEditor from "./ui/TextEditor";
import Modal from "./Modal";
import { useAppDispatch } from "../hooks/react-redux-hooks";
import { postQuestion } from "../redux/actions/postQuestion.action";
import { toast } from "../hooks/use-toast";
import { useRouter } from "next/navigation";
import { ManagedUI } from "../hooks/useModalContext";

const EditorModal = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { setOpenModal } = useContext(ManagedUI);
  const [savingPost, setSavingPost] = useState(false);
  const [state, setState] = useState<SetStateAction<{}>>({
    name: "",
  });

  const callback = (payload: string) => {
    setState({
      name: payload,
    });
  };

  const postAQuestion = async () => {
    try {
      setSavingPost(true);
      const res: any = await dispatch(postQuestion(state));
      if (res.payload.success) {
        setSavingPost(false)
        toast({
          description: "You Successfully posted a question",
          variant: "secondary",
        });
      }
      setOpenModal(false);
    } catch (error) {}
  };

  return (
    <div>
      <Modal>
        <div className="flex flex-col bg-white h-auto rounded-md">
          <TextEditor callback={callback} />
          <div className="flex gap-5 w-full justify-end items-center my-5 pr-5">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              className="bg-[#2F9B4E] text-white px-[8px] py-[4px] w-fit h-[40px] rounded-md "
            >
              Cancel
            </button>
            <button
             disabled={savingPost}
              onClick={postAQuestion}
              className={` ${savingPost ? " cursor-not-allowed bg-[#2F9B4E]/70" : "bg-[#2F9B4E]"} text-white px-[8px] py-[4px] w-fit h-[40px] rounded-md`}
            >
             {savingPost ? "Saving Post " : "Post Question"} 
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EditorModal;
