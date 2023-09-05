import React, { useMemo, useState } from "react";
import { Header } from "./Header";
import { Select } from "../../blocks";
import { Badge } from "../../components/Badge";
import Card from "../../components/Card";
import { badges, getRandomCards } from "./Home.constants";

export const Home = () => {
  const [selectedBadge, setSelectedBadge] = useState("All");
  const options1 = [
    {
      label: "SAS",
      value: "SAS",
    },
  ];

  const options2 = [
    {
      label: "Mexico",
      value: "Mexico",
    },
  ];

  const cards = useMemo(() => {
    return getRandomCards();
  }, []);

  return (
    <div className="pb-4">
      <Header />
      <div className="hidden md:flex justify-center">
        <div className="flex justify-end gap-2 max-w-5xl w-11/12">
          <div className="border-2 border-white p-2 rounded-full flex justify-end items-center text-white w-28">
            <Select
              options={options1}
              onChange={() => {}}
              className="bg-transparent"
              containerClassName="w-auto"
              value="home"
              placeholder="Menu"
            />
          </div>

          <div className="border-2 border-white p-2 rounded-full flex justify-end items-center text-white w-28">
            <Select
              options={options2}
              onChange={() => {}}
              className="bg-transparent"
              containerClassName="w-auto"
              value="home"
              placeholder="Menu"
            />
          </div>
        </div>
      </div>

      <div className="ml-12 md:ml-24 mt-4 mr-10 text-xl text-white flex gap-2 flex-col md:flex-row">
        <div className="flex flex-col md:flex-row gap-4 items-center border-b-2 border-custom-link p-2">
          <h3 className="font-semibold w-32">Query Here: </h3>
          <p>
            What is the Total market growth for Speciality Alcoholic
            Spirits(SAS) in Mexico for last 5 years and projection for next 3
            years?
          </p>
        </div>

        <div className="flex flex-row md:flex-col gap-2 justify-center">
          <button className="bg-custom-lighter text-custom-link p-2 w-32 rounded-full">
            Query
          </button>
          <button className="bg-custom-lighter text-custom-link p-2 w-32 rounded-full">
            Save chat
          </button>
        </div>
      </div>

      {/* Badges */}

      <div className="ml-12 mr-12 mt-12 md:ml-24 md:mr-24 md:mt-36 flex gap-2 flex-wrap">
        {badges?.map((name, index) => {
          const badgeName = name.split(" ").join("_");
          return (
            <Badge
              name={name}
              key={index}
              onClick={() => {
                setSelectedBadge(badgeName);
              }}
              active={selectedBadge === badgeName}
            />
          );
        })}
      </div>

      {/* Cards */}
      <div className="ml-12 md:ml-24 mt-12 flex gap-8 flex-wrap justify-center md:justify-start">
        {cards[selectedBadge]?.map(({ description, title }, index) => {
          return <Card title={title} description={description} key={index} />;
        })}
      </div>
    </div>
  );
};
