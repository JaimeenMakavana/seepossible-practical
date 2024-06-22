"use client";
import { GlobalContext } from "@/Context/GlobalContext";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext } from "react";

const PageList = ({ name, url }: { name: string; url: string }) => {
  const router = useRouter();

  return (
    <li
      className=" cursor-pointer relative group"
      onClick={() => router.push(url)}
    >
      <span className="absolute left-0 -bottom-1 h-[1px] w-[0.5px] bg-black -z-10 group-hover:w-full group-hover:transition-all"></span>
      {name}
    </li>
  );
};

const PageListData = [
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
  { name: "Blog", url: "/blog" },
  { name: "Service", url: "/service" },
];

const Header = () => {
  const router = useRouter();
  const { isSignup, userData, setIsSignup, setIsSignin } =
    useContext(GlobalContext);
  const pathname = usePathname();

  return (
    <div className="fixed top-3 inset-x-5 h-[50px] glass z-20">
      <div className="h-full w-full flex justify-between items-center px-2">
        <h1
          className=" font-bold cursor-pointer"
          onClick={() => router.push("/")}
        >
          SeePossible
        </h1>

        {/* ------pages------ */}
        <ul className=" flex justify-center  items-center gap-3 md:text-sm xl:text-base">
          {PageListData.map((ele: any) => (
            <PageList key={ele.name} name={ele.name} url={ele.url} />
          ))}
        </ul>
        <div>
          {pathname === "/address" && (
            <p className=" text-xs">
              Welcome,{userData.firstName && userData.firstName}
            </p>
          )}
          {pathname === "/address" ? (
            <p
              className="text-sm cursor-pointer"
              onClick={() => {
                setIsSignin(false);
                router.push("/signup");
              }}
            >
              Logout
            </p>
          ) : (
            <p
              className="text-sm cursor-pointer"
              onClick={() => router.push("/signup")}
            >
              signin
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
