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
import Pic1 from "@/public/howtoget/t1.png";
import Pic2 from "@/public/howtoget/t2.png";
import Pic3 from "@/public/howtoget/t3.png";
import Pic4 from "@/public/howtoget/t4.png";

const StoreLinks = () => {
  const { t } = useTranslation("howtouse");
  const howtouse = t("howtouse", { returnObjects: true });

  const fullreport = [
    {
      description:
        "Full report: Full overview of your total life. What are you born with?",
      image: Pic1,
      type: "fullreport",
    },
    {
      description:
        "Love: Full love overview of your total life. Who will you meet?",
      image: Pic2,
      type: "fullreport",
    },
    {
      description:
        "Finance: Full finance overview of your total life. How much will you earn?",
      image: Pic3,
      type: "fullreport",
    },
    {
      description:
        "Learning: Full academic overview of your total life. How and what will you learn?",
      image: Pic4,
      type: "fullreport",
    },
  ];

  return (
    <>
      <Headers />
      <Categories />
      <StoreLinksIntro titleText="Total Life Report" />
      <HowToUse pageType={fullreport} howtouse={howtouse} />
      <WhatYouGet />
      <LoveToMerge />
      <NotConvinced />
      <Pricing />
      <GswSl />
      <Footer />
      <p></p>
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
