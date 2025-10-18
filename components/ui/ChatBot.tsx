// "use client";
// import React, { useState, useRef, useEffect } from "react";

// const ChatBot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
//   const [input, setInput] = useState("");

//   const scrollRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
//   }, [messages]);

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     // Add user message
//     setMessages([...messages, { sender: "user", text: input }]);

//     // Send to API
//     const res = await fetch("/api/chat", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ message: input }),
//     });

//     const data = await res.json();

//     // Add bot reply
//     setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
//     setInput("");
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-50">
//       {/* Floating Button */}
//       {!isOpen && (
//         <button
//           onClick={() => setIsOpen(true)}
//           className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
//         >
//           🤖
//         </button>
//       )}

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="flex flex-col w-80 h-96 bg-white dark:bg-gray-900 shadow-xl rounded-2xl border overflow-hidden">
//           {/* Header */}
//           <div className="flex justify-between items-center bg-blue-600 text-white p-3">
//             <span>Ask Tushar's AI 🤖</span>
//             <button onClick={() => setIsOpen(false)}>✕</button>
//           </div>

//           {/* Messages */}
//           <div ref={scrollRef} className="flex-1 overflow-y-auto p-3 space-y-2">
//             {messages.map((msg, i) => (
//               <div
//                 key={i}
//                 className={`p-2 rounded-lg ${
//                   msg.sender === "user"
//                     ? "bg-blue-500 text-white self-end"
//                     : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white self-start"
//                 }`}
//               >
//                 {msg.text}
//               </div>
//             ))}
//           </div>

//           {/* Input */}
//           <div className="flex border-t p-2">
//             <input
//               type="text"
//               className="flex-1 px-2 py-1 rounded-l-lg border dark:bg-gray-800 dark:text-white"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Ask me anything..."
//               onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//             />
//             <button
//               onClick={sendMessage}
//               className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatBot;


"use client";
import React, { useState, useRef, useEffect } from "react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages([...messages, { sender: "user", text: input }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
      setInput("");
    } catch (err) {
      setMessages((prev) => [...prev, { sender: "bot", text: "Error: Could not get response" }]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 cursor-pointer"
        >
          🤖
        </button>
      )}

      {isOpen && (
        <div className="flex flex-col w-80 h-96 bg-white dark:bg-gray-900 shadow-xl rounded-2xl border overflow-hidden">
          <div className="flex justify-between items-center bg-blue-600 text-white p-3">
            <span>Ask Tushar's AI 🤖</span>
            <button onClick={() => setIsOpen(false)}>✕</button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white self-end"
                    : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex border-t p-2">
            <input
              type="text"
              className="flex-1 px-2 py-1 rounded-l-lg border dark:bg-gray-800 dark:text-white"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;

