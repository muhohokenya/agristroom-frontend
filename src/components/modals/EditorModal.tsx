import { satoshi } from "@/src/fonts/Fonts";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../hooks/react-redux-hooks";
import { toast } from "../../hooks/use-toast";
import { UseEditorModal } from "../../hooks/useEditorModalContext";
import { ManagedUI } from "../../hooks/useModalContext";
import fileUploader from "../../lib/file-uploading";
import { getCurrentUser } from "../../redux/actions/auth.action.action";
import { postQuestion } from "../../redux/actions/postQuestion.action";
import Progress from "../ProgressBar";
import ModalEditor from "./ModalEditor";


const EditorModal = () => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const imageUploadRef = useRef<HTMLInputElement | null>(null);
  const { setOpenEditorModal } = useContext(UseEditorModal);
  const user = useAppSelector((state) => state.currentUser);
  const { proceed, setProceed, setOpenModal } = useContext(ManagedUI);
  const [savingPost, setSavingPost] = useState(false);
  const [disableButton, setDisableButton] = useState(true)
  const [title, setTitle] = useState<string>("")
  const [value, setValue] = useState<number>(0)
  const [profileImage, setProfileImage] = useState("")
  const [image, setImage] = useState()
  const [loadingImage, setLoadingImage] = useState(false)
  const [description, setDescription] = useState("")


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

  const { handleSubmit } = useForm();

  const onSubmit = async () => {
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
          description: description,
          image: image
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
          setDescription("")
        } else {
          toast({
            description: `${res?.payload?.result}`,
            variant: "secondary",
          })
        }
        setDescription("")
        setOpenEditorModal(false);
        setProceed(false);
        setSavingPost(false);
        setProfileImage("")
      }
    } catch (error) {
      setSavingPost(false);
      setDescription("")
      setProfileImage("")
    }
  };


  return (
    <ModalEditor>
      <div className="flex flex-col bg-white h-auto rounded-md px-2">
        <div className="flex flex-col mt-2 px-2 py-1 rounded-md border border-slate-400 ">
          <h2 className="text-[16px] text-black leading-4">Title</h2>
          <p className="text-[13px] text-black mt-1">Be specific and imagine you are asking a question to another person.</p>
          <p className="text-[10px] text-black mt-1">A range of 20 to 100 characters.</p>
          <Progress value={value} />
          <textarea
            onChange={handleText}
            className=" w-[65%] mt-2 outline-0 rounded-md px-2 py-2 border border-[#2F9B4E] h-[40px] text-[13px]" />
        </div>
        <div className="flex flex-col">
          <div className="mt-1 flex flex-col">
            <span className="text-[13px] text-black">Optional</span>
            <div className="flex gap-2">
              <button
                className="text-[#2F9B4E] bg-[#DBF3D9] p-1 px-2 w-fit rounded-md mt-1 "
                onClick={() =>
                  imageUploadRef?.current?.click()
                }
                type="button"
              >Upload Image</button>
              <button
                className={`text-[#2F9B4E] bg-[#DBF3D9] p-1 px-2 w-fit rounded-md ${profileImage === "" ? 'hidden' : "block"}`}
                onClick={() =>
                  setProfileImage("")
                }
                type="button"
              >Remove Image</button>
            </div>
          </div>
          {loadingImage ? (
            <span className="text-[13px] text-black">Loading image...</span>
          ) : (
            <div className={`${profileImage === "" ? 'hidden' : "block"} border border-slate-200 mt-1 rounded-md max-w-[200px] max-h-[150px]`}>
              <Image src={profileImage === "" ? "" : profileImage}
                width={200}
                height={130}
                alt="prof"
                className={` object-scale-down rounded-md object-center my-1 ${profileImage === "" ? 'hidden' : "block"}`} />
            </div>
          )}

          <div className=" mb-[15px] flex mt-1 sm:flex-row sm:mt-1 md:flex-col lg:flex-col gap-3 items-center">
            <input
              ref={imageUploadRef}
              onChange={async (e: any) => {
                if (
                  e.target.files?.length === 0
                )
                  return;
                const file = e.target.files[0];
                setImage(file)
                try {
                  setLoadingImage(true)
                  const url =
                    await fileUploader(
                      file
                    );
                  setLoadingImage(false)
                  setProfileImage(url);
                } catch (error) {
                  setLoadingImage(false)
                }
              }}
              className="hidden"
              type="file"
              id=""
            />
          </div>
        </div>
        <div className={`flex flex-col rounded-md px-2 border mt-2 mb-2 border-slate-400 ${!proceed ? " bg-white opacity-40" : ""}`}>
          <div className="mb-3">
            <h2 className="text-[16px] text-black mt-2 leading-4">What are the details of your Question?</h2>
            <p className="text-[13px] text-black mt-2">Introduce your problem and expand on what you put in the title. A minimum of 20 characters .</p>
          </div>

          {/* form */}
          <form action="" onSubmit={handleSubmit(onSubmit)} className=" flex flex-col items-end">
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={2} className="shadow-sm p-2 outline-0 border border-gray-400 rounded-md  px-2 min-h-[200px] w-full mx-auto" />
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
                className={`  ${savingPost || disableButton ? "bg-[#2F9B4E]/70 cursor-not-allowed" : "bg-[#2F9B4E] cursor-pointer"} ml-auto w-fit h-[40px] px-[24px] rounded-[5px] text-white  text-center text-[16px] leading-[21px] tracking-[-0.04em] ${satoshi.className}`}
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
