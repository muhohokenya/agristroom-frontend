import React, { SetStateAction, useContext, useEffect, useState } from "react";
import TextEditor from "./ui/TextEditor";
import ModalEditor from "./ModalEditor";
import { useAppDispatch, useAppSelector } from "../hooks/react-redux-hooks";
import { postQuestion } from "../redux/actions/postQuestion.action";
import { toast } from "../hooks/use-toast";
import { useRouter } from "next/navigation";
import { UseEditorModal } from "../hooks/useEditorModalContext";
import { getCurrentUser } from "../redux/actions/auth.action";

const EditorModal = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { openEditorModal, setOpenEditorModal } = useContext(UseEditorModal);
  const user = useAppSelector((state) => state.currentUser);
  const [savingPost, setSavingPost] = useState(false);
  const [state, setState] = useState<SetStateAction<{}>>({
    name: "",
  });

  const callback = (payload: string) => {
    setState({
      name: payload,
    });
  };

  useEffect(() => {
    const getUser = async () => {
      let res: any = await dispatch(getCurrentUser());
      if (res?.payload?.success) {
        // setLoggedOut(false);
      } else {
        // setLoggedOut(true);
      }
    };
    getUser();
  }, []);

  const postAQuestion = async () => {
    try {
      if (user.user === null) {
        toast({
          description: "Please log in first to post a question",
          variant: "destructive",
        });
        setOpenEditorModal(false);
      } else {
        setSavingPost(true);
        const res: any = await dispatch(postQuestion(state));
        if (res.payload.success) {
          setSavingPost(false);
          toast({
            description: "You Successfully posted a question",
            variant: "secondary",
          });
        }
        setOpenEditorModal(false);
      }
    } catch (error) {}
  };


  return (
    <div>
      <ModalEditor>
        <div className="flex flex-col bg-white h-auto rounded-md">
          <TextEditor callback={callback} />
          <div className="flex gap-5 w-full justify-end items-center my-5 pr-5">
            <button
              onClick={() => {
                setOpenEditorModal(false);
              }}
              className="bg-[#2F9B4E] text-white px-[8px] py-[4px] w-fit h-[40px] rounded-md "
            >
              Cancel
            </button>
            <button
              disabled={savingPost}
              onClick={postAQuestion}
              className={` ${
                savingPost
                  ? " cursor-not-allowed bg-[#2F9B4E]/70"
                  : "bg-[#2F9B4E]"
              } text-white px-[8px] py-[4px] w-fit h-[40px] rounded-md`}
            >
              {savingPost ? "Saving Post " : "Post Question"}
            </button>
          </div>
        </div>
      </ModalEditor>
    </div>
  );
};

export default EditorModal;
