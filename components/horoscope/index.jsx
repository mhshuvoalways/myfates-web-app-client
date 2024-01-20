import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";

const Index = () => {
  const { t } = useTranslation("horoscope");
  const horoscope = t("horoscope", { returnObjects: true });

  return (
    <div className="mycontainer mt-10 mb-20">
      <div className="flex justify-center lg:justify-between gap-10 flex-wrap md:flex-nowrap items-center space-y-5">
        {horoscope.map((el, index) => (
          <div className="space-y-2 -mb-5 w-full md:w-4/12" key={index}>
            <Link href={"/horoscope/form?type=2024"}>
              <Image
                src={el.img}
                alt=""
                width={500}
                height={500}
                className="w-full mb-2 rounded-2xl"
              />
              <div className="space-y-1">
                <p className="font-semibold">{el.title}</p>
                <p className="text-sm">{el.des}</p>
                <div className="flex gap-2 pt-2">
                  <small className="bg-[#06243F] text-white py-1 px-2 rounded-md font-semibold">
                    {el.btn[0]}
                  </small>
                  {el.btn[1] && (
                    <small className="bg-[#5E17EB] text-white py-1 px-2 rounded-md font-semibold">
                      {el.btn[1]}
                    </small>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
