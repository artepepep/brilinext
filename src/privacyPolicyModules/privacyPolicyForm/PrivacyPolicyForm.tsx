"use client"

import { Contacts, Container, GradientButton, Input, Modal, Section } from "@/shared/components";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from 'yup';

export default function PrivacyPolicyForm () {
  const [modalDisplay, setModalDisplay] = useState("hidden");

  const url = "https://companypage-55ef8dd3b024.herokuapp.com/api/v1/send-email-pp/";
  
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      message: Yup.string().required(),
    }),
    onSubmit: async (values, { resetForm }) => {
      const data = {
        "name": values.name,
        "email": values.email,
        "message": values.message,
      };

      setModalDisplay("flex");
      resetForm();
      
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
  })

  return (
    <Section>
      <Container>
        <div className="flex flex-col xl:flex-row">
          <div className="flex flex-col gap-10 xl:w-1/2">
            <h3 className="text-[32px] uppercase xl:text-[48px]">Contacting us</h3>
            <p>
              In the event you have any questions, comments and requests about the information set out in this Privacy Policy, please contact us by submitting the form below.
            </p>
            <Contacts withIcons={true} />
          </div>
          <form className="pb-[120px] xl:w-1/2 xl:pl-4" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-4 mb-8 mt-12 xl:mt-0">
              <Input formik={formik} id={"name"} errorText="This field is required" placeholder="Name" />
              <Input 
                formik={formik} 
                id={"email"} 
                errorText={`${formik.values.email ? "Incorrect email format" : "This field is required"}`} 
                placeholder="Email" 
              />
              <div className="relative pb-4">
                <label className={`absolute top-0 left-4 ${formik.values.message ? "block" : "hidden"} text-sm`} htmlFor="tellMore">Message</label>
                <textarea
                  onChange={formik.handleChange}
                  id={"message"}
                  className={`block min-h-[80px] w-full bg-white dark:bg-black pt-7 px-4 outline-none border-b-[1px] text-black dark:text-[#D9D9D9] placeholder-current ${(formik.touched["message"] && formik.errors["message"]) ? "border-b-[#C60047]" : "border-b-black hover:border-b-[#3892F5]"} dark:${(formik.touched["message"] && formik.errors["message"]) ? "border-b-[#C60047]" : "border-b-white dark:hover:border-b-[#3892F5]"}`} 
                  placeholder="Message"
                />
                {formik.touched["message"] && formik.errors["message"] && (
                  <p className="absolute right-0 bottom-0 text-[#C60047] text-xs">This field is required</p>
                )}
              </div>
              <GradientButton type="submit" text="send" uppercase={true} />
            </div>
            <Modal
              modalClick={() => setModalDisplay("hidden")}
              modalDisplay={modalDisplay}
            >
              <div className="flex flex-col items-center gap-6 mt-10 text-center">
                <p className="text-[32px]">Message sent</p>
                <p className="text-xl">Our specialist will contact you shortly.</p>
              </div>
            </Modal>
          </form>
        </div>
      </Container>
    </Section>
  )
}