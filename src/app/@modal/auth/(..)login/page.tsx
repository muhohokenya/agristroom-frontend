import Login from "@/src/components/auth/Login";
import Modal from "@/src/components/modals/Modal";

const Page = () => {
  return (
    <div className=" absolute w-full max-w-[1440px] mx-auto flex">
      <Modal>
        <Login />
      </Modal>
    </div>
  );
};

export default Page;
