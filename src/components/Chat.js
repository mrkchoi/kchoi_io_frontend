import React, { useState, useEffect, useRef } from "react";

import ChatIntro from "./ChatIntro";
import ChatResponse from "./ChatResponse";
import ChatInput from "./ChatInput";

import { motion } from "framer-motion";
import ReactPlayer from "react-player";

import memojiBgGray from "../images/memoji_bg_lightgray.mp4";
// import memojiBgBlack from "../images/memoji_bg_black_001.mp4";
import memojiBgDarkGray from "../images/memoji_bg_darkgray.mp4";

function Chat({ showIntro, setShowIntro }) {
  const [response, setResponse] = useState({});
  const [query, setQuery] = useState("Briefly Introduce Kenny");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    setIsLoading(false);
    inputRef.current.focus();
  }, []);

  const handleSubmitQuery = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsLoading(true);

    fetch("https://kchoi-io-backend.onrender.com/api/data", {
      method: "POST",
      body: JSON.stringify({ query }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const responseData = res.data;
        setIsLoading(false);
        setResponse(responseData);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });

    setQuery("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmitQuery(e);
    }
  };

  return (
    // Chat Outer Container
    <div className="container mx-auto flex min-h-[85svh] flex-col justify-between p-6 sm:min-h-[90vh]">
      <div className="chat_inner_container flex flex-1 flex-col-reverse items-center justify-end sm:h-full sm:flex-row sm:items-center sm:justify-between">
        <motion.div
          className="chat_left mb-12 mr-2 self-start sm:self-center"
          initial={{ opacity: 0, scale: 0.75, y: 200 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
        >
          {showIntro ? (
            <ChatIntro setShowIntro={setShowIntro} />
          ) : (
            <ChatResponse isLoading={isLoading} responseData={response} />
          )}
        </motion.div>
        <motion.div
          className="chat_right"
          initial={{ opacity: 0, scale: 0.75, y: 200 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
        >
          <ReactPlayer
            url={memojiBgGray}
            loop={true}
            autoPlay={true}
            muted={true}
            controls={false}
            playing={true}
            playsinline={true}
            className="max-h-36 max-w-36 sm:max-h-72 sm:max-w-72 dark:hidden"
            style={{ pointerEvents: "none" }}
          />
          <ReactPlayer
            url={memojiBgDarkGray}
            loop={true}
            autoPlay={true}
            muted={true}
            controls={false}
            playing={true}
            playsinline={true}
            className="hidden max-h-36 max-w-36 sm:max-h-72 sm:max-w-72 dark:block"
            style={{ pointerEvents: "none" }}
          />
        </motion.div>
      </div>
      <ChatInput
        query={query}
        handleKeyDown={handleKeyDown}
        setQuery={setQuery}
        inputRef={inputRef}
        isLoading={isLoading}
        handleSubmitQuery={handleSubmitQuery}
        style={{ userSelect: "none" }}
      />
    </div>
  );
}

export default Chat;
