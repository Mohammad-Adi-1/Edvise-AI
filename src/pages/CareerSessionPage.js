import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { HiMenu } from "react-icons/hi"; // Hamburger icon

function CareerSessionPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [wordCount, setWordCount] = useState(0); // ✅ Track word count
  const [sidebarOpen, setSidebarOpen] = useState(false); // Mobile toggle
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const startNewChat = () => {
    setMessages([]);
    setActiveChat(null);
    setInput("");
    setWordCount(0);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    if (wordCount >= 200) return;

    const userMessage = { id: Date.now(), sender: "user", text: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    if (!activeChat) {
      const newChat = { id: Date.now(), messages: updatedMessages };
      setChatHistory([newChat, ...chatHistory]);
      setActiveChat(newChat.id);
    }

    const messageToSend = input;
    setInput("");
    setWordCount(0);
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/chat", {
        message: messageToSend,
      });

      const aiText = response.data.reply;
      const aiMessage = { id: Date.now() + 1, sender: "ai", text: aiText };

      setMessages((prev) => [...prev, aiMessage]);

      setChatHistory((prevHistory) =>
        prevHistory.map((chat) =>
          chat.id === activeChat
            ? { ...chat, messages: [...updatedMessages, aiMessage] }
            : chat
        )
      );
    } catch (error) {
      console.error("Error communicating with AI:", error);
      const errorMessage = {
        id: Date.now() + 2,
        sender: "ai",
        text: "Something went wrong. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const loadChat = (chat) => {
    setMessages(chat.messages);
    setActiveChat(chat.id);
    setSidebarOpen(false); // Close sidebar on mobile after selecting chat
  };

  const handleInputChange = (e) => {
    const text = e.target.value;
    const words = text.trim().split(/\s+/);
    if (words.length <= 200) {
      setInput(text);
      setWordCount(words.length);
    }
  };

  return (
    <div className="flex h-screen relative">
      {/* Hamburger button for mobile */}
      <button
        className="absolute top-4 left-4 z-50 md:hidden p-2 rounded bg-gray-800 text-white"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <HiMenu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white flex flex-col fixed md:relative h-full transition-transform transform
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 w-64 z-40`}
      >
        <div className="p-4 font-bold text-lg border-b border-gray-700">Career AI</div>
        <button
          onClick={startNewChat}
          className="m-4 px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700"
        >
          + New Chat
        </button>
        <div className="flex-1 overflow-y-auto p-2 space-y-2">
          {chatHistory.map((chat) => (
            <div
              key={chat.id}
              className={`p-2 rounded cursor-pointer hover:bg-gray-700 ${
                chat.id === activeChat ? "bg-gray-700" : ""
              }`}
              onClick={() => loadChat(chat)}
            >
              Chat {chat.id}
            </div>
          ))}
        </div>
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col bg-gray-50 md:ml-64">
        <div className={`flex-1 overflow-y-auto p-4 space-y-4 ${isLoading ? 'h-full' : ''}`}>
          {messages.length === 0 && (
            <div className="text-gray-500 text-center mt-8">
              Start a new chat or select a previous chat from the sidebar.
            </div>
          )}
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-lg px-4 py-2 rounded-lg shadow ${
                  msg.sender === "user"
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-900"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={chatEndRef}></div>
        </div>

        {!isLoading && (
          <form
            onSubmit={handleSend}
            className="flex flex-col p-4 bg-white border-t border-gray-300 w-full space-y-2"
          >
            <textarea
              value={input}
              onChange={handleInputChange}
              placeholder="Type your question..."
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring focus:ring-indigo-300"
              rows={3}
            />
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>{wordCount}/200 words</span>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                disabled={wordCount === 0}
              >
                Send
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default CareerSessionPage;
