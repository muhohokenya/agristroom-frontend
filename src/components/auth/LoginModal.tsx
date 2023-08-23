import ModalLogin from "../modals/ModalLogin";
import Login from "./Login";

type Props = {
  route?: string;
}

const LoginModal = ({ route = "" }: Props) => {
  return (
    <ModalLogin>
      <Login route="" />
    </ModalLogin>
  );
};

export default LoginModal;
