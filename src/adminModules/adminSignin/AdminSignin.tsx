"use client"

import {GradientButton, Input, Logotype} from "@/shared/components";
import {useFormik} from "formik";
import * as Yup from "yup";
import SpriteSVG from "./components/SpriteSVG";
import Link from "next/link";
import {useState} from "react";
import AdminModal from "./components/AdminModal";

export default function AdminSignin () {
  // const url = "http://pepka2222222.pythonanywhere.com/api/v1/auth-api/login/";
  const [modalDisplay, setModalDisplay] = useState<"hidden" | "block">("hidden");

  const formik= useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required().min(8),
    }),
    onSubmit: async (values, { resetForm }) => {
      resetForm();

      // const data = {
      //   userName: ,
      //   password: ,
      // }

      // await fetch(url, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // })
    },
  });

  const modalFormik= useFormik({
    initialValues: {
      modalEmail: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required(),
    }),
    onSubmit: async (values, { resetForm }) => {
      resetForm();
      setModalDisplay("hidden");
    },
  });

  return (
    <div className={"mx-auto mt-[132px] mb-[200px] w-[628px]"}>
      <div className={"flex flex-col items-center justify-center gap-10 mb-10"}>
        <Logotype className={"text-[60px]"}/>
        <h2 className={"text-[32px] text-[#D9D9D9]"}>Log in</h2>
      </div>
      <form onSubmit={(event) => {
        formik.handleSubmit;
      }}>
        <Input
          errorText={`${formik.values.email ? "Incorrect email format" : "This field is required"}`}
          id={"email"}
          formik={formik}
          placeholder={"Email"}
        />
        <Input
          errorText={"The password is not valid"}
          id={"password"}
          formik={formik}
          placeholder={"Password"}
          password={true}
        />
        <button
          onClick={() => setModalDisplay("block")}
          type={"button"}
          className={"mt-10 text-[16px] text-[#FAFAFA]"}>
          Forgot your password?
        </button>
        <div className={"flex items-center justify-center"}>
          <GradientButton type="submit" text='sign in' uppercase={true}/>
        </div>
      </form>
      <div className={"flex items-center justify-between mt-[54px] text-[#525252]"}>
        <SpriteSVG name={"dottedLine"}/>
        <p>or</p>
        <SpriteSVG name={"dottedLine"}/>
      </div>
      <Link className={"block w-fit mt-10 mx-auto"} href={"/admin-signin"}>
        <SpriteSVG name={"google"} />
      </Link>
      <AdminModal
        modalClick={() => setModalDisplay("hidden")}
        modalDisplay={modalDisplay}
        formik={modalFormik}
      />
    </div>
)
}