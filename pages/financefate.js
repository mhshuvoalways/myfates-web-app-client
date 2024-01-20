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
import Pic13 from "@/public/howtoget/t13.png";
import Pic14 from "@/public/howtoget/t14.png";
import Pic15 from "@/public/howtoget/t15.png";
import Pic16 from "@/public/howtoget/t16.png";

const StoreLinks = () => {
  const { t } = useTranslation("howtouse");
  const howtouse = t("howtouse", { returnObjects: true });

  const financefate = [
    {
      description:
        "Insight: Full overview of your financial insight. How is your financial insight today?",
      image: Pic13,
      type: "financefate",
    },
    {
      description:
        "Decision: Full overview of your financial decision. How will your financial decision be today?",
      image: Pic14,
      type: "financefate",
    },
    {
      description:
        "Execution: Full overview of your financial execution. How will your financial execution be today?",
      image: Pic15,
      type: "financefate",
    },
    {
      description:
        "Consistency: Full overview of your financial consistency. How will your financial consistency be today?",
      image: Pic16,
      type: "financefate",
    },
  ];

  return (
    <>
      <Headers />
      <Categories />
      <StoreLinksIntro titleText={"Finance Destiny Alignment"} />
      <HowToUse pageType={financefate} howtouse={howtouse} />
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
        "footer",
        "sidebar",
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
