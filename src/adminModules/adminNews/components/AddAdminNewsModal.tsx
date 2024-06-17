"use client"

import SharedSpriteSVG from "@/shared/images/SharedSpriteSVG";
import React, {ChangeEvent, MouseEventHandler, useState} from "react";
import Select from "react-select";
import {GradientButton, Input} from "@/shared/components";
import {useFormik} from "formik";
import * as Yup from "yup";
import ImageFileInput from "@/adminModules/adminNews/components/ImageFileInput";
import TextEditor from "@/adminModules/adminNews/components/TextEditor";

type Props = {
  modalDisplay: string,
  closeClick: MouseEventHandler<HTMLButtonElement>,
}

export default function AddAdminNewsModal({ modalDisplay, closeClick }: Props) {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      companyName: "",
      service: "",
      tellMore: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      companyName: Yup.string(),
      service: Yup.string(),
      tellMore: Yup.string(),
    }),
    onSubmit: async (values, { resetForm }) => {
      const data = {
        "name": values.name,
        "email": values.email,
        "company_name": values.companyName,
        "interested_service": values.service,
        "details": values.tellMore,
      };

      resetForm();
    },
  });

  const options = [
    { value: 'AI', label: 'AI' },
    { value: 'Web', label: 'Web' },
    { value: 'Mobile', label: 'Mobile' },
    { value: "Company", label: "Company" },
    { value: "Tech talk", label: "Tech talk" },
    { value: "Design", label: "Design" }
  ];

  const [image, setImage]  = useState<any>();

  const fileInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files![0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    console.log(url);
    console.log(file);
    setImage(url);
  }

  const [color, setColor] = useState("#000000");
  const [colorsDisplay, setColorsDisplay] = useState(false);

  return (
    <div
      className={`fixed ${modalDisplay} z-20 top-0 left-0 w-full h-screen bg-black bg-opacity-40`}
    >
      <div
        className="w-fit fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[664px] py-10 px-12 rounded-[4px] bg-white overflow-auto">
        <div className={"flex justify-between w-[900px]"}>
          <h3 className={"text-[#3892F5]"}>Add news</h3>
          <button onClick={closeClick} className="block ml-auto mr-0 text-[32px]" type={"button"}>
            <SharedSpriteSVG name="closeButton"/>
          </button>
        </div>
        <form>
          <div className={"flex flex-col gap-5 mt-10"}>
            <Select
              instanceId={"service"}
              options={options}
              unstyled={true}
              placeholder={"The service you are interested in"}
              onChange={() => {
              }}
              classNames={{
                control: () => (`pt-3 pb-5 px-4 border-b-[1px] text-black border-b-black dark:border-b-white dark:text-[#D9D9D9] hover:border-b-[#3892F5] dark:hover:border-b-[#3892F5]`),
                option: () => ("py-5 px-5"),
                menu: () => ("w-full bg-white dark:bg-black"),
                dropdownIndicator: () => (""),
              }}/>
            <Input id={"title"} formik={formik} placeholder={"Title"} />
            <ImageFileInput
              image={image}
              onChange={(event) => fileInputHandler(event)}
            />
            <div className={"flex flex-col gap-3"}>
              <p className={"text-[16px] text-[#525252]"}>Text</p>
              <div className={"border-[1px] border-[#525252] rounded-[20px]"}>
                <TextEditor />
              </div>
            </div>
          </div>

          <div className={"mt-10"}>
            <GradientButton
              onClick={closeClick}
              text={"save"}
              uppercase={true}
              type={"button"}
            />
          </div>
        </form>
      </div>
    </div>
  )
}