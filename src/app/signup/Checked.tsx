"use client";
import { useFormikContext } from "formik";
import React from "react";

const Checked = () => {
  const { errors } = useFormikContext();
  console.log("errors::: ", errors);
  return <div>Checked</div>;
};

export default Checked;
