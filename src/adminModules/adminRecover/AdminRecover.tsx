"use client"

import {GradientButton, Input, Logotype, Modal} from "@/shared/components";
import {useFormik} from "formik";
import * as Yup from "yup";

export default function AdminRecover () {
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
    <div className={"mx-auto mt-[132px] mb-[200px] w-[628px]"}>
      <div className={"flex flex-col items-center justify-center gap-10 mb-10"}>
        <Logotype className={"text-[60px]"}/>
        <h2 className={"text-[32px] text-[#D9D9D9]"}>Create a new password</h2>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <Input
          id={"newPassword"}
          formik={formik}
          placeholder={"New password"}
          password={true}
        />
        <Input
          id={"repeatPassword"}
          formik={formik}
          placeholder={"Repeat the password"}
          password={true}
        />
        <div className={"flex items-center justify-center"}>
          <GradientButton type="submit" text='sign in' uppercase={true}/>
        </div>
      </form>
    </div>
  )
}