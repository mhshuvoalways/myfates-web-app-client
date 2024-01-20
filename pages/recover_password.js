import { useState } from "react";
import Image from "next/image";
import axios from "@/utils/axios";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import setAuthToken from "@/utils/setAuthToken";
import Button from "@/components/common/Button";
import AuthImg from "@/public/auth/auth.png";
import enableBtn from "@/store/actions/btnAction";
import notiAction from "@/store/actions/notiAction";

const RecoverPass = () => {
  const [password, setPassword] = useState({
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const router = useRouter();
  const dispatch = useDispatch();

  const findMail = (e) => {
    e.preventDefault();
    dispatch(enableBtn(false));
    setError("");
    if (password.password === password.confirmPassword) {
      const newObj = {
        password: password.password,
        token: router.query.token,
      };
      axios
        .post("/user/recoverpass", newObj)
        .then((response) => {
          dispatch(enableBtn(true));
          setAuthToken(response.data.token);
          typeof window !== "undefined" &&
            localStorage.setItem("token", response.data.token);
          router.push("/");
        })
        .catch((err) => {
          dispatch(enableBtn(true));
          setError(err.response?.data.password);
          dispatch(notiAction(err.response?.data.message));
        });
    } else {
      dispatch(notiAction("New password and confirm password don't match"));
      dispatch(enableBtn(true));
    }
  };

  return (
    <div className="bg-my-cream p-10 h-full md:h-[100vh] flex justify-center items-center">
      <div className="bg-white max-w-3xl mx-auto flex flex-wrap md:flex-nowrap justify-between p-10 md:p-20 gap-12 items-center flex-col-reverse md:flex-row">
        <div className="w-8/12 md:w-5/12 mx-auto">
          <Image src={AuthImg} alt="" />
        </div>
        <form className="w-full md:w-7/12 space-y-8" onSubmit={findMail}>
          <p className="text-gray-500 text-lg">
            Please enter your new password below to change it.
          </p>
          <div className="space-y-7">
            <div>
              <div
                className={`flex gap-3 border-b-2 pb-2 ${
                  error ? "border-red-500" : "border-gray-400"
                }`}
              >
                <i className="fa-solid fa-lock mt-1"></i>
                <input
                  type="password"
                  className={`w-full outline-0`}
                  placeholder="Your New Password"
                  onChange={(e) =>
                    setPassword({
                      ...password,
                      password: e.target.value,
                    })
                  }
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
            <div>
              <div
                className={`flex gap-3 border-b-2 pb-2 ${
                  error ? "border-red-500" : "border-gray-400"
                }`}
              >
                <i className="fa-solid fa-lock mt-1"></i>
                <input
                  type="password"
                  className={`w-full outline-0`}
                  placeholder="Confirm Your New Password"
                  onChange={(e) =>
                    setPassword({
                      ...password,
                      confirmPassword: e.target.value,
                    })
                  }
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
          </div>
          <Button value={"CHANGE PASSWORD"} />
        </form>
      </div>
    </div>
  );
};



export default RecoverPass;
