import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import parse from "html-react-parser";
import Headers from "@/components/Headers";
import Categories from "@/components/Headers/Categories";
import Footer from "@/components/Footer";

const TermService = () => {
  const { t } = useTranslation("termservice");
  const data = t("data", { returnObjects: true });

  return (
    <>
      <Headers />
      <Categories />
      <div>
        <p className="text-center text-3xl text-white bg-gray-800 py-16">
          Terms of Service
        </p>
        <div className="sm:max-w-[640px] w-full px-[30px] mx-auto my-20">
          {parse(data)}
          <br />
          <small>Copyright © 2024 myfates.com</small>
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
        "termservice",
        "subMenus",
        "footer",
        "common",
        "sidebar",
      ])),
    },
  };
}

export default TermService;
