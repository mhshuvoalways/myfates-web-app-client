import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { isAuthenticate } from "@/store/actions/userAction";
import DashIcon from "@/public/header/dashboardicon.png";
import Language from "./Language";
import Logo from "@/public/header/logo.png";
import { useTranslation } from "next-i18next";

const Header = ({ toggleSidebar, userReducer }) => {
  const dispatch = useDispatch();

  const { t } = useTranslation("sidebar");
  const header = t("header", { returnObjects: true });

  useEffect(() => {
    dispatch(isAuthenticate());
  }, [dispatch]);

  const token = typeof window !== "undefined" && localStorage.getItem("token");

  return (
    <div className={`shadow-sm fixed left-0 right-0 bg-white z-50`}>
      <div className="mx-auto flex justify-between items-center gap-0 sm:gap-5 flex-wrap py-1 mycontainer">
        <button
          className="text-[26px] text-black w-32 text-start sm:block hidden"
          onClick={toggleSidebar}
        >
          ☰
        </button>
        <Link href="/">
          <Image src={Logo} className="w-40 static sm:absolute top-2" alt="" />
        </Link>
        <div
          className={`flex items-center gap-3 ml-auto md:ml-0 ${
            userReducer.isAuthenticate ? "lg:-ml-36" : "lg:-ml-60"
          }`}
        >
          <div className="block sm:hidden">
            <Language />
          </div>
          <button
            className="text-[26px] text-black block sm:hidden ml-auto"
            onClick={toggleSidebar}
          >
            ☰
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Language />
          </div>
          <div className="gap-2 hidden sm:flex ml-auto text-end">
            {userReducer.isAuthenticate ? (
              userReducer.user?.subscriptionPlan?.planType ? (
                <Link
                  href={`${process.env.DASHBOARD_URL}/login?token=${token}`}
                  className="w-0 sm:w-6 cursor-pointer ml-auto hidden sm:block"
                  target="_blank"
                >
                  <Image src={DashIcon} alt="" />
                </Link>
              ) : (
                <Link
                  href={"/pricing?suggest=payment"}
                  className="w-0 sm:w-6 cursor-pointer ml-auto hidden sm:block"
                >
                  <Image src={DashIcon} alt="" />
                </Link>
              )
            ) : (
              <>
                <Link href="signup">
                  <p className="cursor-pointer hover:text-gray-800 text-my-text-gray">
                    {header.signup}
                  </p>
                </Link>
                <p className="text-my-text-gray">/</p>
                <Link href="/login">
                  <p className="text-my-text-gray cursor-pointer hover:text-gray-800">
                    {header.login}
                  </p>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
