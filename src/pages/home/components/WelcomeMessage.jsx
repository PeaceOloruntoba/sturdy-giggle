import React from "react";
import { welcomemessage } from "../../../assets";

export default function WelcomeMessage() {
  return (
    <div className="w-full p-32 flex items-center gap-12">
      <img src={welcomemessage} alt="" />
      <div className="flex flex-col w-full">
        <span>WELCOME MESSAGE PROFESSOR JOHNSON FATOKUN</span>
        <div className="flex flex-col">
          <span>Dear DLCF Anchor University Students,</span>
          <span>
            Welcome to a new academic year at Anchor University! I encourage you
            to excel in your studies, deepen your faith, and contribute
            positively to our community. At DLCF, we value integrity, growth,
            and making a difference. May God guide you in all you do this year.
            Let&apos;s make it a year of success and spiritual growth.
          </span>
          <span>God bless you.</span>
        </div>
      </div>
    </div>
  );
}
