import {GradientButton, Input, Modal} from "@/shared/components";
import {MouseEventHandler} from "react";
import {FormikProps} from "formik";

type Props = {
  modalClick: MouseEventHandler<HTMLElement>,
  modalDisplay: "hidden" | "block",
  formik: FormikProps<any>,
}

export default function AdminModal ({ modalClick, modalDisplay, formik }: Props) {
  return (
    <Modal
      modalClick={modalClick}
      modalDisplay={modalDisplay}
      type={"button"}>
      <form onSubmit={formik.handleSubmit} className={"flex flex-col"}>
        <p className={"text-[20px] mb-10"}>Password recovery</p>
        <Input
          id={"modalEmail"}
          formik={formik}
          errorText={`${formik.values.email ? "Incorrect email format" : "This field is required"}`}
          placeholder={"Email"}
        />
        <div className={"flex items-center justify-center"}>
          <GradientButton
            text={"send password"}
            uppercase={true}
            type={"submit"}
          />
        </div>
      </form>
    </Modal>
  )
}