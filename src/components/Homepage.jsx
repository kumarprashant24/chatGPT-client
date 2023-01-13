import React from "react";
import Chat from "./Chat";
import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import Action from "./Action";
import Background from "./Background";
import {API_URL} from "../config"

export default function Homepage() {
  const [board, setBoard] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const input = useRef();


  const handleClick = async () => {
    console.log(API_URL);
    setBoard((current) => [
      ...current,
      { bot: false, message: input.current.value },
    ]);
    setIsTyping(true);
    axios
      .post(`${API_URL}`, { question: input.current.value })
      .then((res) => {
        console.log(res.data);
        setIsTyping(false);

        setBoard((current) => [
          ...current,
          { bot: true, message: res.data.bot },
        ]);
        input.current.value=""
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
