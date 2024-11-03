import React from "react";
import { sermoncard } from "../../assets";

export default function SermonCard() {
  return (
    <div className="bg-white rounded text-sm flex flex-col p-2">
      <img src={sermoncard} alt="" className="rounded-xl" />
      <div className="flex flex-col px-2">
        <span>THE PARABLE OF THE PRODIGAL SON</span>
        <span>SUNDAY, 30TH JUNE, 2024</span>
        <div className="flex w-full items-center justify-end gap-2">
          <button className="text-secondary border border-secondary p-2 px-4 rounded-full">
            DOWNLOAD
          </button>
          <button className="text-white bg-secondary p-2 px-4 rounded-full">
            WATCH NOW
          </button>
        </div>
      </div>
    </div>
  );
}
