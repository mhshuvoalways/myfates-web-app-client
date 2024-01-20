import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Headers from "@/components/Headers";
import Categories from "@/components/Headers/Categories";
import PricingIntro from "@/components/PricingIntro";
import OwnerSaysCatelog from "@/components/OwnerSaysCatelog";
import Faq from "@/components/Faq";
import GswSl from "@/components/GswSl";
import Footer from "@/components/Footer";

const Pricing = () => {
  return (
    <>
      <Headers />
      <Categories />
      <PricingIntro />
      <OwnerSaysCatelog />
      <Faq />
      <GswSl />
      <Footer />
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "faq",
        "sidebar",
        "footer",
        "gswsl",
        "ownersays",
        "pricing",
        "subMenus",
        "common",
      ])),
    },
  };
}

export default Pricing;
