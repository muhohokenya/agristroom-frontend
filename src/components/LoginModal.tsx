import React from "react";
import ModalLogin from "./ModalLogin";
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
