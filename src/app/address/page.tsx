"use client";
import { GlobalContext } from "@/Context/GlobalContext";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { TfiTrash } from "react-icons/tfi";
import { toast } from "react-toastify";

const Page = () => {
  const { AddressData, setSelectedAddressData, setAddressData, isSignin } =
    useContext(GlobalContext);

  const [QueryText, setQueryText] = useState("");
  const [filteredData, setFilteredData] = useState(AddressData);

  const router = useRouter();

  //   filter logic
  useEffect(() => {
    setFilteredData(
      AddressData.filter((ele: any) =>
        Object.values(ele).some((val) =>
          String(val).toLowerCase().includes(QueryText.toLowerCase())
        )
      )
    );
  }, [QueryText, AddressData]);

  //   ---handle Edit --- //
  const handleEdit = (ele: any, id: any) => {
    setSelectedAddressData(ele);
    router.push(`/formAddress?id=${id}`);
  };

  //   ---handle Delete --- //
  const handleDeleteAddress = (id: any) => {
    const newAddressData = AddressData.filter(
      (ele: any) => ele.addressId !== id
    );
    setAddressData(newAddressData);
  };

  // redirect logic
  if (!isSignin) {
    toast("Login Required!");
    router.push("/signup");
    return;
  }

  return (
    <div className=" mx-auto">
      <h1 className=" text-lg my-5 font-semibold text-center">Address Book</h1>

      {/* ---search--- */}
      <div className=" flex justify-start items-center  bg-gray-100 relative pl-7 my-10 max-w-[400px] mx-auto">
        <HiMagnifyingGlass className=" absolute left-2 top-3" />
        <input
          type="text"
          className=" focus:outline-none p-2  bg-transparent"
          placeholder="Search address here..."
          onChange={(e: any) => setQueryText(e.target.value)}
        />
      </div>

      {/* -----------*/}
      {/* ---list--- */}
      {/* -----------*/}
      <div className=" flex justify-start overflow-x-auto gap-5 scrollBar">
        {filteredData.map((ele: any) => (
          <div
            key={ele.addressId}
            className="text-black shrink-0 min-w-[200px] p-3 pb-10 bg-gray-100  transition-all overflow-hidden duration-300 cursor-pointer relative"
          >
            <HiOutlinePencil
              className=" absolute right-3 top-3"
              onClick={() => handleEdit(ele, ele.addressId)}
            />
            <p className="my-2 font-semibold italic text-sm">
              #65737{ele.addressId}
            </p>
            <List label="Name" value={ele.firstName + " " + ele.lastName} />
            <List label="Address" value={ele.addressLine1} />
            <p className=" text-sm italic text-gray-600">{ele.addressLine2}</p>
            <List label="City" value={ele.city} />
            <List label="State" value={ele.state} />
            <List label="Country" value={ele.country} />
            <List label="Telephone" value={ele.telephone} />
            <TfiTrash
              className=" absolute bottom-2 right-3"
              onClick={() => handleDeleteAddress(ele.addressId)}
            />
          </div>
        ))}
      </div>
      <p className=" text-center text-xs italic my-3 ">scroll right/left</p>

      {/* -----------*/}
      {/* ---button--- */}
      {/* -----------*/}
      <div className=" w-full flex justify-center items-center my-10">
        <button
          className=" bg-black text-white p-2 mx-auto cursor-pointer"
          onClick={() => router.push("/formAddress")}
        >
          Add New Address
        </button>
      </div>
    </div>
  );
};

export default Page;

const List = ({ label, value }: any) => {
  return (
    <div className=" grid grid-cols-[100px_120px]">
      <p className=" text-sm font-semibold">{label}:</p>
      <p className=" text-sm italic text-gray-600">{value}</p>
    </div>
  );
};
