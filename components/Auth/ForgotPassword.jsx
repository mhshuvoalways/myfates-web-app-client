import AuthImg from "@/public/auth/auth.png";
import enableBtn from "@/store/actions/btnAction";
import notiAction from "@/store/actions/notiAction";
import axios from "@/utils/axios";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../common/Button";
import { useTranslation } from "next-i18next";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const { t } = useTranslation("auth");
  const fpdes = t("fpdes");
  const fpBtn = t("fpBtn");

  const dispatch = useDispatch();

  const findMail = (e) => {
    e.preventDefault();
    setError("");
    dispatch(enableBtn(false));
    axios
      .post("/user/findmail", { email })
      .then((res) => {
        dispatch(notiAction(res.data.message));
        dispatch(enableBtn(true));
      })
      .catch((err) => {
        setError(err.response?.data.email);
        dispatch(notiAction(err.response?.data.message));
        dispatch(enableBtn(true));
      });
  };

  return (
    <div className="bg-my-cream p-10 h-full md:h-[100vh] flex justify-center items-center">
      <div className="bg-white max-w-3xl mx-auto flex flex-wrap md:flex-nowrap justify-between p-10 md:p-20 gap-12 items-center flex-col-reverse md:flex-row">
        <div className="w-8/12 md:w-5/12 mx-auto">
          <Image src={AuthImg} alt="" />
        </div>
        <form className="w-full md:w-7/12 space-y-8" onSubmit={findMail}>
          <p className="text-gray-500 text-lg">{fpdes}</p>
          <div>
            <div
              className={`flex gap-3 border-b-2 pb-2 ${
                error ? "border-red-500" : "border-gray-400"
              }`}
            >
              <i className="fa-solid fa-user mt-1"></i>
              <input
                type="email"
                className={`w-full outline-0`}
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <p
              className={`text-red-500 text-sm mt-1 ${
                error ? "opacity-100" : "opacity-0"
              }`}
            >
              {error}
            </p>
          </div>
          <Button value={fpBtn} />
        </form>
      </div>
    </div>
  );
};

export default Signup;
