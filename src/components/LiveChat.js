import { useEffect, useState } from "react";
import { ChatMessage } from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helpers";

export const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    // API Polling
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(15),
        }),
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="ml-2 p-2 border border-black w-full h-[600px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, index) => (
            <ChatMessage name={c.name} message={c.message} key={index} />
          ))}
        </div>
      </div>

      {/* inpur for message */}
      <form
        className="w-full p-2 ml-2 flex items-center gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          // send the message
          dispatch(
            addMessage({
              name: "CURRENT USER",
              message: "message is...",
            }),
          );
          setLiveMessage(""); // clear the input
        }}
      >
        <input
          type="text"
          className="border border-black flex-1 p-1"
          onChange={(e) => setLiveMessage(e)}
        />
        <button className="p-1 bg-green-200">Submit</button>
      </form>
    </>
  );
};
