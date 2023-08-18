import React, {  useContext, useEffect, useState } from "react";
import TextEditor from "./ui/TextEditor";
import ModalEditor from "./ModalEditor";
import { useAppDispatch, useAppSelector } from "../hooks/react-redux-hooks";
import { postQuestion } from "../redux/actions/postQuestion.action";
import { toast } from "../hooks/use-toast";
import { useRouter } from "next/navigation";
import { UseEditorModal } from "../hooks/useEditorModalContext";
import { getCurrentUser } from "../redux/actions/auth.action";
import { ManagedUI } from "../hooks/useModalContext";
import Progress from "./ProgressBar";

type Props = {
  route?: string;
}

const EditorModal = ({ route = "" }: Props) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { setOpenEditorModal } = useContext(UseEditorModal);
  const user = useAppSelector((state) => state.currentUser);
  const { proceed, setProceed, openModal, setOpenModal } = useContext(ManagedUI);
  const [savingPost, setSavingPost] = useState(false);
  const [title, setTitle] = useState<string>("")
  const [value, setValue] = useState<number>(0)
  const [state, setState] = useState<{ description: string }>({
    description: "",
  });

  const callback = (payload: string) => {
    setState({
      description: payload,
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
    setProceed(false);
  }, [dispatch, setProceed]);

  const postAQuestion = async () => {
    try {
      if (user.user === null) {
        toast({
          description: "Please log in first to post a question",
          variant: "destructive",
        });
        // setOpenEditorModal(false);
        router.push("/login");
        setOpenModal(true)
      } else {
        setSavingPost(true);
        const data = {
          title,
          description: state.description
        }
        const res: any = await dispatch(postQuestion(data));
        if (res.payload.success) {
          setSavingPost(false);
          toast({
            description: "You Successfully posted a question",
            variant: "secondary",
          });
          // router.push(route)
        }
        setOpenEditorModal(false);
        setProceed(false);
      }
    } catch (error) { }
  };

  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  }

  useEffect(() => {
    setValue(title.length)
    if (value >= 20) {
      setProceed(true)
    } else {
      setProceed(false)
    }
    if (title.length >= 100) {
      setValue(100)
    }
  }, [setProceed, title.length, value])


  return (
    <ModalEditor>
      <div className="flex flex-col bg-white h-auto rounded-md px-2">
        <div className="flex flex-col mt-3 px-2 py-2 rounded-md border border-slate-400 ">
          <h2 className="text-[16px] text-black leading-4">Title</h2>
          <p className="text-[13px] text-black mt-2">Be specific and imagine you are asking a question to another person.</p>
          <p className="text-[10px] text-black mt-2">A range of 20 to 100 characters.</p>
          <Progress value={value} />
          <textarea
            onChange={handleText}
            className=" w-[65%] mt-2 outline-0 rounded-md px-2 py-2 border border-[#2F9B4E] h-[40px] text-[13px]" />
        </div>
        <div className={`flex flex-col mt-3 rounded-md py-2 px-2 p border border-slate-400 ${!proceed ? " bg-white opacity-40" : ""}`}>
          <div className="mb-3">
            <h2 className="text-[16px] text-black mt-3 leading-4">What are the details of your Question?</h2>
            <p className="text-[13px] text-black mt-2">Introduce your problem and expand on what you put in the title. A minimum of 20 characters .</p>
          </div>
          <TextEditor callback={callback} />
        </div>
        <div className="flex gap-5 w-full justify-end items-center my-5 pr-5">
          <button
            onClick={() => {
              setOpenEditorModal(false);
            }}
            className="border border-[#2F9B4E] text-[#2F9B4E] z-[2000] px-[8px] py-[4px] w-fit h-[40px] rounded-md "
          >
            Cancel
          </button>
          <button
            disabled={savingPost || !proceed}
            onClick={postAQuestion}
            className={` ${savingPost || !proceed
              ? " cursor-not-allowed bg-[#2F9B4E]/70"
              : "bg-[#2F9B4E]"
              } text-white px-[8px] py-[4px] w-fit h-[40px] rounded-md`}
          >
            {savingPost ? "Saving Post " : "Post Question"}
          </button>
        </div>
      </div>
    </ModalEditor>
  );
};

export default EditorModal;
