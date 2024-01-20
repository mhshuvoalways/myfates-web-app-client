import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../common/Button";
import { horoAdd } from "@/store/actions/horoscopeAction";

const HoroScopeForm = () => {
  const [userData, setUserData] = useState({
    fullName: "",
    birthDateMM: "",
    birthDateDD: "",
    birthDateYYYY: "",
  });

  const userReducer = useSelector((store) => store.userReducer);

  const router = useRouter();
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    if (userData) {
      const obj = userData;
      obj.language = window.location.pathname.includes("jp") ? "jp" : "en";
      obj.type = router.query.type;
      e.preventDefault();
      dispatch(horoAdd(obj, router));
    }
  };

  useEffect(() => {
    if (!userReducer.isAuthenticate) {
      router.push("/signup");
    }
  }, [router, userReducer.isAuthenticate]);

  return (
    <div className="template p-10 min-h-screen flex justify-center items-center">
      <div className="max-w-3xl  mx-auto flex flex-wrap md:flex-nowrap justify-between p-10 md:p-20 gap-12 items-center flex-col-reverse md:flex-row bg-white">
        <div className="space-y-10 w-8/12 md:w-5/12 mx-auto">
          <Image src="/auth/auth.png" alt="" width={400} height={400} />
          <div className="text-center">
            <Link href="/signup" className="underline">
              Create an account
            </Link>
          </div>
        </div>
        <form className="w-full md:w-7/12" onSubmit={onSubmitHandler}>
          <div className="mt-8">
            <p>Full Name:</p>
            <input
              type="text"
              className="border-b-2 border-gray-400 outline-0 pr-2 w-full"
              required
              onChange={onChangeHandler}
              name="fullName"
              placeholder="Full Name"
            />
          </div>
          <div className="mt-8">
            <p>Birth Date & Time:</p>
            <div className="flex gap-5 items-center mt-5">
              <div>
                <p>Month</p>
                <div className="flex gap-5 items-center">
                  <input
                    type="text"
                    className="border-b-2 border-gray-400 outline-0 pr-2 w-full"
                    required
                    placeholder="MM"
                    maxLength={2}
                    onChange={onChangeHandler}
                    name="birthDateMM"
                  />
                  <p className="font-semibold">/</p>
                </div>
              </div>
              <div>
                <p>Day</p>
                <div className="flex gap-5 items-center">
                  <input
                    type="text"
                    className="border-b-2 border-gray-400 outline-0 pr-2 w-full"
                    required
                    placeholder="DD"
                    maxLength={2}
                    onChange={onChangeHandler}
                    name="birthDateDD"
                  />
                  <p className="font-semibold">/</p>
                </div>
              </div>
              <div>
                <p>Year</p>
                <input
                  type="text"
                  className="border-b-2 border-gray-400 outline-0 pr-2 w-full"
                  required
                  placeholder="Year"
                  onChange={onChangeHandler}
                  name="birthDateYYYY"
                  maxLength={4}
                />
              </div>
            </div>
          </div>
          <Button value={"SUBMIT"} className={"mt-8 w-full"} />
        </form>
      </div>
    </div>
  );
};

export default HoroScopeForm;
