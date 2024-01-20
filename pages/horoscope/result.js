import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Headers from "@/components/Headers";
import Categories from "@/components/Headers/Categories";
import HoroscopeResult from "@/components/horoscope/result";
import Footer from "@/components/Footer";

const HoroScopeResult = () => {
  return (
    <>
      <Headers />
      <Categories />
      <HoroscopeResult />
      <Footer />
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "subMenus",
        "footer",
        "common",
      ])),
    },
  };
}

export default HoroScopeResult;
