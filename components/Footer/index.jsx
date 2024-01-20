import Image from "next/image";
import Link from "next/link";
import AppLogo from "@/public/footer/app.svg";
import { useTranslation } from "next-i18next";

const Index = () => {
  const { t } = useTranslation("footer");
  const des = t("des");
  const privacy = t("privacy");
  const termsofService = t("termsofService");
  const refundPolicy = t("refundPolicy");
  const subPolicy = t("subPolicy");

  return (
    <div className="bg-[#050537] py-20">
      <div className="flex gap-20 flex-wrap mycontainer">
        <div>
          <Link href="/">
            <Image
              src="/footer/logo.png"
              alt=""
              width={500}
              height={500}
              className="w-56"
            />
          </Link>
          <p className="text-sm text-grey-fields-100 mt-3.75 max-w-[295px] md:max-w-[285px]">
            {des}
          </p>
          <figure className="mt-5 sm:mt-6.25">
            <Image src={AppLogo} alt="My Fate app download banner" />
          </figure>
        </div>
        <ul>
          <li className="uppercase text-grey-border-dark text-xs md:text-1xs lg:text-sm mb-4.5 sm:mb-6.25">
            Usefull Links
          </li>
          <li className="mb-2.5 md:mb-3.75 flex items-center">
            <Link
              href="/privacy-policy"
              className="text-grey-fields-100 hover:text-accent-yellow-500 font-medium text-1sm md:text-base whitespace-nowrap cursor-pointer"
            >
              {privacy}
            </Link>
          </li>
          <li className="mb-2.5 md:mb-3.75 flex items-center">
            <Link
              href="/terms-of-service"
              className="text-grey-fields-100 hover:text-accent-yellow-500 font-medium text-1sm md:text-base whitespace-nowrap cursor-pointer"
            >
              {termsofService}
            </Link>
          </li>
          <li className="mb-2.5 md:mb-3.75 flex items-center">
            <Link
              href="/refund-policy"
              className="text-grey-fields-100 hover:text-accent-yellow-500 font-medium text-1sm md:text-base whitespace-nowrap cursor-pointer"
            >
              {refundPolicy}
            </Link>
          </li>
          <li className="mb-2.5 md:mb-3.75 flex items-center">
            <Link
              href="/subscription-policy"
              className="text-grey-fields-100 hover:text-accent-yellow-500 font-medium text-1sm md:text-base whitespace-nowrap cursor-pointer"
            >
              {subPolicy}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
