import React, { useState } from "react";
import json from "../../JsonFile/content1.json"
import Table from "../Learn/Table";
import { Bs1CircleFill } from "react-icons/bs";
import { Bs2CircleFill, Bs3CircleFill,Bs4CircleFill } from "react-icons/bs";

const PageNavigation = () => {

  // Current visible page
  const [currentPage, setCurrentPage] = useState(1);

  // Track which pages are unlocked
  const [unlockedPages, setUnlockedPages] = useState([1]);

  // Total pages
  const totalPages = 4;

  // Page content (you can replace with real content)
  const pageContent = {
    1:  <Table content={json.table1} />,
    2:  <Table content={json.table2}/>,
    3: <Table content={json.table3}/>,
    4: <Table content={json.table4}/>,
  };

  const numberIcons =
  {
    icon1: <Bs1CircleFill />,
    icon2: <Bs2CircleFill />,
    icon3: <Bs3CircleFill />,
    icon4: <Bs4CircleFill />
  }

  // When clicking "Mark as Read"
  const handleMarkAsRead = () => {
    const nextPage = currentPage + 1;

    // Only unlock next page (not navigate)
    if (nextPage <= totalPages && !unlockedPages.includes(nextPage)) {
      setUnlockedPages(prev => [...prev, nextPage]);
    }
  };



  return (
    <div className="">

      {/* PAGE CONTENT */}
      <div className="">



        <div className="grid gap-5 kumbh-sans-font">
          <div className=" w-full ">
            <div className="text-center text-5xl mx-auto lg:w-170 font-semibold">
              <h1>{json.title}</h1>
            </div>
            <div className="text-2xl text-center py-10 text-pink-400">
              <h1>{json.subtitle1}</h1>
              <h1>{json.subtitle2}</h1>
            </div>
          </div>

          {/* content card1 */}

          <div className="bg-white p-4 border border-gray-200 rounded-xl ">
            <div className="">
              <h1 className="text-2xl font-semibold">{json.cardhead}</h1>
              <h1 className="text-gray-600 text-lg  mt-2">{json.cardcontent}</h1>
            </div>
          </div>
          {/* table2 */}

          <div className="border bg-white rounded-xl p-5  ">

            <div>
              <h1 className="text-2xl font-semibold">{json.content1}</h1>
              <h1 className="text-gray-500 text-lg mt-1 mb-2">{json.content2}</h1>
              <h1 className="text-lg font-bold">{json.content3}</h1>
            </div>

            <Table content={json.table} />
          </div>

          {/* content table2 */}
          <div className="grid gap-5 kumbh-sans-font">
                

                {/* content table2 */}
                <div className="border bg-white rounded-xl p-5  ">

                    <div>
                        {/* heading with icons */}
                        <div className=" flex gap-2 bg-blue-500 p-8 text-2xl text-white rounded-tl-xl rounded-tr-xl">


                            <h1 className="text-4xl bg-blue-500  rounded-4xl" >{numberIcons[json.table2.icons]}</h1>
                            <h1 className="mt-1"> {json.table2.title}</h1>


                        </div>
                        {/* code */}
                        <div className="p-5 grid gap-3 p-4"></div>

                        <div className="bg-black/70 text-white p-4 rounded-xl">
                            <h1 style={{ whiteSpace: "pre-wrap" }}>{json.table2.code}</h1>
                        </div>


                    </div>

                    <h1>{json.table2.output}</h1>
         
        {pageContent[currentPage]}

                </div>


            </div>
        </div>




      </div>

      {/* MARK AS READ BUTTON */}
      <div className="mt-6">
        <button
          onClick={handleMarkAsRead}
          className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
        >
          Mark as Read
        </button>
      </div>

      {/* PAGE NUMBER BUTTONS */}
      <div className="flex gap-6 justify-center mt-8">

        {[1, 2, 3, 4].map(number => {

          const isUnlocked = unlockedPages.includes(number);
          const isActive = number === currentPage;

          return (
            <button
              key={number}
              disabled={!isUnlocked}
              onClick={() => isUnlocked && setCurrentPage(number)}

              className={`px-4 py-2 rounded-full text-white text-lg 
                ${isActive ? "bg-blue-700" : "bg-gray-500"} 
                ${!isUnlocked ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}
              `}
            >
              {number}
            </button>
          );
        })}

      </div>

    </div>
  );
};

export default PageNavigation;
