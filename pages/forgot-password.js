import ForgotPassword from "@/components/Auth/ForgotPassword";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Signup = () => {
  return <ForgotPassword />;
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["auth", "sidebar"])),
    },
  };
}

export default Signup;
