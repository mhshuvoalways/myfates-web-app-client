import Headers from "@/components/Headers";
import Categories from "@/components/Headers/Categories";
import Footer from "@/components/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import parse from "html-react-parser";

const Privacy = () => {
  const { t } = useTranslation("privacy");
  const data = t("data", { returnObjects: true });
  return (
    <>
      <Headers />
      <Categories />
      <div>
        <p className="text-center text-3xl text-white bg-gray-800 py-16">
          Privacy Policy
        </p>
        <div className="sm:max-w-[640px] w-full px-[30px] mx-auto my-20">
          {data.map((el, index) => (
            <div key={index}>
              {parse(el.title)}
              {parse(el.content)}
            </div>
          ))}
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
        "subMenus",
        "privacy",
        "sidebar",
        "footer",
        "common",
      ])),
    },
  };
}

export default Privacy;
