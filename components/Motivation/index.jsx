import { useTranslation } from "next-i18next";

const Index = () => {
  const { t } = useTranslation("motivation");

  return (
    <div className="h-[85vh] flex items-center justify-center bg-gray-900 text-center mb-10">
      <div className="mycontainer">
        <p className="text-4xl text-white w-full sm:w-7/12 mx-auto font-zilla-slab">
          “{t("description")}”
        </p>
        <div className="mt-20">
          <p className="text-white text-xl">Dr. Ji Kim</p>
          <p className="text-gray-400">CEO</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
