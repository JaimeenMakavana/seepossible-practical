"use client";
import React, { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputFIelds from "@/Components/FormComponents/InputFIelds";
import { AddressSchema } from "@/ValidationSchema/AddressFormSchema";
import { GlobalContext } from "@/Context/GlobalContext";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import FormInput from "./FormInput";
import { toast } from "react-toastify";

const Page = () => {
  const { setAddressData, AddressData, isSignin } = useContext(GlobalContext);
  const router = useRouter();
  const params = useSearchParams();
  //   type string
  const selectedId = params.get("id");

  if (!isSignin) {
    router.push("/signup");
    return;
  }
  return (
    <div className=" py-20">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phoneNumber: "",
          address1: "",
          address2: "",
          city: "",
          state: "",
          country: "",
          telephone: "",
        }}
        validationSchema={AddressSchema}
        onSubmit={(values, { resetForm }) => {
          if (Number(selectedId) > 0) {
            // for update part
            const updatedData = AddressData.map((item: any) =>
              item.addressId === Number(selectedId)
                ? { ...item, ...values }
                : item
            );
            setAddressData(updatedData);
          } else {
            // for insert part
            const newValue = {
              ...values,
              addressId: AddressData[AddressData.length - 1].addressId + 1,
            };
            console.log("newValue::: ", newValue);
            setAddressData([...AddressData, newValue]);
          }
          router.push("/address");
        }}
      >
        {({ errors }) => {
          console.log("errors::: ", errors);
          return (
            <Form className=" border my-5 md:max-w-[500px]  mx-auto grid md:grid-cols-2 gap-5 p-5">
              <FormInput />
              <InputFIelds name="lastName" label="Last Name" />
              <InputFIelds name="address1" label="Address" />
              <div className="block">
                <span
                  className={`text-[--dark-text] opacity-0 text-medium font-normal text-left mb-1`}
                >
                  sdf
                </span>
                <Field
                  type="text"
                  name="address2"
                  className="mt-1 w-full outfit bg-transparent border  px-[12px] py-[5px]  outline-none"
                />
                <ErrorMessage
                  name="address2"
                  component="p"
                  className="text-red-600 text-[9px] "
                />
              </div>
              <InputFIelds name="city" label="City" />
              <InputFIelds name="state" label="State" />
              <InputFIelds name="country" label="Country" />
              <InputFIelds name="telephone" label="Telephone" />

              <div className=" col-span-full">
                <button
                  type="submit"
                  className=" bg-black text-white w-full py-[5px]"
                >
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Page;
