import React from "react";
// import { useState } from "react";
import json from "../../JsonFile/content1.json"
import Table from "../Learn/Table";
import { Bs1CircleFill } from "react-icons/bs";
import { Bs2CircleFill, Bs3CircleFill } from "react-icons/bs";

const Content1 = () => {
    // const [DarkMood, setDakMood] = useState(1);


    const numberIcons =
    {
        icon: <Bs1CircleFill />,
        icon1: <Bs2CircleFill />,
        icon2: <Bs3CircleFill />
    }

    // const numbers = [1, 2, 3, 4];
    // const handlebg=()=>{
    //     setDakMood(number.idno);
    // }



    // const pageContent = {
    //     1: "page 1 content",
    //     2: "This is page 2 content",
    //     3: "This is page 3 content",
    //     4: "This is page 4 content",
    //   };
 

    return (
        <>
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


                    <Table content={json.table2} />

                </div>


                {/* main mark as read content */}
               

















            </div>
        </>
    )
}
export default Content1;