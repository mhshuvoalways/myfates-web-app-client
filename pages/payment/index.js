import { useEffect } from "react";
import { useSelector } from "react-redux";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Headers from "@/components/Headers";
import Categories from "@/components/Headers/Categories";
import Payment from "@/components/Payment";
import Footer from "@/components/Footer";

const Index = () => {
  const userReducer = useSelector((store) => store.userReducer);
  const router = useRouter();

  useEffect(() => {
    if (!userReducer.isAuthenticate) {
      router.push("/login");
    }
  }, [router, userReducer.isAuthenticate]);

  return (
    <>
      <Headers />
      <Categories />
      <Payment />
      <Footer />
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "subMenus",
        "sidebar",
        "footer",
        "common",
      ])),
    },
  };
}

export default Index;
