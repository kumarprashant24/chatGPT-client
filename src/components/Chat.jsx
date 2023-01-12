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
      <div className="p-2 mb-3 board-header">
      <div className="d-flex justify-content-between">
      <div className="d-flex align-items-center ms-2">
          <div className="dot bg-danger"></div>
          <div className="dot bg-warning ms-1"></div>
          <div className="dot bg-success ms-1"></div>
        </div>
        <div className="title">Ask Anything You Want</div>
        <div></div>
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
