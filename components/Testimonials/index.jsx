import { useEffect, useState } from "react";
import LazyImage from "../Utils/LazyImage";
import axios from "axios";

const ContentScroller = () => {
  const [allContents, setAllContents] = useState([]);

  useEffect(() => {
    const temp = [...allContents];
    axios
      .get("https://restcountries.com/v3.1/region/asia")
      .then((res) => {
        res.data.forEach((el) => {
          const newObj = {
            name: el.name.common,
            logo: el.flags.png,
            storeLink: el.maps.googleMaps,
          };
          temp.push(newObj);
        });
        setAllContents(temp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-full mt-32">
      <p className="font-semibold text-3xl text-center w-10/12 mx-auto">
        Millions of Saju users
      </p>
      <p className="font-semibold text-center w-10/12 mx-auto mb-20 mt-5">
        Trusted by thousands of Merchants
      </p>
      <div
        className={`flex marquee-container full relative h-14 sm:h-16 md:h-20 left-0`}
      >
        <ScrollerList customers={allContents} />
      </div>
    </div>
  );
};

const ScrollerList = ({ customers }) => {
  return (
    <ul
      className={`flex items-center gap-10 justify-between mx-auto py-2 px-[5.5vw] sm:px-[4.5vw] lg:py-3 lg:px-[3.5vw] xl:px-[3.8vw] marquee`}
    >
      {customers?.map((customer, i) => (
        <li className="py-1.5" key={i}>
          <div className="relative flex flex-col items-center">
            <div className="h-11 sm:h-12 md:h-16 w-11 sm:w-12 md:w-16 flex-shrink-0 rounded-full overflow-hidden border-4 border-[#e5e5e5] border-opacity-30 customer-card">
              <LazyImage
                imgSrc={customer.logo}
                alt={customer.name}
                className="h-full w-full object-cover"
                loaderClasses="rounded-full"
              />
            </div>
            <div className="absolute top-[120%] bg-black text-sm font-medium text-white px-2 py-1 rounded-2xl transform translate-y-2 -translate-x-1/2 ease-out duration-200 opacity-0 pointer-events-none customer-card-name left-1/2">
              {customer.name}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContentScroller;
