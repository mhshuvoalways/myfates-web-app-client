import React, { useEffect } from "react";
import gsap, { Power0 } from "gsap";
import classNames from "classnames";
import Image from "next/image";

const ContentScroller = ({ list, spacing = "lg", whiteCards = false }) => {
  useEffect(() => {
    const extrasSections = document.querySelectorAll(".extras-section");
    const duration = 90;

    const timelines = Array.from(extrasSections).map((section, index) => {
      const direction = index % 2 === 1 ? -1 : 1;
      const groups = section.querySelectorAll("ul");

      const tls = Array.from(groups).map((group, index) => {
        const count = index + 1;
        const tl = gsap.timeline({
          repeat: -1,
        });

        tl.fromTo(
          group,
          { x: 0 },
          {
            x: `${-1 * direction * count * 100}%`,
            duration: count * duration,
            onComplete: () => {},
            ease: Power0.easeNone,
          }
        );

        tl.set(group, { x: `${direction * 100}%` });

        tl.fromTo(
          group,
          { x: `${direction * 100}%` },
          {
            x: 0,
            duration: duration * (2 - count),
            delay: 0.025 * duration,
            ease: Power0.easeNone,
          }
        );

        return tl;
      });

      section.addEventListener("mouseover", () => tls.map((t) => t.pause()));
      section.addEventListener("mouseout", () => tls.map((t) => t.play()));

      return tls;
    });

    return () => {
      timelines.map((txs) => txs.map((t) => t.kill()));
    };
  }, []);

  const wrapperClassnames = classNames(
    "xl:px-[calc((100vw-1200px)/2)] negative-body-padding overflow-x-hidden py-4",
    {
      "space-y-8 sm:space-y-10 lg:space-y-12.5 mt-10 sm:mt-12.5 lg:mt-15":
        spacing === "lg",
      "space-y-4.5 sm:space-y-6.25 lg:space-y-8 mt-8 sm:mt-10 lg:mt-12.5":
        spacing === "sm",
    }
  );

  return (
    <ul className={wrapperClassnames}>
      {list.map((group, index) => (
        <div
          key={index}
          className={`extras-section section-${
            index + 1
          } flex space-x-5 sm:space-x-6 lg:space-x-8 ${
            index % 2 === 1 ? "flex-row-reverse !space-x-reverse" : ""
          }`}
          style={{ transform: `translateX(${translates[index]})` }}
        >
          <ScrollerList
            group={group}
            key={index}
            index={0}
            whiteCards={whiteCards}
          />
          <ScrollerList
            group={group}
            key={index}
            index={1}
            whiteCards={whiteCards}
          />
        </div>
      ))}
    </ul>
  );
};

const ScrollerList = ({ group }) => {
  return (
    <ul
      className={`flex items-center flex-nowrap space-x-3.75 sm:space-x-5 lg:space-x-7.5 transform flex-shrink-0 w-auto`}
    >
      {group.map((item, index) => (
        <li className="w-80 md:w-[400px] shadow-md rounded-3xl p-6" key={index}>
          <p>{item.des}</p>
          <div className="flex gap-5 mt-5 items-center">
            <Image
              src={`/${item.pic}`}
              width={200}
              height={200}
              alt=""
              className="rounded-full w-10 h-10 shadow-md border"
            />
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="opacity-70">{item.title}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

const translates = ["-3%", "20%", "-15%", "8%"];

export default ContentScroller;
