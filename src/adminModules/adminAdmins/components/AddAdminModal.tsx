"use client"

import SharedSpriteSVG from "@/shared/images/SharedSpriteSVG";
import React, {MouseEventHandler} from "react";
import {GradientButton, Input, TransparentButton} from "@/shared/components";
import {useFormik} from "formik";
import * as Yup from "yup";

type Props = {
  modalDisplay: string,
  closeClick: MouseEventHandler<HTMLButtonElement>,
}

export default function AddAdminModal ({ modalDisplay, closeClick }: Props) {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
    }),
    onSubmit: async (values, { resetForm }) => {
      resetForm();
    },

  })

  return (
    <div
      className={`fixed ${modalDisplay} z-20 top-0 left-0 w-full h-screen bg-black bg-opacity-40`}
    >
      <div
        className="fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-10 max-h-[664px] py-10 px-12 rounded-[4px] bg-white overflow-auto">
        <div className={"flex justify-between w-[628px]"}>
          <h3 className={"text-[#3892F5]"}>Add admin</h3>
          <button onClick={closeClick} className="block ml-auto mr-0 text-[32px]" type={"button"}>
            <SharedSpriteSVG name="closeButton"/>
          </button>
        </div>
        <Input id={"name"} formik={formik} placeholder={"Name"} />
        <Input id={"email"} formik={formik} placeholder={"Email"} />
        <GradientButton text={"send an invite"} uppercase={true} type={"submit"}/>
      </div>
    </div>
  )
}