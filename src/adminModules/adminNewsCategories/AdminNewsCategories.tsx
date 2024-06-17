"use client"

import {GradientButton, NewsNavigation} from "@/shared/components";
import SharedSpriteSVG from "@/shared/images/SharedSpriteSVG";
import {useState} from "react";
import PickColorModal from "@/adminModules/adminNewsCategories/components/PickColorModal";
import DeleteCategoryModal from "@/adminModules/adminNewsCategories/components/DeleteCategoryModal";

export default function AdminNewsCategories () {
  const [pickColorModalDisplay, setPickColorModalDisplay] = useState("hidden");
  const [deleteCategoryModalDisplay, setDeleteCategoryModalDisplay] = useState("hidden");

  return(
    <div>
      <div className={"flex items-center justify-between mb-8"}>
        <h2 className={"text-[32px] text-[#3892F5]"}>News categories</h2>
        <GradientButton
          onClick={() => setPickColorModalDisplay("block")}
          text={"news categories"}
          uppercase={true}
          type={"button"}
        />
      </div>
      <NewsNavigation/>
      <div className={"flex items-center justify-between"}>
        <p className={"text-[16px] text-[#525252]"}>Всього: 10</p>
        <div
          className={"flex items-center gap-3 w-[440px] px-4 py-[10px] border-[1px] border-[#3892F5] rounded-[20px] "}>
          <SharedSpriteSVG name={"search"}/>
          <input className={"placeholder-current outline-none"} placeholder={"Пошук"}/>
        </div>
      </div>
      <table className={"table-auto w-full mt-4 text-left"}>
        <thead className={"border-y-[1px] border-[#D1D1D1] text-[14px] text-[#525252]"}>
          <tr>
            <th className={"flex items-center gap-1 py-4 font-normal"}>
              <p>Name</p>
              <SharedSpriteSVG name={"sort"}/>
            </th>
            <th className={"font-normal"}>
              Color indicator
            </th>
            <th className={"font-normal"}>
              Action
            </th>
          </tr>
        </thead>
        <tbody className={"text-[16px]"}>
          <tr className={"border-y-[1px] border-[#D1D1D1]"}>
            <td className={"w-full uppercase"}>
              Ai
            </td>
            <td className={"py-4 pr-[72px]"}>
              <div className={"w-[150px] h-[40px] rounded-[20px] bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF]"}></div>
            </td>
            <td>
              <div className={"flex gap-10"}>
                <button onClick={() => setDeleteCategoryModalDisplay("block")}>
                  <SharedSpriteSVG name={"trash"}/>
                </button>
                <button onClick={() => setPickColorModalDisplay("block")}>
                  <SharedSpriteSVG name={"pen"}/>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <PickColorModal
        modalDisplay={pickColorModalDisplay}
        closeClick={() => setPickColorModalDisplay("hidden")}
      />
      <DeleteCategoryModal
        modalDisplay={deleteCategoryModalDisplay}
        closeClick={() => setDeleteCategoryModalDisplay("hidden")}
      />
    </div>
  )
}