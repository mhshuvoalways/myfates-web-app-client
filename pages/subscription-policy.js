import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Headers from "@/components/Headers";
import Categories from "@/components/Headers/Categories";
import Footer from "@/components/Footer";
import { useTranslation } from "next-i18next";
import parse from "html-react-parser";

const SubsCription = () => {
  const { t } = useTranslation("subscription");
  const data = t("subscription_terms", { returnObjects: true });

  return (
    <>
      <Headers />
      <Categories />
      <div>
        <p className="text-center text-3xl text-white bg-gray-800 py-16">
          Subscription Policy
        </p>
        <div className="sm:max-w-[640px] w-full px-[30px] mx-auto my-20">
          {parse(data)}
          <br />
          <small>Copyright © 2023 myfate.com</small>
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "subscription",
        "subMenus",
        "footer",
        "common",
        "sidebar",
      ])),
    },
  };
}

export default SubsCription;
