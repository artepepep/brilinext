"use client"

import ReactPaginate from "react-paginate";
import SharedSpriteSVG from "@/shared/images/SharedSpriteSVG";
import {MouseEventHandler} from "react";

type Props = {
  pageCount: number,
  onPageChange: (selectedItem: { selected: number }) => void,
  forcePage: number,
  prevSkipPageButtonClick: MouseEventHandler<HTMLButtonElement>,
  nextSkipPageButtonClick: MouseEventHandler<HTMLButtonElement>,
}

export default function Pagination (
  { pageCount, onPageChange, forcePage, prevSkipPageButtonClick, nextSkipPageButtonClick }: Props) {
  return (
    <div className={"flex gap-1 w-fit mt-10 mx-auto"}>
      <button
        disabled={(forcePage === 0) && true}
        onClick={prevSkipPageButtonClick}
        className={`p-2 ${forcePage === 0 ? ("text-[#5F5F5F]") : ("text-white")} cursor-pointer`}>
        <SharedSpriteSVG name={"prevSkipPageButton"}/>
      </button>
      <ReactPaginate
        nextLabel={<SharedSpriteSVG name={"nextPageButton"}/>}
        previousLabel={<SharedSpriteSVG name={"prevPageButton"}/>}
        onPageChange={onPageChange}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        forcePage={forcePage}
        breakLabel="..."
        renderOnZeroPageCount={null}
        className={"flex items-center gap-2 w-fit text-[14px]"}
        previousClassName={"p-2"}
        nextClassName={"p-2"}
        pageClassName={"px-3 py-2"}
        disabledClassName={"text-[#5F5F5F]"}
        activeClassName={"text-[#3892F5]"}
        breakClassName={"px-3 py-2"}
      />
      <button
        disabled={(forcePage === pageCount) && true}
        onClick={nextSkipPageButtonClick}
        className={`${forcePage === pageCount - 1 ? ( "text-[#5F5F5F]" ) : ( "text-white")} cursor-pointer`}>
        <SharedSpriteSVG name={"nextSkipPageButton"}/>
      </button>
    </div>
  )
}