import { useState } from "react";

export default function ChatBot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const addMessage = (message, sender) => {
    setMessages([...messages, { text: message, sender }]);
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue;
    addMessage(userMessage, "user");
    setInputValue("");

    addMessage("...", "thinking");

    try {
      const result = await model.generateContent(prompt);
      console.log(result.response.text());

      const apiKey = "AIzaSyA0_f7kpE3MdOIi4dkAGxf4IyVuHyNTvz0";
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: userMessage }] }],
          }),
        }
      );

      const data = await response.json();
      setMessages((prev) => prev.filter((msg) => msg.sender !== "thinking"));

      if (
        data.candidates &&
        data.candidates.length > 0 &&
        data.candidates[0].content &&
        data.candidates[0].content.parts.length > 0
      ) {
        addMessage(data.candidates[0].content.parts[0].text, "bot");
      } else {
        addMessage("Sorry, there was an error processing your request.", "bot");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => prev.filter((msg) => msg.sender !== "thinking"));
      addMessage("Sorry, there was an error processing your request.", "bot");
    }
  };

  return (
    <div>
      <div
        className="fixed right-10 bottom-10 w-14 h-14 cursor-pointer bg-white rounded-full z-20 grid place-items-center shadow-lg group"
        onClick={toggleChat}
      >
        <img
          src="/images/chatbot.svg"
          alt="Virtual Assistant"
          className="max-w-full h-4/5 object-contain transition-all duration-300 group-hover:contrast-200 group-hover:brightness-75"
        />
      </div>

      {isChatOpen && (
        <div className="fixed bottom-16 right-4 w-96">
          <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
            <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
              <p className="text-lg font-semibold">Virtual Assistant</p>
              <button
                onClick={toggleChat}
                className="text-gray-300 hover:text-gray-400 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4 h-80 overflow-y-auto">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 ${
                    msg.sender === "user" ? "text-right" : ""
                  }`}
                >
                  <p
                    className={`py-2 px-4 inline-block rounded-2xl ${
                      msg.sender === "user"
                        ? "bg-blue-500 text-white rounded-br-none"
                        : msg.sender === "bot"
                        ? "bg-gray-200 text-gray-700 rounded-tl-none"
                        : ""
                    }`}
                  >
                    {msg.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="p-4 border-t flex">
              <input
                type="text"
                placeholder="Type a message"
                className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage();
                }}
              />
              <button
                onClick={sendMessage}
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
