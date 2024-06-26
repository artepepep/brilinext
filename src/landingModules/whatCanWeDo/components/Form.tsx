"use client"

import { GradientButton, Input } from '@/shared/components';
import Select from 'react-select';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useState } from "react";
import { Modal } from "@/shared/components";


export default function Form () {
  const [modalDisplay, setModalDisplay] = useState("hidden");

  const url = "https://companypage-55ef8dd3b024.herokuapp.com/api/v1/send-email/";

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
      
      setModalDisplay("flex");
      resetForm();
      
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
    },
  });

  const options = [
    { value: 'WebMobile', label: 'Web & mobile app development' },
    { value: 'QA', label: 'Quality Assurance & Testing' },
    { value: 'Design', label: 'UX/UI Design' },
    { value: "Support", label: "Technical Support" },
    { value: "AI", label: "AI apps & Integration" }
  ]

  return (
    <form onSubmit={formik.handleSubmit} className="mt-10 pb-[120px] overflow-hidden xl:w-1/2 md:mt-0">
      <div className="flex flex-col gap-4 mb-8">
        <Input formik={formik} id={"name"} errorText="This field is required" placeholder="Name" />
        <Input 
          formik={formik} 
          id={"email"} 
          errorText={`${formik.values.email ? "Incorrect email format" : "This field is required"}`} 
          placeholder="Email" 
        />
        <Input formik={formik} id={"companyName"} placeholder="Your company name" />
        <div className="relative py-4">
          <label className={`absolute top-0 left-4 ${formik.values.service ? "block" : "hidden"} text-sm`} htmlFor="react-select-service-input">Service</label>
          <Select
            instanceId={"service"}
            options={options} 
            unstyled={true} 
            placeholder={"The service you are interested in"}
            onChange={(option) => formik.setFieldValue("service", option?.label)}
            classNames={{
              control: () => (`pt-3 pb-5 px-4 border-b-[1px] text-black border-b-black dark:border-b-white dark:text-[#D9D9D9] hover:border-b-[#3892F5] dark:hover:border-b-[#3892F5]`),
              option: () => ("py-5"),
              menu: () => ("w-full bg-white dark:bg-black"),
              dropdownIndicator: () => (""),
            }} />
        </div>
        <div className="relative">
          <label className={`absolute top-0 left-4 ${formik.values.tellMore ? "block" : "hidden"} text-sm`} htmlFor="tellMore">Tell us more about your project</label>
          <textarea
            onChange={formik.handleChange}
            id={"tellMore"}
            className="block min-h-[80px] w-full bg-white dark:bg-black pt-7 px-4 outline-none border-b-black dark:border-b-white border-b-[1px] hover:border-b-[#3892F5] dark:hover:border-b-[#3892F5] text-black dark:text-[#D9D9D9] placeholder-current" 
            placeholder="Tell us more about your project"
          />
        </div>
        <GradientButton type="submit" text='send' uppercase={true} />
      </div>
      <Modal
        modalClick={() => setModalDisplay("hidden")}
        modalDisplay={modalDisplay}>
        <div className="flex flex-col items-center gap-6 mt-10 text-center">
          <p className="text-[32px]">Message sent</p>
          <p className="text-xl">Our specialist will contact you shortly.</p>
        </div>
      </Modal>
    </form>
  )
}