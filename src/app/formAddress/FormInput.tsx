"use client";
import InputFIelds from "@/Components/FormComponents/InputFIelds";
import { GlobalContext } from "@/Context/GlobalContext";
import { useFormikContext } from "formik";
import { useSearchParams } from "next/navigation";
import React, { useContext, useEffect } from "react";

const FormInput = () => {
  const params = useSearchParams();
  const { SelectedAddressData } = useContext(GlobalContext);
  const { setFieldValue } = useFormikContext();
  console.log("SelectedAddressData::: ", SelectedAddressData);
  //   type string
  const selectedId = params.get("id");

  useEffect(() => {
    if (Number(selectedId) > 0) {
      setFieldValue("firstName", SelectedAddressData.firstName);
      setFieldValue("lastName", SelectedAddressData.lastName);
      setFieldValue("phoneNumber", SelectedAddressData.phoneNumber);
      setFieldValue("address1", SelectedAddressData.address1);
      setFieldValue("address2", SelectedAddressData.address2);
      setFieldValue("city", SelectedAddressData.city);
      setFieldValue("state", SelectedAddressData.state);
      setFieldValue("country", SelectedAddressData.country);
      setFieldValue("telephone", SelectedAddressData.telephone);
    }
  }, []);

  return (
    <div>
      <InputFIelds name="firstName" label="First Name" isMandatory={true} />
    </div>
  );
};

export default FormInput;
