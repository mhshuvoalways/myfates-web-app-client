import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Headers from "@/components/Headers";
import Categories from "@/components/Headers/Categories";
import StoreLinksIntro from "@/components/StoreLinksIntro";
import HowToUse from "@/components/HowToUse";
import WhatYouGet from "@/components/WhatYouGet";
import LoveToMerge from "@/components/LoveToMerge";
import Pricing from "@/components/Pricing";
import BuildForGrowth from "@/components/BuildForGrowth";
import NotConvinced from "@/components/NotConvinced";
import GswSl from "@/components/GswSl";
import Footer from "@/components/Footer";

const StoreLinks = () => {
  const { t } = useTranslation("howtouse");
  const howtouse = t("howtouse", { returnObjects: true });

  return (
    <>
      <Headers />
      <Categories />
      <StoreLinksIntro />
      <HowToUse pageType={howtouse.fullreport} howtouse={howtouse} />
      <WhatYouGet />
      <LoveToMerge />
      <BuildForGrowth />
      <NotConvinced />
      <Pricing />
      <GswSl />
      <Footer />
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "howtouse",
        "whatyouget",
        "convince",
        "footer",
        "gswsl",
        "sidebar",
        "lovefates",
        "pricing",
        "subMenus",
        "common",
      ])),
    },
  };
}

export default StoreLinks;
