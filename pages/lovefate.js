import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Headers from "@/components/Headers";
import Categories from "@/components/Headers/Categories";
import StoreLinksIntro from "@/components/StoreLinksIntro";
import HowToUse from "@/components/HowToUse";
import WhatYouGet from "@/components/WhatYouGet";
import LoveToMerge from "@/components/LoveToMerge";
import Pricing from "@/components/Pricing";
import NotConvinced from "@/components/NotConvinced";
import GswSl from "@/components/GswSl";
import Footer from "@/components/Footer";
import Pic9 from "@/public/howtoget/t9.png";
import Pic10 from "@/public/howtoget/t10.png";
import Pic11 from "@/public/howtoget/t11.png";
import Pic12 from "@/public/howtoget/t12.png";

const StoreLinks = () => {
  const { t } = useTranslation("howtouse");
  const howtouse = t("howtouse", { returnObjects: true });

  const lovefate = [
    {
      description:
        "Romance: Full overview of your romance energy. Are you full with romance energy today?",
      image: Pic9,
      type: "lovefate",
    },

    {
      description:
        "Intimacy: Full overview of your intimacy. Are you full with intimate energy today?",
      image: Pic10,
      type: "lovefate",
    },

    {
      description:
        "Connection: Full overview of your connection energy. Will you connect today?",
      image: Pic11,
      type: "lovefate",
    },

    {
      description:
        "Destiny: Full overview of your destiny energy. Are you full with destiny energy today?",
      image: Pic12,
      type: "lovefate",
    },
  ];

  return (
    <>
      <Headers />
      <Categories />
      <StoreLinksIntro titleText={"Love Destiny Alignment"} />
      <HowToUse pageType={lovefate} howtouse={howtouse} />
      <WhatYouGet />
      <LoveToMerge />
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
        "convince",
        "sidebar",
        "footer",
        "pricing",
        "gswsl",
        "lovefates",
        "subMenus",
        "whatyouget",
        "howtouse",
        "common",
      ])),
    },
  };
}

export default StoreLinks;
