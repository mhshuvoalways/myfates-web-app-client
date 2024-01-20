import AuthImg from "@/public/auth/auth.png";
import LoginBtn from "@/public/auth/loginbtn.png";
import notiAction from "@/store/actions/notiAction";
import {
  isAuthenticate,
  register,
  userLoginwithGoogle,
} from "@/store/actions/userAction";
import { useGoogleLogin } from "@react-oauth/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch, useSelector } from "react-redux";
import Button from "../common/Button";
import { useTranslation } from "next-i18next";

const Signup = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    recaptcha: "",
  });

  const { t } = useTranslation("auth");
  const signup = t("signup");
  const des = t("des");
  const isAccount = t("isAccount");

  const dispatch = useDispatch();
  const router = useRouter();
  const userReducer = useSelector((store) => store.userReducer);

  const userChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const captchaHandler = (value) => {
    setUserData({
      ...userData,
      recaptcha: value,
    });
  };

  const login = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      dispatch(userLoginwithGoogle(credentialResponse.access_token, router));
    },
    onError: () => {
      dispatch(notiAction("Login Failed"));
    },
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(register(userData, router));
  };

  useEffect(() => {
    dispatch(isAuthenticate());
  }, [dispatch]);

  useEffect(() => {
    if (userReducer.isAuthenticate) {
      router.push("/");
    }
  }, [router, userReducer.isAuthenticate]);

  return (
    <div className="bg-my-cream p-10 h-full md:h-[126vh] flex justify-center items-center">
      <div className="bg-white max-w-3xl mx-auto flex flex-wrap md:flex-nowrap justify-between p-10 md:p-20 gap-12 items-center flex-col-reverse md:flex-row">
        <div className="space-y-10 w-8/12 md:w-5/12 mx-auto">
          <Image src={AuthImg} alt="" />
          <p className="text-center">
            <Link href="/login" className="underline">
              {isAccount}
            </Link>
          </p>
        </div>
        <div className="w-full md:w-7/12">
          <div className="space-y-5">
            <p className="tracking-widest text-4xl font-gabarito">{signup}</p>
            <p className="text-gray-500 text-lg">{des}</p>
          </div>
          <div className="mt-10 space-y-5">
            <Image
              src={LoginBtn}
              alt=""
              onClick={() => login()}
              className="cursor-pointer w-6/12"
            />
            <p>Or</p>
          </div>
          <form className="space-y-7 mt-8" onSubmit={onSubmitHandler}>
            <div>
              <div
                className={`flex gap-3 border-b-2 pb-2 ${
                  userReducer.error?.email
                    ? "border-red-500"
                    : "border-gray-400"
                }`}
              >
                <i className="fa-solid fa-user mt-1"></i>
                <input
                  type="text"
                  className="w-full outline-0"
                  placeholder="Your Email"
                  name="email"
                  onChange={userChange}
                />
              </div>
              <p
                className={`text-red-500 text-sm mt-1 ${
                  userReducer.error?.email ? "opacity-100" : "opacity-0"
                }`}
              >
                {userReducer.error?.email}
              </p>
            </div>
            <div>
              <div
                className={`flex gap-3 border-b-2 pb-2 ${
                  userReducer.error?.password
                    ? "border-red-500"
                    : "border-gray-400"
                }`}
              >
                <i className="fa-solid fa-lock mt-1"></i>
                <input
                  type="password"
                  className="w-full outline-0"
                  placeholder="Your Password"
                  name="password"
                  onChange={userChange}
                />
              </div>
              <p
                className={`text-red-500 text-sm mt-1 ${
                  userReducer.error?.password ? "opacity-100" : "opacity-0"
                }`}
              >
                {userReducer.error?.password}
              </p>
            </div>
            <div>
              <ReCAPTCHA
                sitekey={process.env.SITE_KEY}
                onChange={captchaHandler}
              />
              <p
                className={`text-red-500 text-sm mt-1 ${
                  userReducer.error?.recaptcha ? "opacity-100" : "opacity-0"
                }`}
              >
                {userReducer.error?.recaptcha}
              </p>
            </div>
            <Button value={"SIGN UP"} className={"w-full"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
