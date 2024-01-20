import React, { useEffect } from "react";
import gsap, { Power0 } from "gsap";
import classNames from "classnames";

const ContentScroller = ({ list, spacing = "lg", whiteCards = false }) => {
  useEffect(() => {
    const extrasSections = document.querySelectorAll(".extras-section-nc");
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
            onComplete: () => {
              // console.log(`end ${count}`)
            },
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
          className={`extras-section-nc section-${
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

const ScrollerList = ({ group, whiteCards }) => {
  const cardClasses = classNames(
    "flex items-center px-4 py-2 sm:px-5 sm:py-2.5 lg:py-3 lg:px-6 body-text rounded-30 flex-shrink-0 extra-item",
    {
      "bg-grey-fields-100": !whiteCards,
      "bg-white border border-primary-pastel": whiteCards,
    }
  );
  return (
    <ul
      className={`inline-flex items-center flex-nowrap space-x-3.75 sm:space-x-5 lg:space-x-7.5 transform flex-shrink-0 w-auto`}
    >
      {group.map((item, index) => (
        <li className={cardClasses} key={index}>
          <span className="inline-flex hero-text mr-2.5">{item.emoji}</span>
          <span className="text-black-secondary font-medium">{item.label}</span>
        </li>
      ))}
    </ul>
  );
};

const translates = ["-3%", "20%", "-15%", "8%"];

export default ContentScroller;
