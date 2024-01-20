import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Headers from "@/components/Headers";
import Categories from "@/components/Headers/Categories";
import StoreLinksIntro from "@/components/Intro";
import HowToUse from "@/components/HowToUse";
import Resources from "@/components/Resources";
import WhatYouGet from "@/components/WhatYouGet";
import OwnerSaysCatelog from "@/components/OwnerSaysCatelog";
import Pricing from "@/components/Pricing";
import LoveToMerge from "@/components/LoveToMerge";
import GswSl from "@/components/GswSl";
import NotConvinced from "@/components/NotConvinced";
import Faq from "@/components/Faq";
import Motivation from "@/components/Motivation";
import Footer from "@/components/Footer";
import { useTranslation } from "next-i18next";

const Index = () => {
  const { t } = useTranslation("howtouse");
  const howtouse = t("howtouse", { returnObjects: true });

  return (
    <>
      <Headers />
      <Categories />
      <StoreLinksIntro />
      <OwnerSaysCatelog home />
      <WhatYouGet />
      <HowToUse pageType={howtouse.fullreport} howtouse={howtouse} />
      <Resources />
      <LoveToMerge />
      <Pricing />
      <Faq />
      <Motivation />
      <NotConvinced />
      <GswSl />
      <Footer />
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "convince",
        "faq",
        "resource",
        "sidebar",
        "footer",
        "gswsl",
        "ownersays",
        "homeintro",
        "lovefates",
        "pricing",
        "motivation",
        "subMenus",
        "whatyouget",
        "howtouse",
        "common",
      ])),
    },
  };
}

export default Index;
