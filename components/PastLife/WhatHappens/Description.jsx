import { useEffect, useState } from "react";
import Image from "next/image";
import ArrowDown from "@/public/pastlife/arrowDown.svg";

const Description = ({ seletGender, setSelectGender }) => {
  const [years, setYears] = useState([]);
  const months = [
    "January",
    "February",
    "Merch",
    "April",
    "May",
    "June",
    "July",
    "September",
    "October",
    "November",
    "December",
  ];
  const [days, setDays] = useState([]);
  const whatHappen = [
    "I have concerns about human relationships",
    "It's financially difficult",
    "My career is not going well",
    "I don't have good relationship with my lover",
    "I am not feeling well",
    "Direct input",
  ];

  const [seletYear, setSelectYear] = useState({
    year: 1993,
    openToggle: false,
  });
  const [seletMonth, setSelectMonth] = useState({
    month: "January",
    openToggle: false,
  });
  const [seletDay, setSelectDay] = useState({
    day: 1,
    openToggle: false,
  });
  const [seletHappen, setSelectHappen] = useState({
    item: "I have concerns about human relationships",
    openToggle: false,
  });

  const closeOptions = () => {
    setSelectYear((prev) => ({ ...prev, openToggle: false }));
    setSelectMonth((prev) => ({ ...prev, openToggle: false }));
    setSelectDay((prev) => ({ ...prev, openToggle: false }));
    setSelectHappen((prev) => ({ ...prev, openToggle: false }));
  };

  const handleOutsideClick = (e) => {
    if (e.target && !e.target.closest(".select-option")) {
      closeOptions();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let currentYear = new Date().getFullYear();
    const temp = [...years];
    for (let i = 1930; i <= currentYear; i++) {
      temp.push(i);
    }
    setYears(temp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const temp = [...days];
    for (let i = 1; i <= 31; i++) {
      temp.push(i);
    }
    setDays(temp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectGenderHandler = (value) => {
    setSelectGender(value);
  };

  const selectYearHandler = (value) => {
    setSelectYear({
      openToggle: !seletYear.openToggle,
      year: value,
    });

    setSelectMonth((prev) => ({ ...prev, openToggle: false }));
    setSelectDay((prev) => ({ ...prev, openToggle: false }));
    setSelectHappen((prev) => ({ ...prev, openToggle: false }));
  };

  const selectMonthHandler = (value) => {
    setSelectMonth({
      openToggle: !seletMonth.openToggle,
      month: value,
    });

    setSelectYear((prev) => ({ ...prev, openToggle: false }));
    setSelectDay((prev) => ({ ...prev, openToggle: false }));
    setSelectHappen((prev) => ({ ...prev, openToggle: false }));
  };

  const selectDayHandler = (value) => {
    setSelectDay({
      openToggle: !seletDay.openToggle,
      day: value,
    });
    setSelectYear((prev) => ({ ...prev, openToggle: false }));
    setSelectMonth((prev) => ({ ...prev, openToggle: false }));
    setSelectHappen((prev) => ({ ...prev, openToggle: false }));
  };

  const seletHappenHandler = (value) => {
    setSelectHappen({
      openToggle: !seletHappen.openToggle,
      item: value,
    });
    setSelectYear((prev) => ({ ...prev, openToggle: false }));
    setSelectDay((prev) => ({ ...prev, openToggle: false }));
    setSelectMonth((prev) => ({ ...prev, openToggle: false }));
  };

  return (
    <div className="w-full mobile:max-w-[340px] mx-auto space-y-5">
      <div>
        <p className="text-white text-2xl font-semibold">
          Birthday of this life
        </p>
        <div className="mt-5 flex gap-3 justify-between items-center flex-wrap mobile:flex-nowrap">
          <div className={`relative w-full ${seletYear.openToggle && "z-40"}`}>
            <div
              className="flex items-center justify-between bg-[#191919] p-3 border border-gray-600 rounded text-center font-semibold cursor-pointer px-4 select-option"
              onClick={() => selectYearHandler(seletYear.year)}
            >
              <p className="text-white text-start">{seletYear.year}</p>
              <Image src={ArrowDown} alt="" />
            </div>
            {seletYear.openToggle && (
              <div className="absolute top-12 left-0 right-0 bg-[#191919] text-center h-80 overflow-y-scroll border-b border-r border-l border-gray-600 rounded-b pl-scrollhide select-option">
                {years.map((year) => (
                  <p
                    className="text-white font-semibold cursor-pointer hover:bg-gray-800 py-1 text-start px-4"
                    key={year}
                    onClick={() => selectYearHandler(year)}
                  >
                    {year}
                  </p>
                ))}
              </div>
            )}
          </div>
          <div className={`relative w-full ${seletMonth.openToggle && "z-30"}`}>
            <div
              className="flex items-center justify-between bg-[#191919] p-3 border border-gray-600 rounded text-center font-semibold cursor-pointer px-4 z-20 select-option"
              onClick={() => selectMonthHandler(seletMonth.month)}
            >
              <p className="text-white text-start">{seletMonth.month}</p>
              <Image src={ArrowDown} alt="" />
            </div>
            {seletMonth.openToggle && (
              <div className="absolute top-12 left-0 right-0 bg-[#191919] text-center h-80 overflow-y-scroll border-b border-r border-l border-gray-600 rounded-b pl-scrollhide select-option">
                {months.map((month) => (
                  <p
                    className="text-white font-semibold cursor-pointer hover:bg-gray-800 py-1 text-start px-4"
                    key={month}
                    onClick={() => selectMonthHandler(month)}
                  >
                    {month}
                  </p>
                ))}
              </div>
            )}
          </div>
          <div className={`relative w-full ${seletDay.openToggle && "z-20"}`}>
            <div
              className="flex items-center justify-between bg-[#191919] p-3 border border-gray-600 rounded text-center font-semibold cursor-pointer px-4 z-20 select-option"
              onClick={() => selectDayHandler(seletDay.day)}
            >
              <p className="text-white text-start">{`${seletDay.day} ${
                seletDay.day === 1 ? "day" : "days"
              }`}</p>
              <Image src={ArrowDown} alt="" />
            </div>
            {seletDay.openToggle && (
              <div className="absolute top-12 left-0 right-0 bg-[#191919] text-center h-80 overflow-y-scroll border-b border-r border-l border-gray-600 rounded-b pl-scrollhide select-option">
                {days.map((day) => (
                  <p
                    className="text-white font-semibold cursor-pointer hover:bg-gray-800 py-1 text-start px-4"
                    key={day}
                    onClick={() => selectDayHandler(day)}
                  >
                    {`${day} ${day === 1 ? "day" : "days"}`}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="pt-5">
        <p className="text-white text-2xl font-semibold">Gender</p>
        <div className="mt-5 flex gap-3 justify-between items-center flex-wrap mobile:flex-nowrap">
          <p
            className={`px-3 py-4 w-full text-white border border-gray-600 rounded font-semibold text-center cursor-pointer ${
              seletGender === "Other"
                ? "bg-gray-700 border-gray-300"
                : "bg-[#191919]"
            }`}
            onClick={() => selectGenderHandler("Other")}
          >
            Other
          </p>
          <p
            className={`px-3 py-4 w-full text-white border border-gray-600 rounded font-semibold text-center cursor-pointer ${
              seletGender === "Female"
                ? "bg-gray-700 border-gray-300"
                : "bg-[#191919]"
            }`}
            onClick={() => selectGenderHandler("Female")}
          >
            Female
          </p>
          <p
            className={`px-3 py-3 w-full text-white border border-gray-600 rounded font-semibold text-center cursor-pointer leading-4 ${
              seletGender === "Not applicable"
                ? "bg-gray-700 border-gray-300"
                : "bg-[#191919]"
            }`}
            onClick={() => selectGenderHandler("Not applicable")}
          >
            Not applicable
          </p>
        </div>
      </div>
      <div className="pt-5">
        <p className="text-white text-2xl font-semibold">What happened today</p>
        <div
          className={`relative w-full mt-5 ${seletHappen.openToggle && "z-10"}`}
        >
          <div
            className="flex items-center justify-between bg-[#191919] p-3 border border-gray-600 rounded text-center font-semibold cursor-pointer px-4 select-option"
            onClick={() => seletHappenHandler(seletHappen.item)}
          >
            <p className="text-white text-start">{seletHappen.item}</p>
            <Image src={ArrowDown} alt="" />
          </div>
          {seletHappen.openToggle && (
            <div className="absolute top-[70px] left-0 right-0 bg-[#191919] text-center h-28 mobile:h-48 overflow-y-scroll border-b border-r border-l border-gray-600 rounded-b pl-scrollhide select-option">
              {whatHappen.map((item, index) => (
                <p
                  className="text-white font-semibold cursor-pointer hover:bg-gray-800 py-1 text-start px-4"
                  key={index}
                  onClick={() => seletHappenHandler(item)}
                >
                  {item}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Description;
