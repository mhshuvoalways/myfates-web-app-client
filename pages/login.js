import { GoogleOAuthProvider } from "@react-oauth/google";
import SignupComponent from "@/components/Auth/Login";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Signup = () => {
  return (
    <GoogleOAuthProvider clientId={process.env.CLIENT_ID}>
      <SignupComponent />
    </GoogleOAuthProvider>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["auth"])),
    },
  };
}

export default Signup;
