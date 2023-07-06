"use client"

import { Dispatch, ReactNode, SetStateAction } from "react";
import {Button} from "primereact/button"
import {Dialog} from "primereact/dialog"

type DialogProp = {
    visible: boolean;
    setVisible: (visible: boolean) => boolean
    children: ReactNode
  }
  
   const DialogInput = ({visible, setVisible, children}: DialogProp) => {
  
      const footerContent = (
          <div>
              <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
              <Button label="Yes" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
          </div>
      );
    return (
      <div className="card flex justify-content-center">
        <Dialog
          header="Edit Personal Information"
          visible={visible}
          style={{ width: "50%", margin: "0px" }}
          onHide={() => setVisible(false)}
          footer={footerContent}
        >
        {children}
        </Dialog>
      </div>
    );
  };

  export default DialogInput;
  