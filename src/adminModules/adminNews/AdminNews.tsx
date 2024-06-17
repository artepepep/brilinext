"use client"

import {GradientButton, NewsNavigation} from "@/shared/components";
import SharedSpriteSVG from "@/shared/images/SharedSpriteSVG";
import {useState} from "react";
import AddAdminNewsModal from "@/adminModules/adminNews/components/AddAdminNewsModal";
import PreviewNewsModal from "@/adminModules/adminNews/components/PreviewNewsModal";
import DeleteNewsModal from "@/adminModules/adminNews/components/DeleteNewsModal";

export default function AdminNews () {
  const [addNewsModalDisplay, setAddNewsModalDisplay] = useState("hidden");
  const [previewNewsModalDisplay, setPreviewNewsModalDisplay] = useState("hidden");
  const [deleteNewsModalDisplay, setDeleteNewsModalDisplay] = useState("hidden");

  return (
    <div>
      <div className={"flex items-center justify-between mb-8"}>
        <h2 className={"text-[32px] text-[#3892F5]"}>News</h2>
        <GradientButton onClick={() => setAddNewsModalDisplay("block")} text={"add news"} uppercase={true} type={"button"} />
      </div>
      <NewsNavigation />
      <div className={"flex items-center justify-between"}>
        <p className={"text-[16px] text-[#525252]"}>Всього: 10</p>
        <div className={"flex items-center gap-3 w-[440px] px-4 py-[10px] border-[1px] border-[#3892F5] rounded-[20px] "}>
          <SharedSpriteSVG name={"search"} />
          <input className={"placeholder-current outline-none"} placeholder={"Пошук"} />
        </div>
      </div>

      <table className={"table-auto w-full mt-4 text-left"}>
        <thead className={"border-y-[1px] border-[#D1D1D1] text-[14px] text-[#525252]"}>
          <tr>
            <th className={"flex items-center gap-1 w-[100px] py-4 font-normal"}>
              <p>Date</p>
              <SharedSpriteSVG name={"sort"}/>
            </th>
            <th className={"py-4 font-normal uppercase"}>Img</th>
            <th className={"flex items-center gap-1 py-4 font-normal"}>
              <p>Title</p>
              <SharedSpriteSVG name={"sort"}/>
            </th>
            <th className={"py-4 font-normal"}>Text</th>
            <th className={"py-4 font-normal"}>Category</th>
            <th className={"w-[100px] py-4 font-normal"}>Action</th>
          </tr>
        </thead>
        <tbody className={"text-[16px]"}>
          <tr className={"border-y-[1px] border-[#D1D1D1]"}>
            <td>01.01.2024</td>
            <td className={""}>
              <div className={"w-[100px] h-[60px] bg-[#D9D9D9]"}></div>
            </td>
            <td className={"w-[300px]"}>Lorem ipsum dolor sit amet consectetur.</td>
            <td className={"w-[300px] py-4"}>Lorem ipsum dolor sit amet consectetur. Fames ut eget donec pellentesque cras. Tortor lorem iaculis a duis amet.
              Tellus quam quis sapien nisl euismod .....
            </td>
            <td>Web</td>
            <td>
              <div className={"flex items-center gap-4"}>
                <button onClick={() => setPreviewNewsModalDisplay("block")} className={"text-[#525252]"}>
                  <SharedSpriteSVG name={"openEye"} />
                </button>
                <button onClick={() => setDeleteNewsModalDisplay("block")}>
                  <SharedSpriteSVG name={"trash"} />
                </button>
                <button onClick={() => setAddNewsModalDisplay("block")}>
                  <SharedSpriteSVG name={"pen"} />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <AddAdminNewsModal
        modalDisplay={addNewsModalDisplay}
        closeClick={() => setAddNewsModalDisplay("hidden")}
      />
      <PreviewNewsModal
        modalDisplay={previewNewsModalDisplay}
        closeClick={() => setPreviewNewsModalDisplay("hidden")}
        editClick={() => {
          setPreviewNewsModalDisplay("hidden");
          setAddNewsModalDisplay("block");
        }}
      />
      <DeleteNewsModal
        modalDisplay={deleteNewsModalDisplay}
        closeClick={() => {setDeleteNewsModalDisplay("hidden")}}
      />
    </div>
  )
}