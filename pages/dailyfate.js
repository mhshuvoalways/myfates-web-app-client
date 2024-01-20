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
import Pic5 from "@/public/howtoget/t5.png";
import Pic6 from "@/public/howtoget/t6.png";
import Pic7 from "@/public/howtoget/t7.png";
import Pic8 from "@/public/howtoget/t8.png";

const StoreLinks = () => {
  const { t } = useTranslation("howtouse");
  const howtouse = t("howtouse", { returnObjects: true });

  const dailyfate = [
    {
      description:
        "Energy: Full overview of your daily energy. Are you full with energy today?",
      image: Pic5,
      type: "dailyfate",
    },
    {
      description:
        "Mood: Full overview of your daily mood. How will you feel today?",
      image: Pic6,
      type: "dailyfate",
    },
    {
      description:
        "Focus: Full overview of your daily focus. Foresee your focus power.",
      image: Pic7,
      type: "dailyfate",
    },

    {
      description:
        "Spirit: Full overview of your daily spirit. Are you full with spirit today?",
      image: Pic8,
      type: "dailyfate",
    },
  ];

  return (
    <>
      <Headers />
      <Categories />
      <StoreLinksIntro titleText="Daily Destiny Alignment" />
      <HowToUse pageType={dailyfate} howtouse={howtouse} />
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
