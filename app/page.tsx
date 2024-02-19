
import { Young_Serif, Outfit } from "next/font/google";
import Image from "next/image";

const fontYoungSerif = Young_Serif({ subsets: ["latin"], weight: '400' });
const fontOutfit = Outfit({ subsets: ["latin"], weight: ['400', '600', '700'] });

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className=" bg-white lg:pt-6 lg:px-4 lg:rounded-3xl">
        <div className="lg:mt-2">
          <div className="">
            <Image src="/images/image-omelette.jpeg" className="lg:rounded-xl lg:mx-auto" width={750} height={700} alt="omelette" />
          </div>

          <div className="ml-5 mt-8">
            <h1 className={`${fontYoungSerif.className} text-4xl`}>Simple Omelette Recipe </h1>
            <p className={`${fontOutfit.className} mt-8 text-sm text-gray-500 mr-4`}>An easy and quick dish, perfect for any meal.
              This classic omelette combines beaten eggs cooked to perfection,
              optionally filled with your choice of cheese, vegetables, or meats.
            </p>
          </div>

          <div className=" ml-3 mr-3 mt-8 py-3 bg-[#fff7fc] rounded-lg ">
            <h2 className={`${fontOutfit.className} ml-4 font-semibold text-[#7b284f]`}>Preparation time</h2>
            <ul className=" ml-11 mt-2 list-disc marker:text-[#7b284f]">
              <li className={`${fontOutfit.className} mt-2 text-sm text-gray-500`}><span className="font-semibold text-gray-800">Total:</span> Approximately 10 minutes </li>
              <li className={`${fontOutfit.className}mt-2 text-sm text-gray-500`}><span className="font-semibold text-gray-800">Preparation:</span> 5 minutes</li>
              <li className={`${fontOutfit.className}mt-2 text-sm text-gray-500`}><span className="font-semibold text-gray-800">Cooking:</span> 5 minutes</li>
            </ul>
          </div>

          <div className="ml-3 mr-3 mt-8 py-3 ">
            <h3 className={`${fontYoungSerif.className} text-2xl text-[#854832]`}>Ingredients</h3>
            <ul className="ml-6 mt-4 list-disc marker:text-[#854832]">
              <li className="mt-2 text-sm text-gray-500">2-3 large eggs </li>
              <li className="mt-2 text-sm text-gray-500"> Salt, to taste</li>
              <li className="mt-2 text-sm text-gray-500"> Pepper, to taste</li>
              <li className="mt-2 text-sm text-gray-500"> 1 tablespoon of butter or oil</li>
              <li className="mt-2 text-sm text-gray-500"> Optional fillings: cheese diced vegetables, cooked meats, herbs</li>
            </ul>
          </div>

          <hr />

          <div className="ml-3 mr-3 mt-8 py-3 ">
            <h3 className={`${fontYoungSerif.className} text-2xl text-[#854832]`}>Instructions</h3>
            <ol className="ml-6 mt-4 list-decimal marker:text-[#854832]  marker:font-bold">
              <li className="mt-2 text-sm text-gray-500"><span className="font-semibold text-gray-800">Beat the eggs:</span>
                In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.
                You can add a tablespoon of water or milk for a fluffier texture.</li>
              <li className="mt-2 text-sm text-gray-500"><span className="font-semibold text-gray-800">Heat the pan:</span>
                Place a non-stick frying pan over medium heat and add butter or oil.</li>
              <li className="mt-2 text-sm text-gray-500"><span className="font-semibold text-gray-800">Cook the omelette:</span>
                Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
              <li className="mt-2 text-sm text-gray-500"><span className="font-semibold text-gray-800">Add fillings (optional):</span>
                When the eggs begin to set at the edges but are still slightly runny in the middle,
                sprinkle your chosen fillings over one half of the omelette.</li>
              <li className="mt-2 text-sm text-gray-500"><span className="font-semibold text-gray-800">Fold and serve:</span>
                As the omelette continues to cook, carefully lift one edge and fold it over the fillings.
                Let it cook for another minute, then slide it onto a plate</li>
              <li className="mt-2 text-sm text-gray-500"><span className="font-semibold text-gray-800">Enjoy:</span>
                Serve hot, with additional salt and pepper if needed.</li>
            </ol>
          </div>

          <hr />

          <div className="ml-3 mr-3 mt-8 py-3 ">
            <h3 className={`${fontYoungSerif.className} text-2xl text-[#854832]`}>Nutrition</h3>
            <p className="mt-4 mb-4 text-sm text-gray-500">The table below shows nutritional values per serving without the additional fillings.
            </p>

            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">

                <tr className="bg-white border-b ">
                  <td scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap ">
                    Calories
                  </td>
                  <td className="px-6 py-4 text-[#854832] font-black">
                    277kcal
                  </td>
                </tr>

                <tr className="bg-white border-b ">
                  <td scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap ">
                    Carbs
                  </td>
                  <td className="px-6 py-4 text-[#854832] font-black">
                    0g
                  </td>
                </tr>

                <tr className="bg-white border-b ">
                  <td scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap ">
                    Protine
                  </td>
                  <td className="px-6 py-4 text-[#854832] font-black">
                    20g
                  </td>
                </tr>

                <tr className="bg-white ">
                  <td scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap ">
                    Fat
                  </td>
                  <td className="px-6 py-4 text-[#854832] font-black">
                    22g
                  </td>
                </tr>

              </table>
            </div>

          </div>

        </div>
      </div>

      <p className="text-center text-gray-500 text-xs mb-[-8rem] mt-24"> Challenge by
      <a href="https://www.linkedin.com/in/kaifi-azmi/" className="text-blue-400"> Frontend Mentor. </a> Code by
        <a href="https://www.linkedin.com/in/kaifi-azmi/" className="text-blue-400"> kaifi azmi</a></p>
    </div>
  );
}

