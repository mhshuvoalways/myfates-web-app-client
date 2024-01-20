import Link from "next/link";
import { useDispatch } from "react-redux";
import { logout } from "@/store/actions/userAction";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Sidebar = ({ isOpen, toggleSidebar, userReducer }) => {
  const { t } = useTranslation("sidebar");
  const sidebar = t("sidebar", { returnObjects: true });

  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div
      className={`bg-white h-screen transform transition-all duration-300 shadow-lg fixed ${
        isOpen
          ? "translate-x-0 w-full sm:w-3/12 z-[60] overflow-y-scroll"
          : "-translate-x-full w-0 opacity-0 -z-10"
      }`}
    >
      <p
        className="text-end p-5 text-xl cursor-pointer"
        onClick={toggleSidebar}
      >
        ✕
      </p>
      <div className={isOpen && "px-10"}>
        <div className="py-5">
          <p className="text-2xl pb-2">Home</p>
          <hr />
          <div>
            {sidebar.home.map((el, index) => (
              <Link href={el.href} key={index}>
                <p className="cursor-pointer text-my-text-gray my-4 hover:text-gray-800">
                  {el.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div className="py-5">
          <p className="text-2xl pb-2">Dashboard</p>
          <hr />
          <div>
            {sidebar.dashboard.map((el, index) => (
              <Link href={el.href} key={index}>
                <p className="cursor-pointer text-my-text-gray my-4 hover:text-gray-800">
                  {el.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div className="py-5">
          <p className="text-2xl pb-2">Account</p>
          <hr />
          <div>
            {userReducer.isAuthenticate ? (
              <p
                className="cursor-pointer text-my-text-gray my-4 hover:text-gray-800"
                onClick={() => dispatch(logout(router))}
              >
                {sidebar.account[1]}
              </p>
            ) : (
              <Link href="/login">
                <p className="cursor-pointer text-my-text-gray my-4 hover:text-gray-800">
                  {sidebar.account[0]}
                </p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
