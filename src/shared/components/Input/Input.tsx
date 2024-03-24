import { FormikProps } from "formik"

type Props = {
  id: string,
  formik: FormikProps<any>,
  placeholder: string,
  errorText?: string,
}

export default function Input ({ id, formik, placeholder, errorText }: Props) {
  const error = formik.touched[id] && formik.errors[id];

  return (
    <div className="relative py-4">
      <label className={`absolute top-0 left-4 ${formik.values[id] ? "block" : "hidden"} text-sm`} htmlFor={id}>{placeholder}</label>
      <input 
        id={id}
        placeholder={placeholder} 
        onChange={formik.handleChange}
        value={formik.values.id}
        className={`block w-full bg-white dark:bg-black pt-3 pb-5 px-4 outline-none ${error ? "border-b-[#C60047]" : "border-b-black hover:border-b-[#3892F5]"} dark:${error ? "border-b-[#C60047]" : "border-b-white dark:hover:border-b-[#3892F5]"} border-b-[1px] text-black dark:text-[#D9D9D9] placeholder-current`} 
      />
      {error && (
        <p className="absolute right-0 bottom-0 text-[#C60047] text-xs">{errorText}</p>
      )}
    </div>
  )
}