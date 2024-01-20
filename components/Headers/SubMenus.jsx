import Link from "next/link";

const SubMenus = ({ menuName, subMenusItems }) => {
  return (
    <div
      className={`w-56 absolute top-8 bg-white border border-gray-100 rounded ${
        menuName === "explorefuture" ? "opacity-100 z-10" : "opacity-0 -z-10"
      }`}
    >
      <Link href={`/fullreport`}>
        <p className="border-t border-b border-gray-100 cursor-pointer hover:bg-gray-800 hover:text-white px-5 py-2">
          {subMenusItems[0]}
        </p>
      </Link>
      <Link href={`/dailyfate`}>
        <p className="border-t border-b border-gray-100 cursor-pointer hover:bg-gray-800 hover:text-white px-5 py-2">
          {subMenusItems[1]}
        </p>
      </Link>
      <Link href={`/lovefate`}>
        <p className="border-t border-b border-gray-100 cursor-pointer hover:bg-gray-800 hover:text-white px-5 py-2">
          {subMenusItems[2]}
        </p>
      </Link>
      <Link href={`/financefate`}>
        <p className="border-t border-b border-gray-100 cursor-pointer hover:bg-gray-800 hover:text-white px-5 py-2">
          {subMenusItems[3]}
        </p>
      </Link>
    </div>
  );
};

export default SubMenus;
