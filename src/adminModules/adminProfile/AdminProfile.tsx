"use client"

import {useFormik} from "formik";
import * as Yup from "yup";
import {GradientButton, Input} from "@/shared/components";
import {useState} from "react";

export default function AdminProfile () {
  const [passwordInputDisplay, setPasswordInputsDisplay] = useState(false);

  const formik= useFormik({
    initialValues: {
      newPassword: "",
      repeatPassword: "",
    },
    validationSchema: Yup.object().shape({
      newPassword: Yup.string().required().min(8),
      repeatPassword: Yup.string().oneOf([Yup.ref("newPassword")]).required(),
    }),
    onSubmit: async (values, { resetForm }) => {
      resetForm();
    },
  });

  return (
    <div className={"max-w-[628px]"}>
      <h2 className={"mb-8 text-[32px] text-[#3892F5]"}>Profile</h2>
      <form className={"flex flex-col gap-5"} onSubmit={formik.handleSubmit}>
        <Input
          id={"name"}
          formik={formik}
          placeholder={"Name"}
        />
        <Input
          id={"email"}
          formik={formik}
          placeholder={"Email"}
        />
        <Input
          id={"phone"}
          formik={formik}
          placeholder={"Phone"}
        />
        {passwordInputDisplay ? (
          <div className={"flex flex-col gap-5 "}>
            <Input
              id={"newPassword"}
              formik={formik}
              placeholder={"New password"}
              password={true}
            />
            <Input
              id={"confirmPassword"}
              formik={formik}
              placeholder={"Confirm password"}
              password={true}
            />
            <GradientButton text={"save"} uppercase={true} type={"submit"} />
          </div>
        ) : (
          <div className={"mt-8 md:mt-10"}>
            <GradientButton
              onClick={() => setPasswordInputsDisplay(true)}
              text={"edit"}
              uppercase={true}
              type={"button"}
            />
          </div>
        )}
      </form>
    </div>
  )
}