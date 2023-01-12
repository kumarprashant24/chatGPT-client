import React from "react";
import Chat from "./Chat";
import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import Action from "./Action";
import Background from "./Background";

export default function Homepage() {
  const [board, setBoard] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const input = useRef();

  const handleClick = async () => {
    setBoard((current) => [
      ...current,
      { bot: false, message: input.current.value },
    ]);
    setIsTyping(true);
    axios
      .post("http://localhost:5000", { question: input.current.value })
      .then((res) => {
        console.log(res.data);
        setIsTyping(false);

        setBoard((current) => [
          ...current,
          { bot: true, message: res.data.bot },
        ]);
      });
  };
  return (
    <>
  <Background/>
      <div className="position-absolute top-0 w-100 ">
        <div className="container p-0 board-clr  board-corner  mt-5 ">
          <div className="rounded">
            <Chat board={board} isTyping={isTyping} />
          </div>
          <Action inputRef={input} handleClick={handleClick} />
        </div>
      </div>
    </>
  );
}
