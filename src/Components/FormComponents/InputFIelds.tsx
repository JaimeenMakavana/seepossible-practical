import { ErrorMessage, Field } from "formik";
import React from "react";

const InputFIelds = ({
  name,
  type = "text",
  label,
  placeholder,
  isMandatory,
}: any) => {
  return (
    <div className="block">
      <span
        className={`text-[--dark-text] text-medium font-normal text-left mb-1 ${
          !label && "opacity-0"
        }`}
      >
        {label}
        {isMandatory && <span className=" text-red-500">*</span>}
      </span>
      <Field
        type={type}
        name={name}
        className="mt-1 w-full outfit bg-transparent border  px-[12px] py-[5px]  outline-none"
        placeholder={placeholder || "Type Here"}
      />
      <ErrorMessage
        name={name}
        component="p"
        className="text-red-600 text-[9px] "
      />
    </div>
  );
};

export default InputFIelds;
