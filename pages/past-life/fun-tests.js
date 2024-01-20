import useLoading from "@/hooks/useLoading";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Loading from "@/components/Loading";
import Headers from "@/components/Headers";
import Categories from "@/components/Headers/Categories";
import PastLifeComponent from "@/components/PastLife/FunTests";

const PastLife = () => {
  const isLoading = useLoading();

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Headers />
          <Categories />
          <PastLifeComponent />
        </>
      )}
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["subMenus", "common"])),
    },
  };
}

export default PastLife;
