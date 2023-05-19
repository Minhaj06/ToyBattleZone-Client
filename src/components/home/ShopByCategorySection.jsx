import React, { useState } from "react";

const ShopByCategorySection = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
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
            {activeTab === 1 && (
              <div>
                <h1>Tab 1</h1>
              </div>
            )}
            {activeTab === 2 && (
              <div>
                <h1>Tab 2</h1>
              </div>
            )}
            {activeTab === 3 && (
              <div>
                <h1>Tab 3</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByCategorySection;
