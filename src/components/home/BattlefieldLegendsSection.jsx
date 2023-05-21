import React from "react";

function BattlefieldLegendsSection() {
  return (
    <section class="bg-slate-100 dark:bg-slate-800 py-24">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">Battlefield Legends</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10">
          <div class="bg-gray-100 dark:bg-base-100 rounded-lg shadow-md p-6">
            <img
              src="https://m.media-amazon.com/images/I/91loTdCWRuL._AC_UY218_.jpg"
              alt="Iron Man"
              class="h-72 w-full mb-4"
            />
            <h3 class="text-xl font-bold mb-2">Iron Man</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Description of the legend goes here. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>

          <div class="bg-gray-100 dark:bg-base-100 rounded-lg shadow-md p-6">
            <img
              src="https://m.media-amazon.com/images/I/91LmsuoBOIL._AC_UL400_.jpg"
              alt="Captain America"
              class="h-72 w-full mb-4"
            />
            <h3 class="text-xl font-bold mb-2">Captain America</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Description of the legend goes here. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>

          <div class="bg-gray-100 dark:bg-base-100 rounded-lg shadow-md p-6">
            <img
              src="https://m.media-amazon.com/images/I/91AAWp-GlVL._AC_UY218_.jpg"
              alt="Thor"
              class="h-72 w-full mb-4"
            />
            <h3 class="text-xl font-bold mb-2">Thor</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Description of the legend goes here. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BattlefieldLegendsSection;
