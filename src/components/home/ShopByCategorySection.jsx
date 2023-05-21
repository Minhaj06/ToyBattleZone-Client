import React, { useEffect, useState } from "react";
import ToyCard from "../toyCard/ToyCard";

const ShopByCategorySection = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const marvelToys = toys.filter((toy) => toy.subCategory === "Marvel");
  const starWarsToys = toys.filter((toy) => toy.subCategory === "Star Wars");
  const transformersToys = toys.filter((toy) => toy.subCategory === "Transformers");

  useEffect(() => {
    loadToys();
  }, []);

  const loadToys = async () => {
    fetch(`${import.meta.env.VITE_API}/toys`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="py-24 bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-3">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Shop By Category</h2>
          <p className="mt-2 text-lg">
            Experience the Thrill of Toy Battles Like Never Before!
          </p>
        </div>
        <div>
          <div className="flex border-b border-gray-300">
            <button
              className={`px-4 py-2 text-lg capitalize focus:outline-none ${
                activeTab === 1
                  ? "text-primary border-x border-t-[3px] border-t-primary rounded-t-lg -mb-[1px] bg-white dark:bg-base-200"
                  : ""
              }`}
              onClick={() => handleTabClick(1)}
            >
              marvel
            </button>
            <button
              className={`px-4 py-2 text-lg capitalize focus:outline-none ${
                activeTab === 2
                  ? "text-primary border-x border-t-[3px] border-t-primary rounded-t-lg -mb-[1px] bg-white dark:bg-base-200"
                  : ""
              }`}
              onClick={() => handleTabClick(2)}
            >
              star wars
            </button>
            <button
              className={`px-4 py-2 text-lg capitalize focus:outline-none ${
                activeTab === 3
                  ? "text-primary border-x border-t-[3px] border-t-primary rounded-t-lg -mb-[1px] bg-white dark:bg-base-200"
                  : ""
              }`}
              onClick={() => handleTabClick(3)}
            >
              transformers
            </button>
          </div>
          <div className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6">
              {activeTab === 1 && marvelToys.map((toy, i) => <ToyCard toy={toy} key={i} />)}
              {activeTab === 2 && starWarsToys.map((toy, i) => <ToyCard toy={toy} key={i} />)}
              {activeTab === 3 &&
                transformersToys.map((toy, i) => <ToyCard toy={toy} key={i} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByCategorySection;
