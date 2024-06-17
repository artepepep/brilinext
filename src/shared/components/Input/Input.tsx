"use client"

import { FormikProps } from "formik"
import SharedSpriteSVG from "@/shared/images/SharedSpriteSVG";
import {useState} from "react";

type Props = {
  id: string,
  formik: FormikProps<any>,
  placeholder: string,
  errorText?: string,
  password?: boolean,
}

export default function Input ({ id, formik, placeholder, errorText, password }: Props) {
  const error = formik.touched[id] && formik.errors[id];
  const [openEye, setOpenEye] = useState(false);

  return (
    <div className="relative py-4">
      <label className={`absolute top-0 left-4 ${formik.values[id] ? "block" : "hidden"} text-sm`} htmlFor={id}>{placeholder}</label>
      {password ? (
        <div className={`flex items-center justify-between border-b-[1px] ${error ? "border-b-[#C60047]" : "border-b-black hover:border-b-[#3892F5]"} dark:${error ? "border-b-[#C60047]" : "border-b-white dark:hover:border-b-[#3892F5]"}`}>
          <input
            type={openEye ? "text" : "password"}
            id={id}
            placeholder={placeholder}
            onChange={formik.handleChange}
            value={formik.values.id}
            className={`block w-full bg-transparent pt-3 pb-5 px-4 outline-none text-black dark:text-[#D9D9D9] placeholder-current`}
          />
          <button type={"button"} onClick={() => setOpenEye(!openEye)}>
            <SharedSpriteSVG name={openEye ? "closeEye" : "openEye"} />
          </button>
        </div>
      ) : (
        <input
          id={id}
          placeholder={placeholder}
          onChange={formik.handleChange}
          value={formik.values.id}
          className={`block w-full bg-transparent pt-3 pb-5 px-4 outline-none ${error ? "border-b-[#C60047]" : "border-b-black hover:border-b-[#3892F5]"} dark:${error ? "border-b-[#C60047]" : "border-b-white dark:hover:border-b-[#3892F5]"} border-b-[1px] text-black dark:text-[#D9D9D9] placeholder-current`}
        />
      )}
      {error && (
        <p className="absolute right-0 bottom-0 text-[#C60047] text-xs">{errorText}</p>
      )}
    </div>
  )
}