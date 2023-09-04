import { satoshi } from "@/src/fonts/Fonts";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import dynamic from "next/dynamic";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../hooks/react-redux-hooks";
import { toast } from "../../hooks/use-toast";
import { UseEditorModal } from "../../hooks/useEditorModalContext";
import { ManagedUI } from "../../hooks/useModalContext";
import { getCurrentUser } from "../../redux/actions/auth.action.action";
import { postQuestion } from "../../redux/actions/postQuestion.action";
import Progress from "../ProgressBar";
import ModalEditor from "./ModalEditor";
const { convert } = require('html-to-text');

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
);

type Props = {
  route?: string;
}

const EditorModal = ({ route = "" }: Props) => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { setOpenEditorModal } = useContext(UseEditorModal);
  const user = useAppSelector((state) => state.currentUser);
  const { proceed, setProceed, openModal, setOpenModal } = useContext(ManagedUI);
  const [savingPost, setSavingPost] = useState(false);
  const [disableButton, setDisableButton] = useState(true)
  const [windowReady, setWindowReady] = useState(false);
  const [title, setTitle] = useState<string>("")
  const [value, setValue] = useState<number>(0)
  const [state, setState] = useState<{ description: string }>({
    description: "",
  });


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


  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  }

  useEffect(() => {
    setValue(title.length)
    if (value >= 20) {
      setProceed(true)
      setDisableButton(false)
    } else {
      setProceed(false)
    }
    if (title.length >= 100) {
      setValue(100)
    }
  }, [setProceed, title.length, value])

  useEffect(() => {
    if (window !== undefined) {
      setWindowReady(true)
    }
  }, [])

  const defaultValues = {
    someText: "",
    someDraft: EditorState.createEmpty()
  };

  const { handleSubmit, control, reset } = useForm({
    defaultValues
  });

  const onSubmit = async ({ someDraft }: { someDraft: any }) => {
    const _someDraft = draftToHtml(convertToRaw(someDraft.getCurrentContent()));
    const text = convert(_someDraft, { wordwrap: 130 })
    const state = {
      description: text,
    }
    try {
      if (user.user === null) {
        toast({
          description: "Please log in first to post a question",
          variant: "destructive",
        });
        router.push("/auth/login");
        setOpenModal(true)
      } else {
        setSavingPost(true);
        const data = {
          title,
          description: state.description
        }
        const res: any = await dispatch(postQuestion(data));
        const returnedPost = res?.payload?.result?.data[0];
        if (res.payload.success) {
          setSavingPost(false);
          toast({
            description: "You Successfully posted a question",
            variant: "secondary",
          });
          if (pathname.includes("/dashboard/post/")) {
            router.push(`/dashboard/post/${returnedPost?.id}`)
          } else {
            setOpenEditorModal(false);
          }
        }
        setOpenEditorModal(false);
        setProceed(false);
      }
    } catch (error) { }
  };

  const onError = (data: any) => console.log("err: ", data);


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
          <form action="" onSubmit={handleSubmit(onSubmit, onError)} className=" flex flex-col items-end">
            <Controller
              name="someDraft"
              control={control}
              render={({ field }) => {
                return (
                  <Editor
                    editorStyle={{
                      padding: "0px 10px 10px",
                      height: "200px"
                    }}
                    editorState={field.value}
                    wrapperClassName="wrapper-class"
                    toolbarClassName={`flex !justify-start mx-auto min-w-[345px] lg:min-w-[802px]`}
                    editorClassName=" shadow-sm border border-gray-400 rounded-md  px-2 min-h-[200px] min-w-[345px] lg:max-w-[802px] mx-auto"
                    onEditorStateChange={field.onChange}
                    toolbar={
                      {
                        options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'history'],
                        inline: { inDropdown: true },
                        list: { inDropdown: true },
                        textAlign: { inDropdown: true },
                        link: { inDropdown: true },
                        history: { inDropdown: true },
                        image: { inDropdown: true }
                      }
                    }
                  />
                );
              }}
            />
            <div className="flex gap-3 justify-end items-center my-2  pr-5">
              <button
                onClick={() => {
                  setOpenEditorModal(false);
                }}
                className="border border-[#2F9B4E] text-[#2F9B4E] ml-auto z-[2000] px-[8px] py-[4px] w-fit h-[40px] rounded-md "
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={savingPost || disableButton}
                className={`  ${savingPost || disableButton ? "bg-[#2F9B4E]/70 cursor-not-allowed" : "bg-[#2F9B4E] cursor-pointer"} ml-auto w-fit h-[40px]  py-[14px] px-[24px] rounded-[5px] text-white  text-center text-[16px] leading-[21px] tracking-[-0.04em] ${satoshi.className}`}
              >
                {savingPost ? <FaSpinner className="animate-spin h-8 w-8 text-white" /> : "Post Question"}
              </button>
            </div>
          </form>
        </div>

      </div>
    </ModalEditor>
  );
};

export default EditorModal;
