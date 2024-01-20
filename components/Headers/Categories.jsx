import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import SubMenus from "./SubMenus";

const Categories = () => {
  const [menuName, setMenuName] = useState("");
  const { t } = useTranslation("subMenus");
  const menusItems = t("submenus", { returnObjects: true });
  const subMenusItems = t("items", { returnObjects: true });

  return (
    <div>
      <div className="border-b border-gray-100 hidden sm:block">
        <div className="flex justify-center gap-14 mycontainer">
          {menusItems.map((el, index) => (
            <div key={index}>
              {el.name === "EXPLORE FUTURE" || el.name === "未来を探索" ? (
                <div
                  className="relative"
                  onMouseEnter={() => setMenuName("explorefuture")}
                  onMouseLeave={() => setMenuName("")}
                >
                  <p className="cursor-pointer hover:text-my-text-gray font-gabarito uppercase text-xs py-2">
                    {el.name}
                  </p>
                  <SubMenus menuName={menuName} subMenusItems={subMenusItems} />
                </div>
              ) : (
                <Link href={el.href}>
                  <p className="cursor-pointer hover:text-my-text-gray font-gabarito uppercase text-xs py-2">
                    {el.name}
                  </p>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
