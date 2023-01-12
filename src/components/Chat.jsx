import React from "react";
import { useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Bubble from "./Bubble";
import Loader from "./Loader";

export default function Chat({ board, isTyping }) {
  const defaulTyping = {
    bot: true,
    message: "Typing...",
    loader: "https://flevix.com/wp-content/uploads/2020/01/Preloader.svg",
  };
  return (
    <>
      <div className="border-bottom p-3 mb-3 ">
        <div className="d-flex">
          <div className="dot bg-danger"></div>
          <div className="dot bg-warning ms-1"></div>
          <div className="dot bg-success ms-1"></div>
        </div>
      </div>
      <ScrollToBottom
        className="scroll-bottom"
        followButtonClassName="scroller"
      >
        <div className="p-3">
          {board.map((element) => (
            <Bubble data={element} />
          ))}
          {isTyping ? <Loader /> : ""}
        </div>
      </ScrollToBottom>
    </>
  );
}
