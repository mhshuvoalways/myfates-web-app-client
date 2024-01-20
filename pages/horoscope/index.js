import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Headers from "@/components/Headers";
import Categories from "@/components/Headers/Categories";
import HoroscopeForm from "@/components/horoscope";
import Footer from "@/components/Footer";

const StoreLinks = () => {
  return (
    <>
      <Headers />
      <Categories />
      <HoroscopeForm />
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
        "horoscope",
        "footer",
        "common",
      ])),
    },
  };
}

export default StoreLinks;
