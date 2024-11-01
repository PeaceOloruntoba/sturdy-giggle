import React from "react";
import { welcomemessage } from "../../../assets";

export default function WelcomeMessage() {
  return (
    <div className="w-full p-12 md:p-24 grid md:grid-cols-2 items-center gap-12">
      <img src={welcomemessage} alt="" className="w-full" />
      <div className="flex flex-col w-full gap-3">
        <span className="text-2xl font-semibold">
          WELCOME MESSAGE
          <br />
          PROFESSOR JOHNSON FATOKUN
        </span>
        <div className="flex flex-col">
          <span className="font-semibold">
            Dear DLCF Anchor University Students,
          </span>
          <span>
            Welcome to a new academic year at Anchor University! I encourage you
            to excel in your studies, deepen your faith, and contribute
            positively to our community. At DLCF, we value integrity, growth,
            and making a difference. May God guide you in all you do this year.
            Let&apos;s make it a year of success and spiritual growth.
          </span>
        </div>
        <span>God bless you.</span>
      </div>
    </div>
  );
}
