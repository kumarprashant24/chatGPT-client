import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Bubble({ data }) {
  return (
    <div className="d-flex">
      <div className="d-flex">
        {data.bot ? (
          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712076.png"
            className="bot"
          />
        ) : (
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            className="bot"
          />
        )}
      </div>
      <div
        className={`${
          data.bot ? "bot-chat" : "user-chat"
        } chatbubble mb-2 ms-2 shadow-lg rounded`}
      >
        {'loader' in data?  <img src={data.loader} className="typing-loader"/>: data.bot ? (
          <>
          <Typewriter
            words={[data.message]}
            loop={1}
            cursor={false}
            typeSpeed={20}
            cursorBlinking={false}
          />
          </>
        ) 
        
        : (
          data.message
        )}
      </div>
    </div>
  );
}
