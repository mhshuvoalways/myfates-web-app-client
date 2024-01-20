import Image from "next/image";
import { useTranslation } from "next-i18next";

const Index = () => {
  const { t } = useTranslation("resource");
  const resouce = t("resouce", { returnObjects: true });

  return (
    <div className="resource bg-gray-50 py-16 sm:py-28">
      <div class="mycontainer">
        <p className="resource-title text-center text-3xl">{resouce.title1}</p>
        <p className="mt-5 w-full sm:w-8/12 mx-auto text-center">
          {resouce.title2}
        </p>
        <div className="flex justify-between items-center gap-10 mt-14 flex-wrap md:flex-nowrap">
          <div className="w-full md:w-4/12">
            <p className="resource-sec-title text-2xl">
              {resouce.leftSide.title}
            </p>
            <div className="mt-6">
              {resouce.leftSide.items.map((el, index) => (
                <div className="flex items-center gap-3 mt-2" key={index}>
                  <Image
                    src={"/pricing/tick.svg"}
                    width={15}
                    height={15}
                    alt=""
                  />
                  <p>{el}</p>
                </div>
              ))}
            </div>
          </div>
          <Image
            src={"/resources/1.jpg"}
            alt=""
            width={800}
            height={800}
            className="rounded-3xl w-full md:w-6/12"
          />
        </div>
        <div className="flex justify-between items-center gap-10 mt-20 flex-wrap md:flex-nowrap">
          <Image
            src={"/resources/2.jpg"}
            alt=""
            width={800}
            height={800}
            className="rounded-3xl w-full md:w-6/12"
          />
          <div className="w-full md:w-4/12">
            <p className="resource-sec-title text-2xl">
              {resouce.rightSide.title}
            </p>
            <div className="mt-6">
              {resouce.rightSide.items.map((el, index) => (
                <div className="flex items-center gap-3 mt-2" key={index}>
                  <Image
                    src={"/pricing/tick.svg"}
                    width={15}
                    height={15}
                    alt=""
                  />
                  <p>{el}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
